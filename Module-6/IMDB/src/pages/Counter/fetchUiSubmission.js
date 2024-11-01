async function fetchUiSubmission(user, role_Id, _key, revision_version) {
    try {
        let role = (role_Id) ? getRole(role_Id) : "";
        let superRoleData = {
            "status": role == "" ? true : false,
            "fetchedSubmissionId" : revision_version
        }
        let submission;
        if(role === ""){
            submission = await fetchUiSubmissionQuery(user, role, _key, revision_version);
        }else{
            submission = await fetchSubmissionQuery(user, role);
        }
        submission.patient.pcp = await fetchPcpValue(submission.chart_id);

        let kpiMterticsData;
        if(!submission.status){
            return submission;
        }else{
            kpiMterticsData = await fetchKPIMetrics(submission);
        }
        let [documentResult] = await fetchDocumentResultData(submission.document_result_key);
        let chartData = await fetchChartData(documentResult);
        if(submission && documentResult){
            let uiFetchJson = await shapeSubmission(submission, documentResult.measures, documentResult.criterias, documentResult.exclusions, documentResult.encounters, documentResult.annotations, superRoleData);

            if(role === ""){
                uiFetchJson.current_status = submission.current_status;
                uiFetchJson.current_locked_by = submission.current_locked_by;
                uiFetchJson.latest_revision_version = submission.latest_revision_version;
            }
            uiFetchJson.variance = role === "" ? 0 : kpiMterticsData.variance;
            uiFetchJson.average_time = role === "" ? 0 : kpiMterticsData.average_time;
            uiFetchJson.goal = role === "" ? 0 : kpiMterticsData.goal;
            uiFetchJson.last_session_time = role === "" ? 0 : kpiMterticsData.last_session_time;
            uiFetchJson.daily_transactions_count = role === "" ? 0 : kpiMterticsData.daily_transactions_count;

            if(config.comment_flag === "TRUE"){
                await deleteSoftSaveCommentFromDb(submission.chart_id);
            }
            return uiFetchJson
        }else{
            submission.variance = kpiMterticsData.variance;
            submission.average_time = kpiMterticsData.average_time;
            submission.goal = kpiMterticsData.goal;
            submission.last_session_time = kpiMterticsData.last_session_time;
            submission.daily_transactions_count = kpiMterticsData.daily_transactions_count;
            return submission;
        }
    } catch (error) {
        console.error(error);   
        
    }
}

async function fetchSubmissionData(user, role, status){
    try{
        let submissionQuery = `FOR doc in submissions 
        filter sub.locked_by == "${user}" AND 
        doc.status == "${status}" AND doc.role == "${role}" AND 
        doc.is_discarded == false and doc.submitted == false
        SORT sub.priority, sub.created_at
        LIMIT 1
        RETURN doc`;
        let submissionData = db._query(submissionQuery);
        return submissionData._result;
    }catch(error){
        throwError(error, 'fetchSubmissionData');
    }
}

async function queueLogicQuery(user, role){
    try {
        let queueLogicQuery = `FOR sub in submissions
        FILTER LOWER(sub.status) == "${constants[role.toLowerCase()]["queue"].toLowerCase()}" AND 
        sub.role == "${role}" AND sub.submitted == false AND 
        sub.is_discarded == false and sub.locked_by == ""
        SORT sub.priority, sub.created_at
        LIMIT 1
        UPDATE sub WITH {locked_by: "${user}", updated_at : "${new Date().toISOString()}"} IN submissions
        RETURN sub`;
        let queueLogicData = db._query(queueLogicQuery);
        return queueLogicData._result;
    } catch (error) {
        throwError(error, 'queueLogicQuery');    
    }
}

async function fetchSubmissionQuery(user, role){
    try{
        // In Progress 
        let onHoldData = await fetchSubmissionData(user, role, constants[role.toLowerCase()].in_progress);
        if(onHoldData.length > 0){
            return onHoldData[0];
        }

        // Not Started
        let notStarted = await fetchSubmissionData(user, role, constants[role.toLowerCase()].queue);
        if(notStarted.length > 0){
            return notStarted[0];
        }

        // Not Completed 
        let notCompleted = await queueLogicQuery(user, role);

        if(notCompleted.length > 0){
            return notCompleted[0];
        }

        return {
            status: false,
            message: "No charts locked on this user"
        }
    }catch(error){
        throwError(error, 'fetchSubmissionQuery');
    }
}


function fetchUiSubmissionQuery(user, role, submissionKey, revision_version){
    let dbUiSubmission;
    try {
        if(submissionKey){
            let submissionDataQ = `FOR doc in submissions FILTER doc._key == "${submissionKey}" RETURN doc`;
            let submissionExists = db._query(submissionDataQ);
            let isDiscardedStatus = false;
            if(submissionExists._results.length > 0){
               isDiscardedStatus = submissionExists._results[0].is_discarded === true ? true : false;
               if(isDiscardedStatus == false){
                let fetchUiSubmissionRootLevel = `FOR doc in submissions FILTER doc._key == "${submissionKey}" AND doc.revision_version == ${revision_version} 
                let current_Value = {
                    current_status : doc.status,
                    current_locked_by : doc.locked_by,
                    latest_revision_version : doc.revision_version
                }
                    RETURN unset(merge_recursive(doc, current_value), "history");`;

                let fetchUiSubmissionHistoryLevel = `FOR doc in submissions FILTER doc._key == "${submissionKey}" FOR h IN doc.history FILTER h.revision_version == ${revision_version}
                    let current_Value = {
                        current_status : doc.status,
                        current_locked_by : doc.locked_by,
                        latest_revision_version : doc.revision_version
                    }
                        RETURN unset(merge_recursive(doc, h, current_value), "history");`; 
              
                        dbUiSubmission = db._query(fetchUiSubmissionRootLevel);
                        if(dbUiSubmission._result.length == 0){
                            dbUiSubmission = db._query(fetchUiSubmissionHistoryLevel);
                            if(dbUiSubmission._result.length == 0){
                                return {status: false, message: "No charts in Queue"};
                            }else{
                                return dbUiSubmission._result[0];
                            }
                        }else{
                            return dbUiSubmission._result[0];
                        }
               }else{
                return {status: false, message: "submission does not exists or discarded"};
               }
            }else{
                return {status: false, message: "submission does not exists or discarded"};
            }
        }else{
            return {status: false, message: "submissionKey or revision_version not present in the request"};
        }
    }catch(error) {
        throwError(error, 'fetchUiSubmissionQuery');
    }
}

function getRole(role_Id){
    try {
        let role = "";
        switch (role_Id) {
            case 2:
                role = "reviewer"
                break;
            case 3:
                role = "approver"
                break;
            default:
                break;
        }
        return role;
    } catch (error) {
     throwError(error, 'getRole');   
    }
}
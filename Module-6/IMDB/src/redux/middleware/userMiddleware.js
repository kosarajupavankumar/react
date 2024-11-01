import axios from "axios";
import userSlice from "../slice/userSlice";
const actions = userSlice.actions;

const userMiddleware = (store) => {
    return (next) => {
        return (action) => {
            
            if (action.type === actions.fetchUserRequest.type) {
                console.log("fetching user data");
                const fetchUserData = async () => {
                    try {
                        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                        store.dispatch(actions.fetchUserSuccess(response.data));
                    } catch (error) {
                        store.dispatch(actions.fetchUserFailure(error.message));
                    }
                };
                fetchUserData();
            }
            next(action);
        }
    }
}

export default userMiddleware;
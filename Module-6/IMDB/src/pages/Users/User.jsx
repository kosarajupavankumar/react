import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../../redux/slice/userSlice'; 
const actions = userSlice.actions;

const User = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { user, status, isError } = userState;

  // make an API call to fetch the user data
  const fetchUser = async () => {
    try {
      dispatch(actions.fetchUserRequest());      
    } catch (error) {
      dispatch(actions.setUser({ isError: error, status: "error" }));
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log("status", status);
  return (
    <div>
      <h5> status : {status}</h5>
    </div>
  )
}

export default User;

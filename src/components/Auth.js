import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authCheck } from "../actions/authAction";
function Auth() {
  const switchAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(authCheck());
  };
  return (
    <div>
      <button onClick={handleAuth} className="btn btn-info">
        {switchAuth.isLoggedIn ? "Login" : "Log-Out"}
      </button>
    </div>
  );
}

export default Auth;

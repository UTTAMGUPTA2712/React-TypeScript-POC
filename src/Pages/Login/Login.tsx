import React, { useState } from "react";
import { UseAppDispatch } from "../../Hooks/reduxHooks";
import { login } from "../../Redux/Slice/Auth";
import "./Login.css";
const Login = () => {
  const dispatch = UseAppDispatch();
  const [user, setUser] = useState("");
  return (
    <>
      <div id="login-container">
        <form>
          <h1>Welcome!</h1>
          <input
            className="input-field"
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter Value"
          />
          <button
            className="login-btn btn"
            disabled={user.length === 0}
            onClick={() => dispatch(login(user))}
          >
            login
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;

import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const loginAction = (e) => {
    e.preventDefault();
    if (
      usernameRef.current.value === "admin" ||
      passwordRef.current.value === "123456"
    ) {
      login('token');
    } else {
      alert("Username or password is incorrect");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={loginAction}>
        <input type="text" ref={usernameRef} placeholder="Username" />
        <input type="password" ref={passwordRef} placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

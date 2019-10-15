import React, { useRef } from "react";
import axios from "axios";

export function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })

      .catch(err => {
        console.log(err.error);
      });
  };

  return (
    <div>
      <form>
        <label>usernameRef</label>
        <input ref={usernameRef} type="text" />
        <br />
        <label>password</label>
        <input ref={passwordRef} type="text" />
        <br />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Login;

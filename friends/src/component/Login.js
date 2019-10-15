import React, { useRef } from "react";
import axios from "axios";

export function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const onSubmit = () => {
    axios
      .post("http://localhost:5000/api/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        localStorage.setItem("token", res.data);
        props.history.push("/friends");
      })

      .catch(err => {
        console.log();
      });
  };

  return (
    <div>
      <form>
        <input ref={usernameRef} type="text" />
        <input ref={passwordRef} type="text" />
        <button onClick={onSubmit}></button>
      </form>
    </div>
  );
}

export default index;

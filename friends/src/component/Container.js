import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import Login from "./Login";
import Friends from "./Friends";

function Container(props) {
  const Logout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  const withAthCheck = (Component, props) => {
    if (localStorage.getItem("token")) {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  };

  return (
    <div>
      <nav>
        <NavLink to="/">Login</NavLink>
        <NavLink to="/">Friends</NavLink>
        <button onClick={Logout}>Logout</button>
      </nav>

      <main>
        <Route exact path="/" component={Login} />
        <Route path="/" component={props => withAthCheck(Friends, props)} />
      </main>
    </div>
  );
}

export default withRouter(Container);

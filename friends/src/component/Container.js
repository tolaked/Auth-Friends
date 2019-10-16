import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import Login from "./Login";
import Friends from "./Friends";
import useFriend from "./useFriend";
import SingleFriend from "./SingleFriend";

function Container(props) {
  const Logout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  const withAuthCheck = (Component, props) => {
    if (localStorage.getItem("token")) {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  };

  return (
    <div>
      <nav>
        <NavLink exact to="/">
          Login
        </NavLink>
        &nbsp;
        <NavLink exact to="/friends">
          Friends
        </NavLink>
        &nbsp;
        <NavLink to="/friends/:id">Friends</NavLink>&nbsp;
        <button onClick={Logout}>Logout</button>
      </nav>

      <main>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/friends"
          component={props => withAuthCheck(Friends, props)}
        />
        <Route
          exact
          path="/friends/:id"
          component={props => withAuthCheck(SingleFriend, props)}
        />
      </main>
    </div>
  );
}

export default withRouter(Container);

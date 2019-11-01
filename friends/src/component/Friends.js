import React, { useState, useEffect } from "react";
import WithAuth from "../axios/index";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import SingleFriend from "./SingleFriend";

const initialState = {
  name: "",
  age: "",
  email: ""
};

function Friends(props) {
  const [friends, setFriends] = useState([]);
  const [form, useForm] = useState(initialState);
  const withAuthCheck = (Component, props) => {
    if (localStorage.getItem("token")) {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  };

  const useInputChange = e => {
    const { name, value } = e.target;
    useForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addFriend = (e, formValues) => {
    e.preventDefault();
    formValues = {
      name: form.name,
      age: parseInt(form.name, 10),
      email: form.email
    };

    WithAuth()
      .post("http://localhost:5000/api/friends", formValues)
      .then(res => {
        setFriends(res.data);
        debugger;
      })

      .catch(err => {
        alert(err.error);
      });
  };

  useEffect(() => {
    WithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        alert(err.error);
      });
  }, []);
  return (
    <div>
      <form onSubmit={e => addFriend(e, form)}>
        <input
          value={form.name}
          type="text"
          name="name"
          onChange={useInputChange}
        />
        <br />

        <input
          value={form.age}
          type="number"
          name="age"
          onChange={useInputChange}
        />
        <br />

        <input
          value={form.email}
          type="email"
          name="email"
          onChange={useInputChange}
        />
        <br />
        <button>Add friend</button>
      </form>

      {friends.map(friend => (
        <div>
          <h4>{friend.name}</h4>
          {/* <NavLink exact to={`/friends/${friend.id}`}>
            {friend.name}
          </NavLink>

          <Route
            exact
            path={`/friends/${friend.id}`}
            component={props => withAuthCheck(SingleFriend, props)}
          /> */}
        </div>
      ))}
    </div>
  );
}

export default withRouter(Friends);

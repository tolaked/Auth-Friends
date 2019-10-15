import React, { useState, useffect } from "react";
import WithAuth from "../axios/index";

function Friends(props) {
  const [friends, setFriends] = useState([]);

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
      {friends.map(friend => {
        <div>
          <h5>{friend.name}</h5>
          <p>{friend.email}</p>
          <p>{friend.age}</p>
        </div>;
      })}
    </div>
  );
}

export default Friends;

import React, { useState, useEffect } from "react";
import WithAuth from "../axios/index";

function SingleFriend(props) {
  const [friendInfo, setFriendinfo] = useState({});

  const {
    match: { params }
  } = props;
  useEffect(() => {
    WithAuth()
      .get(`http://localhost:5000/api/friends/${params.id}`)
      .then(res => {
        setFriendinfo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* <h5>Hello</h5> */}
      <h5>{friendInfo.name}</h5>
      <p>{friendInfo.age}</p>
      <p>{friendInfo.email}</p>
    </div>
  );
}

export default SingleFriend;

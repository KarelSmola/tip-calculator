import React from "react";

const MyFriendsTip = ({ friendsTip, onFriendsTip }) => {
  return (
    <div>
      <h2>My friends tip is</h2>
      <select value={friendsTip} onChange={(e) => onFriendsTip(e.target.value)}>
        <option value={0}>My tip is...</option>
        <option value={5}>My tip is 5 %</option>
        <option value={10}>My tip is 10 %</option>
        <option value={15}>My tip is 15 %</option>
      </select>
    </div>
  );
};

export default MyFriendsTip;

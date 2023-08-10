import React from "react";

const MyTip = ({ myTip, onMyTip }) => {
  return (
    <div>
      <h2>My Tip is</h2>
      <select value={myTip} onChange={(e) => onMyTip(e.target.value)}>
        <option value={0}>My tip is...</option>
        <option value={5}>My tip is 5 %</option>
        <option value={10}>My tip is 10 %</option>
        <option value={15}>My tip is 15 %</option>
      </select>
    </div>
  );
};

export default MyTip;

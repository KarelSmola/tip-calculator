import React from "react";

const Tip = ({ tip, onTip, children }) => {
  return (
    <div>
      <h2>{children}</h2>
      <select value={tip} onChange={(e) => onTip(Number(e.target.value))}>
        <option value={0}>0 %</option>
        <option value={5}>5 %</option>
        <option value={10}>10 %</option>
        <option value={20}>20 %</option>
      </select>
    </div>
  );
};

export default Tip;

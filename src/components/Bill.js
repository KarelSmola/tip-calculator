import React from "react";

const Bill = ({ billValue, onChangeValue }) => {
  return (
    <div>
      <label>Bill</label>
      <input
        type="text"
        onChange={(e) => {
          onChangeValue(Number(e.target.value));
        }}
        value={billValue}
      />
    </div>
  );
};

export default Bill;

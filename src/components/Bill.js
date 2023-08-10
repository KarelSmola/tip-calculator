import React from "react";

const Bill = ({ billValue, onChangeValue }) => {
  const onChangeHandler = (e) => {
    onChangeValue(e.target.value);
  };

  return (
    <div>
      <label>Bill</label>
      <input type="number" onChange={onChangeHandler} value={billValue} />
    </div>
  );
};

export default Bill;

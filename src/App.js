import React, { useState } from "react";
import Bill from "./components/Bill";
import MyTip from "./components/MyTip";
import MyFriendsTip from "./components/MyFriendsTip";
import Result from "./components/Result";
import ResetButton from "./components/ResetButton";

const App = () => {
  const [billValue, setBillValue] = useState("");
  const [myTipValue, setMyTipValue] = useState("");
  const [myFriendsTipValue, setMyFriendsTipValue] = useState("");

  const resetValues = () => {
    setBillValue("");
    setBillValue("");
    setMyFriendsTipValue("");
  };

  return (
    <div>
      <Bill billValue={billValue} onChangeValue={setBillValue} />
      <MyTip myTip={myTipValue} onMyTip={setMyTipValue} />
      <MyFriendsTip
        myFriendsTip={myFriendsTipValue}
        onFriendsTip={setMyFriendsTipValue}
      />
      <Result
        result={billValue}
        myTip={myTipValue}
        friendsTip={myFriendsTipValue}
      />
      {billValue ? <ResetButton reset={resetValues} /> : ""}
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Bill from "./components/Bill";
import Tip from "./components/Tip";
import Result from "./components/Result";
import ResetButton from "./components/ResetButton";

const App = () => {
  const [billValue, setBillValue] = useState("");
  const [tip1, setTip1] = useState("");
  const [tip2, setTip2] = useState("");

  const resetValues = () => {
    setBillValue("");
    setTip1("");
    setTip2("");
  };

  return (
    <div>
      <Bill billValue={billValue} onChangeValue={setBillValue} />
      <Tip tip={tip1} onTip={setTip1}>
        My tip is
      </Tip>
      <Tip tip={tip2} onTip={setTip2}>
        My friend tip is
      </Tip>
      {billValue ? (
        <>
          {" "}
          <Result result={billValue} myTip={tip1} friendsTip={tip2} />{" "}
          <ResetButton reset={resetValues} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;

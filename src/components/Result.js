import React from "react";

const Result = ({ result, myTip, friendsTip }) => {
  const averageTip = (Number(myTip) + Number(friendsTip)) / 2;
  const together = Number(result) + Number(result) * (averageTip / 100);

  return (
    <div>
      {result ? (
        <div>
          <p>The bill is {result} $.</p>
          <p>
            {`My tip is ${!myTip ? 0 : myTip} %. My friends tip is 
            ${!friendsTip ? 0 : friendsTip} %. Average tip is ${averageTip}. %`}
          </p>
          <p>{`So you pay together bill + plus average tip and it is ${together}`}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;

import React from "react";
import Button from "../../Common/Button";
export default function Unavailable() {
  return (
    <div>
      <div
        style={{
          marginTop: "70px",
          width: "250px",
          minWidth: "250px",
          border: "1px #D5D9D9 solid",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            color: "#BD492B",
            fontSize: "13px",
            margin: 0,
            marginTop: 20,
          }}
        >
          Currently unavailable.
        </h2>
        <p
          style={{
            color: "black",
            fontSize: "13px",
            marginTop: "0px",
            margin: 10,
          }}
        >
          We don't know when or if this item will be back in stock..
        </p>
        <Button text={"See Similar Items"} bgColor="#FFD814" />
        <hr style={{ margin: 10 }} />
        <Button
          bgColor="#EFF1F3"
          style={{
            borderRadius: 5,
            border: ".5px gray solid",
            textAlign: "left",
          }}
          text="Add to List"
        />
      </div>
    </div>
  );
}

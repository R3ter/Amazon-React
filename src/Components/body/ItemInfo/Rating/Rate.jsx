import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
export default function Rate() {
  return (
    <div style={{ display: "flex", alignItems: "center", fontSize: 13 }}>
      <div style={{ display: "flex", whiteSpace: "nowrap", flexWrap: "wrap" }}>
        <div
          style={{
            display: "flex",
            marginRight: 20,
            fontSize: 15,
            flexWrap: "nowrap",
          }}
        >
          <BsStarFill style={{ color: "orange" }} />
          <BsStarFill style={{ color: "orange" }} />
          <BsStarFill style={{ color: "orange" }} />
          <BsStarFill style={{ color: "orange" }} />
          <BsStarHalf style={{ color: "orange" }} />
        </div>
        <a href="">508,514 ratings</a>
        <spain style={{ marginRight: 5, marginLeft: 5 }}> | </spain>
        <a href="">1,000+ answered questions</a>
      </div>
    </div>
  );
}

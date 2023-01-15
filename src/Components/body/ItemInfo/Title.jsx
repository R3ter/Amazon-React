import React from "react";
import AmazonsChoice from "./AmazonsChoice/AmazonsChoice";
import Rate from "./Rating/Rate";
import Choice from "./ItemChoice/Choice";
export default function Title() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        alignSelf: "flex-start",
      }}
    >
      <div style={{ fontSize: 20, margin: 50, textAlign: "left" }}>
        Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-Year
        Shelf Life, Easy to Open Value Pack<br></br>
        <a href="" style={{ fontSize: 13 }}>
          Visit the Amazon Basics Store
        </a>
        <Rate />
        <AmazonsChoice />
        <hr />
        <Choice />
      </div>
    </div>
  );
}

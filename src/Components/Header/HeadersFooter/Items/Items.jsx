import React from "react";
export default function Items() {
  return (
    <div
      style={{
        marginLeft: 30,
        display: "flex",
        justifyContent: "center",
        flexWrap: "nowrap",

        overflow: "hidden",

        padding: 10,
      }}
    >
      <p style={{ margin: 0 }}>☰ All</p>
      {[
        "Today's Deals",
        "Waleed's Amazon.com",
        "Buy Again",
        "Gift Cards",
        "Customer Service",
        "Registry",
        "Browsing History",
        "Sell",
      ].map((item) => (
        <p
          style={{
            margin: 0,
            marginLeft: 10,

            fontSize: 14,
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

import React from "react";

export default function Button({ text, bgColor = "#FFD814", style = {} }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: 10,
        margin: 20,
        borderRadius: 10,
        fontSize: 12,
        ...style,
      }}
    >
      {text}
    </div>
  );
}

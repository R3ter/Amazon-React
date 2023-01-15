import React from "react";
import { IoShareOutline } from "react-icons/io5";
export default function ShareButton() {
  return (
    <div style={{ position: "absolute", right: 20, top: 20 }}>
      <button
        style={{
          borderRadius: 360,
          backgroundColor: "white",
          border: "1px solid #ddd",
          padding: 7,
          paddingLeft: 9,
          paddingRight: 9,

          fontSize: 20,
          borderWidth: 0.1,
        }}
      >
        <IoShareOutline />
      </button>
    </div>
  );
}

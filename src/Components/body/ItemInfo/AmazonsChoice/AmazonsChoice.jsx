import React from "react";

export default function AmazonsChoice() {
  const style = `    #trapezoid {
    clip-path: polygon(0 0, 100% 0, 89% 100%, 0% 100%);
  }
`;
  return (
    <div
      style={{
        display: "flex",
        fontSize: 10,
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <style>{style}</style>
      <div
        id="trapezoid"
        style={{
          backgroundColor: "#232F3E",
          color: "white",
          padding: 5,
          paddingRight: 20,
        }}
      >
        Amazon's <span style={{ color: "#D28734" }}>Choice</span>
      </div>
      in AA Batteries by Amazon Basics
    </div>
  );
}

import React from "react";
import "./style.css";
export default function SmallImage({ hovered, image, setImage }) {
  return (
    <div className={hovered ? "smallImage" : ""} style={{ cursor: "pointer" }}>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: 45,
          marginBottom: 10,
          height: 45,
          border: "1px solid black",
          backgroundImage: "url(" + image + ")",
        }}
        onMouseOver={() => setImage(image)}
      />
    </div>
  );
}

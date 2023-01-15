import React from "react";
export default function Info({ list, selected, setSelected, setHovered }) {
  const styles = `
    .Choice:hover {
        background-color: #F5F5F5;
    }`;
  return list.map((item, index) => {
    return (
      <div>
        <style>{styles}</style>
        {
          <div
            className="Choice"
            onMouseEnter={() => {
              setHovered(index);
            }}
            onMouseLeave={() => {
              setHovered(selected);
            }}
            onClick={() => {
              setSelected(index);
            }}
            style={{
              cursor: "pointer",
              display: "flex",
              padding: 10,
              fontSize: 13,
              flexDirection: "column",
              textAlign: "center",
              border:
                selected == index ? "1px solid #E47911" : "1px solid #E0E0E0",
              width: 150,
            }}
            key={index}
          >
            <div style={{}}>{item.name}</div>
            <div style={{ fontSize: 12 }}>{item.price}</div>
          </div>
        }
      </div>
    );
  });
}

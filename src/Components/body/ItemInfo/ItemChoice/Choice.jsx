import React from "react";
import Title from "./Title";
import ItemChoices from "./ItemChoices";
export default function Info() {
  const list = [
    { name: "4 Count (pack of 1)", price: "1 option from $5.42" },
    { name: "20 Count (pack of 1)", price: "1 option from $9.89" },
    { name: "20 Count (pack of 1)", price: "1 option from $9.89" },
    { name: "20 Count (pack of 1)", price: "1 option from $9.89" },
    { name: "50 Count (pack of 2)", price: "1 option from $9.89" },
    { name: "100 Count (pack of 5)", price: "1 option from $9.89" },
    { name: "20 Count", price: "1 option from $9.89" },
  ];
  const [selected, setSelected] = React.useState(0);
  const [hovered, setHovered] = React.useState(0);
  return (
    <div>
      <Title />
      <div style={{ fontSize: 13, marginTop: 10, marginBottom: 9 }}>
        Size: <span style={{ fontWeight: "bold" }}>{list[hovered].name}</span>
      </div>
      <div
        style={{
          maxWidth: 360,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gridRowGap: 10,
          gridAutoFlow: "row",
        }}
      >
        <ItemChoices
          list={list}
          hovered={hovered}
          selected={selected}
          setSelected={setSelected}
          setHovered={setHovered}
        />
      </div>
    </div>
  );
}

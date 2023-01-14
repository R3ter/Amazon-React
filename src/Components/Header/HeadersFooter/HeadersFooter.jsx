import React from "react";
import { SECONDARY_COLOR } from "../../../static/Colors";
import Items from "./Items/Items";

export default function HeadersFooter() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        color: "white",
        overflow: "hidden",
        justifyContent: "space-between",
        margin: 0,
        backgroundColor: SECONDARY_COLOR,
      }}
    >
      <Items />
      <p>Free shipping on your favorite toys. Terms apply.</p>
    </div>
  );
}

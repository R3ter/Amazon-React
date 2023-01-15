import React from "react";
import "./style.css";
import { FaFlagUsa } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";
export default function TopItems() {
  const items = [
    {
      Icon: FaFlagUsa,
      iconSize: 15,

      secondLine: "EN",
      dropdown: true,
    },
    {
      firstLine: "Hello, waleed",
      secondLine: "Account & Lists",
      dropdown: true,
    },
    { firstLine: "Returns", secondLine: "& Orders", dropdown: true },
    {
      Icon: MdOutlineAddShoppingCart,
      secondLine: "Cart",
      iconSize: 30,
    },
  ];
  return items.map((Item) => (
    <ul style={{ color: "white", margin: 0, marginRight: 15 }}>
      <il>
        <p style={{ margin: 0, textAlign: "left", fontSize: 12 }}>
          {Item.firstLine}
        </p>
        <p style={{ margin: 0, textAlign: "left", fontWeight: "bold" }}>
          {Item.Icon && (
            <Item.Icon size={Item.iconSize} style={{ marginRight: 5 }} />
          )}
          {Item.secondLine}
          {Item.dropdown && <RiArrowDropDownFill size={20} />}
        </p>
      </il>
    </ul>
  ));
}

import React from "react";
import Address from "./Address/Address";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import "./style.css";
import TopItems from "./TopItems/TopItems";
import HeaderFooter from "./HeadersFooter/HeadersFooter";
export default function Header() {
  return (
    <header style={{ display: "flex", flexDirection: "column", margin: 0 }}>
      <div className="App-header">
        <Logo />
        <Address address={"jerusalem 96"} username={"waleed"} />
        <SearchBar />
        <TopItems />
      </div>
      <div style={{ margin: 0 }}>
        <HeaderFooter />
      </div>
    </header>
  );
}

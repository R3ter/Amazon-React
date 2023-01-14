import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
export default function SearchBar({ style }) {
  const padding = 10;
  return (
    <div style={{ ...style, display: "flex", flexGrow: 1 }}>
      <select
        name="url"
        style={{
          padding,
          margin: 0,

          backgroundColor: "#F3F3F3",
          borderRadius: "5px 00px 00px 5px",
          width: 100,
          textOverflow: "clip",
        }}
        title="Search in"
      >
        <option
          selected="selected"
          value="search-alias=aps"
          style={{
            width: "10px",
          }}
        >
          All Departments
        </option>
        <option value="search-alias=arts-crafts-intl-ship">
          Arts &amp; Crafts
        </option>
        <option value="search-alias=automotive-intl-ship">Automotive</option>
        <option value="search-alias=baby-products-intl-ship">Baby</option>
        <option value="search-alias=beauty-intl-ship">
          Beauty &amp; Personal Care
        </option>
        <option value="search-alias=stripbooks-intl-ship">Books</option>
        <option value="search-alias=fashion-boys-intl-ship">
          Boys' Fashion
        </option>
        <option value="search-alias=computers-intl-ship">Computers</option>
        <option value="search-alias=deals-intl-ship">Deals</option>
        <option value="search-alias=digital-music">Digital Music</option>
        <option value="search-alias=electronics-intl-ship">Electronics</option>
        <option value="search-alias=fashion-girls-intl-ship">
          Girls' Fashion
        </option>
        <option value="search-alias=hpc-intl-ship">
          Health &amp; Household
        </option>
        <option value="search-alias=kitchen-intl-ship">
          Home &amp; Kitchen
        </option>
        <option value="search-alias=industrial-intl-ship">
          Industrial &amp; Scientific
        </option>
        <option value="search-alias=digital-text">Kindle Store</option>
        <option value="search-alias=luggage-intl-ship">Luggage</option>
        <option value="search-alias=fashion-mens-intl-ship">
          Men's Fashion
        </option>
        <option value="search-alias=movies-tv-intl-ship">
          Movies &amp; TV
        </option>
        <option value="search-alias=music-intl-ship">
          Music, CDs &amp; Vinyl
        </option>
        <option value="search-alias=pets-intl-ship">Pet Supplies</option>
        <option value="search-alias=instant-video">Prime Video</option>
        <option value="search-alias=software-intl-ship">Software</option>
        <option value="search-alias=sporting-intl-ship">
          Sports &amp; Outdoors
        </option>
        <option value="search-alias=tools-intl-ship">
          Tools &amp; Home Improvement
        </option>
        <option value="search-alias=toys-and-games-intl-ship">
          Toys &amp; Games
        </option>
        <option value="search-alias=videogames-intl-ship">Video Games</option>
        <option value="search-alias=fashion-womens-intl-ship">
          Women's Fashion
        </option>
      </select>
      <input
        style={{
          width: "100%",
          border: "none",
          padding,
          margin: 0,
          paddingTop: "px",
        }}
        type="text"
      />
      <button
        style={{
          display: "inline-flex",
          margin: 0,
          //   paddingBottom: "20px",
          backgroundColor: "#FEBD69",
          padding: padding,
          borderRadius: "0px 5px 5px 0px",
          border: "none",
          bottom: 0,
          //   height: 55,
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <AiOutlineSearch size={30} />
      </button>
    </div>
  );
}

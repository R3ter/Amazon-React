import { HiOutlineLocationMarker } from "react-icons/hi";
export default function Address({ username, address }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        color: "white",
        marginRight: 15,
      }}
    >
      <p style={{ margin: 0, fontSize: "12px", opacity: 0.5 }}>
        Deliver to {username}
      </p>
      <span
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <HiOutlineLocationMarker
          size={22}
          style={{ margin: 0, marginRight: 5 }}
          color="white"
        />
        <p style={{ margin: 0, fontWeight: "bold" }}>{address}</p>
      </span>
    </div>
  );
}

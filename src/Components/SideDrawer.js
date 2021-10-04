import React from "react";
import { useAuthContext } from "../context/AuthContext";
import ProfilePic from "./ProfilePic";
import "./SideDrawer.css";

const SideDrawer = ({ active }) => {
  const { auth } = useAuthContext();
  return (
    <div className={active ? "sidedrawer show" : "sidedrawer"}>
      <div className="proPic-container">
        <ProfilePic width={60} height={60} />
        <h3 style={{ marginLeft: 20, color: "white" }}>
          {auth && `Usuario: ${auth.user.name}`}
        </h3>
      </div>
      <div className="item-container">Products</div>
      <div className="item-container">Products</div>
      <div className="item-container">Products</div>
      <div className="item-container">Products</div>
    </div>
  );
};

export default SideDrawer;

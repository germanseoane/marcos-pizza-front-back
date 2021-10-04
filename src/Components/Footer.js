import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div
      style={{
        background: "#b73802",
        width: "100%",
        height: 50,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
      }}
    >
      <p style={{ marginLeft: 20 }}>
        Built using ReactJs , NodeJs, Mongo Db and Cloudinary.
        {` ${date.getFullYear()}`}
      </p>
    </div>
  );
};

export default Footer;

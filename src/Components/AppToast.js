import React from "react";

const AppToast = ({ title }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 10,
        height: 30,
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        opacity: 0.9,
        alignSelf: "center",
        padding: 12,
        bottom: 120,
        fontSize: "24px",
      }}
    >
      {title}
    </div>
  );
};

export default AppToast;

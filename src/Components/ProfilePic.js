import React from "react";
import noPhoto from "../assets/no-profile.jpg";
import { useAuthContext } from "../context/AuthContext";

const ProfilePic = ({ width, height }) => {
  const { auth } = useAuthContext();

  if (auth) {
    return (
      <form>
        <div>
          <img
            src={
              auth.user.profilePic === undefined
                ? noPhoto
                : auth.user.profilePic
            }
            alt="proPic"
            style={{ width, height, borderRadius: "200%", marginLeft: 10 }}
          />
        </div>
      </form>
    );
  } else {
    return null;
  }
};

export default ProfilePic;

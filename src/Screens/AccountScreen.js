import React, { useRef } from "react";
import { uploadProfilePicApi } from "../api/userApi";
import ProfilePic from "../Components/ProfilePic";
import { useAuthContext } from "../context/AuthContext";
import { FiEdit2 } from "react-icons/fi";
import "./AccountScreen.css";

const AccountScreen = () => {
  const { setAuth, auth } = useAuthContext();
  const hiddenFileInput = useRef();

  useEffect(() => {
    const response = localStorage.getItem("user");
    if (response) {
      const user = JSON.parse(response);
      setAuth(user);
    }
  }, []);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleFileChange = async (e) => {
    const formData = new FormData();
    formData.append("profile", e.target.files[0]);
    const result = await uploadProfilePicApi(formData, auth.token);
    setAuth(result);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setAuth(null);
  };

  return (
    <div className="main-account">
      <div className="title-container">
        <h2 style={{ color: "black" }}>{auth.user.name}</h2>
        <div className="profile">
          <ProfilePic width={136} height={136} />
          <div className="icon-container" onClick={handleClick}>
            <FiEdit2 size={18} color="white" />
          </div>
          <input
            id="fileInput"
            type="file"
            accept=".jpg"
            onChange={handleFileChange}
            className="pro-input"
            ref={hiddenFileInput}
          ></input>
        </div>
      </div>

      <button className="btn-logout" onClick={() => logout()}>
        Salir
      </button>
    </div>
  );
};

export default AccountScreen;

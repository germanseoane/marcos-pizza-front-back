import React, { useEffect } from "react";
import AppCarousel from "../Components/AppCarousel";
import { useAuthContext } from "../context/AuthContext";

const HomeScreen = () => {
  const { setAuth } = useAuthContext();

  useEffect(() => {
    const response = localStorage.getItem("user");
    if (response) {
      const user = JSON.parse(response);
      setAuth(user);
    }
  }, []);

  return (
    <div>
      <AppCarousel />
    </div>
  );
};

export default HomeScreen;

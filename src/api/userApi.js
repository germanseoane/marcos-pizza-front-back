import axios from "axios";
const API_URL = "http://localhost:5000";

export async function loginApi(user) {
  try {
    const url = `${API_URL}/api/auth`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function registerApi(user) {
  try {
    const url = `${API_URL}/api/users`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function uploadProfilePicApi(image, token) {
  try {
    const response = await axios.post(`${API_URL}/api/profilePic`, image, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        authorization: `${token}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

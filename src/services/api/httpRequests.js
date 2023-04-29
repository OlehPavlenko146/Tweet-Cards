import axios from "axios";

axios.defaults.baseURL = "https://63bc7fc9fa38d30d85c9af52.mockapi.io";

export const fetchUsers = async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (e) {
    return e.message;
  }
};

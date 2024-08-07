import axios from "axios";
const serverUrl = "https://test-1-h6463350.deta.app";


export const apiLogin = async (userData) => {
  try {
    const response = await axios.post(serverUrl + "/login", userData);
    return response?.data?.status;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const apiSignup = async (userData) => {
  try {
    const response = await axios.post(serverUrl + "/register", userData);
    return response.data;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const apiGetAllJobs = async () => {
  try {
    const response = await axios.get(serverUrl + "/jobs");
    return response.data;
  } catch (e) {
    console.error(e);
    return false;
  }
};

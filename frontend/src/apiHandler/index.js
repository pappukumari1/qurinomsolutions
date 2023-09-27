import axios from "axios";
const serverUrl = "http://localhost:8003";

export const postApiHandler = async (endpoint, user) => {
  const response = await axios.post(serverUrl + endpoint, user, {
    headers: { Authorization: localStorage.getItem("token") },
  });
  return response;
};

export const getApiHandler = async (endpoint) => {
  try {
    const getReq = await axios.get(serverUrl + endpoint, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    return getReq.data;
  } catch (error) {
    return error;
  }
};

export const deleteApiHandler = async (endpoint) => {
  try {
    const deleteReq = await axios.delete(serverUrl + endpoint, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    return deleteReq.data;
  } catch (error) {
    return error;
  }
};

export const putApiHandler = async (endpoint, payload) => {
  try {
    const postReq = await axios.put(serverUrl + endpoint, payload, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    return postReq.data;
  } catch (error) {
    return error;
  }
};

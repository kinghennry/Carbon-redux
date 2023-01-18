import axios from "axios";

const API = axios.create({
  baseURL: "https://carbon-credict.herokuapp.com/api/v1",
});

// auth
export const login = (formData) => API.post("/users/login", formData);
export const customerSignup = (formData) =>
  API.post("/register?type=carboncreditpurchaser", formData);

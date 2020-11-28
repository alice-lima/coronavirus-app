import axios from "axios";

const instance = axios.create({
  /*headers: {
  } */
  baseURL: "http://coronavirus-19-api.herokuapp.com/",
  "Content-Type": "application/json",
  timeout: 5000,
});

export default instance;

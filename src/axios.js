import axios from "axios";

const instance = axios.create({
  baseURL: "https://nsenodejs.herokuapp.com/api",
});

export default instance;

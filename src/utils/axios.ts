import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-a8ee7/us-central1/api"
});

export default instance;

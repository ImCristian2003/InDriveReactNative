import axios from "axios";

const ApiRequestHandler = axios.create({
  baseURL: "http://192.168.10.126:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export { ApiRequestHandler };

import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "https://api.itbook.store/1.0/",
});

export { api };

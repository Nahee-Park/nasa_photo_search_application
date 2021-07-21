import axios from "axios";

export const client = axios.create({ baseURL: "https://images-api.nasa.gov" });

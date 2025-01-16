import axios from "axios";
import { BASE_URL_JSONPLACEHOLDER_API } from "../environment/env";

export const jsonPlaceholderApi = axios.create({
  baseURL: BASE_URL_JSONPLACEHOLDER_API,
  timeout: 1000,
  headers: { 'Accept': 'application/json' }
})
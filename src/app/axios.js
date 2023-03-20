import Axios from "axios";

const API_BASE_URL = "https://api.github.com";
const axios = Axios.create({ baseURL: API_BASE_URL });

export default axios;

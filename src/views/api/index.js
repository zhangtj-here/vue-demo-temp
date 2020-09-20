import axios from "axios";

export const getUrl = (cancelToken) => {
    return axios.get("/api?a=1", cancelToken);
}
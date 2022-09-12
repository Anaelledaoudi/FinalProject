import axios from "axios";

export const axiosInstance=axios.create({
    baseURL : "https://heart-share.herokuapp.com/"
})
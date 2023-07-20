import axios from "axios";

export const  axiosInstance= axios.create({
    baseURL: 'https://aqua-qa.sytes.net/api/',
    headers: {
      'Content-type': 'application/json',
      'Authorization': localStorage.getItem('token'),
    },
  });
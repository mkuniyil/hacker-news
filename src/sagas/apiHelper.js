import axios from "axios";

export const genericApiCall = options => {
  return axios(options)
    .then(response => response)
    .catch(error => error.response);
};

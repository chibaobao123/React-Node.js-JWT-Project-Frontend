import axios from "./axios.customizie";

const createUserApi = (name, email, password) => {
  const URL_API = `/v1/api/register`;

  const data = {
    name,
    email,
    password,
  };

  return axios.post(URL_API, data);
};

export { createUserApi };

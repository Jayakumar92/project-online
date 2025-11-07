import axios from 'axios';

export const SERVER = process.env.NEXT_PUBLIC_API_URL;

const axiosApi = axios.create({
  baseURL: SERVER,
  timeout: 240000,
  withCredentials: true,
});

axiosApi.interceptors.request.use((config) => {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const getHeaders = () => {
  return {};
  /**
   * get value
   */
  // const token = store.getState().app.token

  // try {
  //   if (token) {
  //     return { Authorization: "Token " + token }
  //   } else {
  //     return {}
  //   }
  // } catch {
  //   return {}
  // }
};

export async function get(url: string, config: object) {
  const response = await axiosApi.get(url, {
    ...config,
    headers: getHeaders(),
  });
  return response.data;
}

export async function post(url: string, data: object, config: object) {
  const headers = { ...getHeaders() };
  const response = await axiosApi.post(url, data, {
    ...config,
    headers,
  });
  return response.data;
}

export async function put(url: string, data: object, config: object) {
  const headers = { ...getHeaders() };
  const response = await axiosApi.put(url, data, {
    ...config,
    headers,
  });
  return response.data;
}

export async function del(url: string, config: object) {
  const headers = { ...getHeaders() };
  const response = await axiosApi.delete(url, {
    ...config,
    headers,
  });
  return response.data;
}

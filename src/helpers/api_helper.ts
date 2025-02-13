import axiosApi from "./axios_config";

export async function get(url: string, config = {}) {
  return await axiosApi.get(url, { ...config }).then((response) => response.data);
}
export async function post(url: string, data?: any, config = {}) {
  return axiosApi.post(url, { ...data }, { ...config }).then((response) => response.data);
}

export async function put(url: string, data?: any, config = {}) {
  return axiosApi.put(url, { ...data }, { ...config }).then((response) => response.data);
}

export async function del(url: string, config = {}) {
  return await axiosApi.delete(url, { ...config }).then((response) => response.data);
}

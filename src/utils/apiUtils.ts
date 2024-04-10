import axios, { AxiosResponse } from "axios";

class ApiUtils {
  public static async get(url: string): Promise<AxiosResponse> {
    return axios.get(url);
  }

  public static async post(
    url: string,
    data?: unknown
  ): Promise<AxiosResponse> {
    return axios.post(url, data);
  }

  public static async put(url: string, data?: unknown): Promise<AxiosResponse> {
    return axios.put(url, data);
  }

  public static async delete(url: string): Promise<AxiosResponse> {
    return axios.delete(url);
  }
}

export { ApiUtils };

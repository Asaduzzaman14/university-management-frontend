import { authKey } from "@/constants/storageKey";
import { IGenericErrorResponse, ResponseSuccessType } from "@/redux/types";
import { getFromLocalStorage } from "@/utils/local_storage";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers.post["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization;
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor

// @ts-ignore

//@ts-check

instance.interceptors.response.use(
  function (response): any {
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data?.accessToken,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  function (error) {
    const responseObject: IGenericErrorResponse = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
      errorMessages: error?.response?.data?.message,
    };
    return responseObject;
  }
);

export { instance };

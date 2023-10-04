import { axiosBaseQuery } from "@/healpers/axios/axiosBaseQuery ";
import { getbaseUrl } from "@/healpers/config/env.config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";

// Define a service using a base URL and expected endpoints
export const baseAPi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getbaseUrl() }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

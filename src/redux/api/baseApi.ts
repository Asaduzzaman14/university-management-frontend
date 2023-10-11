import { axiosBaseQuery } from "@/healpers/axios/axiosBaseQuery ";
import { getbaseUrl } from "@/healpers/config/env.config";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

// Define a service using a base URL and expected endpoints
export const baseAPi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getbaseUrl() }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

import { tagTypes } from "../tag-types";
import { baseAPi } from "./baseApi";

const AUTH_URL = "/auth";

const authApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;

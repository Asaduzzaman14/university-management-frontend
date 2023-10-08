import { tagTypes } from "../tagTypes";
import { IAdmin, IMeta } from "../types";
import { baseAPi } from "./baseApi";

const ADMIN_URL = "/admins";
const CREATE_ADMIN_URL = "/users/create-admin";

const adminApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
    addAdminWithFormData: build.mutation({
      query: (data) => ({
        url: CREATE_ADMIN_URL,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.department],
    }),

    admins: build.query({
      query: (arg: Record<string, any>) => ({
        url: ADMIN_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IAdmin, meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },

      providesTags: [tagTypes.admin],
    }),
  }),
});

export const { useAddAdminWithFormDataMutation, useAdminsQuery } = adminApi;

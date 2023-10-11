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
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },

      providesTags: [tagTypes.admin],
    }),

    // get admin by id
    admin: build.query({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),

    updateAdmin: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useAddAdminWithFormDataMutation,
  useAdminsQuery,
  useAdminQuery,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
} = adminApi;

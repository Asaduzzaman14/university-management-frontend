import { tagTypes } from "../tagTypes";
import { baseAPi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

const departmentApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.department],
    }),

    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const { useDepartmentsQuery, useAddDepartmentMutation } = departmentApi;

import { tagTypes } from "../tagTypes";
import { baseAPi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

const departmentApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
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

export const { useAddDepartmentMutation } = departmentApi;

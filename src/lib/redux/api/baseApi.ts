
import envConfig from '@/config/envConfig'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${envConfig.baseApi}` }),
    endpoints: (builder) => ({
        getAllUniversity: builder.query({
            query: () => ({
                url: "/university",
                method: "GET",

            }),

        }),
    }),
})


export const { useGetAllUniversityQuery } = baseApi
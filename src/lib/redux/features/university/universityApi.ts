import { baseApi } from "../../api/baseApi";


const universityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllUinversity: builder.query({
            query: () => {
                return {
                    url: "/university",
                    method: "GET",

                }
            }
        }),

        getUinversity: builder.query({
            query: (id) => {
                return {
                    url: `/university/${id}`,
                    method: "GET",

                }
            }
        }),

        addUinversity: builder.mutation({
            query: (data: FormData) => ({
                url: "/university",
                method: "POST",
                body: data,

            })
        })


    })
})



export const { useGetAllUinversityQuery, useGetUinversityQuery, useAddUinversityMutation } = universityApi;
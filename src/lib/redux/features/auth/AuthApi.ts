import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => {
                return {
                    url: "/login",
                    method: "GET",
                    body: data,

                }
            }
        }),

        signup: builder.mutation({
            query: (data: FormData) => ({
                url: "/register/agent",
                method: "POST",
                body: data,

            })
        })


    })
})



export const { useLoginMutation, useSignupMutation } = authApi;
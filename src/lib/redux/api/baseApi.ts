
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'sonner';
import { logOut } from '../features/auth/AuthSlice';
import envConfig from '@/config/envConfig';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
    baseUrl: `${envConfig.baseUrl}`,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }

        return headers;

    }

})


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (arg, api, extraOptions): Promise<any> => {
    const result = await baseQuery(arg, api, extraOptions)

    if (result.error) {
        // Handle PARSING_ERROR (non-JSON responses)
        if (result.error.status === "PARSING_ERROR") {
            toast.error("An unexpected error occurred. Please try again.");
            console.error("Non-JSON response:", result.error.data);
            return result;
        }

        const status = result.error.status;
        const errorData = result.error.data as { message?: string };

        if (status === 404 || status === 403) {
            toast.error(errorData?.message || "An error occurred.");
        } else if (status === 401) {
            api.dispatch(logOut());
            toast.error("Unauthorized access. Logging out.");
        }
    }


    return result;
}




export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['university'],
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),

})







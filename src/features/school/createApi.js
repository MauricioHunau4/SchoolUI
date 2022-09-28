import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: "school",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/'
    }),
    endpoints: (builder) => ({
        getDate: builder.query({
            query: (id) => `/${id}`
        }),
        postS: builder.mutation({
            query: (body) =>(
                console.log(body)/*{
                url: "/professor",
                method:"POST",
                body,
            }*/)
        })
    }),
})

export const { useGetDateQuery, usePostSMutation } = api


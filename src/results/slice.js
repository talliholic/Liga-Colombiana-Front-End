import { apiSlice } from "../apiSlice"

export const resultsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    readResults: builder.query({
      query: searchQuery => ({
        url: "/results?" + searchQuery,
      }),
    }),
  }),
})

export const { useReadResultsQuery } = resultsApiSlice

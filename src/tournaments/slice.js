import { apiSlice } from "../apiSlice"

export const tournamentsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    readTournaments: builder.query({
      query: ({ team, years, games, sortData }) => ({
        url: `tournaments/${team}/${years}${games ? "?games=" + games : ""}${
          sortData && games ? `&sortData=${sortData}` : ""
        }${sortData && !games ? `?sortData=${sortData}` : ""}`,
      }),
    }),
  }),
})

export const { useReadTournamentsQuery } = tournamentsApiSlice

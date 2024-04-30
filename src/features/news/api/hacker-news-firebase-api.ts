import {createApi} from "@reduxjs/toolkit/query/react";
import {FirebaseClient} from "@services/FirebaseClient.ts";
import {News} from "./entities.ts";

const hackerNewFirebaseClient = new FirebaseClient({
  databaseURL: "https://hacker-news.firebaseio.com",
});

export const hackerNewsFirebaseApi = createApi({
  reducerPath: "hacker-news-api",
  baseQuery: async (url) => {
    const data = await hackerNewFirebaseClient.getURL(url);
    return {data};
  },
  endpoints: (builder) => ({
    getLatest: builder.query<
      {
        results: string[];
        hasMore: boolean;
      },
      {limit?: number}
    >({
      query: () => "/v0/topstories",
      transformResponse: (response: string[], _meta, {limit}) => {
        const results =
          limit && Array.isArray(response)
            ? response.slice(0, limit)
            : response;
        return {
          results: results,
          hasMore: !!limit && response.length > limit,
        };
      },
    }),
    getDetails: builder.query<News, {id: string}>({
      query: ({id}) => {
        return `/v0/item/${id}`;
      },
    }),
  }),
});

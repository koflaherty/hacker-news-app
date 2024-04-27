import {createApi} from "@reduxjs/toolkit/query/react";
import {initializeApp} from "firebase/app";
import {child, get, getDatabase, ref} from "firebase/database";

const app = initializeApp({
  databaseURL: "https://hacker-news.firebaseio.com",
});

const db = getDatabase(app);
const dbRef = ref(db);

export const hackerNewsApi = createApi({
  reducerPath: "hacker-news-api",
  baseQuery: async (url) => {
    const snap = await get(child(dbRef, url));
    return {data: snap.val()};
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
    getDetails: builder.query({
      query: ({id}) => {
        return `/v0/item/${id}`;
      },
    }),
  }),
});

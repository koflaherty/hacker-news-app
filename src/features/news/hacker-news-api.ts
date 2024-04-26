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
    getLatest: builder.query<string[], {limit?: number}>({
      query: () => "/v0/topstories",
      transformResponse: (response, _meta, {limit}) => {
        if (limit && Array.isArray(response)) return response.slice(0, limit);
        else return response;
      },
    }),
    getDetails: builder.query({
      query: ({id}) => {
        return `/v0/item/${id}`;
      },
    }),
  }),
});

import {configureStore} from "@reduxjs/toolkit";
import {newsReducer} from "../features/news/newsSlice.ts";
import {hackerNewsApi} from "../features/news/hacker-news-api.ts";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hackerNewsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

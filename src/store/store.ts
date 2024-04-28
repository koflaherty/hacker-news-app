import {configureStore} from "@reduxjs/toolkit";
import {newsReducer} from "../features/news/newsSlice.ts";
import {hackerNewsFirebaseApi} from "../features/news/api/hacker-news-firebase-api.ts";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    [hackerNewsFirebaseApi.reducerPath]: hackerNewsFirebaseApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hackerNewsFirebaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

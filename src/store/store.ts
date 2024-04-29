import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {newsReducer} from "../features/news/newsSlice.ts";
import {hackerNewsFirebaseApi} from "../features/news/api/hacker-news-firebase-api.ts";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["news"],
};

const reducers = combineReducers({
  news: newsReducer,
  [hackerNewsFirebaseApi.reducerPath]: hackerNewsFirebaseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(hackerNewsFirebaseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

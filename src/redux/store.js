import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PERSIST, persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import authSlice from "./slices/authSlice";
import booksSlice from "./slices/booksSlice";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    blacklist: ["messages"],
    whitelist: ["auth", "user"],
  },
  combineReducers({
    auth: authSlice.reducer,
    books: booksSlice.reducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: { ignoreActions: [PERSIST] },
    });
  },
});

export const presistor = persistStore(store);

export const { logout } = authSlice.actions;

export default store;

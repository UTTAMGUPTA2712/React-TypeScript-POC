import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import AuthSlice from "../Slice/Auth";
import MessageSlice from "../Slice/Message";
import { persistReducer } from "redux-persist";

const config = {
  key: "typescriipt",
  version: 1,
  storage,
};
const combinedReducers = combineReducers({
  auth: AuthSlice,
  Message: MessageSlice,
});
const persistReducers = persistReducer(config, combinedReducers);
export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
        ignoredActionPaths: [],
        ignoredPaths: [],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

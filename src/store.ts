import { configureStore } from "@reduxjs/toolkit";
import directionSlice from "./reducers/directionSlice";
import languageSlice from "./reducers/languageSlice";
import versionSlice from "./reducers/versionSlice";

export const store = configureStore({
  reducer: {
    direction: directionSlice,
    language: languageSlice,
    version: versionSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

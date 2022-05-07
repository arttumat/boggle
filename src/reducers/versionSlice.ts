import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SliceState = { value: "old" | "new" };

export const versionSlice = createSlice({
  name: "version",
  initialState: {
    value: "new",
  } as SliceState,
  reducers: {
    setVer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectVer = (state: RootState) => state.version.value;

export const { setVer } = versionSlice.actions;

export default versionSlice.reducer;

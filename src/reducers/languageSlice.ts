import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SliceState = { value: "fi" | "en" };

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    value: "fi",
  } as SliceState,
  reducers: {
    setLang: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectLang = (state: RootState) => state.language.value;

export const { setLang } = languageSlice.actions;

export default languageSlice.reducer;

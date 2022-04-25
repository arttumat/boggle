import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SliceState = { value: boolean };

export const directionSlice = createSlice({
  name: "direction",
  initialState: {
    value: false,
  } as SliceState,
  reducers: {
    toggleRandomize: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value;
    },
    setRandomize: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectDirection = (state: RootState) => state.direction.value;

export const { toggleRandomize, setRandomize } = directionSlice.actions;

export default directionSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipeType } from "../../data/types";
import { RootState } from "./store";

interface CounterState {
  value: RecipeType[];
}

const initialState: CounterState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<RecipeType[]>) => {
      state.value = action.payload;
    },
  },
});

export const {
  incrementByAmount: incrementByAmount,
} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;

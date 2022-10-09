import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { RecipeType } from "../../data/types";

interface CounterState {
  value: RecipeType[];
}

const initialState: CounterState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      //   state.value += 1;
    },
    decrement: (state) => {
      //   state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<RecipeType[]>) => {
      state.value = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount: incrementByAmount,
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;

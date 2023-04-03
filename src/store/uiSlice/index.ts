import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type UITheme = "light";

export interface IUIReduce {
  theme: UITheme;
}

const initialState: IUIReduce = {
  theme: "light",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(store, action: PayloadAction<UITheme>) {
      store.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = uiSlice.actions;

export default uiSlice.reducer;

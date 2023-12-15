import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
};

const recipeDataSlice = createSlice({
  name: "recipeData",
  initialState,
  reducers: {
    getRecipeData: (state) => {
      state.isLoading = true;
      console.log("state", state.data);
    },
    getRecipeDataSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results;
      console.log("state", state.data);
    },
    getRecipeDataFailed: (state) => {
      state.isLoading = false;
      state.data = [];
    },
  },
});

export const { getRecipeData, getRecipeDataFailed, getRecipeDataSuccess } =
  recipeDataSlice.actions;

export default recipeDataSlice.reducer;

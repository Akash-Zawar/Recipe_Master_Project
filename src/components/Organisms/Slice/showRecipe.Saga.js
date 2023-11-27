import {
  getRecipeData,
  getRecipeDataSuccess,
  getRecipeDataFailed,
} from "./showRecipe.Slice";
import { put, takeLatest } from "redux-saga/effects";

function* getRecipeDataRequest(action) {
  try {
    const response = yield JSON.parse(localStorage.getItem("recipeData"));
    if (response.length === 0) {
      yield put(getRecipeDataFailed());
      return;
    }

    yield put(getRecipeDataSuccess({ results: response }));
    console.log("response", response);
  } catch (err) {
    yield put(getRecipeDataFailed());
  }
}

export function* watchGetRecipeData() {
  yield takeLatest(getRecipeData, getRecipeDataRequest);
}

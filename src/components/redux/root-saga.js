import { all, fork } from "redux-saga/effects";
import { watchGetRecipeData } from "../Organisms/Slice/showRecipe.Saga";

export default function* rootSaga() {
  yield all([fork(watchGetRecipeData)]);
}

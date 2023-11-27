import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

import recipeDataSlice from "../Organisms/Slice/showRecipe.Slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    recipeData: recipeDataSlice,
  },
  middleware: (current) => current({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

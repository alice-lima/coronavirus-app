import { all } from "redux-saga/effects";
import homeSaga from "./paisesSaga";

export default function* rootSaga() {
  return yield all([homeSaga]);
}

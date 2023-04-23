import { call, takeEvery, put } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import movieApi from "../movieApi";
import { APIKEY } from "../MovieApiKey";
import { addMovies } from "./movieSlice";

export function* fetchDataSaga() {
  try {
    let response = yield call(() => movieApi.get(`/movie?api_key=${APIKEY}`));
    yield put(addMovies(response.data.results));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}

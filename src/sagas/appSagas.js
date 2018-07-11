import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { fetchNewsFeedIds, fetchStoryItem } from "./apiCalls";
import {
  getNewsFeedIdsSuccess,
  getStoryItem,
  getStoryItemSuccess
} from "../actions";
import { actionTypes } from "../config";

/**
 * Generator method for loading artist details data using
 * api call or localstorage
 *
 * @param {Object} action
 */
export function* loadNewsFeedIds(action) {
  try {
    const result = yield fetchNewsFeedIds();
    yield put(getNewsFeedIdsSuccess(result.data));

    yield put(getStoryItem(result.data[0]));
    yield put(getStoryItem(result.data[1]));
    yield put(getStoryItem(result.data[2]));
    yield put(getStoryItem(result.data[3]));
    yield put(getStoryItem(result.data[4]));
    yield put(getStoryItem(result.data[5]));
    yield put(getStoryItem(result.data[6]));
    yield put(getStoryItem(result.data[7]));
    yield put(getStoryItem(result.data[8]));
    yield put(getStoryItem(result.data[9]));
    yield put(getStoryItem(result.data[10]));
  } catch (e) {
    console.log("error");
  }
}

/**
 * Generator method for loading artist details data using
 * api call or localstorage
 *
 * @param {Object} action
 */
export function* loadStoryItem(action) {
  try {
    const result = yield fetchStoryItem(action.id);

    yield put(getStoryItemSuccess(result.data));
  } catch (e) {
    console.log("error");
  }
}

export default function* mySaga() {
  yield takeLatest(actionTypes.getNewsFeedIds, loadNewsFeedIds);
  yield takeEvery(actionTypes.getStoryItem, loadStoryItem);
}

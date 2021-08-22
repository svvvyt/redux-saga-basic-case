import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_USERS, setUsers } from "../reducers/usersReducer";

const fetchUsersFromApi = () => fetch("https://jsonplaceholder.typicode.com/users?_limit=10");

function* fetchUsersWorker() {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json()))); // TODO: по какой-то колдунской причине json = undefined
  yield put(setUsers(json));
}

export function* usersWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
}
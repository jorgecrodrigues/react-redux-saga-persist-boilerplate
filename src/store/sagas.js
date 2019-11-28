import {all, call, delay, takeEvery, takeLatest, put} from 'redux-saga/effects';

/**
 *
 * @returns {Generator<Promise<any>|*, void, ?>}
 */
function* apiGet() {
    // yield delay(1000);
    const json = yield fetch('https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1&format=json')
        .then(response => response.json());
    yield put({type: 'ADD_TODO', payload: {text: json}});
}

/**
 *
 * @param action
 * @returns {Generator<*, void, ?>}
 */
function* asyncAddTodo(action) {
    const response = yield call(apiGet);
}

/**
 *
 * @returns {Generator<*, void, ?>}
 */
export default function* root() {
    yield all([
        // takeEvery('ASYNC_ADD_TODO', asyncAddTodo),
        takeLatest('ASYNC_ADD_TODO', asyncAddTodo)
    ]);
}
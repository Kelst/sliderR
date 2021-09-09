import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_GALLERY, REQUEST_GALLERY} from './types'


export function* sagaWatcher() {
  yield takeEvery(REQUEST_GALLERY, sagaWorker)
}

function* sagaWorker() {
 
    const payload = yield call(fetchImages)
    yield put({ type: FETCH_GALLERY, payload })
   
}
async function fetchImages() {
  const response = await fetch('https://mocki.io/v1/fff9bfd4-a04c-4321-85e2-f6f3fbb4a9d3')

  return await response.json()
}
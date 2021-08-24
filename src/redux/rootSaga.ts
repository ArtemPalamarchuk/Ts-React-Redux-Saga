import {all} from 'redux-saga/effects';
import {appSagas} from './sagas/app';

function* rootSaga() {
  yield all([
    ...appSagas,
  ]);
}

export default rootSaga;
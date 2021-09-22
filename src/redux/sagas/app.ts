import {takeEvery} from 'redux-saga/effects'
import {appTypes} from '../../redux/actions/app';

function* sagaTest(){
  const response = yield fetch('https://jsonplaceholder.typicode.com/users')
  const users = yield response.json()

  console.log(users, 'users');
}

export const appSagas = [
  takeEvery(appTypes.A, sagaTest),
]
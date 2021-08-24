import {takeEvery} from 'redux-saga/effects'

function* sagaTest(){
  const response = yield fetch('https://jsonplaceholder.typicode.com/users')
  const users = yield response.json()

  console.log(users, 'users');
}

export const appSagas = [
  takeEvery('A', sagaTest),
]
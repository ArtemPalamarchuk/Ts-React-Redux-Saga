import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const bindMiddleware = (middleware, useDevTools = true) => {
  if (useDevTools) return composeWithDevTools(applyMiddleware(...middleware));

  return applyMiddleware(...middleware);
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer(),
  bindMiddleware([sagaMiddleware])
);

sagaMiddleware.run(rootSaga)
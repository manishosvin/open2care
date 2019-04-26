//used to createStore,used apply middlewares to our store — sagas
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

//returns an object
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  }
};

export default configureStore;
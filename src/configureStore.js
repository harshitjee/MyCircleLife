import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default (configureStore = (initialState, rootReducer, rootSaga) => {

  /* ------------- Redux Configuration ------------- */
  const middleware = [];

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
  sagaMiddleware.run(rootSaga);
  return { store };
});
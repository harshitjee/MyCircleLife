import { combineReducers } from 'redux';

import configureStore from '../configureStore';
import rootSaga from '../saga';

const rootReducer = combineReducers({
  dashBoardData: require('./DashboardReducer').reducer,

});

export const { store } = configureStore({}, rootReducer, rootSaga);
import {  put ,call } from 'redux-saga/effects';
import { create  } from 'apisauce';

import DataActions from '../redux/DashboardReducer';

export function* getData(api, action) {
responce =yield getJsonApiCallHandler();
 yield put(DataActions.onSucess(responce.data))
}

const api = create({ baseURL: 'http://www.mocky.io/v2/5d6a827c3100004c00d20717' });



export function getJsonApiCallHandler() {
   
return api.get('');
}
import { takeLatest } from "redux-saga/effects";

import { UserTypes } from "../redux/DashboardReducer";
import { getData } from './getData';

export default [
    takeLatest(UserTypes.GET_DATA, getData)
]
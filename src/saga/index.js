import { all } from 'redux-saga/effects';

import GetDashboardEffects from './GetDashboardEffects';

export default function* root() {
  yield all([
    ...GetDashboardEffects
  ]);
}
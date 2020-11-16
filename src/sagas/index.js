import { all } from 'redux-saga';

import getCompanyReposSaga from './getCompanyReposSaga';

export default function* rootSaga() {
  yield all([getCompanyReposSaga()]);
}
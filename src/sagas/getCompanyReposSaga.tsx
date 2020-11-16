import { call, put, takeLatest } from 'redux-saga/effects';
import { COMPANY_REPOS } from '../constants';
import { setCompanyInfoAndRepos, clearCompany, setError, hideLoader } from '../actions';
import { fetchCompanyRepos, fetchCompanyInfo } from '../api';

export function* handleGetCompanyReposLoad(data: any) {
  const { company } = data;

  try {
    const companyInfo = yield call(fetchCompanyInfo, company);
    const companyRepos = yield call(fetchCompanyRepos, company);
    
    yield put(setCompanyInfoAndRepos({
      companyInfo,
      companyRepos
    }));
    yield put(hideLoader());
  } catch (error) {
    yield put(setError(error.toString()));
    yield put(hideLoader());
    yield put(clearCompany());
  }
}

export default function* watchGetCompanyReposLoad() {
  yield takeLatest(COMPANY_REPOS.LOAD, data => handleGetCompanyReposLoad(data));
}
import { combineReducers } from 'redux';
import { companyReducer } from './companyReposReducer';
import { isFetchingReducer } from './isFetchingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  company: companyReducer,
  isFetching: isFetchingReducer,
  error: errorReducer
});
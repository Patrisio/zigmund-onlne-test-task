import { COMPANY_REPOS, LOADER } from '../constants';

interface ICompany {

}

const loadCompanyRepos = (company: ICompany) => ({
  type: COMPANY_REPOS.LOAD,
  company
});

const hideLoader = () => ({ type: LOADER.HIDE });

const showLoader = () => ({ type: LOADER.SHOW });

const clearCompany = () => ({ type: COMPANY_REPOS.CLEAR });

const setError = (error: Boolean) => ({
  type: COMPANY_REPOS.LOAD_FAIL,
  error
});

const setCompanyInfoAndRepos = (data: ICompany) => ({
  type: COMPANY_REPOS.LOAD_SUCCESS,
  data
});

export {
  loadCompanyRepos,
  setCompanyInfoAndRepos,
  setError,
  hideLoader,
  showLoader,
  clearCompany
};
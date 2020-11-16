  
import { COMPANY_REPOS } from '../constants';

interface IAction {
  type: string,
  data: any
}

export const companyReducer = (state = {
  companyInfo: {},
  companyRepos: []
}, action: IAction) => {
  switch (action.type) {
    case COMPANY_REPOS.LOAD_SUCCESS:
      return {
        ...state,
        companyInfo: action.data.companyInfo,
        companyRepos: action.data.companyRepos
      };
    case COMPANY_REPOS.CLEAR:
      return {
        ...state,
        companyInfo: {},
        companyRepos: []
      }
    default:
      return state;
  }
};
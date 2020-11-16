import { COMPANY_REPOS } from '../constants';

interface IAction {
  type: string,
  error: any
}

export const errorReducer = (state = null, { type, error }:IAction) => {
  switch (type) {
    case COMPANY_REPOS.LOAD_FAIL:
      return error;
    case COMPANY_REPOS.LOAD:
    case COMPANY_REPOS.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};
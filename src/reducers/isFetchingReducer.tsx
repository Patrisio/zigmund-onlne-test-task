import { LOADER } from '../constants';

interface IAction {
  type: string
}

export const isFetchingReducer = (state = false, { type }: IAction) => {
  switch (type) {
    case LOADER.SHOW:
      return true;
    case LOADER.HIDE:
      return false;
    default:
      return state;
  }
};
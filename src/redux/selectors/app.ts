import {createSelector} from 'reselect';

const appState = (state) => state.appReducer;

export const appSelectors = {
  dataSelector: createSelector(appState, (state) => state.data),
}
import {createSelector} from 'reselect';

const appState = (state) => state.app;

export const appSelectors = {
  dataSelector: createSelector(appState, (state) => state.data),
}
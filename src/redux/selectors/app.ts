import {createSelector} from 'reselect';

const appState = (state) => state.app;

export const appStore = {
  data: createSelector(appState, (state) => state.data)
}
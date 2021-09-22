import {appTypes} from '../actions/app';

export const initAppState = {
  data: 'initial data value',
  obj: {
    a: 1,
    b: 2,
  }
}

export const appReducer = (state = initAppState, action) => {
  switch (action.type) {
    case appTypes.A:
      return {
        ...state,
        data: 'Changed by A trigger'
      }
    case appTypes.B:
      return {
        ...state,
        obj: {...action.payload}
      }
    default:
      return state
  }
}
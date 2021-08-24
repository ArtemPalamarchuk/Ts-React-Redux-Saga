const initState = {
  data: {},
}

export const app = (state = initState, action) => {
  switch (action.type) {
    case 'A':
      return {
        ...state,
        data: 'Changed by A trigger'
      }
    default:
      return state
  }
}
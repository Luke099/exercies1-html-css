
import * as ActionTypes from './ActionTypes'

let initialState = {
  data: [],
  detail: null
}

export const ListRecipe = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA:
      return { ...state, data: action.payload }
    case ActionTypes.FETCH_BY_ID:
      return { ...state, detail: action.payload }
    default:
      return state;
  }
}
import { Action } from '../type/common'

const videoReducer = (state = [], action: Action) => {
  switch (action.type) {
    case 'FETCH_VIDEO':
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default videoReducer

import {CHANGE_SWITCH, FETCH_GALLERY} from './types'

const initialState = {
  toggle:true,
  imageLists: [],
  
}


export const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GALLERY:
      return { ...state, imageLists: action.payload }
      case CHANGE_SWITCH:
        return {...state,toggle:!state.toggle}
    default: return state
  }
}

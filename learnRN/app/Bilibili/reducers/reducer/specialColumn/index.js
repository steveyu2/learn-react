import {
  FETCH_VIDEO_RECOMMEND,
  FETCH_SPECIAL_COLUMN_BANNERS,
  FETCH_SPECIAL_COLUMN_RECOMMEND,
} from '../../actions'

const initialState = {
  banner: [],
  recommend: []
}

export default function (state = initialState, action) {

  switch (action.type) {
    case FETCH_SPECIAL_COLUMN_BANNERS:
      return {
        ...state,
        banner: []
      }
    case FETCH_SPECIAL_COLUMN_RECOMMEND:
      return {
        ...state,
        recommend: []
      }
    default:
      return state
  }
}
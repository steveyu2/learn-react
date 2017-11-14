import {
  FETCH_VIDEO_RECOMMEND,
  FETCH_SPECIAL_COLUMN_BANNERS,
  FETCH_SPECIAL_COLUMN_RECOMMEND,
} from '../../actions'

const initialState = {
  recommend: []
}

export default function video(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEO_RECOMMEND:
      return {
        recommend: []
      }
    default:
      return state
  }
}
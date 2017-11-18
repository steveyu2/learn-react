import {
  FETCH_VIDEO_RECOMMEND_REQUEST,
  FETCH_VIDEO_RECOMMEND_SUCCESS,
  FETCH_VIDEO_RECOMMEND_FAILURE,
  FETCH_DIRECTION
} from '../../actions'

const {
  BEFORE,
  AFTER
} = FETCH_DIRECTION;

const initialState = {
  recommend: {
    loading: false,
    data: []
  }
}

function recommend(state, action) {
  switch (action.type) {
    case FETCH_VIDEO_RECOMMEND_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_VIDEO_RECOMMEND_SUCCESS:
      var data = [ action.data, state.data ];

      return {
        ...state,
        loading: false,
        data: [].concat.apply([], action.direction === BEFORE? data: data.reverse())
      }
    case FETCH_VIDEO_RECOMMEND_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default function video(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEO_RECOMMEND_REQUEST:
    case FETCH_VIDEO_RECOMMEND_SUCCESS:
    case FETCH_VIDEO_RECOMMEND_FAILURE:
      return {
        ...state,
        recommend: recommend(state.recommend , action)
      }
    default:
      return state
  }
}
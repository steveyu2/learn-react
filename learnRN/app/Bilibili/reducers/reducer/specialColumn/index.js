import {
  FETCH_SPECIAL_COLUMN_BANNERS_REQUEST,
  FETCH_SPECIAL_COLUMN_BANNERS_SUCCESS,
  FETCH_SPECIAL_COLUMN_BANNERS_FAILURE,

  FETCH_SPECIAL_COLUMN_RECOMMEND_REQUEST,
  FETCH_SPECIAL_COLUMN_RECOMMEND_SUCCESS,
  FETCH_SPECIAL_COLUMN_RECOMMEND_FAILURE,

  FETCH_DIRECTION
} from '../../actions'

const {
  BEFORE,
  AFTER
  } = FETCH_DIRECTION;

const initialState = {
  banners: {
    loading: false,
    data: new Array(4).fill(' ')
  },
  recommend: {
    loading: false,
    data: []
  },
}

function banners(state, action) {
  switch (action.type) {
    case FETCH_SPECIAL_COLUMN_BANNERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_SPECIAL_COLUMN_BANNERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case FETCH_SPECIAL_COLUMN_BANNERS_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

function recommend(state = {}, action) {
  switch (action.type) {
    case FETCH_SPECIAL_COLUMN_RECOMMEND_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_SPECIAL_COLUMN_RECOMMEND_SUCCESS:
      var data = [ action.data, state.data ];

      return {
        ...state,
        loading: false,
        data: [].concat.apply([], action.direction === BEFORE? data: data.reverse())
      }
    case FETCH_SPECIAL_COLUMN_RECOMMEND_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default function (state = initialState, action) {

  switch (action.type) {
    case FETCH_SPECIAL_COLUMN_BANNERS_REQUEST:
    case FETCH_SPECIAL_COLUMN_BANNERS_SUCCESS:
    case FETCH_SPECIAL_COLUMN_BANNERS_FAILURE:
      return {
        ...state,
        banners: banners(state.banners, action)
      }
    case FETCH_SPECIAL_COLUMN_RECOMMEND_REQUEST:
    case FETCH_SPECIAL_COLUMN_RECOMMEND_SUCCESS:
    case FETCH_SPECIAL_COLUMN_RECOMMEND_FAILURE:
      return {
        ...state,
        recommend: recommend(state.recommend, action)
      }
    default:
      return state
  }
}

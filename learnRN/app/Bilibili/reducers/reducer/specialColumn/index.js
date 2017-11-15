import {
  FETCH_SPECIAL_COLUMN_BANNERS_REQUEST,
  FETCH_SPECIAL_COLUMN_BANNERS_SUCCESS,
  FETCH_SPECIAL_COLUMN_BANNERS_FAILURE,

  FETCH_SPECIAL_COLUMN_RECOMMEND_REQUEST,
  FETCH_SPECIAL_COLUMN_RECOMMEND_SUCCESS,
  FETCH_SPECIAL_COLUMN_RECOMMEND_FAILURE,
} from '../../actions'

const initialState = {
  banners: {
    loading: false,
    data: []
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

function recommend(state = [], action) {
  switch (action.type) {
    case FETCH_SPECIAL_COLUMN_RECOMMEND_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_SPECIAL_COLUMN_RECOMMEND_SUCCESS:
      var data = [action.data, state.recommend];

      return {
        ...state,
        loading: false,
        data: [].apply([], action.type === BEFORE? data: data.reverse())
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

import {
  FETCH_VIDEO_RECOMMEND_REQUEST,
  FETCH_VIDEO_RECOMMEND_SUCCESS,
  FETCH_VIDEO_RECOMMEND_FAILURE,
  FETCH_DIRECTION,

  FETCH_SINGLE_VIDEO_REQUEST,
  FETCH_SINGLE_VIDEO_SUCCESS,
  FETCH_SINGLE_VIDEO_FAILURE
} from '../../actions'

const {
  BEFORE,
  AFTER
} = FETCH_DIRECTION;

const initialState = {
  // 推荐视频列表
  recommend: {
    loading: false,
    data: []
  },
  // 存储视频详情
  details: [
    //{
    //  id: ..
    //  loading: boolean
    //  data: {
    //    id: ..
    //    name: ..
    //  }
    //}
  ]
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

function details(state, action) {
  var index;
  state = state.slice()
  state.some((v, i)=>{
    if(v.id === action.id){
      index = i; // 记录下标
      return true;
    }
  });

  switch (action.type) {
    case FETCH_SINGLE_VIDEO_REQUEST:
        // 是否存在
      if(index !== undefined){
        state[index].loading = true;
        return state;
      }else{
        return[
          ...state,
          {
            id: action.id,
            loading: true,
            data: {}
          }
        ]
      }
    case FETCH_SINGLE_VIDEO_SUCCESS:
      state[index].loading = false;
      state[index].data = action.data;
      return state;
    case FETCH_SINGLE_VIDEO_FAILURE:
      state[index].loading = false;
      return state;
    default:
      return state
  }
}

export default function video(state = initialState, action) {
  // alert(action.type)
  switch (action.type) {
    case FETCH_VIDEO_RECOMMEND_REQUEST:
    case FETCH_VIDEO_RECOMMEND_SUCCESS:
    case FETCH_VIDEO_RECOMMEND_FAILURE:
      return {
        ...state,
        recommend: recommend(state.recommend , action)
      }
    case FETCH_SINGLE_VIDEO_REQUEST:
    case FETCH_SINGLE_VIDEO_SUCCESS:
    case FETCH_SINGLE_VIDEO_FAILURE:
      return {
        ...state,
        details: details(state.details , action)
      }
    default:
      return state
  }
}
import localData from './data'
const {
  VideoRecommend,
  SpecialColumnBanners,
  SpecialColumnRecommend
  } = localData;
/**
 * action 类型
 *                REQUEST  发起请求
 *                SUCCESS  成功
 *                FAILURE  失败
 */
export const FETCH_VIDEO_RECOMMEND_REQUEST = 'FETCH_VIDEO_RECOMMEND_REQUEST';
export const FETCH_VIDEO_RECOMMEND_SUCCESS = 'FETCH_VIDEO_RECOMMEND_SUCCESS';
export const FETCH_VIDEO_RECOMMEND_FAILURE = 'FETCH_VIDEO_RECOMMEND_FAILURE';

export const FETCH_SPECIAL_COLUMN_BANNERS_REQUEST = "FETCH_SPECIAL_COLUMN_BANNERS_REQUEST";
export const FETCH_SPECIAL_COLUMN_BANNERS_SUCCESS = "FETCH_SPECIAL_COLUMN_BANNERS_SUCCESS";
export const FETCH_SPECIAL_COLUMN_BANNERS_FAILURE = "FETCH_SPECIAL_COLUMN_BANNERS_FAILURE";

export const FETCH_SPECIAL_COLUMN_RECOMMEND_REQUEST = 'FETCH_SPECIAL_COLUMN_RECOMMEND_REQUEST'
export const FETCH_SPECIAL_COLUMN_RECOMMEND_SUCCESS = 'FETCH_SPECIAL_COLUMN_RECOMMEND_SUCCESS'
export const FETCH_SPECIAL_COLUMN_RECOMMEND_FAILURE = 'FETCH_SPECIAL_COLUMN_RECOMMEND_FAILURE'

/**
 * 其它的常量
 */
export const FETCH_DIRECTION = {
  BEFORE: 'BEFORE',
  AFTER: 'AFTER'
}

/**
 * action 创建函数
 */
/**
 * 获取视频推荐
 */
let videoRecommendFetchCount = 7; // 每次获取的数量
let videoRecommendFetchTopIndex = 10; // 获取的上坐标
let videoRecommendFetchDownIndex = videoRecommendFetchTopIndex; // 获取的下坐标

export function fetchVideoRecommendLocal(type, callback=()=>{}) {
  let index;
  let count = videoRecommendFetchCount;

  return (dispatch) => {
    var isBEFORE = type === FETCH_DIRECTION.BEFORE;
    var isAFTER = type === FETCH_DIRECTION.AFTER;

    if(isBEFORE){
      dispatch(fetchVideoRecommendRequest())
    }

    VideoRecommend((res)=>{
      try{
        var data = JSON.parse(res)

        if(isBEFORE){ // 向上获取
          index = videoRecommendFetchTopIndex;

          let nextIndex = index - count
          nextIndex < 0 && (nextIndex = 0) // 到达上坐标上限
          data = data.slice(nextIndex, index)

          // 修改坐标
          videoRecommendFetchTopIndex = nextIndex;
        }else if(isAFTER){// 向下获取
          index = videoRecommendFetchDownIndex;

          let nextIndex = index + count
          data = data.slice(index, nextIndex)

          // 修改坐标
          videoRecommendFetchDownIndex = nextIndex;
        }else{
          dispatch(fetchVideoRecommendFailure(callback))
        }

        // 用来判断是否没有更多
        callback({noMore: data.length === 0})

        dispatch(fetchVideoRecommendSuccess(data, type))
      }catch (e){
        dispatch(fetchVideoRecommendFailure(callback))
      }
    })
  }
}
export function fetchVideoRecommend() {

}
export function fetchVideoRecommendRequest() {
  return { type: FETCH_VIDEO_RECOMMEND_REQUEST }
}
export function fetchVideoRecommendSuccess(data, direction) {
  return { type: FETCH_VIDEO_RECOMMEND_SUCCESS, data, direction }
}
export function fetchVideoRecommendFailure(callback) {
  callback({fail: true})
  return { type: FETCH_VIDEO_RECOMMEND_FAILURE }
}

/**
 * 获取专栏banner
 */
export function fetchSpecialColumnBannersLocal() {
  return (dispatch) => {
    dispatch(fetchSpecialColumnBannersRequest())
    SpecialColumnBanners((res)=>{
      try {
        var data = JSON.parse(res)

        dispatch(fetchSpecialColumnBannersSuccess(data))
      } catch(e) {
        dispatch(fetchSpecialColumnBannersFailure())
      }
    })
  }
}
export function fetchSpecialColumnBanners() {

}
export function fetchSpecialColumnBannersRequest() {
  return { type: FETCH_SPECIAL_COLUMN_BANNERS_REQUEST }
}
export function fetchSpecialColumnBannersSuccess(data) {
  return { type: FETCH_SPECIAL_COLUMN_BANNERS_SUCCESS, data }
}
export function fetchSpecialColumnBannersFailure() {
  return { type: FETCH_SPECIAL_COLUMN_BANNERS_FAILURE }
}

/**
 * 获取专栏推荐
 */
let SpecialColumnRecommendFetchCount = 7; // 每次获取的数量
let SpecialColumnRecommendFetchTopIndex = 10; // 获取的上坐标
let SpecialColumnRecommendFetchDownIndex = SpecialColumnRecommendFetchTopIndex; // 获取的下坐标

export function fetchSpecialColumnRecommendLocal(type, callback=()=>{}) {
  let index;
  let count = SpecialColumnRecommendFetchCount;

  return (dispatch) => {
    var isBEFORE = type === FETCH_DIRECTION.BEFORE;
    var isAFTER = type === FETCH_DIRECTION.AFTER;

    if(isBEFORE){
      dispatch(fetchSpecialColumnRecommendRequest())
    }

    SpecialColumnRecommend((res)=>{
      try{
        var data = JSON.parse(res)

        if(isBEFORE){ // 向上获取
          index = SpecialColumnRecommendFetchTopIndex;

          let nextIndex = index - count
          nextIndex < 0 && (nextIndex = 0) // 到达上坐标上限
          data = data.slice(nextIndex, index)

          // 修改坐标
          SpecialColumnRecommendFetchTopIndex = nextIndex;
        }else if(isAFTER){// 向下获取
          index = SpecialColumnRecommendFetchDownIndex;

          let nextIndex = index + count
          data = data.slice(index, nextIndex)

          // 修改坐标
          SpecialColumnRecommendFetchDownIndex = nextIndex;
        }else{
          dispatch(fetchSpecialColumnRecommendFailure(callback))
        }

        // 用来判断是否没有更多
        callback({noMore: data.length === 0})

        dispatch(fetchSpecialColumnRecommendSuccess(data, type))
      }catch (e){
        console.warn(e)
        dispatch(fetchSpecialColumnRecommendFailure(callback))
      }
    })
  }
}
export function fetchSpecialColumnRecommend(index, count) {

}
export function fetchSpecialColumnRecommendRequest() {
  return { type: FETCH_SPECIAL_COLUMN_RECOMMEND_REQUEST }
}
export function fetchSpecialColumnRecommendSuccess(data, direction) {
  return { type: FETCH_SPECIAL_COLUMN_RECOMMEND_SUCCESS, data, direction }
}
export function fetchSpecialColumnRecommendFailure(callback) {
  callback({error: true})
  return { type: FETCH_SPECIAL_COLUMN_RECOMMEND_FAILURE }
}
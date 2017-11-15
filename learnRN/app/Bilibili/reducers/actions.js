import {
  VideoRecommend,
  SpecialColumnBanners,
  SpecialColumnRecommend,
} from './data'

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
export function fetchVideoRecommendLocal(index, count, type) {
  return (dispatch) => {
    dispatch(fetchVideoRecommendRequest())
    VideoRecommend((res)=>{
      try{
        var data = JSON.parse(res)

        if(type === FETCH_DIRECTION.BEFORE){
          var nextIndex = index - count
          nextIndex < 0 && (nextIndex = 0)
          data = data.slice(nextIndex, index)
        }else{
          data = data.slice(index, index + count)
        }

        dispatch(fetchVideoRecommendSuccess(data, type))
      }catch (e){
        dispatch(fetchVideoRecommendFailure())
      }
    })
  }
}
export function fetchVideoRecommend() {

}
export function fetchVideoRecommendRequest() {
  return { type: FETCH_VIDEO_RECOMMEND_REQUEST }
}
export function fetchVideoRecommendSuccess(data, type) {
  return { type: FETCH_VIDEO_RECOMMEND_SUCCESS, data, type }
}
export function fetchVideoRecommendFailure() {
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
export function fetchSpecialColumnRecommendsLocal(index, count, type) {
  return (dispatch) => {
    dispatch(fetchSpecialColumnRecommendRequest())
    SpecialColumnRecommend((res)=>{
      try{
        var data = JSON.parse(res)

        if(type === FETCH_DIRECTION.BEFORE){
          var nextIndex = index - count
          nextIndex < 0 && (nextIndex = 0)
          data = data.slice(nextIndex, index)
        }else{
          data = data.slice(index, index + count)
        }

        dispatch(fetchSpecialColumnRecommendSuccess(data, type))
      }catch (e){
        dispatch(fetchSpecialColumnRecommendFailure())
      }
    })
  }
}
export function fetchSpecialColumnRecommend(index, count) {

}
export function fetchSpecialColumnRecommendRequest(index, count) {
  return { type: FETCH_SPECIAL_COLUMN_RECOMMEND_REQUEST, index, count }
}
export function fetchSpecialColumnRecommendSuccess(index, count) {
  return { type: FETCH_SPECIAL_COLUMN_RECOMMEND_SUCCESS, index, count }
}
export function fetchSpecialColumnRecommendFailure(index, count) {
  return { type: FETCH_SPECIAL_COLUMN_RECOMMEND_FAILURE, index, count }
}
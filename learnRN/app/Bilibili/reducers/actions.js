import storage from '../storage'
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

export const FETCH_SPECIAL_COLUMN_RECOMMEND_REQUEST = 'FETCH_SPECIAL_COLUMN_RECOMMEND_REQUEST';
export const FETCH_SPECIAL_COLUMN_RECOMMEND_SUCCESS = 'FETCH_SPECIAL_COLUMN_RECOMMEND_SUCCESS';
export const FETCH_SPECIAL_COLUMN_RECOMMEND_FAILURE = 'FETCH_SPECIAL_COLUMN_RECOMMEND_FAILURE';

export const SET_MAIN_COLOR = 'SET_MAIN_COLOR';

/**
 * 其它的常量
 */
export const FETCH_DIRECTION = {
  BEFORE: 'BEFORE',
  AFTER: 'AFTER'
}
const myfetch = (url) => fetch('http://daregashira.top/' + url)
 /**
 * action 创建函数
 */
/**
 * 获取视频推荐
 */
let videoRecommendFetchCount = 7; // 每次获取的数量
let videoRecommendFetchTopIndex = 10; // 获取的上坐标
let videoRecommendFetchDownIndex = videoRecommendFetchTopIndex; // 获取的下坐标
/**
 * 数据操作函数
 * @param dataSource {function} 获取数据的函数 接受获取成功的回调
 * @param type  获取类型 向上获取向下获取
 * @param callback 数据获取成功的回调
 * @returns {Function}
 */
function handleVideoRecommend(dataSource, type, callback) {
  let index;
  let count = videoRecommendFetchCount;

  return (dispatch) => {
    var isBEFORE = type === FETCH_DIRECTION.BEFORE;
    var isAFTER = type === FETCH_DIRECTION.AFTER;

    // 向上获取需要更改loading
    if(isBEFORE){
      dispatch(fetchVideoRecommendRequest())
    }

    dataSource((res)=>{
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
    }, dispatch)
  }
}
// 本地数据源
export function fetchVideoRecommendLocal(type, callback=()=>{}) {
  return handleVideoRecommend(VideoRecommend, type, callback)
}
// 网络数据源
export function fetchVideoRecommend(type, callback=()=>{}) {
  const dataSource = (callbackToRes, dispatch)=>{
    myfetch('post/video/recommend.txt').then((response) => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error('fetch post/video/recommend.txt fail')
      }
    }, ()=>dispatch(fetchVideoRecommendFailure(callback)))
    .then((res)=>{
      res = res.reduce((arr, v, i)=>{
        const index = ~~(i / 2);
        arr[index]? arr[index].push(v): (arr[index] = [v])
        return arr
      }, [])

      callbackToRes(JSON.stringify(res))
    }, ()=>dispatch(fetchVideoRecommendFailure(callback)))
    .catch((e)=>{
      dispatch(fetchVideoRecommendFailure(callback))
    });
  }
  return handleVideoRecommend(dataSource, type, callback)
}
export function fetchVideoRecommendRequest() {
  return { type: FETCH_VIDEO_RECOMMEND_REQUEST }
}
export function fetchVideoRecommendSuccess(data, direction) {
  return { type: FETCH_VIDEO_RECOMMEND_SUCCESS, data, direction }
}
export function fetchVideoRecommendFailure(callback) {
  callback({error: true})
  return { type: FETCH_VIDEO_RECOMMEND_FAILURE }
}

/**
 * 获取专栏banner
 */
// 本地数据
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
// 网络数据
export function fetchSpecialColumnBanners() {
  return (dispatch) => {
    dispatch(fetchSpecialColumnBannersRequest())
    myfetch('post/specialColumn/banners.txt')
    .then((response) => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error('fetch post/specialColumn/banners.txt fail')
      }
    }, ()=>dispatch(fetchVideoRecommendFailure(callback)))
    .then((res)=>{
      dispatch(fetchSpecialColumnBannersSuccess(res))
    }, ()=>dispatch(fetchSpecialColumnBannersFailure()))
    .catch((e)=>{
      dispatch(fetchSpecialColumnBannersFailure())
    });
  }
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
/**
 * 数据操作函数
 * @param dataSource {function} 获取数据的函数 接受获取成功的回调
 * @param type  获取类型 向上获取向下获取
 * @param callback 数据获取成功的回调
 * @returns {Function}
 */
function handleSpecialColumnRecommend(dataSource, type, callback) {
  let index;
  let count = SpecialColumnRecommendFetchCount;

  return (dispatch) => {
    var isBEFORE = type === FETCH_DIRECTION.BEFORE;
    var isAFTER = type === FETCH_DIRECTION.AFTER;

    // 向上获取需要更改loading
    if(isBEFORE){
      dispatch(fetchSpecialColumnRecommendRequest())
    }

    dataSource((res)=>{
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
        dispatch(fetchSpecialColumnRecommendFailure(callback))
      }
    }, dispatch)
  }
}
// 本地数据源
export function fetchSpecialColumnRecommendLocal(type, callback=()=>{}) {
  return handleSpecialColumnRecommend(SpecialColumnRecommend, type, callback)
}
// 网络数据源
export function fetchSpecialColumnRecommend(type, callback=()=>{}) {
  const dataSource = (callbackToRes, dispatch)=>{
    myfetch('post/specialColumn/recommend.txt')
    .then((response) => {
      //alert(2)
      if(response.ok) {
        return response.json()
      } else {
        throw new Error('fetch post/specialColumn/recommend.txt fail')
      }
    }, ()=>dispatch(fetchVideoRecommendFailure(callback)))
    .then((res)=>{
      callbackToRes(JSON.stringify(res))
    },()=>dispatch(fetchSpecialColumnRecommendFailure(callback)))
    .catch((e)=>{
      dispatch(fetchSpecialColumnRecommendFailure(callback))
    });
  }
  return handleSpecialColumnRecommend(dataSource, type, callback)
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

/**
 * 颜色设置
 */

export function setMainColor(color) {

  // 保存到本地
  storage.save({
    key: 'mainColor',  // 注意:请不要在key中使用_下划线符号!
    data: color,
    expires: null
});

  return { type: SET_MAIN_COLOR, color }
}

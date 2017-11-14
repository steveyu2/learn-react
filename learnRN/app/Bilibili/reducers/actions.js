import {
  VideoRecommend,
} from './data'

/*
 * action 类型
 */
export const FETCH_VIDEO_RECOMMEND = 'FETCH_VIDEO_RECOMMEND';
export const FETCH_SPECIAL_COLUMN_BANNERS = "FETCH_SPECIAL_COLUMN_BANNERS";
export const FETCH_SPECIAL_COLUMN_RECOMMEND = 'FETCH_SPECIAL_COLUMN_RECOMMEND'
/*
 * 其它的常量
 */
/*
 * action 创建函数
 */
// 获取视频推荐
export function fetchVideoRecommend() {
  return { type: FETCH_VIDEO_RECOMMEND }
}

// 获取专栏banner
export function fetchSpecialColumnBanners() {
  return { type: FETCH_SPECIAL_COLUMN_BANNERS }
}

// 获取专栏推荐
export function fetchSpecialColumnRecommend(index, count) {
  return { type: FETCH_SPECIAL_COLUMN_RECOMMEND, index, count }
}
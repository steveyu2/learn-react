import {
  Recommend
} from './data';

export default {
  // count 数目
  getRecommend(count, callback) {
    count = count || 12;
    data = Recommend.slice().sort(v=>(0.5-Math.random()));
    callback(data);
  }
}


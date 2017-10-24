import {
  Recommend
} from './data';

function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

export default {
  // count 行数目
  getRecommend(count, callback) {
    var result=[];
    var resultCount = 0;
    count = count || 12;
    data = Recommend.slice().sort(v=>(0.5-Math.random()));
    data.forEach(v=>{
      // copy对象 附加id
      v=Object.assign({},v)
      v.id=uuid()
      // 合并成 [array(2),array[2]]的形式
      if(result[resultCount] && arr[resultCount].length===1){
        arr[resultCount].push(v)
        resultCount++
      }else{
        arr[resultCount]=[v]
      }
    })
      // .slice(0,count)
    setTimeout(()=>{callback(result)},2000)
  }
}


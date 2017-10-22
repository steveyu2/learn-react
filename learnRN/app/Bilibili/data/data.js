// 模拟假数据
const Recommend = [
  [
    "【火影手书】暁众人的POKAPOKA之歌",
    "https://i2.hdslb.com/bfs/archive/3e8dfca1d8242c519eafb9276d5f4c6f71f12355.png@160w_100h.webp",
    "01:45",
    "1.7万",
    "323",
    "短片·手书·配音"
  ],
  [
    "【零守字幕组】【ULTRAMAN】【有声漫画】【第26话】【舞者】",
    "https://i2.hdslb.com/bfs/archive/de1b5af61e14410f059653951a56f15de15778b3.jpg@160w_100h.webp",
    "08:37",
    "846",
    "48",
    "短片·手书·配音"
  ],
  [
    "【宅龄鉴别】声优也去KTV？知名动画角色K歌盘点。",
    "https://i0.hdslb.com/bfs/archive/0019c0c5a3ce083faaf8661e1c6a52d02c074e14.jpg@160w_100h.webp",
    "15:31",
    "4.1万",
    "1331",
    "综合"
  ],
  [
    "手书",
    "https://i1.hdslb.com/bfs/archive/bdfdec2c14cb6699dc33f47cae98f136cc9e37a0.jpg@160w_100h.webp",
    "04:24",
    "635",
    "105",
    "短片·手书·配音"
  ],
  [
    "外国漫迷评索隆2016最强十斩",
    "https://i1.hdslb.com/bfs/archive/959371608a9270930b89377c81dd3bca0c34fc77.jpg@160w_100h.webp",
    "08:18",
    "2.4万",
    "399",
    "综合"
  ],
  [
    "柯南你怎么了，难道你忘记兰了吗？",
    "https://i2.hdslb.com/bfs/archive/b60ab291e5a104e8a84db5dfd8aaa10fcc9cbc2f.jpg@160w_100h.webp",
    "04:02",
    "1.8万",
    "241",
    "综合"
  ],
  [
    "【投票向】二次元男神投票第二弹",
    "https://i2.hdslb.com/bfs/archive/5fde24f12ef4cbdb0fc0814891b6cbad012d6d6d.jpg@160w_100h.webp",
    "10:29",
    "3.3万",
    "1.4万",
    "综合"
  ],
  [
    "我只是来送货的呀！（请带好耳机！）",
    "https://i2.hdslb.com/bfs/archive/3b7cd9429dcafa1857435ff0e13a5c00635b7845.jpg@160w_100h.webp",
    "20:08",
    "36.1万",
    "1.3万",
    "短片·手书·配音"
  ],
  [
    "【12月】国外污动画GIF/{TOP19}",
    "https://i2.hdslb.com/bfs/archive/8a385ae49a369b40002f6d9262e4ba624adf0f99.jpg@160w_100h.webp",
    "10:50",
    "40.4万",
    "1149",
    "综合"
  ],
  [
    "Stickman Vs Bendy and The Ink Machine, Chapter 3 in a nutshell Animation",
    "https://i1.hdslb.com/bfs/archive/4d3436b23a49aee9c4e41a3b741db88a764e800e.jpg@160w_100h.webp",
    "13:00",
    "16",
    "0",
    "综合"
  ],
  [
    "【4月】月色真美 07【独家正版】",
    "https://i2.hdslb.com/bfs/archive/903dfeeb5722a9fa5f5dfd8454b5849f9d9670a5.jpg@160w_100h.webp",
    "24:21",
    "100.0万",
    "9.6万",
    "月色真美"
  ],
  [
    "【10月】干物妹！小埋R 02【独家正版】",
    "https://i0.hdslb.com/bfs/archive/6c5f1c6203f69081fabc35ada7e37fc761808fdd.jpg@160w_100h.webp",
    "23:40",
    "224.6万",
    "4.9万",
    "干物妹！小埋R"
],
  [
    "【7月】OVERLORD 09【独家正版】",
    "https://i2.hdslb.com/bfs/archive/e19c4e1d3cf9f4d57f9563afd24696a096b10bd2.jpg@160w_100h.webp",
    "23:40",
    "455.3万",
    "8.5万",
    "OVERLORD"
  ],
  [
    "【4月】日常 23 【异域*****】",
    "https://i1.hdslb.com/bfs/archive/919d863c2776bfb54164edc0718bd7f7e0baadaf.jpg@160w_100h.webp",
    "31:45",
    "54.6万",
    "4.0万",
    "日常"
  ],
  [
    "【7月】干物妹！小埋 04",
    "https://i1.hdslb.com/bfs/archive/ad5a1a9f79c19358153c09e2de33ab69ad2b7d04.jpg@160w_100h.webp",
    "24:04",
    "513.0万",
    "27.8万",
    "干物妹！小埋"
  ],
  [
    "【10月】四月是你的谎言 17",
    "https://i0.hdslb.com/bfs/archive/cb57a8e7348a90f156da26ae129e08637d3c3850.jpg@160w_100h.webp",
    "22:57",
    "162.7万",
    "442",
    "四月是你的谎言"
  ],
  [
    "【7月】斩·赤红之瞳  01",
    "https://i0.hdslb.com/bfs/archive/617bdfad6bfe40ddec72b6f747a34c62073e58d0.jpg@160w_100h.webp",
    "23:41",
    "505.1万",
    "14.8万",
    "斩·赤红之瞳"
  ],
  [
    "【7月/完结】NEW GAME! 12",
    "https://i1.hdslb.com/bfs/archive/96406030547f705cec2b1b2be2d9159528447e53.jpg@160w_100h.webp",
    "23:25",
    "75.5万",
    "4.5万",
    "NEW GAME"
  ],
  [
    "【7月】将国之天鹰星 15",
    "https://i2.hdslb.com/bfs/archive/0b451e2b66ebdece7777c94cf569fe350954d452.jpg@160w_100h.webp",
    "24:08",
    "1.3万",
    "387",
    "将国之天鹰星"
  ],
  [
    "【4月】月色真美 09【独家正版】",
    "https://i0.hdslb.com/bfs/archive/5131c630c8023a03a196a07aada19be42e20ef59.jpg@160w_100h.webp",
    "24:21",
    "87.3万",
    "5.0万",
    "月色真美"
  ]
].map(v=>(
  {
    // 标题
    title: v[0],
    videoUrl: '',
    imageUrl: v[1],
    videoTime: v[2],
    play: v[3],
    danmu: v[4],
    type: v[5],  }

))

export {
  Recommend //推荐
}

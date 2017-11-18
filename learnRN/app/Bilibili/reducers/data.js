// 模拟假数据
// 视频推荐

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

var VideoRecommend = [
  ["【火影手书】暁众人的POKAPOKA之歌","https://i2.hdslb.com/bfs/archive/3e8dfca1d8242c519eafb9276d5f4c6f71f12355.png@160w_100h.webp", "01:45", "1.7万", "323", "短片·手书·配音"],
  ["【零守字幕组】【ULTRAMAN】【有声漫画】【第26话】【舞者】", "https://i2.hdslb.com/bfs/archive/de1b5af61e14410f059653951a56f15de15778b3.jpg@160w_100h.webp", "08:37", "846", "48", "短片·手书·配音"],
  ["【宅龄鉴别】声优也去KTV？知名动画角色K歌盘点。", "https://i0.hdslb.com/bfs/archive/0019c0c5a3ce083faaf8661e1c6a52d02c074e14.jpg@160w_100h.webp", "15:31", "4.1万", "1331", "综合"],
  ["手书", "https://i1.hdslb.com/bfs/archive/bdfdec2c14cb6699dc33f47cae98f136cc9e37a0.jpg@160w_100h.webp", "04:24", "635", "105", "短片·手书·配音"],
  ["外国漫迷评索隆2016最强十斩", "https://i1.hdslb.com/bfs/archive/959371608a9270930b89377c81dd3bca0c34fc77.jpg@160w_100h.webp", "08:18", "2.4万", "399", "综合"],
  ["柯南你怎么了，难道你忘记兰了吗？", "https://i2.hdslb.com/bfs/archive/b60ab291e5a104e8a84db5dfd8aaa10fcc9cbc2f.jpg@160w_100h.webp", "04:02", "1.8万", "241", "综合"],
  ["【投票向】二次元男神投票第二弹", "https://i2.hdslb.com/bfs/archive/5fde24f12ef4cbdb0fc0814891b6cbad012d6d6d.jpg@160w_100h.webp", "10:29", "3.3万", "1.4万", "综合"],
  ["我只是来送货的呀！（请带好耳机！）", "https://i2.hdslb.com/bfs/archive/3b7cd9429dcafa1857435ff0e13a5c00635b7845.jpg@160w_100h.webp", "20:08", "36.1万", "1.3万", "短片·手书·配音"],
  //[
  //  "【12月】国外污动画GIF/{TOP19}",
  //  "https://i2.hdslb.com/bfs/archive/8a385ae49a369b40002f6d9262e4ba624adf0f99.jpg@160w_100h.webp",
  //  "10:50",
  //  "40.4万",
  //  "1149",
  //  "综合"
  //],
  ["Stickman Vs Bendy and The Ink Machine, Chapter 3 in a nutshell Animation", "https://i1.hdslb.com/bfs/archive/4d3436b23a49aee9c4e41a3b741db88a764e800e.jpg@160w_100h.webp", "13:00", "16", "0", "综合"],
  ["【4月】月色真美 07【独家正版】", "https://i2.hdslb.com/bfs/archive/903dfeeb5722a9fa5f5dfd8454b5849f9d9670a5.jpg@160w_100h.webp", "24:21", "100.0万", "9.6万", "月色真美"],
  ["【10月】干物妹！小埋R 02【独家正版】", "https://i0.hdslb.com/bfs/archive/6c5f1c6203f69081fabc35ada7e37fc761808fdd.jpg@160w_100h.webp", "23:40", "224.6万", "4.9万", "干物妹！小埋R"],
  ["【7月】OVERLORD 09【独家正版】", "https://i2.hdslb.com/bfs/archive/e19c4e1d3cf9f4d57f9563afd24696a096b10bd2.jpg@160w_100h.webp", "23:40", "455.3万", "8.5万", "OVERLORD"],
  ["【4月】日常 23 【异域*****】", "https://i1.hdslb.com/bfs/archive/919d863c2776bfb54164edc0718bd7f7e0baadaf.jpg@160w_100h.webp", "31:45", "54.6万", "4.0万", "日常"],
  ["【7月】干物妹！小埋 04", "https://i1.hdslb.com/bfs/archive/ad5a1a9f79c19358153c09e2de33ab69ad2b7d04.jpg@160w_100h.webp", "24:04", "513.0万", "27.8万", "干物妹！小埋"],
  ["【10月】四月是你的谎言 17", "https://i0.hdslb.com/bfs/archive/cb57a8e7348a90f156da26ae129e08637d3c3850.jpg@160w_100h.webp", "22:57", "162.7万", "442", "四月是你的谎言"],
  ["【7月】斩·赤红之瞳  01", "https://i0.hdslb.com/bfs/archive/617bdfad6bfe40ddec72b6f747a34c62073e58d0.jpg@160w_100h.webp", "23:41", "505.1万", "14.8万", "斩·赤红之瞳"],
  ["【7月/完结】NEW GAME! 12", "https://i1.hdslb.com/bfs/archive/96406030547f705cec2b1b2be2d9159528447e53.jpg@160w_100h.webp", "23:25", "75.5万", "4.5万", "NEW GAME"],
  ["【7月】将国之天鹰星 15", "https://i2.hdslb.com/bfs/archive/0b451e2b66ebdece7777c94cf569fe350954d452.jpg@160w_100h.webp", "24:08", "1.3万", "387", "将国之天鹰星"],
  ["【4月】月色真美 09【独家正版】", "https://i0.hdslb.com/bfs/archive/5131c630c8023a03a196a07aada19be42e20ef59.jpg@160w_100h.webp", "24:21", "87.3万", "5.0万", "月色真美"]
]

// 数据太少了乘个2
VideoRecommend = VideoRecommend.concat(VideoRecommend)

// 数据取成2的倍数
//VideoRecommend.length % 2 !== 0 && VideoRecommend.pop()

// map设置key reduce分组成 [array(2), array(2)] 的格式
VideoRecommend = VideoRecommend.map(v=>(
  {
    id: uuid(),
    title: v[0],
    videoUrl: '',
    imageUrl: v[1],
    videoTime: v[2],
    play: v[3],
    danmu: v[4],
    type: v[5],
  }
)).reduce((arr, v, i)=>{
  const index = ~~(i / 2);
  arr[index]? arr[index].push(v): (arr[index] = [v])
  return arr
}, [])

// 专栏图片轮播
const SpecialColumnBanners = [
  'https://i0.hdslb.com/bfs/archive/2d3a993b1c5201526ad7ced72619916870a08dc3.jpg@680w_212h.webp',
  'https://i0.hdslb.com/bfs/archive/4290e8d939778a4bce79a662910ecfb3a3fefc99.jpg@680w_212h.webp',
  'https://i0.hdslb.com/bfs/archive/412988903400bb46145ac37c3440780c9d42ae5b.jpg@680w_212h.webp',
  'https://i0.hdslb.com/bfs/archive/61ee0a32a3b17c10b75ac0a32bb466e5f44b21ca.jpg@680w_212h.webp',
];

// 专栏推荐
var SpecialColumnRecommend = [["这套路学不来的——十月新番扫雷（完）","作者：白鹅纪编辑部大家久等了，这里是本季新番扫雷第五期。本期新番扫雷将给大家带来的几部不太按套路出牌的作品，有话说一半就开始讲黄段子的，有花甲老人突然变身的，也有女主反过来撩男主的等等。和以前一样，本","http://i1.hdslb.com/bfs/face/2b5e3136625c3247c08ce8c4837c42ecce1351c9.jpg@24w_24h.webp","华语第三电波台","番剧","4389","40","17","https://i0.hdslb.com/bfs/article/652ee9a6aef7237c095e6ffdc4e10eef969419f0.jpg@860w_482h.webp"],["泰晤士河畔的“世外桃源”，身心放松的最佳场所！","欢迎光临DOCO热纪录一年365天陪你悦享真实世界‍现代生活的忙碌和繁琐，让人们开始向往田园牧歌式的生活，同时也期望能找到一个真正的“世外桃源”。对于中国人来说，最深刻的关于“世外桃源”的印象源于陶渊","http://i1.hdslb.com/bfs/face/a48d2262adfc6fb8920d18e55310c29fc6fdd55a.jpg@24w_24h.webp","DOCO热纪录","其他","573","6","0","https://i0.hdslb.com/bfs/article/6118d5533032b911604412a91454f79789a94a4f.jpg@860w_482h.webp"],["扯线漫谈：作为经典恐怖IP，《它》还网住了谁？","作者：锹甲TT导语：我在这里扯的是一种相当自由的互文性（intertextuality），它不仅跨艺术形式彼此映照和勾连（比如从小说到电影，到ACG），也不管那些作品之间或明或暗的关系是作者承认的还是","http://i0.hdslb.com/bfs/face/a3b09df441dc63ef5566b2d18ee3b0f63a188210.jpg@24w_24h.webp","机核网","影视","5051","58","11","https://i0.hdslb.com/bfs/article/c156d22387ad02dbe06106afc1adbb1ce7e60ccc.jpg@860w_482h.webp"],["TV动画《宝石之国》制作秘话04～写实质感的蜗牛篇～","市川春子的原作漫画《宝石之国》，在TV动画化过程中用到了全CG技术。本作由此前多次承担动画CG制作的橘子社（オレンジ）负责，第一次创作出带有宝石质感的头发。角色动作采用了众多新方法，注","http://i0.hdslb.com/bfs/face/5ea1a61e4eb5214e92893bf0c0397bc38a409124.jpg@24w_24h.webp","圆兔子12138","番剧","2731","43","11","https://i0.hdslb.com/bfs/article/072bb69cbca3a0d7942f463162556b86c9441a7b.jpg@860w_482h.webp"],["还在瞎吹乱婊？教你口胡动画票房的正确姿势","作者：捉鱼人@白鹅纪价格喜人的动画碟片越来越卖不出去已经是当下不争的事实，把作品做成剧场版，放在电影院上映俨然成了一种普遍现象。光今年下半年，就有《Free!》、《魔法科高校的劣等生》、《No Gam","http://i1.hdslb.com/bfs/face/2b5e3136625c3247c08ce8c4837c42ecce1351c9.jpg@24w_24h.webp","华语第三电波台","番剧","6.1万","743","260","https://i0.hdslb.com/bfs/article/d08c42ee1292b924259031852ecd1ed7d63a8249.jpg@860w_482h.webp"],["有朋自远方来——那些穿汉服的歪果仁","很多人以为，中国一直没有跟外国交流，最多也就唐成为过世界中心，才有外国人来中国。唐 胡人俑唐 黑人俑除此之后，特别是明清时期一直闭关锁国，与外国（特别是欧洲国家）不交流，导致国家落后。然而有一段特殊的","http://i1.hdslb.com/bfs/face/c3bf0ea026bac6ee19c129719b729e7c7c62b6e9.jpg@24w_24h.webp","楠朔","趣味科普","2426","55","7","https://i0.hdslb.com/bfs/article/29b59f879cb477e93477f9750ec343eadcff4d03.png@860w_482h.webp"],["日本最大在线游戏平台进军中国啦！","作者：白鹅君如果是玩过《舰队collection》，《刀剑乱舞Online》等网页游戏的话，那一定不会对DMM这个名称感到陌生。近日，DMM GAMES在国内开启了官方微博账号，引起了诸多游戏爱好者的","http://i1.hdslb.com/bfs/face/2b5e3136625c3247c08ce8c4837c42ecce1351c9.jpg@24w_24h.webp","华语第三电波台","手机游戏","5677","71","63","https://i0.hdslb.com/bfs/article/8f952d685ee42f31e65348819d8f12bdde8fbb79.jpg@860w_482h.webp"],["生活就要全力以赴——十月新番扫雷（四）","作者：白鹅纪编辑部大家好，这里是本季新番扫雷第四期。本期新番扫雷将给大家带来的六部比较积极向上的作品，它们的主人公们都有为生活和理想全力以赴着。和以前一样，本次扫雷对象不包括续作类动画以及泡面番。每部","http://i1.hdslb.com/bfs/face/2b5e3136625c3247c08ce8c4837c42ecce1351c9.jpg@24w_24h.webp","华语第三电波台","番剧","3789","28","17","https://i0.hdslb.com/bfs/article/12d2843c14f87c71b7018e36e5032b60a5c3a0f4.jpg@860w_482h.webp"],["喜欢女仆，就要了解女仆","①女仆的起源女仆是一种职业，主要职务是为雇主打理家务。因时代不同而有的称呼也不相同，然而基本的工作性质是一致的。鲇泽美咲 妹抖诞生于封建贵族社会 女仆最早可以追溯到古代罗马帝国时代，那时候的女仆还是属","http://i2.hdslb.com/bfs/face/3e149421b5fe7c479f74c46d11162ea6922999a9.jpg@24w_24h.webp","独步隐客","番剧","3.5万","622","186","https://i0.hdslb.com/bfs/article/943a0f731a6dd02fd300a8fc02c99dbf2f4d09fd.png@860w_482h.webp"],["透过《刺客信条：起源》 感受魅影之纱笼罩下的埃及","《刺客信条：起源》近日发售了，其游戏故事背景发生在古老的埃及，作为世界上历史最悠久的文明古国之一，它一直在人们的印象中扮演着神秘的角色，黄沙满地的荒漠中矗立起的宏伟金字塔和狮身人面像，横跨城市的尼","http://i0.hdslb.com/bfs/face/adf670fbdf21ba67078fb528acfef93d472213f3.jpg@24w_24h.webp","游民星空官方","单机游戏","4323","93","28","https://i0.hdslb.com/bfs/article/73fff1e03168fcb73b82cf6e213d4a514c044513.jpg@860w_482h.webp"],["任天堂的中国实验：一场持续15年的中文化运动","10 月 19 日，任天堂的新主机 Switch 更新了 4.0.0 系统。在新系统中，有一个连官方更新日志都没有提及的小更新：虽然系统界面还是以英文显示，但 Switch 游戏已经可以直接调用系统字","http://i1.hdslb.com/bfs/face/727cbf99eea3d72fc5797cec37e6765699bddc4f.jpg@24w_24h.webp","文巾志","单机游戏","5360","81","58","https://i0.hdslb.com/bfs/article/73b2dff1bb0a60bac92506d7cc471c9c8afaf170.png@860w_482h.webp"],["各种帅气的立绘姿势教程，一个也不能少！","想要让角色显得更加生动，为他配上动作是一个非常重要的要素。相比还是有很多人并不擅长动作方面的作画。例如：想要挑战具有跃动感的动作，但是却无法在脑海中完成动作的设想。因为没有自信所以一只画站立的样子。使","http://i2.hdslb.com/bfs/face/a21754c347a784bdd6c6aa89dcb299e90f97c2cb.jpg@24w_24h.webp","生活就是画画画","绘画","3万","567","75","https://i0.hdslb.com/bfs/article/203529f972b0426dc614fd35f5a6dca21eed15d0.jpg@860w_482h.webp"],["浅谈SNK镇社之宝——《饿狼传说》系列","公元1991年11月25日，一款全新的对战型格斗游戏发售，那就是《饿狼传说》。该作品问世后大获好评，以此为契机，SNK决定将这个游戏做成一个系列，于是后来被称为【SNK镇社之宝】的《饿狼传说》系列诞生","http://i0.hdslb.com/bfs/face/90b7b81a39e95b77f943932edba2b1811a182a2a.jpg@24w_24h.webp","斬空飛翔","单机游戏","1.2万","76","46","https://i0.hdslb.com/bfs/article/fdbd1f07cc048cdd41302c2625a07c657f57d2ad.jpg@860w_482h.webp"],["NHK imagine-nation《泥鲸之子们在沙丘上歌唱》专题节目","作者：钻石封面：NHK imagine-nation《泥鲸之子们在沙丘上歌唱》专题NHK WORLD TV面向海外观众介绍日本流行文化的英语节目《imagine-nation》最近为10月新番《泥鲸之","http://i2.hdslb.com/bfs/face/876bf5dfa8c583acb5f8689fc923077f6a2aba23.jpg@24w_24h.webp","AnimeTamashii","番剧","1254","31","8","https://i0.hdslb.com/bfs/article/578d5c8b371e8cd91b3c70033ee72af1844b53d0.jpg@860w_482h.webp"],["“人设确立”——声优养成之道","在当今的动画业界，声优无疑占据着举足轻重的位置；伴随着ACG逐渐走进大众文化的视野，有越来越多的小伙伴开始了解并关注这些幕后的“声音”工作者。一部动画的声优阵容，早已成为能够影响该动画关","http://i2.hdslb.com/bfs/face/daa1cddea96bfc8f1f2be713caa86bcca2a7f114.jpg@24w_24h.webp","RicoGarden","番剧","8866","184","75","https://i0.hdslb.com/bfs/article/69d0dffd09a12a9a562508fbbbdde8f094e0583b.jpg@860w_482h.webp"],["史上最难的游戏？——游戏业界都市传说系列","本文作者：水无月不知道各位玩家玩过的游戏当中，哪一款最难呢？是《黑暗之魂》？是《忍者龙剑传》？还是诸如《时空幻境》这样的高难解谜游戏？特别是在诸多独立游戏当中也有着许多难度设计变态的范例。不过，其实在","http://i1.hdslb.com/bfs/face/d0fab290836eb4bafdc8fb3d15a795706416fd2a.jpg@24w_24h.webp","游戏机实用技术视频","单机游戏","3.4万","155","75","https://i0.hdslb.com/bfs/article/325322d70f2048ca70b5e257e4ac443a0def5b59.jpg@860w_482h.webp"],["社会你猫哥，喵狠话不多！","你们家通常谁是老大？我猜已经结婚生子的家庭肯定是孩子最大，不是总说小祖宗小祖宗的吗？！如果没结婚也没生孩子却养了猫的话...喵星人总自诩为“朕”，可想而知在它们心里人类的地位是如何不值一提，微小到简直","http://i1.hdslb.com/bfs/face/64328e638ea4b832b86800cad8cf1e11c7d18e6a.jpg@24w_24h.webp","李喜喵","动物圈","3687","14","8","https://i0.hdslb.com/bfs/article/25c281723af62bff5e338220ba8b154a99124ac4.jpg@860w_482h.webp"],["美国人也拍抗日神剧，影后怒演中国农村妇女","抗战一直是国内影视剧市场经久不衰的题材，各种段子各种套路都翻来覆去的使用过。有徒手撕鬼子、裤裆藏雷这类创新的抗战方式。也有《红色》《战长沙》这类优质剧集。这些大家都看得多了，但是你们可能不知道73年前","http://i1.hdslb.com/bfs/face/df31d588cfec788417f0bb0e9aab364856edd26a.jpg@24w_24h.webp","影视怪蜀黍","影视","3万","508","97","https://i0.hdslb.com/bfs/article/30e8d08f8d0600e584752342b924aedfcfe57357.jpg@860w_482h.webp"],["一次征集美少女画作的活动，又被这些画师大佬们玩坏了","说实话，我已经被“折磨”得见怪不怪了。文 / 雨上由于绘画爱好者和各位专业画师的娱乐精神，现在时不时就会流行一些特色话题的绘画活动。这类活动由于参与门槛不高，主题轻松有趣，又对提升曝光度有很大的帮助，","http://i0.hdslb.com/bfs/face/203c33d00cc63ad2156754b8dae273e060c2e561.jpg@24w_24h.webp","游研社","绘画","9703","280","75","https://i0.hdslb.com/bfs/article/1ed0c2e81bf967ac8bbbc990d4ef3f49e3ba7335.jpg@860w_482h.webp"],["寓意纷飞。我们仍未知道那天所看见的花的名字","我们总是在注意错过太多，却不注意自己拥有多少。在我们走过的季节里，路旁盛开的花朵也在不断变化，那个季节盛开的花是叫什么来着？轻轻摇曳着，一碰会微微刺痛，靠近一闻，隐约有股青涩的阳光的气息。那气息渐渐地","http://i2.hdslb.com/bfs/face/df83b867c71475f84109d9c0666eabb11bd7a4fb.jpg@24w_24h.webp","_子夏","番剧","1671","78","8","https://i0.hdslb.com/bfs/article/6c4286dd07a429229f55e17759ac540d547fbf4d.jpg@860w_482h.webp"],["泰晤士河畔的“世外桃源”，身心放松的最佳场所！","欢迎光临DOCO热纪录一年365天陪你悦享真实世界‍现代生活的忙碌和繁琐，让人们开始向往田园牧歌式的生活，同时也期望能找到一个真正的“世外桃源”。对于中国人来说，最深刻的关于“世外桃源”的印象源于陶渊","http://i1.hdslb.com/bfs/face/a48d2262adfc6fb8920d18e55310c29fc6fdd55a.jpg@24w_24h.webp","DOCO热纪录","其他","573","6","0","https://i0.hdslb.com/bfs/article/6118d5533032b911604412a91454f79789a94a4f.jpg@860w_482h.webp"],["少女终末旅行第④话：3230年的世界还有多少故事？","严格来说，《少女终末旅行》其实是比较黑暗的，虽然这并不一定是作者的本意，但实际上确实如此，我们看这部漫画，自然主要目的也并不是看两个萝莉来回跑，而是在这一切背后隐藏的信息和嘲讽。不可否认，《少女终末旅","http://i2.hdslb.com/bfs/face/5d85b57a4979819061a040835c82e94e9f7a05b8.jpg@24w_24h.webp","桔梗花下","番剧","1633","50","8","https://i0.hdslb.com/bfs/article/fdff758e52339f9f41553599347ea4ce76ce23a2.jpg@860w_482h.webp"],["航空发动机原理不过如此！看完这几张图，你就能懂","航空发动机主要有三种类型：活塞式航空发动机，燃气涡轮发动机，冲压发动机。航空发动机的发展经历了活塞式发动机，喷气时代的活塞式发动机，燃气涡轮发动机，涡喷/涡扇发动机，涡桨/涡轴发动机的时代，本文主要用","http://i2.hdslb.com/bfs/face/d500ad7157f67cf585098ff6ff1679d835d2fb63.jpg@24w_24h.webp","庚号二","趣味科普","1597","45","20","https://i0.hdslb.com/bfs/article/3b6da0d335838425527c06900b0d9f72721d1f85.png@860w_482h.webp"]]
SpecialColumnRecommend = SpecialColumnRecommend.map((v)=>({
  id: uuid(),
  title: v[0],
  info: v[1],
  faceImg: v[2],
  nikeName: v[3],
  type: v[4],
  view: v[5],
  like : v[6],
  reply : v[7],
  cover : v[8],
}));

// 模拟数据延迟
function delay(data){
  return (callback) => {
    setTimeout(()=>{
      callback(JSON.stringify(data))
    }, 1.5 * 1000)
  }
}

export default {
  VideoRecommend: delay(VideoRecommend),
  SpecialColumnBanners: delay(SpecialColumnBanners),
  SpecialColumnRecommend: delay(SpecialColumnRecommend),
}

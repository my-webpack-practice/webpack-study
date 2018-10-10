(function() {
  /* 接口地址 */
  // ./data/channels.json
  // https://mini.eastday.com/toutiaoh5/data/channels.json
  // channelsUrl = 'https://mini.eastday.com/toutiaoh5/data/channels.json', // 新闻频道类别
  /* ------------------------------------------------------------ */
  // var refreshUrl = 'http://106.75.35.140/toutiao_h5/RefreshJP'; // 刷新数据(测试)
  // var pullDownUrl = 'http://106.75.35.140/toutiao_h5/pulldown'; // 下拉加载(测试)
  // var pullUpUrl = 'http://106.75.35.140/toutiao_h5/NextJP'; // 上拉加载(测试)
  var refreshUrl = 'https://toutiao.eastday.com/toutiao_h5/RefreshJP'; // 刷新数据
  var pullDownUrl = 'https://toutiao.eastday.com/toutiao_h5/pulldown'; // 下拉加载
  var pullUpUrl = 'https://toutiao.eastday.com/toutiao_h5/NextJP'; // 上拉加载
  /* ------------------------------------------------------------ */
  // var sportsLiveUrl = 'http://172.18.250.87:8380/dfsports_h5/forttzhibo';   // 直播测试服
  // var sportsLiveUrl = 'https://dfsports_h5.dftoutiao.com/dfsports_h5/forttzhibo'; // 直播正式服
  var sportsListUrl = 'https://dfsports_h5.dftoutiao.com/dfsports_h5/forttsslb'; // 体育列表接口
  var sportsMatchUrl =
    'https://dfsports_h5.dftoutiao.com/dfsports_h5/forttzhibo02'; // 体育比赛数
  /* ------------------------------------------------------------ */
  // var videoUrl = 'http://123.59.62.164/toutiao_h5/videopool';       // 视频接口(测试)
  // var videoUrl = 'https://toutiao.eastday.com/toutiao_h5/videopool'; // 视频接口(正式)
  // var videoUrl = 'http://106.75.73.203/videoh5/getvideos';       // 视频接口(测试)
  var videoUrl = 'https://vdh5socket.dftoutiao.com/videoh5/getvideos'; // 视频接口(测试)
  /* ------------------------------------------------------------ */
  // var picUrl = 'http://123.59.62.164/toutiao_h5/picnewspool';     // 图片频道接口(测试)
  var picUrl = 'https://toutiao.eastday.com/toutiao_h5/picnewspool'; // 图片频道接口(正式)
  /* ------------------------------------------------------------ */
  // var autoUrl = 'http://123.59.142.180/toutiao_h5_qiche/newspool';     // 汽车频道接口(测试)
  var autoUrl = 'https://autoapi.dftoutiao.com/toutiao_h5_qiche/newspool'; // 汽车接口(正式)
  /* ------------------------------------------------------------ */
  var positionUrl = 'https://position.dftoutiao.com/position/get'; // 获取用户位置
  // var uidUrl = 'https://wapactlog.dftoutiao.com/getwapdata/getuid';            // 获取uid
  // var moodUrl = 'https://toutiao.eastday.com/pjson/zan'; // 美女点赞（点踩）
  /* ------------------------------------------------------------ */
  // var voteUpUrl = 'http://106.75.3.64/NewsOperate/praise_h5'; // 点赞测试接口
  var voteUpUrl = 'https://clkup.dftoutiao.com/NewsOperate/praise_h5'; // 点赞正式接口
  // var voteDownUrl = 'http://106.75.3.64/NewsOperate/trample_h5'; // 点踩测试接口
  var voteDownUrl = 'https://clkup.dftoutiao.com/NewsOperate/trample_h5'; // 点踩正式接口
  /* ------------------------------------------------------------ */
  // var duanziUrl = 'http://123.59.62.164/jokeswap/riffapi';    // 段子测试接口
  var duanziUrl = 'https://dzwap.dftoutiao.com/jokeswap/riffapi'; // 段子正式接口
  /* ------------------------------------------------------------ */
  // var logUrl = 'http://123.59.60.170/getwapdata/data';             // 日志（操作统计）(测试)
  var logUrl = 'https://wapactlog.dftoutiao.com/getwapdata/data'; // 日志（操作统计）
  // var onlineUrl = 'http://123.59.60.170/online/online';            // 在线统计(测试)
  var onlineUrl = 'https://ot.dftoutiao.com/online/online'; // 在线统计(统计stats = statistics)
  // var showAdLogUrl = 'http://123.59.60.170/getwapdata/advshow';    // 推广信息show统计接口(测试)
  var showAdLogUrl = 'https://wapactlog.dftoutiao.com/getwapdata/advshow'; // 推广信息show统计接口
  // var clickAdLogUrl = 'http://106.75.73.203/getwapdata/partner';       // 推广信息show统计接口(测试)
  var clickAdLogUrl = 'https://wapactlog.dftoutiao.com/getwapdata/partner'; // 推广信息click统计接口
  /* ------------------------------------------------------------ */
  // var $bannerDiv = '';
  // var bannerUrl = 'http://106.75.98.65/partner/banner';
  // var bannerUrl = 'https://softwords.dftoutiao.com/partner/banner';
  // var dspUrl = 'http://106.75.98.65/partner/list'; // dsp广告测试接口
  var dspUrl = 'https://softwords.dftoutiao.com/partner/list'; // dsp广告接口
  // var unionUrl = 'http://test-lianmeng.dftoutiao.com/union/api'; // 联盟广告api接口
  var unionUrl = 'https://lianmeng.dftoutiao.com/union/api'; // 联盟广告api接口
  /* ------------------------------------------------------------ */

  /* DOM节点 */
  var $body = $('body');
  var $content = $('#J_content');
  var $newsList = $('#J_news_list');
  var $refresh = $('#J_refresh');
  var $newsTabsWrap = $('#J_top_menu');
  // var $loation = $('#J_location');
  var $videoCtgWrap = null;
  var $picCtgWrap = null;
  var $autoNavWrap = null;
  // $sportsLiveWrap = null;

  /* 状态 */
  var sportLoadFlag = true;
  var newsloading = false;
  var praiseTrampleFlag = true;
  var startPos = 0; // 滑动开始位置
  var touchDistance = 0; // 滑动距离
  var touchDistanceFlag = true; // 滑动方向判断标志
  var isSwipeDown = false; // 确定向下滑
  var isTop = false; // 顶部判断标志
  var $pullDownLoading = null; // 下拉动画
  var TOUCH_DISTANCE = 150; // 规定滑动加载距离
  var pullDownLoadDataTimer = null; // 规定滑动 加载距离
  var isThanAndroid4 = true; // 安卓4.0以上
  var isFirstPage = false; // 第一屏（即前20条新闻）加载的是渠道对应的百度广告ID
  var isHttps = window.location.protocol.indexOf('https') >= 0 || false; // 判断是否是https协议

  /* 变量 */
  // var onlineTimer = null;
  // var newsTypeArr_all = [];
  // var newsTypeArr_special = [];
  var tempVideoCtg = [];
  var currentVideoCtg = {};
  var shownVideoCtg = [];

  /* 常量 */
  var wsCache = new WebStorageCache(); // 本地存储对象
  var apptypeid = GLOBAL.Util.getQueryString('apptypeid') || null;
  // 不要视频的频道
  var deleteVideoChannel = {
    qid10030: 1,
    qid10029: 1
  };
  var videoCtg = [
    {
      name: '推荐',
      value: 'vtuijian'
    },
    {
      name: '搞笑',
      value: 'vgaoxiao'
    },
    {
      name: '拍客',
      value: 'vpaike'
    },
    {
      name: '资讯',
      value: 'vzixun'
    },
    {
      name: '纪录片',
      value: 'vjilupian'
    },
    {
      name: '公益',
      value: 'vgongyi'
    },
    {
      name: '体育',
      value: 'vtiyu'
    },
    {
      name: '汽车',
      value: 'vqiche'
    },
    {
      name: '科技',
      value: 'vkeji'
    },
    {
      name: '财经',
      value: 'vcaijing'
    },
    {
      name: '娱乐',
      value: 'vyule'
    },
    {
      name: '原创',
      value: 'vyuanchuang'
    },
    {
      name: '旅游',
      value: 'vlvyou'
    },
    {
      name: '时尚',
      value: 'vshishang'
    },
    {
      name: '亲子',
      value: 'vqinzi'
    },
    {
      name: '教育',
      value: 'vjiaoyu'
    },
    {
      name: '游戏',
      value: 'vyouxi'
    },
    {
      name: '生活',
      value: 'vshenghuo'
    }
  ];
  // 180802新需求：视频频道二级导航改版(部分渠道使用)
  var newVideoCtgQids = {
    aishangbrowser: 1,
    ccllq: 1
  };
  var newVideoCtg = [
    {
      name: '头条',
      value: 'vtuijian'
    },
    {
      name: '娱乐',
      value: 'vyule'
    },
    {
      name: '搞笑',
      value: 'vgaoxiao'
    },
    {
      name: '体育',
      value: 'vtiyu'
    },
    {
      name: '汽车',
      value: 'vqiche'
    },
    {
      name: '原创',
      value: 'vyuanchuang'
    },
    {
      name: '拍客',
      value: 'vpaike'
    },
    {
      name: '资讯',
      value: 'vzixun'
    },
    {
      name: '纪录片',
      value: 'vjilupian'
    },
    {
      name: '公益',
      value: 'vgongyi'
    },
    {
      name: '科技',
      value: 'vkeji'
    },
    {
      name: '财经',
      value: 'vcaijing'
    },
    {
      name: '旅游',
      value: 'vlvyou'
    },
    {
      name: '时尚',
      value: 'vshishang'
    },
    {
      name: '亲子',
      value: 'vqinzi'
    },
    {
      name: '教育',
      value: 'vjiaoyu'
    },
    {
      name: '游戏',
      value: 'vyouxi'
    },
    {
      name: '生活',
      value: 'vshenghuo'
    }
  ];
  var picCtg = [
    {
      name: '博览',
      value: 'pbolan'
    },
    {
      name: '搞笑',
      value: 'pgaoxiao'
    },
    // { name: '美女', value: 'pmeinv' },
    {
      name: '军事',
      value: 'pjunshi'
    },
    {
      name: '娱乐',
      value: 'pyule'
    },
    {
      name: '体育',
      value: 'ptiyu'
    },
    {
      name: '历史',
      value: 'plishi'
    },
    {
      name: '汽车',
      value: 'pqiche'
    },
    {
      name: '自然',
      value: 'pziran'
    },
    {
      name: '时尚',
      value: 'pshishang'
    },
    {
      name: '科技',
      value: 'pkeji'
    },
    {
      name: '游戏',
      value: 'pyouxi'
    },
    {
      name: '家居',
      value: 'pjiaju'
    },
    {
      name: '旅游',
      value: 'plvyou'
    }
  ];
  var autoCtg = [
    {
      name: '推荐',
      value: 'qiche'
    },
    {
      name: 'SUV',
      value: '34000002'
    },
    {
      name: '新车',
      value: '34000003'
    },
    {
      name: '用车',
      value: '34000004'
    },
    {
      name: '导购',
      value: '34000001'
    },
    {
      name: '新能源',
      value: '34000007'
    }
  ];

  /* 广告 */
  var tempGgForPullUp = GLOBAL.Et.ggForPullUp.concat(); // 绝对不能直接赋值
  var tempGgForPullDown = GLOBAL.Et.ggForPullDown.concat(); // 绝对不能直接赋值
  var tempGgForDsp = GLOBAL.Et.ggForDsp.concat(); // 绝对不能直接赋值
  var tempTxtGgForPullUp = GLOBAL.Et.txtGgForPullUp.concat(); // 文字链广告（上拉公用）绝对不能直接赋值
  var tempTxtGgForPullDown = GLOBAL.Et.txtGgForPullDown.concat(); //  文字链广告（下拉公用）绝对不能直接赋值
  var ggItemArr = [];
  var ggWrapIdArr = [];
  var wfkyGgWrapIdArr = [];
  var wfkyGgId = [
    'rmevuuijo',
    'lgypoocfp',
    'niarqqeha',
    'pkctssgjh',
    'snfwvvjmp',
    'mhzqppdiq',
    'pkctssglg',
    'uphyxxlqx',
    'niarqqekr',
    'pkctssgmc',
    'rmevuuioj',
    'togxwwkqp',
    'uphyxxlrr',
    'niarqqeqo',
    'pkctssgsz',
    'rmevuuiui',
    'uphyxxlxq',
    'wrjazznzz',
    'fasjiixgg',
    'hculkkzir',
    'lgypoodmf',
    'idvmllams',
    'kfxonncob',
    'ojbsrrgsl',
    'idvmllasm',
    'lgypoodvc',
    'ojbsrrgyk',
    'qlduttiat',
    'kfxonncxu',
    'lgypoodyy',
    'ojbsrrgbi',
    'jewnmmbak',
    'lgypoodcv',
    'ojbsrrgfg',
    'rmevuujio',
    'snfwvvkjv',
    'lgypooddp',
    'ojbsrrggf',
    'rmevuujjn',
    'mhzqppegq',
    'ojbsrrgib',
    'snfwvvkmo',
    'qldutthkk',
    'mhzqppdgw',
    'snfwvvjkv',
    'lgypoochm',
    'qldutthmi',
    'snfwvvjoo',
    'kfxonnclc',
    'ojbsrrgpr',
    'jewnmmbnw',
    'lgypoodpd',
    'niarqqfrj',
    'pkctsshts',
    'kfxonncux',
    'mhzqppewe',
    'pkctsshzm',
    'jewnmmbwn',
    'niarqqfaf',
    'rmevuujeu',
    'kfxonncbo',
    'niarqqfee',
    'pkctsshgj',
    'kfxonnccl',
    'niarqqffa',
    'pkctsshhh',
    'qlduttiik',
    'lgypoodfm',
    'niarqqfhx',
    'qlduttiki',
    'pkctsshlc',
    'snfwvvkom',
    'niarqqfko',
    'ojbsrrgls',
    'qlduttind',
    'togxwwlqn',
    'wrjazzotz',
    'ojbsrrgrp',
    'qlduttita',
    'togxwwlwl',
    'uphyxxmxo',
    'xskbaapaa',
    'gbtkjjahh',
    'idvmllcjs',
    'jewnmmdkw',
    'hculkkbil',
    'wrjazzozt',
    'snfwvvkvj',
    'pkctsshst',
    'vqizyynss',
    'snfwvvkpk',
    'pkctsshmz',
    'vqizyynry',
    'rmevuujnj',
    'ojbsrrgky',
    'niarqqfjr',
    'togxwwlnq',
    'rmevuujll',
    'togxwwllw',
    'mhzqppeew',
    'qlduttihm',
    'mhzqppedz',
    'qlduttidn',
    'mhzqppezd',
    'idvmllavj',
    'niarqqfxh',
    'hculkkzri',
    'mhzqppeqg',
    'hculkkzll',
    'jewnmmbka',
    'gbtkjjyhk',
    'vqizyymys',
    'snfwvvjvk',
    'ojbsrrfrs',
    'vqizyymsy',
    'snfwvvjpm',
    'qldutthnh',
    'ojbsrrfly',
    'mhzqppdjn',
    'togxwwkpq',
    'rmevuuinl',
    'niarqqejx',
    'togxwwknw',
    'ojbsrrfif',
    'kfxonnbel'
  ];
  var qid10313 = [
    'ojbfrykbl',
    'kfxbnugbx',
    'ojbfrykfk',
    'idvzlseaj',
    'kfxbnugcu',
    'mhzdpwied',
    'pkcgszlhl',
    'jewamtfdk',
    'lgycovhfv',
    'pkcgszljj',
    'rmeiubnlo',
    'lgycovhhp',
    'niaeqxjja',
    'rmeiubnnn',
    'lgycovhim'
  ];
  var qid10313Gg = qid10313.concat();
  var dspIndex = 1;

  /* 功能渠道限制(黑名单或白名单) */
  // var bannerQids = ['ioswechat', 'qqwechat'];
  var noLocationQids = ['jinlisun', 'jlsp', 'qid00351', 'qid00359', 'qid02631'];
  var hasDuanziQids = [
    'null',
    'ioswechat',
    'baiducom',
    'qid00904',
    'qid00901',
    'qid00099'
  ];
  var newNewsQids = [
    'vivobrowser',
    'ccllq',
    'jinlisun',
    'xtzm',
    '2345yuki',
    'qid10000',
    'ucllqsun'
  ]; // 18-05-09 新闻接口改版 部分渠道启用
  var testQids = {
    // 测试16:9样式的渠道 后端返回4:3图片 前端裁剪
    // 'qid10286': 1,
    // 'jinlisun': 1,
    // 'vivobrowser': 1
  };
  var imgGifQid = {
    ccllq: 1,
    jinlisun: 1,
    vivobrowser: 1
  };
  // 定制频道顺序  推荐 娱乐 视频 笑话 社会 体育
  var channelStyleQids = {
    vivobrowser: 1,
    ucllqsun: 1,
    jinlisun: 1,
    ccllq: 1
  };
  // 推荐 视频 娱乐 国际 社会 历史
  var channelOrderQids = {
    weimibrowser02: 1
  };
  var channelPositionQids = {
    jinlisun: 1,
    ccllq: 1
  };
  var newsTimeoutQids = {
    jinlisun: 1,
    vivobrowser: 1
  };
  // 18.07.24 首屏和上拉广告位 从 3 5 8 13 18 ===>>> 2 4 7 12 17
  var ggPullupPos = [1, 3, 6, 11, 16];
  // 18.07.24 下拉广告位 从 1 6 ===>>> 2 7
  var ggPulldownPos = [1, 6];
  // var newThreeQids = {
  //     'qid10272': 1,
  //     'qid10358': 1
  // };
  try {
    // android 4.0以下不放视频
    if (
      navigator.userAgent.indexOf('Android') >= 0 &&
      Number(GLOBAL.Util.getOsType().split(' ')[1]) < 4.1
    ) {
      isThanAndroid4 = false;
    }
  } catch (e) {
    console.error(e);
  }

  /**
   * 东方头条对象
   */
  function EastNews() {
    var ct = GLOBAL.Util.getQueryString('type');
    var currentNewsType =
      ct || wsCache.get('current_newstype_' + GLOBAL.Et.qid);
    this.newsType =
      currentNewsType || (GLOBAL.Et.qid === 'qid10768' ? 'shipin' : 'toutiao'); // 新闻频道类别
    this.vnewsType = wsCache.get('vnewstype_' + GLOBAL.Et.qid) || 'vtuijian'; // 默认：推荐
    this.pnewsType = wsCache.get('pnewstype_' + GLOBAL.Et.qid) || 'pbolan'; // 默认：博览
    this.anewsType = wsCache.get('anewstype_' + GLOBAL.Et.qid) || 'qiche'; // 默认：推荐
    this.readUrl = '';
    this.userId = GLOBAL.Et.uid || Cookies.get('user_id'); // 用户ID
    this.idx = 0; // 链接索引
    this.pgNum = 1; // 页码
    this.pulldown_pgNum =
      Number(
        wsCache.get('pulldown_pgnum_' + this.newsType + '_' + GLOBAL.Et.qid)
      ) || -1; // 下拉页码
    this.pulldown_idx = 0; // 下拉链接索引
    this.pulldown_num = 0; // 下拉计数
    this.pulldown_total_num = 1; // 下拉累计计数(dsp参数 缓存24h 每天重置)
    this.refresh_num = 0; // 全量刷新计数(dsp参数 缓存24h 每天重置)
    this.qid =
      GLOBAL.Et.qid || GLOBAL.Util.getQueryString('qid') || Cookies.get('qid'); // 渠道ID
    this.pullUpFlag = true; // 上拉加载数据(防止操作过快多次加载)
    this.startKey = {};
    this.endKey = {};
    this.tagsKey = {};
    this.osType = GLOBAL.Util.getOsType();
    this.browserType = GLOBAL.Util.getBrowserType();
    this.readUrlNum = {};
  }

  EastNews.prototype = {
    /**
     * 初始化
     */
    init: function() {
      var scope = this;

      scope.addRedPoint();

      /* 获取缓存中的已阅读新闻 */
      scope.readUrl = wsCache.get('read_url_all_' + GLOBAL.Et.qid);
      if (!scope.readUrl) {
        scope.readUrl = '';
      }

      /* 加载新闻频道类别 */
      scope.initChannels(function() {
        var $newsTabs = $newsTabsWrap.children('a');

        /* 保存所有新闻类别到数组 */
        // $newsTabs.each(function () {
        //     var $this = $(this);
        //     var type = $this.data('type');
        //     // newsTypeArr_all.push(type);
        //     if (type === 'meinv' || type === 'nuanwen') {
        //         newsTypeArr_special.push(type);
        //     }
        // });

        // 动态插入频道
        scope.insertChannels($newsTabs);

        if (!noLocationQids.contains(GLOBAL.Et.qid)) {
          /* 设置当前位置信息 */
          if (wsCache.get('cur_location')) {
            scope.updateDomLocation(wsCache.get('cur_location'));
          } else {
            scope.location();
          }
        }

        /* 还原到上次浏览的类别 */
        $newsTabsWrap.children('a').each(function() {
          var $this = $(this);
          if ($this.data('type') === scope.newsType) {
            setTimeout(function() {
              scope.scrollTo($this, false);
            }, 50);
            return false;
          }
        });
      });

      /* 首次加载数据 */
      scope.refreshData(function() {
        // scope.highlightPraiseTrample();
        scope.highlightZanCai();
      });

      // 记录一次日志（如果是从内页跳转过来的，不需要记录日志，因为内页已经记录过了。）
      // if (Cookies.get('FROM_DETAILS_MORE_NEWS') !== '1') {
      scope.addLog({
        fr: GLOBAL.Util.getQueryString('fr'),
        ntype: GLOBAL.Util.getQueryString('newstype'),
        to: GLOBAL.Util.getQueryString('type')
      });
      // 删除内页跳首页标志
      //     Cookies.remove('FROM_DETAILS_MORE_NEWS', { path: '/', domain: 'eastday.com' });
      // }

      /* 注册下拉事件 */
      scope.pullDown();

      /* 频道类别（菜单）点击事件 */
      $newsTabsWrap.on('click', 'a', function() {
        qid10313Gg = qid10313.concat();
        wfkyGgId = [
          'rmevuuijo',
          'lgypoocfp',
          'niarqqeha',
          'pkctssgjh',
          'snfwvvjmp',
          'mhzqppdiq',
          'pkctssglg',
          'uphyxxlqx',
          'niarqqekr',
          'pkctssgmc',
          'rmevuuioj',
          'togxwwkqp',
          'uphyxxlrr',
          'niarqqeqo',
          'pkctssgsz',
          'rmevuuiui',
          'uphyxxlxq',
          'wrjazznzz',
          'fasjiixgg',
          'hculkkzir',
          'lgypoodmf',
          'idvmllams',
          'kfxonncob',
          'ojbsrrgsl',
          'idvmllasm',
          'lgypoodvc',
          'ojbsrrgyk',
          'qlduttiat',
          'kfxonncxu',
          'lgypoodyy',
          'ojbsrrgbi',
          'jewnmmbak',
          'lgypoodcv',
          'ojbsrrgfg',
          'rmevuujio',
          'snfwvvkjv',
          'lgypooddp',
          'ojbsrrggf',
          'rmevuujjn',
          'mhzqppegq',
          'ojbsrrgib',
          'snfwvvkmo',
          'qldutthkk',
          'mhzqppdgw',
          'snfwvvjkv',
          'lgypoochm',
          'qldutthmi',
          'snfwvvjoo',
          'kfxonnclc',
          'ojbsrrgpr',
          'jewnmmbnw',
          'lgypoodpd',
          'niarqqfrj',
          'pkctsshts',
          'kfxonncux',
          'mhzqppewe',
          'pkctsshzm',
          'jewnmmbwn',
          'niarqqfaf',
          'rmevuujeu',
          'kfxonncbo',
          'niarqqfee',
          'pkctsshgj',
          'kfxonnccl',
          'niarqqffa',
          'pkctsshhh',
          'qlduttiik',
          'lgypoodfm',
          'niarqqfhx',
          'qlduttiki',
          'pkctsshlc',
          'snfwvvkom',
          'niarqqfko',
          'ojbsrrgls',
          'qlduttind',
          'togxwwlqn',
          'wrjazzotz',
          'ojbsrrgrp',
          'qlduttita',
          'togxwwlwl',
          'uphyxxmxo',
          'xskbaapaa',
          'gbtkjjahh',
          'idvmllcjs',
          'jewnmmdkw',
          'hculkkbil',
          'wrjazzozt',
          'snfwvvkvj',
          'pkctsshst',
          'vqizyynss',
          'snfwvvkpk',
          'pkctsshmz',
          'vqizyynry',
          'rmevuujnj',
          'ojbsrrgky',
          'niarqqfjr',
          'togxwwlnq',
          'rmevuujll',
          'togxwwllw',
          'mhzqppeew',
          'qlduttihm',
          'mhzqppedz',
          'qlduttidn',
          'mhzqppezd',
          'idvmllavj',
          'niarqqfxh',
          'hculkkzri',
          'mhzqppeqg',
          'hculkkzll',
          'jewnmmbka',
          'gbtkjjyhk',
          'vqizyymys',
          'snfwvvjvk',
          'ojbsrrfrs',
          'vqizyymsy',
          'snfwvvjpm',
          'qldutthnh',
          'ojbsrrfly',
          'mhzqppdjn',
          'togxwwkpq',
          'rmevuuinl',
          'niarqqejx',
          'togxwwknw',
          'ojbsrrfif',
          'kfxonnbel'
        ];
        var $this = $(this);
        var type = $this.data('type');
        if ($this.hasClass('active') || newsloading) {
          return;
        }
        newsloading = true;
        // 使当前频道分类显示在导航菜单中间
        scope.scrollTo($this, false);
        // 存储上一个新闻类别和当前新闻类别
        wsCache.set('prev_newstype_' + GLOBAL.Et.qid, scope.newsType, {
          exp: 40 * 60
        });
        wsCache.set('current_newstype_' + GLOBAL.Et.qid, type, {
          exp: 40 * 60
        });
        // 更新当前频道
        scope.newsType = type;
        // 刷新数据
        scope.refreshData(function() {
          newsloading = false;
          // scope.highlightPraiseTrample();
          scope.highlightZanCai();
        });
        // 日志收集
        scope.addLog();
      });

      /* 页面滚动监听（当滑到底部时，加载下一页数据。） */
      $(window).on('scroll', function() {
        var scrollTop = GLOBAL.Util.getScrollTop();
        var loadingOT = Number($('#J_loading').offset().top) - 100;
        var cHeight = GLOBAL.Util.getClientHeight();
        var timer = null;
        // 缓存当前类别新闻的浏览位置（缓存40分钟）,延迟缓存
        timer && clearTimeout(timer); // jshint ignore:line
        timer = setTimeout(function() {
          wsCache.set(
            'news_pos_' + scope.newsType + '_' + GLOBAL.Et.qid,
            scrollTop,
            {
              exp: 40 * 60
            }
          );
        }, 200);

        // 上拉加载数据(pullUpFlag标志 防止操作过快多次加载)
        if (
          loadingOT >= cHeight &&
          scrollTop + cHeight >= loadingOT &&
          scope.pullUpFlag
        ) {
          scope.pullUpLoadData();
        }

        // 视频出了屏幕暂停
        // $newsList.find('video').each(function() {
        //     var $video = $(this),
        //         videoTop = $video.offset().top,
        //         scrollTop = $(window).scrollTop();
        //     if (scrollTop >= videoTop || videoTop - scrollTop >= $(window).height() - $video.height()) {
        //         if (!this.paused) {
        //             this.pause();
        //         }
        //     }
        // });
      });

      /* 刷新数据 */
      $refresh.on('click', function() {
        if ($refresh.hasClass('active')) {
          return;
        }
        scope.reloadData();
      });

      /* 记录阅读过的新闻 */
      $newsList.on('click', '.news-item > a', function(e) {
        e.preventDefault();
        // 用户点击新闻的时候，更新可视区域的广告
        try {
          if (GLOBAL.Et.qidForUpdateGg.contains(GLOBAL.Et.qid)) {
            window.sessionStorage.setItem('_DFTT_CLKNEWS_FLAG', 1);
            scope.filterGgItem();
            // console.log('ggItemArr::', ggItemArr)
          }
        } catch (e) {
          console.error(e);
        }
        var $this = $(this);
        var $imgs = $this.find('img');
        var imgLen = $imgs.length;
        var imgSrcArr = [];
        var href = $this.attr('href');
        var url = href.split('?')[0];
        // var urlNum = '';
        var urlNum = url.substring(
          url.lastIndexOf('/') + 1,
          url.indexOf('.html')
        );
        scope.cacheReadUrl(urlNum, $this.data('type'), $this.data('subtype'));
        // 获取图片数据
        $imgs.each(function() {
          if (imgLen > 1) {
            imgSrcArr.push($(this).attr('src'));
          } else {
            imgSrcArr.push($(this).attr('data-lbimg'));
          }
        });
        // url过滤:href, urlNum, $this.data('type')
        scope.filterUrl({
          href: href,
          urlNum: urlNum,
          type: $this.data('type'),
          imgSrcArr: imgSrcArr
        });
      });

      /* 已浏览位置，点击刷新事件 */
      $body.on('click', '.J-read-position', function() {
        $(window).scrollTop(0);
        // 刷新按钮动画效果
        scope.changeRefreshStatus();
        // 调用下拉加载数据接口
        scope.pullDownLoadData();
      });

      // 推广新闻点击委托事件
      $body.on('click', '.J-promote-news', function(e) {
        e.preventDefault();
        var $this = $(this),
          advUrl = $this.attr('href') || $this.attr('data-url'),
          advId = $this.attr('data-advid'),
          adpgnum = $this.attr('data-adpgnum'),
          adposition = $this.attr('data-adposition'),
          clickbackurl = $this.attr('data-clickbackurl') || 'null',
          platform = $this.attr('data-platform'),
          accurateurl = $this.attr('data-accurateurl') || 'null';
        scope.sendPromoteNewslog({
          advUrl: advUrl,
          advId: advId,
          accurateurl: encodeURIComponent(accurateurl),
          adpgnum: adpgnum,
          adposition: adposition,
          platform: platform,
          clickbackurl: encodeURIComponent(clickbackurl),
          callback: function() {
            window.location.href = advUrl;
          }
        });
      });

      // dsp广告点击委托事件
      $body.on('click', '.J-dsp-news', function(e) {
        e.preventDefault();
        var $this = $(this),
          advUrl = $this.attr('data-advurl') || $this.attr('href') || '',
          isclickbackurl = $this.attr('data-isclickbackurl'),
          clickbackurl = $this.attr('data-clickbackurl'),
          cbu = clickbackurl && clickbackurl.split('@@'), // 和后台约定的以@@分割url，如需修改请和后端开发协商
          cbuLen = cbu.length,
          ggImg = null,
          count = 0,
          i = 0;
        if (Number(isclickbackurl) === 1) {
          for (i = 0; i < cbuLen; i++) {
            ggImg = new Image(); // eslint-disable-line
            ggImg.src = cbu[i];
            var timer = setTimeout(function() {
              window.location.href = advUrl;
            }, 1500);
            ggImg.onerror = function() {
              // jshint ignore:line
              count++;
              if (count === cbuLen) {
                clearTimeout(timer);
                window.location.href = advUrl;
              }
            };
            ggImg.onload = function() {
              // jshint ignore:line
              count++;
              if (count === cbuLen) {
                clearTimeout(timer);
                window.location.href = advUrl;
              }
            };
          }
        } else {
          window.location.href = advUrl;
        }
      });

      // 视频中分类推荐点击事件委托
      $body.on('click', '.J-video-ctg', function() {
        scope.vnewsType = $(this).attr('data-type');
        // 缓存当前视频de类别（缓存40分钟）
        wsCache.set('vnewstype_' + GLOBAL.Et.qid, scope.vnewsType, {
          exp: 40 * 60
        });
        // 清空缓存的类别数组
        shownVideoCtg = [];
        // 清空内容
        $newsList.empty();
        scope.reloadData();
        var advId = $(this).attr('data-advid');
        advId &&
          scope.sendPromoteNewslog({
            advId: advId
          });
      });

      try {
        // 初始化美女赞踩事件
        // scope.initMeinvEvent();
        // 初始化段子赞踩事件
        scope.initDuanziEvent();
      } catch (e) {
        console.error(e);
      }

      /* 在线日志 */
      // scope.addOnlineLog();
      // onlineTimer = setInterval(function() {
      //     scope.addOnlineLog();
      // }, 10000);
      // 10分钟之后不再上传online日志
      // setTimeout(function() {
      //     clearInterval(onlineTimer);
      // }, 10 * 60 * 1000);

      var ggTimer = setInterval(function() {
        if ($('.J-gg-item').length > 0) {
          clearInterval(ggTimer);
          try {
            if (GLOBAL.Et.qidForUpdateGg.contains(GLOBAL.Et.qid)) {
              // 过滤可视范围内的广告
              scope.filterGgItem();
              if (window.sessionStorage.getItem('_DFTT_CLKNEWS_FLAG')) {
                // 更新可视区域的广告
                scope.updateVisibleGg();
              }
            }
          } catch (e) {
            console.error('【CUSTOM】filterGgItem has error: ', e);
          }
        }
      }, 50);

      /* 新闻进屏日志 */
      if (newNewsQids.contains(GLOBAL.Et.qid)) {
        $(window).on('scroll', function() {
          scope.registerInview();
        });
      }

      // 联盟api 进屏日志
      try {
        $(window).on('scroll', function() {
          var $uniDomArr = $('.J-uni-news');
          $uniDomArr.each(function() {
            var $target = $(this);
            var wH = $(window).height();
            var tH = $target.offset().top;
            var sH = $(window).scrollTop();
            var hasView = Number($target.attr('data-hasview')) || 0;
            if (tH - sH + 16 < wH) {
              if (hasView !== 1) {
                var isclientreport = $target.attr('data-isclientreport');
                // 第三方日志
                if (Number(isclientreport) === 1) {
                  // 客户端上报
                  var showrep = $target.attr('data-showrep').split('\t');
                  scope.sendUnionLog({
                    arr: showrep
                  });
                }
                // 后端日志
                scope.sendAllianceLog({
                  url: $target.attr('data-reporturl'),
                  advid: $target.attr('data-advid'),
                  to: $target.attr('data-advurl'),
                  idx: $target.attr('data-idx'),
                  pgnum: $target.attr('data-pgnum'),
                  reporturl: $target.attr('data-showrep'),
                  reqtype: '1',
                  isclientreport: isclientreport
                });
                $target.attr('data-hasview', '1');
              }
            }
          });
        });
      } catch (e) {
        console.error(e);
      }

      // 联盟api 点击日志
      try {
        // 手指按下 宏替换
        $body.on('touchstart', '.J-uni-news', function(e) {
          var $this = $(this);
          var href = $this.attr('data-advurl');
          var x = e.touches[0].pageX - 15;
          var y = e.touches[0].pageY - $this.offset().top;
          if (href.indexOf('__DOWN_X__') > -1) {
            href = href.replace('__DOWN_X__', x);
          }
          if (href.indexOf('__DOWN_Y__') > -1) {
            href = href.replace('__DOWN_Y__', y);
          }
          $this.attr('data-advurl', href);
        });
        // 手指抬起 宏替换
        $body.on('touchend', '.J-uni-news', function(e) {
          var $this = $(this);
          var href = $this.attr('data-advurl');
          var x = e.changedTouches[0].pageX - 15;
          var y = e.changedTouches[0].pageY - $this.offset().top;
          if (href.indexOf('__UP_X__') > -1) {
            href = href.replace('__UP_X__', x);
          }
          if (href.indexOf('__UP_Y__') > -1) {
            href = href.replace('__UP_Y__', y);
          }
          $this.attr('data-advurl', href);
        });
        $body.on('click', '.J-uni-news', function(e) {
          var $this = $(this);
          var isclientreport = Number($this.attr('data-isclientreport'));
          if (isclientreport === 1) {
            var clickrep = $this.attr('data-clickrep').split('\t');
            scope.sendUnionLog({
              arr: clickrep,
              url: $this.attr('data-advurl')
            });
          }
          scope.sendAllianceLog({
            url: $this.attr('data-reporturl'),
            advid: $this.attr('data-advid'),
            advUrl: $this.attr('data-advurl'),
            to: $this.attr('data-advurl'),
            idx: $this.attr('data-idx'),
            pgnum: $this.attr('data-pgnum'),
            reporturl: $this.attr('data-clickrep'),
            reqtype: '2',
            isclientreport: isclientreport
          });
        });
      } catch (e) {
        console.error(e);
      }

      $('body').on('click', '.J-error-link', function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.parent().remove();
        $('#J_loading').show();
        var funcName = $this.attr('data-func');
        scope[funcName]();
      });
    },

    addRedPoint: function() {
      var scope = this;
      // if (!wsCache.get('DFTT_ISSHOW_REDPOINT')) {
      //     $('.menu-more').append('<div class="red-point"></div>');
      // }
      $('.menu-more .more-btn').click(function(e) {
        e.preventDefault();
        // wsCache.set('DFTT_ISSHOW_REDPOINT', 1);
        var href = $(this).attr('href');
        scope.sendPromoteNewslog({
          advId: 'typeguanli_H5',
          advUrl: href,
          callback: function() {
            window.location.href = href;
          }
        });
      });
    },

    /**
     * 获取处理后的标签字符串
     * @param  {[string]} titledisplay 后端接口返回的标签对照表
     * @return {[string]} tagstr
     */
    getTagStr: function(titledisplay) {
      titledisplay = titledisplay.split('').reverse();
      for (var k = 0, len = titledisplay.length; k < len; k++) {
        titledisplay[k] = Number(titledisplay[k]);
      }
      var tagStr = '';
      var isZd = titledisplay[0]; // 是否是置顶
      var isHot = titledisplay[1]; // 是否是热门
      var isRec = titledisplay[2]; // 是否是推荐
      var isZt = titledisplay[3]; // 是否是专题
      var isVideo = titledisplay[4]; // 是否是视频
      var isYc = titledisplay[5]; // 是否是原创
      var isPartner = titledisplay[6]; // 是否是广告
      var isNuanwen = titledisplay[7]; // 是否是暖文

      isZd && (tagStr += '<i class="tag tag-zd">顶</i>');
      isHot && (tagStr += '<i class="tag tag-hot">热门</i>');
      isRec && (tagStr += '<i class="tag tag-rec">推荐</i>');
      isZt && (tagStr += '<i class="tag tag-zt">专题</i>');
      isVideo && (tagStr += '<i class="tag tag-video">视频</i>');
      isYc && (tagStr += '<i class="tag tag-yc">原创</i>');
      isPartner && (tagStr += '<i class="tag tag-gg">广告</i>');
      isNuanwen && (tagStr += '<i class="tag tag-nuanwen">暖文</i>');
      return tagStr;
    },

    /**
     * 替换图片协议头
     * @param {Array} imgSrc
     */
    replaceImg: function(imgSrc) {
      if (isHttps) {
        imgSrc = imgSrc.replace('http:', 'https:');
      }
      return imgSrc;
    },

    /**
     * 地域过滤
     * @param  {[type]}   areaArr     需过滤的城市、省份数组
     * @param  {Function} callback    回调方法
     * @return {[type]}               true：表示在过滤的城市中；false：表示不在过滤的城市中。
     */
    filterArea: function(areaArr, callback) {
      var status = false;
      if (!areaArr || !areaArr.length || !(areaArr instanceof Array)) {
        callback && callback(status);
        return;
      }
      areaArr.push('中国');
      var curProvname = Cookies.get('cur_prov_name') || null;
      var curCityname = Cookies.get('cur_city_name') || null;
      if (curCityname && curProvname) {
        if (areaArr.contains(curProvname) || areaArr.contains(curCityname)) {
          status = true;
        }
        callback && callback(status);
      } else {
        $.ajax({
          url: 'https://position.dftoutiao.com/position/get',
          dataType: 'jsonp',
          jsonp: 'jsonpcallback',
          success: function(res) {
            curProvname = res.position ? res.position.provname : null;
            curCityname = res.position ? res.position.cityname : null;
            if (
              areaArr.contains(curProvname) ||
              areaArr.contains(curCityname)
            ) {
              status = true;
            }
            callback && callback(status);
            Cookies.set('cur_prov_name', curProvname, {
              expires: 1 / 3,
              path: '/',
              domain: 'eastday.com'
            });
            Cookies.set('cur_city_name', curCityname, {
              expires: 1 / 3,
              path: '/',
              domain: 'eastday.com'
            });
          },
          error: function(jqXHR, textStatus) {
            // 地理位置获取失败就认为是特殊城市
            status = true;
            callback && callback(status);
            console.error(textStatus);
          }
        });
      }
    },

    /**
     * 发送活动广告日志（show）
     * @param  {[type]} advId  广告ID
     * @param  {[type]} advUrl 广告URL
     * @return {[type]}        [description]
     */
    sendAdShowLog: function(options) {
      var scope = this,
        pixel = GLOBAL.Util.getPixel();
      $.ajax({
        url: showAdLogUrl,
        dataType: 'jsonp',
        data: {
          qid: scope.qid || 'null',
          uid: scope.userId || 'null',
          loginid: 'null',
          softtype: 'news',
          softname: 'eastday_wapnews',
          newstype: 'ad',
          from: 'null',
          advurl: encodeURIComponent(options.advUrl || 'null'),
          os_type: scope.osType || 'null',
          browser_type: scope.browserType || 'null',
          fr_url: 'null',
          pixel: pixel.w + '*' + pixel.h,
          ime: 'null',
          adv: options.advId || 'null'
        },
        jsonp: 'jsonpcallback',
        success: function() {}
      });
    },

    /**
     * 发送活动广告日志（click）
     * @param  {[type]} advUrl url
     * @param  {[type]} advId  id
     * @param  {[type]} accurateurl  后台统计用（新增的）
     * @param  {[type]} adpgnum  页码（新增的）
     * @param  {[type]} adposition  广告位置（新增的）
     * @return {[type]}        [description]
     */
    sendPromoteNewslog: function(options) {
      var scope = this,
        pixel = GLOBAL.Util.getPixel();
      $.ajax({
        url: clickAdLogUrl,
        dataType: 'jsonp',
        data: {
          qid: scope.qid || 'null',
          uid: scope.userId || 'null',
          loginid: 'null',
          softtype: 'news',
          softname: 'eastday_wapnews',
          newstype: 'ad',
          pgtype: 'list', // 区分dsp广告是位于哪个页面
          accurateurl: options.accurateurl || 'null',
          adpgnum: options.adpgnum || 'null', // 页码
          adposition: options.adposition || 'null', // 位置
          platform: options.platform || 'null', // 平台
          clickbackurl: options.clickbackurl || 'null',
          from: 'null',
          to: options.advUrl || 'null',
          os_type: scope.osType || 'null',
          browser_type: scope.browserType || 'null',
          pixel: pixel.w + '*' + pixel.h,
          ime: 'null',
          fr_url: GLOBAL.Util.getUrlNoParams() || 'null',
          adv: options.advId || 'null'
        },
        jsonp: 'jsonpcallback',
        timeout: 2000,
        success: function() {},
        complete: function() {
          options.callback && options.callback(); // jshint ignore:line
        }
      });
    },

    /**
     * 注册进屏日志事件
     */
    registerInview: function() {
      var scope = this;
      var $newsDomArr = $('.J-news');
      $newsDomArr.each(function() {
        var $target = $(this);
        var wH = $(window).height();
        var tH = $target.offset().top;
        var lh = $target.height() / 2;
        var sH = $(window).scrollTop();
        var hasView = Number($target.attr('data-hasview')) || 0;
        var url = $target.attr('href').split('?')[0];
        var urlNum = url.substring(
          url.lastIndexOf('/') + 1,
          url.indexOf('.html')
        );
        if (tH - sH + lh < wH) {
          if (hasView !== 1) {
            // 只记录一次进屏日志
            // console.log('send inview log..');
            scope.sendInviewLog($target);
            $target.attr('data-hasview', '1');
            scope.readUrlNum[urlNum] = 1;
            wsCache.set(
              'read_urlnum_' + scope.newsType + '_' + GLOBAL.Et.qid,
              JSON.stringify(scope.readUrlNum)
            ); // 记录已经看到的新闻
            wsCache.set(
              'news_' + scope.newsType + '_' + GLOBAL.Et.qid,
              $newsList.html(),
              {
                exp: 40 * 60
              }
            );
          }
        }
      });
    },

    /**
     * 发送进屏日志(新闻)
     */
    sendInviewLog: function($target) {
      var scope = this;
      var pixel = GLOBAL.Util.getPixel();
      var data = {
        softtype: 'news', // 软件类型
        softname: 'eastday_wapnews', // 软件名
        qid: GLOBAL.Et.qid,
        uid: GLOBAL.Et.uid,
        loginid:
          GLOBAL.Util.getQueryString('ttaccid') ||
          GLOBAL.Util.getQueryString('ac') ||
          'null',
        os: GLOBAL.Util.getOsType(),
        browser_type: GLOBAL.Util.getBrowserType(),
        pixel: pixel.w + '*' + pixel.h, // 客户端分辨率
        pointid: '44', // 打点ID 每一个上报进屏展现的模块都有一个独立的id
        pointdesc: scope.newsType === 'shipin' ? 'videolist' : 'newslist', // 打点位置的描述 newslist-新闻信息流；videolist-视频信息流；search-搜索信息流；subscribe-订阅；collection-收藏
        mainparam: scope.newsType, // 信息流上报请求接口是的type参数
        batcheid: $target.attr('data-batcheid') || 'null', // 批次号，接口返回
        idx: $target.attr('data-idx') || 'null', // 当前新闻属于本批次第几条（从1开始算）
        pgnum: $target.attr('data-pgnum') || 'null', // 当前批次位于信息流第几页
        type: $target.attr('data-type') || 'null', // 主类别
        subtype: $target.attr('data-subtype') || 'null', // 副类别
        url: $target.attr('href').split('?')[0] || 'null',
        hotnews: $target.attr('data-hotnews') || 'null', // 是否是热点
        recommendtype: $target.attr('data-recommendtype') || 'null', // 推荐类别
        recommendurl: $target.attr('data-recommendurl') || 'null', // 推荐源url
        suptop: $target.attr('data-suptop') || 'null', // 接口返回的suptop属性
        tagId: $target.attr('data-tagId') || 'null', // 接口返回的tagId属性
        ispictures: $target.attr('data-ispicnews') || 'null' // 大图属性
      };
      $.ajax({
        url: 'https://wapinscr.dftoutiao.com/appintoscreenshow/wapshow',
        data: data,
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        success: function() {}
      });
    },

    /**
     * 检查广告是否在可视范围
     */
    filterGgItem: function() {
      var scope = this;
      var $ggItems = $('.J-gg-item');
      ggItemArr = [];
      $ggItems.each(function() {
        if (scope.isVisible($(this))) {
          ggItemArr.push(this);
        }
      });
      // ggItemArr.forEach(function (item) {
      //     console.log('item:', item)
      // })
    },

    /**
     * 判断广告是否在规定的可视范围内（超过50%的内容在可视区域即认为在可视范围）。
     * @param {object} $ggDom 广告容器DOM - zepto对象
     * @returns {Boolean} true：在可视范围；false：不在可视范围。
     */
    isVisible: function($ggDom) {
      // console.log($ggDom)
      var screenHeight = window.screen.height;
      var scrollTop = $(window).scrollTop();
      var ggOffsetTop = $ggDom.offset().top;
      var ggHeight = 138; // 广告高度
      // 判断是否在屏幕可视区域的逻辑（超过50%的内容在可视区域即认为在可视范围）
      if (
        screenHeight + scrollTop - ggOffsetTop > ggHeight / 2 &&
        scrollTop - ggOffsetTop < ggHeight / 2
      ) {
        return true;
      }
      return false;
    },

    /**
     * 更新可视区域广告
     */
    updateVisibleGg: function() {
      var scope = this;
      ggItemArr.forEach(function(ggItem) {
        var pgnum = $(ggItem).attr('data-pgnum');
        var index = 0;
        var ggIndex = 'd0'; // 自定义的广告ID数组索引
        var ggArr = []; // 存储当前页码的广告DOM
        if (parseInt(pgnum) < 0) {
          ggIndex = 'd' + pgnum;
        } else if (parseInt(pgnum) > 0) {
          ggIndex = 'u' + pgnum;
        }
        $('.J-gg-item').each(function() {
          if ($(this).attr('data-pgnum') === pgnum) {
            ggArr.push(this);
          }
        });
        ggArr.forEach(function(item, i) {
          if (ggItem == item) {
            index = i;
          }
        });
        if (
          GLOBAL.Et.ggForUpdate[ggIndex] &&
          GLOBAL.Et.ggForUpdate[ggIndex][index]
        ) {
          $(ggItem)
            .html('')
            .attr('data-ggid', GLOBAL.Et.ggForUpdate[ggIndex][index]);
          scope.loadBaiduGg({
            $dom: $(ggItem),
            id: GLOBAL.Et.ggForUpdate[ggIndex][index]
          });
        }
      });
    },

    /**
     * 动态插入频道（视频、段子等）
     */
    insertChannels: function($newsTabs) {
      var spcQid = ['2345yuki'];
      // 插入“视频”频道
      if (hasDuanziQids.contains(GLOBAL.Et.qid)) {
        $newsTabs.eq(0).after('<a data-type="duanzi">段子</a>');
      }
      if (channelPositionQids[GLOBAL.Et.qid]) {
        $newsTabs.eq(1).after('<a data-type="shipin">视频</a>');
      } else if (GLOBAL.Et.qid === 'qid10768') {
        $newsTabs.eq(0).before('<a data-type="shipin">视频</a>');
      } else if (
        GLOBAL.Et.qid !== 'qid02631' &&
        !spcQid.contains(GLOBAL.Et.qid) &&
        !deleteVideoChannel[GLOBAL.Et.qid]
      ) {
        $newsTabs.eq(0).after('<a data-type="shipin">视频</a>');
      }
      $newsTabs.each(function() {
        var $this = $(this);
        if (spcQid.contains(GLOBAL.Et.qid)) {
          if ($this.attr('data-type') === 'tiyu') {
            $this.after('<a data-type="shipin">视频</a>');
          }
          if ($this.attr('data-type') === 'wzry') {
            $this.after('<a data-type="tupian">图片</a>');
          }
        } else if (
          channelStyleQids[GLOBAL.Et.qid] ||
          channelOrderQids[GLOBAL.Et.qid]
        ) {
          if ($this.attr('data-type') === 'tiyu') {
            // 插入“图片”频道（体育频道后面）
            $this.after('<a data-type="tupian">图片</a>');
          }
        } else {
          if ($this.attr('data-type') === 'qiche') {
            // 插入“图片”频道（娱乐频道后面）
            $this.after('<a data-type="tupian">图片</a>');
          }
        }
        // if ($this.attr('data-type') === 'yule' && GLOBAL.Et.qid === 'null') {
        // scope.filterArea(['北京', '上海', '天津', '重庆', '哈尔', '长春', '沈阳', '呼和浩特', '石家庄', '乌鲁木齐', '兰州', '西宁', '西安', '银川', '郑州', '济南', '太原', '合肥', '长沙', '武汉', '南京', '成都', '贵阳', '昆明', '南宁', '拉萨', '杭州', '南昌', '广州', '福州', '台北', '海口', '香港', '澳门 '], function (isSpecialCity) {
        // if (!isSpecialCity) {
        // $this.after('<a class="nopdlog" data-type="worldcup" href="">世界杯</a>');
        // var worldAdvid = GLOBAL.Et.qid + '_fifa_open';
        // var worldUrl = 'https://msports.eastday.com/theme/worldcup.html?qid=qid10602';
        // $('.nopdlog').click(function (e) {
        //     e.preventDefault();
        //     scope.sendAdShowLog(advId: worldAdvid, advUrl: worldUrl);
        // });
        // if (scope.newsType === 'worldcup') {
        //     $('#J_top_menu a[data-type="worldcup"]').addClass('active').siblings().removeClass('active');
        // };
        // }
        // });
        // }
        // if ($this.attr('data-type') === 'wzry') {
        //     // 插入“段子”频道（王者荣耀频道后面）
        //     if (hasDuanziQids.contains(GLOBAL.Et.qid)) {
        //         $this.after('<a data-type="duanzi">段子</a>');
        //     }
        // }
      });
    },

    /**
     * 赞/踩点击事件<美女频道>
     * @param  {Zepto Object} $target 当前dom对象
     * @param  {String} colname 参数
     * @param  {Number} ctg     类别（1：赞，-1：踩）
     * @return {[type]}         [description]
     */
    // ptClick: function ($target, colname, ctg) {
    //     var scope = this;
    //     var rk = $target.data('rowkey');
    //     var st = scope.getPraiseTrampleStatus(rk);
    //     // 已经赞过、踩过就不允许再操作了
    //     if (st === 1) {
    //         window.alert('您已经赞过了！');
    //         return;
    //     } else if (st === -1) {
    //         window.alert('您已经踩过了！');
    //         return;
    //     }
    //     // 防止连点
    //     if (!praiseTrampleFlag) {
    //         return;
    //     }
    //     praiseTrampleFlag = false;
    //     $target.addClass('active').text(Number($target.text()) + 1);
    //     $.ajax({
    //         url: moodUrl,
    //         dataType: 'jsonp',
    //         data: {
    //             'colname': colname, // 'z0000'、'zd0000'
    //             'rowkey': rk,
    //             'praisecnt': 1
    //         },
    //         jsonp: 'jsonpcallback',
    //         success: function () {
    //             scope.cachePraiseTrampleRowkey(ctg, rk);
    //             // 缓存当前类别加载的新闻（缓存40分钟）
    //             wsCache.set('news_' + scope.newsType + '_' + GLOBAL.Et.qid, $newsList.html(), {
    //                 exp: 40 * 60
    //             });
    //         },
    //         error: function (e) {
    //             console.error(e);
    //         },
    //         complete: function () {
    //             praiseTrampleFlag = true;
    //         }
    //     });
    // },

    /**
     * 初始化美女赞踩事件
     */
    // initMeinvEvent: function () {
    //     var scope = this;
    //     /* 赞 */
    //     $newsList.on('click', '.J-good', function () {
    //         scope.ptClick($(this), 'z0000', 1);
    //     });
    //     /* 踩 */
    //     $newsList.on('click', '.J-bad', function () {
    //         scope.ptClick($(this), 'zd0000', -1);
    //     });
    // },

    /**
     * 初始化段子赞踩事件
     */
    initDuanziEvent: function() {
      var scope = this;
      /* 赞 */
      $newsList.on('click', '.J-duanzi-good', function() {
        scope.sendVoteLog({
          $target: $(this),
          zan: true
        });
      });
      /* 踩 */
      $newsList.on('click', '.J-duanzi-bad', function() {
        scope.sendVoteLog({
          $target: $(this),
          zan: false
        });
      });
    },

    /**
     * 发送赞踩记录日志
     */
    sendVoteLog: function(options) {
      options = options || {};
      var scope = this;
      var voteUrl = options.zan ? voteUpUrl : voteDownUrl;
      var ctg = options.zan ? 1 : -1;
      var $target = options.$target;
      var url = $target.attr('data-url');
      var htmlname = scope.getHtmlName(url);
      var st = scope.getZanCaiStatus(htmlname);
      // 已经赞过、踩过就不允许再操作了
      if (st === 1) {
        window.alert('您已经赞过了！');
        return;
      } else if (st === -1) {
        window.alert('您已经踩过了！');
        return;
      }
      // 防止连点
      if (!praiseTrampleFlag) {
        return;
      }
      praiseTrampleFlag = false;
      $.ajax({
        url: voteUrl,
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        data: {
          qid: GLOBAL.Et.qid || 'null',
          uid: GLOBAL.Et.uid || 'null',
          loginid: 'null',
          softtype: 'news',
          softname: 'eastday_wapnews',
          newstype: scope.newsType || 'null',
          from: wsCache.get('prev_newstype_' + GLOBAL.Et.qid) || 'null',
          url: url || 'null',
          os: GLOBAL.Util.getOsType() || 'null',
          browser_type: GLOBAL.Util.getBrowserType() || 'null',
          pixel: window.screen.width + '*' + window.screen.height,
          idx: scope.idx || 'null',
          ishot: options.ishot || 'null',
          fr_url: GLOBAL.Util.getReferrer() || 'null',
          recommendtype: options.recommendtype || 'null',
          pgnum: scope.pgNum || 'null',
          suptop: options.suptop || 'null'
        },
        success: function() {
          $target.addClass('active').text(Number($target.text()) + 1);
          scope.cacheZanCaiHtmlName(ctg, htmlname);
          // 缓存当前类别加载的新闻（缓存40分钟）
          wsCache.set(
            'news_' + scope.newsType + '_' + GLOBAL.Et.qid,
            $newsList.html(),
            {
              exp: 40 * 60
            }
          );
        },
        complete: function() {
          praiseTrampleFlag = true;
        }
      });
    },

    /**
     * 加载文字链广告
     * @param {Number} i  广告位置
     * @param {Object} $ggWrap  广告容器
     * @param {Boolean} isAppend append还是prepend
     */
    loadTxtGg: function(i, $ggWrap, isAppend) {
      var scope = this;
      if (i !== 2 && i !== 7) {
        return;
      }
      var ggObj, ggId;
      if (isFirstPage) {
        ggObj = GLOBAL.Et.txtGg[GLOBAL.Et.qid] || GLOBAL.Et.txtGg['null'];
        if (i === 2) {
          ggId = ggObj.li;
        } else if (i === 7) {
          ggId = ggObj.li2;
        }
      } else {
        if (isAppend) {
          // 上拉加载
          ggId = tempTxtGgForPullUp.shift();
          // 缓存已经显示的广告ID（主要是因为新闻会作缓存，所以广告ID也需要分频道缓存，而且缓存时间必须一致）
          ggId && scope.cacheTxtGgIdForPullUp(ggId);
        } else {
          // 下拉叠加
          ggId = tempTxtGgForPullDown.shift();
          // 缓存已经显示的广告ID（主要是因为新闻会作缓存，所以广告ID也需要分频道缓存，而且缓存时间必须一致）
          ggId && scope.cacheTxtGgIdForPullDown(ggId);
        }
      }
      if (ggId) {
        var $txtGgWrap = $(
          '<div class="txt-gg" style="padding: 0.12rem 0; border-bottom: 7px solid #f4f4f4;"></div>'
        );
        if (isAppend) {
          $ggWrap.append($txtGgWrap);
        } else {
          $ggWrap.prepend($txtGgWrap);
        }
        $txtGgWrap.append('<div class="gg-txt" id="' + ggId + '"></div>');
        GLOBAL.Util.getScript(
          '//df666.pzhttaax.cn/' + ggId + '.js',
          function() {},
          $('#' + ggId)[0]
        );
      }
    },

    /**
     * url过滤
     * 目前主要针对jinlisun渠道+s推荐的新闻做处理
     * @param  {[type]} url 实际跳转的目标url
     * @return {[type]}     [description]
     */
    filterUrl: function(options) {
      var qids = ['baiducom', 'qid00099'],
        href = options.href;
      try {
        if (qids.contains(GLOBAL.Et.qid)) {
          var urlNum = options.urlNum,
            type = options.type,
            imgSrcArr = options.imgSrcArr,
            imgLen = imgSrcArr.length,
            imgSrc = '',
            urlParams = href.split('?')[1],
            hasShown = Cookies.get('DFTT_RECOMMENDTYPE_S'),
            hasShownNews = Cookies.get('DFTT_RECOMMENDNEWS_HASSHOWN'),
            isRecommendS = href.indexOf('recommendtype=s') !== -1; // s推荐的新闻
          // 将图片拼接成字符串
          if (imgLen > 1) {
            imgSrc += encodeURIComponent(
              imgSrcArr[0] + '@@' + imgSrcArr[1] + '@@' + imgSrcArr[2]
            );
          } else {
            imgSrc = encodeURIComponent(imgSrcArr[0]);
          }
          // 如果一小时内看到的是同一篇s推荐的新闻，仍然使用新模板样式。
          if (hasShownNews === urlNum || (!hasShown && isRecommendS)) {
            // window.location.href = 'independent/app_promote.html?urlNum=' + urlNum + '&newsType=' + type + '&imgsrc=' + imgSrc + '&' + urlParams;
            window.location.href =
              'https://mini.eastday.com/toutiaoh5/independent/app_promote.html?urlNum=' +
              urlNum +
              '&newsType=' +
              type +
              '&imgsrc=' +
              imgSrc +
              '&' +
              urlParams;
            // 缓存当前页面的url（html文件名） - 时效1小时
            Cookies.set('DFTT_RECOMMENDNEWS_HASSHOWN', urlNum, {
              expires: 1 / 24,
              path: '/',
              domain: 'eastday.com'
            });
          } else {
            window.location.href = href;
          }
        } else {
          window.location.href = href;
        }
      } catch (e) {
        console.error(e);
        window.location.href = href;
      }
    },

    /**
     * 重新加载数据
     */
    reloadData: function(callback) {
      var scope = this;
      scope.changeRefreshStatus();
      // 还原缓存内容
      wsCache.delete('news_pos_' + scope.newsType + '_' + GLOBAL.Et.qid); // jshint ignore:line
      wsCache.delete('news_' + scope.newsType + '_' + GLOBAL.Et.qid); // jshint ignore:line
      wsCache.set('pulldown_pgnum_' + scope.newsType + '_' + GLOBAL.Et.qid, 0, {
        exp: 24 * 3600
      });
      scope.refreshData(function() {
        callback && callback();
        // scope.highlightPraiseTrample();
        scope.highlightZanCai();
      });
    },

    /**
     * 刷新按钮动画效果
     * @return {[type]} [description]
     */
    changeRefreshStatus: function() {
      $refresh.addClass('active');
      setTimeout(function() {
        $refresh.removeClass('active');
      }, 700);
    },

    /**
     * 初始化频道类别
     * @return {[type]} [description]
     */
    initChannels: function(callback) {
      var scope = this,
        myChannels = wsCache.get('CUSTOM_CHANNELS_170906')
          ? wsCache.get('news_channels')
          : null;
      if (!myChannels) {
        scope.generateChannelTabs(scope.dealWithChannels(GLOBAL.Et.qid));
      } else {
        scope.generateChannelTabs(myChannels);
      }
      callback && callback(); // jshint ignore:line
    },

    /**
     * 处理频道数据（部分渠道需屏蔽个别频道）
     * @return {[type]} [description]
     */
    dealWithChannels: function(qid) {
      var ch = [];
      if (channelStyleQids[qid]) {
        ch = [
          {
            name: 'toutiao',
            value: '推荐'
          },
          {
            name: 'yule',
            value: '娱乐'
          },
          {
            name: 'xiaohua',
            value: '笑话'
          },
          {
            name: 'shehui',
            value: '社会'
          },
          {
            name: 'tiyu',
            value: '体育'
          },
          {
            name: 'wzry',
            value: '王者荣耀'
          },
          // { 'name': 'meinv', 'value': '美女' },
          {
            name: 'jiankang',
            value: '健康'
          },
          {
            name: 'caijing',
            value: '财经'
          },
          {
            name: 'keji',
            value: '科技'
          },
          {
            name: 'junshi',
            value: '军事'
          },
          {
            name: 'guoji',
            value: '国际'
          },
          {
            name: 'lishi',
            value: '人文'
          },
          {
            name: 'qiche',
            value: '汽车'
          },
          {
            name: 'xingzuo',
            value: '星座'
          },
          {
            name: 'nba',
            value: 'NBA'
          },
          {
            name: 'shishang',
            value: '时尚'
          },
          {
            name: 'youxi',
            value: '游戏'
          },
          {
            name: 'guonei',
            value: '国内'
          },
          {
            name: 'kexue',
            value: '科学'
          },
          {
            name: 'hulianwang',
            value: '互联网'
          },
          {
            name: 'shuma',
            value: '数码'
          },
          {
            name: 'baojian',
            value: '保健'
          },
          {
            name: 'jianshen',
            value: '健身'
          },
          {
            name: 'yinshi',
            value: '饮食'
          },
          {
            name: 'jianfei',
            value: '减肥'
          },
          {
            name: 'cba',
            value: 'CBA'
          },
          {
            name: 'dejia',
            value: '德甲'
          },
          {
            name: 'yijia',
            value: '意甲'
          },
          {
            name: 'wangqiu',
            value: '网球'
          },
          {
            name: 'zhongchao',
            value: '中超'
          },
          {
            name: 'xijia',
            value: '西甲'
          },
          {
            name: 'yingchao',
            value: '英超'
          }
        ];
      } else if (channelOrderQids[qid]) {
        ch = [
          {
            name: 'toutiao',
            value: '推荐'
          },
          {
            name: 'yule',
            value: '娱乐'
          },
          {
            name: 'guoji',
            value: '国际'
          },
          {
            name: 'shehui',
            value: '社会'
          },
          {
            name: 'lishi',
            value: '人文'
          },
          {
            name: 'tiyu',
            value: '体育'
          },
          {
            name: 'wzry',
            value: '王者荣耀'
          },
          {
            name: 'jiankang',
            value: '健康'
          },
          {
            name: 'caijing',
            value: '财经'
          },
          {
            name: 'keji',
            value: '科技'
          },
          {
            name: 'junshi',
            value: '军事'
          },
          {
            name: 'xiaohua',
            value: '笑话'
          },
          {
            name: 'qiche',
            value: '汽车'
          },
          {
            name: 'xingzuo',
            value: '星座'
          },
          {
            name: 'nba',
            value: 'NBA'
          },
          {
            name: 'shishang',
            value: '时尚'
          },
          {
            name: 'youxi',
            value: '游戏'
          },
          {
            name: 'guonei',
            value: '国内'
          },
          {
            name: 'kexue',
            value: '科学'
          },
          {
            name: 'hulianwang',
            value: '互联网'
          },
          {
            name: 'shuma',
            value: '数码'
          },
          {
            name: 'baojian',
            value: '保健'
          },
          {
            name: 'jianshen',
            value: '健身'
          },
          {
            name: 'yinshi',
            value: '饮食'
          },
          {
            name: 'jianfei',
            value: '减肥'
          },
          {
            name: 'cba',
            value: 'CBA'
          },
          {
            name: 'dejia',
            value: '德甲'
          },
          {
            name: 'yijia',
            value: '意甲'
          },
          {
            name: 'wangqiu',
            value: '网球'
          },
          {
            name: 'zhongchao',
            value: '中超'
          },
          {
            name: 'xijia',
            value: '西甲'
          },
          {
            name: 'yingchao',
            value: '英超'
          }
        ];
      } else {
        ch = [
          {
            name: 'toutiao',
            value: '推荐'
          },
          {
            name: 'yule',
            value: '娱乐'
          },
          {
            name: 'shehui',
            value: '社会'
          },
          {
            name: 'jiankang',
            value: '健康'
          },
          {
            name: 'guoji',
            value: '国际'
          },
          {
            name: 'junshi',
            value: '军事'
          },
          {
            name: 'xiaohua',
            value: '笑话'
          },
          {
            name: 'qiche',
            value: '汽车'
          },
          {
            name: 'tiyu',
            value: '体育'
          },
          {
            name: 'wzry',
            value: '王者荣耀'
          },
          {
            name: 'caijing',
            value: '财经'
          },
          {
            name: 'keji',
            value: '科技'
          },
          {
            name: 'lishi',
            value: '人文'
          },
          {
            name: 'xingzuo',
            value: '星座'
          },
          {
            name: 'nba',
            value: 'NBA'
          },
          {
            name: 'shishang',
            value: '时尚'
          },
          {
            name: 'youxi',
            value: '游戏'
          },
          {
            name: 'guonei',
            value: '国内'
          },
          {
            name: 'kexue',
            value: '科学'
          },
          {
            name: 'hulianwang',
            value: '互联网'
          },
          {
            name: 'shuma',
            value: '数码'
          },
          {
            name: 'baojian',
            value: '保健'
          },
          {
            name: 'jianshen',
            value: '健身'
          },
          {
            name: 'yinshi',
            value: '饮食'
          },
          {
            name: 'jianfei',
            value: '减肥'
          },
          {
            name: 'cba',
            value: 'CBA'
          },
          {
            name: 'dejia',
            value: '德甲'
          },
          {
            name: 'yijia',
            value: '意甲'
          },
          {
            name: 'wangqiu',
            value: '网球'
          },
          {
            name: 'zhongchao',
            value: '中超'
          },
          {
            name: 'xijia',
            value: '西甲'
          },
          {
            name: 'yingchao',
            value: '英超'
          }
        ];
      }
      var chBrother = [
        {
          name: 'qipai',
          value: '棋牌'
        },
        {
          name: 'gaoerfu',
          value: '高尔夫'
        },
        {
          name: 'paiqiu',
          value: '排球'
        },
        {
          name: 'yumaoqiu',
          value: '羽毛球'
        },
        {
          name: 'jiaju',
          value: '家居'
        },
        {
          name: 'waihui',
          value: '外汇'
        },
        {
          name: 'baoxian',
          value: '保险'
        },
        {
          name: 'budongchan',
          value: '不动产'
        },
        {
          name: 'huangjin',
          value: '黄金'
        },
        {
          name: 'xinsanban',
          value: '新三板'
        },
        {
          name: 'gupiao',
          value: '股票'
        },
        {
          name: 'qihuo',
          value: '期货'
        },
        {
          name: 'jijin',
          value: '基金'
        },
        {
          name: 'licai',
          value: '理财'
        },
        {
          name: 'dianying',
          value: '电影'
        },
        {
          name: 'dianshi',
          value: '电视'
        },
        {
          name: 'bagua',
          value: '八卦'
        }
      ];
      ch = ch.concat(chBrother);
      var qidDropCh = {
        // 'jinlisun': ['toutiao', 'keji', 'caijing', 'hulianwang', 'shuma'],
        // 'qid00351': ['toutiao', 'keji', 'caijing', 'hulianwang', 'shuma'],
        jlsp: ['toutiao', 'keji', 'caijing', 'hulianwang', 'shuma'],
        qid00359: ['toutiao', 'keji', 'caijing', 'hulianwang', 'shuma'],
        qid02631: [
          'toutiao',
          'yule',
          'shehui',
          'tiyu',
          'wzry',
          'jiankang',
          'caijing',
          'junshi',
          'guoji',
          'xiaohua',
          'lishi',
          'qiche',
          'xingzuo',
          'nba',
          'shishang',
          'youxi',
          'guonei',
          'kexue',
          'shuma',
          'baojian',
          'jianshen',
          'yinshi',
          'jianfei',
          'cba',
          'dejia',
          'yijia',
          'wangqiu',
          'zhongchao',
          'xijia',
          'yingchao',
          'qipai',
          'gaoerfu',
          'paiqiu',
          'yumaoqiu',
          'jiaju',
          'waihui',
          'baoxian',
          'budongchan',
          'huangjin',
          'xinsanban',
          'gupiao',
          'qihuo',
          'jijin',
          'licai',
          'dianying',
          'dianshi'
        ]
      };
      var dropCh = qidDropCh[qid] || [];
      return _.remove(ch, function(o) {
        return !dropCh.contains(o.name);
      });
    },

    /**
     * 生成频道DOM
     * @param  {Array} myChannels 频道数据
     * @return {[type]}            [description]
     */
    generateChannelTabs: function(myChannels) {
      var tabsHtml = '',
        i = 0;
      // 安卓4.0及以下版本手机去掉视频频道
      try {
        if (!isThanAndroid4) {
          for (i = 0; i < myChannels.length; i++) {
            if (myChannels[i].name === 'shipin') {
              myChannels.splice(i, 1);
            }
          }
        }
      } catch (e) {
        console.error(e);
      }

      for (i = 0; i < myChannels.length; i++) {
        if (myChannels[i].name !== 'meinv') {
          if (i === 0) {
            tabsHtml +=
              '<a class="active" data-type="' +
              myChannels[i].name +
              '">' +
              myChannels[i].value +
              '</a>';
          } else {
            tabsHtml +=
              '<a data-type="' +
              myChannels[i].name +
              '">' +
              myChannels[i].value +
              '</a>';
          }
        }
      }
      $newsTabsWrap.html(tabsHtml);
      // 缓存我的频道
      if (wsCache.get('CUSTOM_CHANNELS_161222')) {
        wsCache.set('news_channels', myChannels);
      }
    },

    /**
     * 获取我的频道
     * @param  {Array} sc 服务端频道
     * @param  {Array} cc 本地缓存的频道（用户自定义我的频道）
     * @return {[type]}    [description]
     */
    getMyChannels: function(sc, cc) {
      if (!sc || !cc) {
        return [];
      }
      var arr = [],
        cLen = cc.length,
        sLen = sc.length;
      // 为了保持和缓存顺序一致，请外层循环使用缓存的频道数组
      for (var i = 0; i < cLen; i++) {
        for (var j = 0; j < sLen; j++) {
          if (cc[i].name === sc[j].name) {
            arr.push(cc[i]);
          }
        }
      }
      return arr;
    },

    /**
     * 注册下拉事件
     * @return {[type]}            [description]
     */
    pullDown: function() {
      var scope = this;
      var svgTop = 0;
      $content.on('touchstart', function(e) {
        // 防止重复快速下拉
        clearTimeout(pullDownLoadDataTimer);
        startPos = e.touches[0].pageY;
        if ($(window).scrollTop() <= 0) {
          isTop = true;
        } else {
          isTop = false;
        }
        svgTop = $('header').height() - 40;
        if (!$pullDownLoading) {
          $pullDownLoading = $(
            '<svg id="J_svg" class="svg" style="top: ' +
              svgTop +
              'px"><g id="J_svg_g"><marker id="J_svg_marker" markerWidth="10" markerHeight="10" refX="0" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L0,10 L5,5 L0,0" style="fill: #d43d3d;"></path></marker><path stroke-width="3.5" stroke-linecap="round" id="J_svg_path" marker-end="url(#J_svg_marker)" d="M20,9 A11,11 0 1,1 10.5,14.5" style="stroke: #d43d3d; fill: none;"></path><circle id="J_svg_circle" class="path" fill="none" stroke-width="3.5" stroke-linecap="round" cx="25" cy="25" r="11"></circle></g></svg>'
          );
        } else {
          $pullDownLoading.removeClass('active').css({
            display: 'block',
            opacity: 0,
            top: svgTop,
            transform: 'translateY(0px)',
            '-webkit-transform': 'translateY(0px)'
          });
        }
      });
      $content.on('touchend', function() {
        // 达到下拉阈值 启动数据加载
        if (isSwipeDown) {
          if (touchDistance >= TOUCH_DISTANCE) {
            $pullDownLoading.animate(
              {
                // 'transform': 'rotate(0deg)',
                // '-webkit-transform': 'rotate(0deg)',
                top: svgTop + TOUCH_DISTANCE / 3 + 'px'
              },
              'fast',
              function() {
                $pullDownLoading && $pullDownLoading.addClass('active'); // jshint ignore:line
                clearTimeout(pullDownLoadDataTimer);
                pullDownLoadDataTimer = setTimeout(function() {
                  // 美女无pulldown接口
                  if (scope.newsType === 'meinv') {
                    $pullDownLoading && $pullDownLoading.remove(); // jshint ignore:line
                  } else {
                    scope.changeRefreshStatus();
                    scope.pullDownLoadData(function() {
                      setTimeout(function() {
                        if ($pullDownLoading) {
                          $pullDownLoading.fadeOut('fast', function() {
                            $pullDownLoading.remove();
                          });
                        }
                      }, 500);
                    });
                  }
                }, 200);
              }
            );
          } else {
            $pullDownLoading &&
              $pullDownLoading.animate(
                {
                  opacity: 0,
                  // 'translateY': '0',
                  top: svgTop
                },
                'fast',
                function() {
                  $pullDownLoading.remove();
                }
              ); // jshint ignore:line
          }
        }
        touchDistanceFlag = true;
        isSwipeDown = false;
      });
      $content.on('touchmove', function(e) {
        var py = e.touches[0].pageY;
        touchDistance = py - startPos;
        // 根据用户开始的滑动手势判断用户是向下滑还是向上滑
        if (isTop && touchDistanceFlag && touchDistance > 0) {
          isSwipeDown = true;
          // 根据刚开始的滑动值进行判断，后面用户无论怎么滑都不会触发浏览器滚动。
          touchDistanceFlag = false;
        }
        if (isTop && isSwipeDown) {
          if ($body.find('.svg').length === 0) {
            $pullDownLoading.appendTo('body');
          }
          // 下拉加载
          if (touchDistance >= TOUCH_DISTANCE) {
            $pullDownLoading
              .find('#J_svg_marker>path')
              .attr('style', 'fill:#2a90d7');
            $pullDownLoading
              .find('#J_svg_g>path')
              .attr('style', 'stroke:#2a90d7;fill:none');
            if (touchDistance >= TOUCH_DISTANCE + 80) {
              touchDistance = TOUCH_DISTANCE + 80;
            }
          } else {
            $pullDownLoading
              .find('#J_svg_marker>path')
              .attr('style', 'fill:#d43d3d');
            $pullDownLoading
              .find('#J_svg_g>path')
              .attr('style', 'stroke:#d43d3d;fill:none');
          }
          $pullDownLoading.css({
            opacity: touchDistance / TOUCH_DISTANCE,
            transform:
              'rotate(' + (touchDistance / TOUCH_DISTANCE) * 720 + 'deg)',
            '-webkit-transform':
              'rotate(' + (touchDistance / TOUCH_DISTANCE) * 720 + 'deg)',
            top: svgTop + touchDistance / 3 + 'px'
          });
          e.preventDefault();
        }
      });
    },

    /**
     * 下拉加载数据
     * @param  {Function} callback 回调方法
     * @return {[type]}            [description]
     */
    pullDownLoadData: function(callback) {
      var scope = this;
      // 页码（获取之后减1再存储）24h
      scope.pulldown_pgNum = Number(
        wsCache.get('pulldown_pgnum_' + scope.newsType + '_' + GLOBAL.Et.qid)
      );
      wsCache.set(
        'pulldown_pgnum_' + scope.newsType + '_' + GLOBAL.Et.qid,
        --scope.pulldown_pgNum,
        {
          exp: 24 * 3600
        }
      );
      // 下拉累计计数
      scope.pulldown_total_num = Number(
        wsCache.get(
          'pulldown_total_num_' + scope.newsType + '_' + GLOBAL.Et.qid
        )
      );
      var currTime = GLOBAL.Util.timeToString(new Date()).split(' ')[0];
      var cookieTime = wsCache.get('curr_date_list');
      if (currTime !== cookieTime) {
        // 日期不同表示到了第二天 计数重置
        scope.pulldown_total_num = 0;
        wsCache.set('curr_date_list', currTime, {
          exp: 24 * 3600
        });
      }
      wsCache.set(
        'pulldown_total_num_' + scope.newsType + '_' + GLOBAL.Et.qid,
        ++scope.pulldown_total_num,
        {
          exp: 24 * 3600
        }
      );
      // 获取链接索引
      scope.pulldown_idx = Number(
        wsCache.get('pulldown_idx_' + scope.newsType + '_' + GLOBAL.Et.qid)
      );
      if (!scope.pulldown_idx) {
        scope.pulldown_idx = 0;
      }
      if (scope.newsType === 'shipin') {
        // 视频频道新闻
        // 获取阅读历史
        scope.readUrl = scope.getVideoReadUrl();
        scope.pullDownLoadVideoData(callback);
      } else if (scope.newsType === 'tupian') {
        // 图片频道新闻
        // 获取阅读历史
        scope.readUrl = scope.getPicReadUrl();
        scope.pullDownLoadPicData(callback);
      } else if (scope.newsType === 'qiche') {
        // 汽车频道新闻
        // 获取阅读历史
        scope.readUrl = scope.getAutoReadUrl();
        if (scope.anewsType === 'qiche') {
          scope.pullDownLoadAutoDataByQiche(callback);
        } else {
          scope.pullDownLoadAutoDataByOthers(callback);
        }
      } else if (scope.newsType === 'duanzi') {
        // 获取阅读历史
        scope.readUrl = scope.getNewsReadUrl();
        scope.pullDownLoadDuanziData(callback);
      } else {
        // 非特殊频道新闻
        // 获取阅读历史
        scope.readUrl = scope.getNewsReadUrl();
        scope.pullDownLoadNewsData(callback);
      }
    },

    /**
     * 下拉加载段子数据
     */
    pullDownLoadDuanziData: function(callback) {
      var scope = this;
      $.ajax({
        url: duanziUrl,
        data: {
          htps: isHttps ? '1' : '0',
          uid: GLOBAL.Et.uid,
          qid: GLOBAL.Et.qid,
          type: scope.newsType,
          readhistory: scope.readUrl,
          pgnum: scope.pulldown_pgNum,
          domain: 'eastday_duanzi',
          idx: scope.pulldown_idx,
          os: scope.osType,
          endkey: wsCache.get(
            'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.startKey[scope.newsType]
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {},
        success: function(data) {
          scope.generateDomForDuanziPulldown(data);
        },
        error: function(e) {
          console.error(e);
        },
        complete: function() {
          callback && callback(); // jshint ignore:line
        }
      });
    },

    /**
     * 下拉加载新闻数据
     * @param  {Function} callback  回调方法
     */
    pullDownLoadNewsData: function(callback) {
      var scope = this;
      var url = pullDownUrl;
      var funcName = arguments.callee.name; // eslint-disable-line
      var data = {
        htps: isHttps ? '1' : '0',
        type: scope.newsType,
        startkey: wsCache.get(
          'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid
        )
          ? wsCache.get('startkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
          : scope.startKey[scope.newsType],
        lastkey: wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
          ? wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
          : scope.endKey[scope.newsType],
        tagskey: wsCache.get('tagskey_' + scope.newsType + '_' + GLOBAL.Et.qid)
          ? wsCache.get('tagskey_' + scope.newsType + '_' + GLOBAL.Et.qid)
          : scope.tagsKey[scope.newsType],
        pgnum: scope.pulldown_pgNum,
        zdnews: scope.getCacheStickNews('stick_news'),
        idx: scope.pulldown_idx,
        readhistory: scope.readUrl,
        recgid: scope.userId,
        qid: scope.qid,
        os: scope.osType,
        sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0,
        pos_pro: Cookies.get('cur_prov_name') || 'null',
        pos_city: Cookies.get('cur_city_name') || 'null'
      };
      if (scope.newsType === 'wzry') {
        // 王者荣耀
        url = autoUrl;
        data = {
          htps: isHttps ? '1' : '0',
          typecode: '30100001',
          startkey: wsCache.get(
            'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.startKey[scope.newsType],
          newkey: wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            ? wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.endKey[scope.newsType],
          pgnum: scope.pulldown_pgNum,
          readhistory: scope.readUrl,
          recgid: scope.userId,
          domain: 'eastday_wzry',
          qid: scope.qid,
          os: scope.osType,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0
        };
      }
      $.ajax({
        url: url,
        data: data,
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: newsTimeoutQids[GLOBAL.Et.qid] ? 3000 : 8000,
        beforeSend: function() {
          ggWrapIdArr = [];
        },
        success: function(data) {
          scope.generateDomForPulldown(data);
        },
        error: function(e) {
          console.error('新闻请求超时:::\n', e);
          if (newsTimeoutQids[GLOBAL.Et.qid]) {
            scope.getNewsErrorForPulldown(funcName);
          }
        },
        complete: function() {
          callback && callback(); // jshint ignore:line
        }
      });
    },

    /**
     * 请求新闻接口超时处理
     */
    getNewsErrorForPulldown: function(funcName) {
      var scope = this;
      wsCache.set(
        'pulldown_pgnum_' + scope.newsType + '_' + GLOBAL.Et.qid,
        ++scope.pulldown_pgNum,
        {
          exp: 24 * 3600
        }
      );
      scope.sendAdShowLog({
        advId: GLOBAL.Et.qid + '_xinwenchaoshi_H5'
      });
      var $rn = $(
        '<div class="news-error-pulldown"><a class="recommend-news">数据异常，请稍后重试</a></div>'
      );
      $rn.appendTo('body');
      setTimeout(function() {
        $rn.animate(
          {
            scale: 0,
            opacity: 0.5
          },
          '600',
          function() {
            $rn.remove();
          }
        );
      }, 1200);
    },

    /**
     * "视频"频道下拉加载数据
     * @param  {Function} callback  回调方法
     */
    pullDownLoadVideoData: function(callback) {
      var scope = this;
      $.ajax({
        url: videoUrl,
        data: {
          htps: isHttps ? '1' : '0',
          type: scope.vnewsType,
          startkey: wsCache.get(
            'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.startKey[scope.newsType],
          lastkey: wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            ? wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.endKey[scope.newsType],
          pgnum: scope.pulldown_pgNum,
          idx: scope.pulldown_idx,
          readhistory: scope.readUrl,
          recgid: scope.userId,
          qid: scope.qid,
          os: scope.osType,
          newsnum: 10,
          domain: 'dfttvideoh5',
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          ggWrapIdArr = [];
        },
        success: function(data) {
          scope.generateVideoDomForPulldown(data);
        },
        error: function(e) {
          console.error(e);
        },
        complete: function() {
          callback && callback(); // jshint ignore:line
        }
      });
    },

    /**
     * "图片"频道下拉加载数据
     * @param  {Function} callback  回调方法
     */
    pullDownLoadPicData: function(callback) {
      var scope = this;
      $.ajax({
        url: picUrl,
        data: {
          htps: isHttps ? '1' : '0',
          type: scope.pnewsType,
          startkey: wsCache.get(
            'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.startKey[scope.newsType],
          lastkey: wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            ? wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.endKey[scope.newsType],
          pgnum: scope.pulldown_pgNum,
          idx: scope.pulldown_idx,
          readhistory: scope.readUrl,
          recgid: scope.userId,
          qid: scope.qid,
          os: scope.osType,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {},
        success: function(data) {
          scope.generatePicDomForPulldown(data);
        },
        error: function(e) {
          console.error(e);
        },
        complete: function() {
          callback && callback(); // jshint ignore:line
        }
      });
    },

    /**
     * "汽车" - "推荐"频道下拉加载数据
     * @param  {Function} callback  回调方法
     */
    pullDownLoadAutoDataByQiche: function(callback) {
      var scope = this;
      $.ajax({
        url: pullDownUrl,
        data: {
          htps: isHttps ? '1' : '0',
          type: scope.anewsType,
          startkey: wsCache.get(
            'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.startKey[scope.newsType],
          lastkey: wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            ? wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.endKey[scope.newsType],
          tagskey: wsCache.get(
            'tagskey_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('tagskey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.tagsKey[scope.newsType],
          pgnum: scope.pulldown_pgNum,
          idx: scope.pulldown_idx,
          readhistory: scope.readUrl,
          recgid: scope.userId,
          qid: scope.qid,
          os: scope.osType,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0,
          pos_pro: Cookies.get('cur_prov_name') || 'null',
          pos_city: Cookies.get('cur_city_name') || 'null'
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          ggWrapIdArr = [];
        },
        success: function(data) {
          scope.generateAutoDomForPulldown(data);
        },
        error: function(e) {
          console.error(e);
        },
        complete: function() {
          callback && callback(); // jshint ignore:line
        }
      });
    },

    /**
     * "汽车" - 除"推荐"频道下拉加载数据
     * @param  {Function} callback  回调方法
     */
    pullDownLoadAutoDataByOthers: function(callback) {
      var scope = this;
      $.ajax({
        url: autoUrl,
        data: {
          htps: isHttps ? '1' : '0',
          typecode: scope.anewsType,
          startkey: wsCache.get(
            'startkey_' + scope.anewsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.anewsType + '_' + GLOBAL.Et.qid)
            : scope.startKey[scope.anewsType],
          newkey: wsCache.get('endkey_' + scope.anewsType + '_' + GLOBAL.Et.qid)
            ? wsCache.get('endkey_' + scope.anewsType + '_' + GLOBAL.Et.qid)
            : scope.endKey[scope.anewsType],
          pgnum: scope.pulldown_pgNum,
          readhistory: scope.readUrl,
          recgid: scope.userId,
          domain: 'eastday_qiche',
          qid: scope.qid,
          os: scope.osType,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          ggWrapIdArr = [];
        },
        success: function(data) {
          scope.generateAutoDomForPulldownByOthers(data);
        },
        complete: function() {
          callback && callback(); // jshint ignore:line
        }
      });
    },

    /**
     * 从缓存中获取已读历史url
     * @return {String} 已读历史url
     */
    getNewsReadUrl: function() {
      var scope = this,
        ru = '';
      // 获取阅读记录
      if (scope.newsType === 'toutiao' || scope.newsType === 'weikandian') {
        ru = wsCache.get('read_url_all_' + GLOBAL.Et.qid);
      } else {
        ru = wsCache.get('read_url_' + scope.newsType + '_' + GLOBAL.Et.qid);
      }
      return ru || null;
    },

    /**
     * 从缓存中获取已读历史url
     * @return {String} 已读历史url
     */
    getVideoReadUrl: function() {
      var scope = this,
        ru = '';
      // 获取阅读记录
      if (scope.vnewsType === 'vtuijian') {
        ru = wsCache.get('video_read_url_all_' + GLOBAL.Et.qid);
      } else {
        ru = wsCache.get(
          'video_read_url_' + scope.vnewsType + '_' + GLOBAL.Et.qid
        );
      }
      return ru || null;
    },

    /**
     * 从缓存中获取已读历史url
     * @return {String} 已读历史url
     */
    getPicReadUrl: function() {
      var scope = this,
        ru = '';
      // 获取阅读记录
      if (scope.pnewsType === 'pbolan') {
        ru = wsCache.get('pic_read_url_all_' + GLOBAL.Et.qid);
      } else {
        ru = wsCache.get(
          'pic_read_url_' + scope.pnewsType + '_' + GLOBAL.Et.qid
        );
      }
      return ru || null;
    },

    /**
     * 从缓存中获取已读历史url - 汽车频道
     * @return {String} 已读历史url
     */
    getAutoReadUrl: function() {
      // var scope = this,
      //     ru = '';
      // // 获取阅读记录
      // if (scope.anewsType === 'qiche') {
      //     ru = wsCache.get('auto_read_url_all_' + GLOBAL.Et.qid);
      // } else {
      //     ru = wsCache.get('auto_read_url_' + scope.anewsType);
      // }
      // return ru ? ru : null;
      return wsCache.get('auto_read_url_all_' + GLOBAL.Et.qid);
    },

    /**
     * 获取url中html名称
     * 如：
     *  传入：http://mini.eastday.com/duanzi/170831114421420170752.html?qid=null&idx=1&fr=duanzi&pgnum=1
     *  返回：170831114421420170752
     * @param {String} url 链接
     * @return {String} html名称
     */
    getHtmlName: function(url) {
      if (!url) {
        return;
      }
      var urlSplitArr = url.split('?')[0].split('/');
      var htmlName = urlSplitArr[urlSplitArr.length - 1];
      return htmlName.split('.')[0] || '';
    },

    /**
     * 下拉加载数据后 缓存idx和新闻内容，加载广告
     */
    pullDownComplete: function(len) {
      var scope = this;
      scope.imgLazyload();
      // 新规则：每5条新闻之后插广告
      try {
        scope.loadGgForPullDown();
      } catch (e) {
        console.error('loadGgForPullDown has error：\n', e);
      }
      var txt = '新闻';
      if (scope.newsType === 'shipin') {
        txt = '视频';
      } else if (scope.newsType === 'tupian') {
        txt = '更新';
      }
      // 提示推荐新闻条数
      var $rn = $(
        '<p id="J_recommend_news" class="recommend-news">为您推荐<span>' +
          len +
          '</span>条' +
          txt +
          '</p>'
      );
      $rn.appendTo('body');
      setTimeout(function() {
        $rn.animate(
          {
            scale: 0,
            opacity: 0.5
          },
          '600',
          function() {
            $rn.remove();
          }
        );
      }, 1200);
      // 如果下拉加载数据次数超过20次，清空信息流末尾新闻数据。
      if (scope.pulldown_num >= 20) {
        scope.pulldown_num = 0;
        var $newsListChildrens = $newsList.children(),
          newsLen = $newsListChildrens.length;
        for (var i = newsLen - 1; i >= newsLen - 20; i--) {
          $newsListChildrens[i].remove();
        }
      }
      // 记录pulldown_idx
      wsCache.set(
        'pulldown_idx_' + scope.newsType + '_' + GLOBAL.Et.qid,
        scope.pulldown_idx - len,
        {
          exp: 40 * 60
        }
      );
      setTimeout(function() {
        // 清除pull-down类
        $newsList.children().removeClass('pull-down');
        // 缓存当前类别加载的新闻（缓存40分钟）
        wsCache.set(
          'news_' + scope.newsType + '_' + GLOBAL.Et.qid,
          $newsList.html(),
          {
            exp: 40 * 60
          }
        );
      }, 400);
    },

    /**
     * 下拉加载数据生成DOM
     * @param  {[type]} d 数据
     * @return {[type]}   [description]
     */
    generateDomForPulldown: function(d) {
      var scope = this,
        data = d && d.data,
        len = data.length;

      if (!data || !data.length) {
        // $loading.hide();
        return false;
      }
      // 计数
      scope.pulldown_num++;
      // 接口返回的endkey作为下一次请求的startkey参数的值
      scope.startKey[scope.newsType] = d.endkey;
      wsCache.set(
        'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        d.endkey,
        {
          exp: 24 * 3600
        }
      );
      // 接口返回的newkey作为下一次请求的lastkey参数的值
      scope.endKey[scope.newsType] = d.newkey;
      wsCache.set('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid, d.newkey, {
        exp: 24 * 3600
      });
      // 接口返回的tagskey作为下一次请求的tagskey参数的值
      scope.tagsKey[scope.newsType] = d.tagskey;
      wsCache.set(
        'tagskey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        d.tagskey,
        {
          exp: 24 * 3600
        }
      );
      // 反转数组(reverse方法会改变原来的数组，而不会创建新的数组。)
      data.reverse();
      // 删除阅读历史位置DOM元素（后面重新更新位置）
      $body.find('.J-read-position').remove();
      $newsList.prepend(
        '<a class="J-read-position read-position">上次浏览到这里，点击刷新。</a>'
      );

      var inviewIdx = 0;
      // 循环生成新闻
      for (var i = 0; i < len; i++) {
        var item = data[i],
          url = item.url,
          urlNum = url.substring(
            url.lastIndexOf('/') + 1,
            url.indexOf('.html')
          ),
          dateStr = item.date,
          topic = item.topic,
          source = item.source,
          // accurateurl = item.accurateurl,
          imgArr = item.miniimg,
          imgGifArr = item.imggif,
          recommendtype = item.recommendtype ? item.recommendtype : '-1',
          ispicnews = item.ispicnews, // 大图新闻(1)、小图新闻(0)、无图新闻(-1)
          videonews = item.videonews, // 视频新闻
          // videoList = item.videolist, // 视频列表
          hotnews = item.hotnews,
          suptop = item.suptop,
          batcheid = item.batcheid || 'null',
          recommendurl = item.recommendurl || 'null',
          type = item.type,
          subtype = item.subtype || 'null',
          // rowkey = item.rowkey,
          titledisplay = item.titledisplay || '', // 用于判断标签类别
          iszd = Number(item.zd) || '', // 置顶
          ishot = Number(item.hotnews), // 热门
          isrec = Number(item.isrecom), // 推荐
          issptopic = Number(item.issptopic), // 专题
          isvideo = Number(item.isvideo), // 视频
          isadv = Number(item.isadv) || '', // 广告
          isnuanwen = Number(item.isnxw), // 暖文
          commentCount = Number(item.comment_count), // 评论数
          urlpv = Number(item.urlpv), // 浏览量
          picnums = item.picnums, // 图片数量
          tagId = item.tagId || '',
          // praisecnt = item.praisecnt,      // 顶
          // tramplecnt = item.tramplecnt,    // 踩
          commentCountStr = '',
          urlpvStr = '',
          aStr = '',
          imgClass = '',
          tagStr = '';

        if (testQids[GLOBAL.Et.qid]) {
          imgClass = 'b';
        }
        var imgLen = imgArr.length;
        var imgGifLen = imgGifArr ? imgGifArr.length : 0;
        if (newNewsQids.contains(GLOBAL.Et.qid)) {
          scope.readUrlNum =
            JSON.parse(
              wsCache.get('read_urlnum_' + scope.newsType + '_' + GLOBAL.Et.qid)
            ) || {};
          if (scope.readUrlNum[urlNum]) {
            // 前端对加载过的新闻做去重
            scope.prependGgDom(i);
            continue;
          }
        }
        inviewIdx++;
        // 标签处理
        if (titledisplay) {
          // 新处理方式
          tagStr = scope.getTagStr(titledisplay);
        } else {
          // 暂时保留旧处理方式
          if (isadv === 1) {
            tagStr = '<i class="tag tag-gg">广告</i>';
          } else if (issptopic) {
            tagStr = '<i class="tag tag-sptopic">专题</i>';
          } else if (ishot) {
            tagStr = '<i class="tag tag-hot">热门</i>';
            if (isvideo) {
              tagStr += '<i class="tag tag-video">视频</i>';
            }
          } else if (isrec) {
            tagStr = '<i class="tag tag-rec">推荐</i>';
          } else if (isvideo) {
            tagStr = '<i class="tag tag-video">视频</i>';
          } else if (isnuanwen) {
            tagStr = '<i class="tag tag-nuanwen">暖文</i>';
          } else if (iszd) {
            tagStr = '<i class="tag tag-zd">顶</i>';
          }
        }

        // 阅读量（PV为0就不展示评论数和pv量）
        if (urlpv !== 0) {
          urlpvStr =
            '<em class="tag tag-view">' +
            GLOBAL.Util.getSpecialCountStr(urlpv) +
            '阅读</em>';
        }
        if (commentCount !== 0) {
          commentCountStr =
            '<em class="tag tag-com">' +
            GLOBAL.Util.getSpecialCountStr(commentCount) +
            '评论</em>';
        }

        url +=
          '?qid=' +
          GLOBAL.Et.qid +
          '&idx=' +
          (scope.pulldown_idx - i - 1) +
          '&recommendtype=' +
          recommendtype +
          '&ishot=' +
          hotnews +
          '&fr=' +
          scope.newsType +
          '&pgnum=' +
          scope.pulldown_pgNum +
          '&suptop=' +
          suptop;
        if (apptypeid) {
          url += '&apptypeid=' + apptypeid;
        }
        if (tagId) {
          url += '&tagId=' + tagId;
        }

        // a标签
        aStr =
          '<a class="J-news" href="' +
          url +
          '" data-ispicnews="' +
          ispicnews +
          '" data-hotnews="' +
          hotnews +
          '" data-suptop="' +
          suptop +
          '" data-recommendurl="' +
          recommendurl +
          '" data-recommendtype="' +
          recommendtype +
          '" data-batcheid="' +
          batcheid +
          '" data-type="' +
          type +
          '" data-subtype="' +
          subtype +
          '" data-pgnum="' +
          scope.pulldown_pgNum +
          '" data-tagId="' +
          tagId +
          '" data-idx="' +
          inviewIdx +
          '">';

        /* ==== 新闻流 ==== */
        // 视频模式（直接播放的视频）
        // if (videonews == '1') { // jshint ignore:line
        //     urlpvStr = urlpvStr.replace('阅读', '观看');
        //     if (isThanAndroid4) {
        //         var videoImg = (item.lbimg[0] ? item.lbimg[0].src : '');
        //         var $itemVideo = $('<section class="news-item news-item-video">' +
        //             '<div class="video-wrap">' +
        //             '<h3>' + topic + '</h3>' +
        //             '<div class="J-video-box video-box">' +
        //             '<video controls="auto" data-type="' + type + '" data-idx="' + (scope.idx + i + 1) + '" poster="' + videoImg + '" autobuffer="true" preload="none">' +
        //             '<source src="' + videoList[0].src + '" type="video/mp4">您的浏览器不支持该视频播放。' +
        //             '</video>' +
        //             '</div>' +
        //             '<p class="tags clearfix">' +
        //             '<em class="tag tag-video">视频</em>' +
        //             '<em class="tag tag-src">' + source + '</em>' + commentCountStr + urlpvStr +
        //             // '<em class="time"><i class="video">视频</i></em>' +
        //             // '<em class="src">' + source + '</em>' + commentCountStr + urlpvStr +
        //             '</p>' +
        //             '</div>' +
        //             '</section>');
        //         $newsList.prepend($itemVideo);
        //     }
        // } else
        // 需要点击进去的视频
        if (videonews == '2') {
          // jshint ignore:line
          urlpvStr = urlpvStr.replace('阅读', '观看');
          if (isThanAndroid4) {
            if (testQids[GLOBAL.Et.qid]) {
              $newsList.prepend(
                '<section class="news-item news-item-video-link">' +
                  aStr +
                  '<div class="news-wrap">' +
                  '<div class="txt-wrap">' +
                  '<h3>' +
                  topic +
                  '</h3>' +
                  '<p class="tags clearfix">' +
                  '<em class="tag tag-video">视频</em>' +
                  '<em class="tag tag-src">' +
                  source +
                  '</em>' +
                  commentCountStr +
                  urlpvStr +
                  '</p>' +
                  '</div>' +
                  '<div class="img-wrap ' +
                  imgClass +
                  '" style="background-image:url(' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  ')">' +
                  '<img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  '">' +
                  '<span class="play-btn"></span>' +
                  '</div>' +
                  '</div>' +
                  '</a>' +
                  '</section>'
              );
            } else {
              $newsList.prepend(
                '<section class="news-item news-item-video-link">' +
                  aStr +
                  '<div class="news-wrap">' +
                  '<div class="txt-wrap">' +
                  '<h3>' +
                  topic +
                  '</h3>' +
                  '<p class="tags clearfix">' +
                  '<em class="tag tag-video">视频</em>' +
                  '<em class="tag tag-src">' +
                  source +
                  '</em>' +
                  commentCountStr +
                  urlpvStr +
                  '</p>' +
                  '</div>' +
                  '<div class="img-wrap ' +
                  imgClass +
                  '">' +
                  '<img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  '">' +
                  '<span class="play-btn"></span>' +
                  '</div>' +
                  '</div>' +
                  '</a>' +
                  '</section>'
              );
            }
          }
        } else {
          dateStr = scope.getSpecialTime(dateStr);
          // 大图模式
          if (ispicnews == '1') {
            // jshint ignore:line
            imgArr = item.lbimg;
            if (imgArr.length) {
              imgArr = item.miniimg || item.miniimg02;
            }
            $newsList.prepend(
              '<section class="pull-down news-item news-item-s3">' +
                aStr +
                '<div class="news-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<div class="img-wrap clearfix">' +
                '<img class="lazy fl" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '" alt="' +
                (imgArr.length ? imgArr[0].alt : '') +
                '">' +
                '</div>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
            // 图片新闻
          } else if (ispicnews == '2') {
            // jshint ignore:line
            imgArr = item.lbimg;
            $newsList.prepend(
              '<section class="news-item news-item-pic-link-special">' +
                '<a data-type="' +
                type +
                '" data-subtype="" data-pgnum="' +
                scope.pulldown_pgNum +
                '" href="' +
                url +
                '">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<div class="img-wrap">' +
                '<img class="lazy" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '" alt="">' +
                '<span class="num">' +
                picnums +
                '图</span>' +
                '</div>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</a>' +
                '</section>'
            );
            // 无图模式
          } else if (ispicnews == '-1') {
            // jshint ignore:line
            $newsList.prepend(
              '<section class="news-item news-item-noimg">' +
                aStr +
                '<div class="news-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
          } else if (ispicnews == '0') {
            // jshint ignore:line
            if (imgGifQid[GLOBAL.Et.qid]) {
              if (imgGifLen > 2) {
                imgArr = imgGifArr;
              } else if (imgGifLen > 0) {
                imgArr[0] = imgGifArr[0];
              }
            }
            if (imgLen >= 3) {
              // if (newThreeQids[GLOBAL.Et.qid] && i === 6) {
              //     $newsList.prepend('<section class="pull-down news-item news-item-s2">' +
              //     aStr +
              //     '<div class="news-wrap">' +
              //     '<h3>' + topic + '</h3>' +
              //     '<div class="img-wrap2">' +
              //     '<div class="img-item">' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') + '"></div>' +
              //     '</div>' +
              //     '<div class="img-item">' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') + '"></div>' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') + '"></div>' +
              //     '</div>' +
              //     '</div>' +
              //     '<p class="tags clearfix">' +
              //     '<em class="tag tag-time">' + (tagStr || dateStr) + '</em>' +
              //     '<em class="tag tag-src">' + source + '</em>' + commentCountStr + urlpvStr +
              //     '</p>' +
              //     '</div>' +
              //     '</a>' +
              //     '</section>');
              // } else {
              // }
              if (testQids[GLOBAL.Et.qid]) {
                $newsList.prepend(
                  '<section class="pull-down news-item news-item-s2">' +
                    aStr +
                    '<div class="news-wrap">' +
                    '<h3>' +
                    topic +
                    '</h3>' +
                    '<div class="img-wrap ' +
                    imgClass +
                    '">' +
                    '<div class="img" style="background-image:url(' +
                    (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                    ')"></div>' +
                    '<div class="img" style="background-image:url(' +
                    (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') +
                    ')"></div>' +
                    '<div class="img" style="background-image:url(' +
                    (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') +
                    ')"></div>' +
                    '</div>' +
                    '<p class="tags clearfix">' +
                    '<em class="tag tag-time">' +
                    (tagStr || dateStr) +
                    '</em>' +
                    '<em class="tag tag-src">' +
                    source +
                    '</em>' +
                    commentCountStr +
                    urlpvStr +
                    '</p>' +
                    '</div>' +
                    '</a>' +
                    '</section>'
                );
              } else {
                $newsList.prepend(
                  '<section class="pull-down news-item news-item-s2">' +
                    aStr +
                    '<div class="news-wrap">' +
                    '<h3>' +
                    topic +
                    '</h3>' +
                    '<div class="img-wrap ' +
                    imgClass +
                    '">' +
                    '<div class="img"><img class="lazy" data-original="' +
                    (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                    '"></div>' +
                    '<div class="img"><img class="lazy" data-original="' +
                    (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') +
                    '"></div>' +
                    '<div class="img"><img class="lazy" data-original="' +
                    (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') +
                    '"></div>' +
                    '</div>' +
                    '<p class="tags clearfix">' +
                    '<em class="tag tag-time">' +
                    (tagStr || dateStr) +
                    '</em>' +
                    '<em class="tag tag-src">' +
                    source +
                    '</em>' +
                    commentCountStr +
                    urlpvStr +
                    '</p>' +
                    '</div>' +
                    '</a>' +
                    '</section>'
                );
              }
            } else {
              if (testQids[GLOBAL.Et.qid]) {
                $newsList.prepend(
                  '<section class="pull-down news-item news-item-s1">' +
                    aStr +
                    '<div class="news-wrap">' +
                    '<div class="txt-wrap">' +
                    '<h3>' +
                    topic +
                    '</h3>' +
                    '<p class="tags clearfix">' +
                    '<em class="tag tag-time">' +
                    (tagStr || dateStr) +
                    '</em>' +
                    '<em class="tag tag-src">' +
                    source +
                    '</em>' +
                    commentCountStr +
                    urlpvStr +
                    '</p>' +
                    '</div>' +
                    '<div class="img-wrap ' +
                    imgClass +
                    '" style="background-image:url(' +
                    (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                    ')"></div>' +
                    '</div>' +
                    '</a>' +
                    '</section>'
                );
              } else {
                $newsList.prepend(
                  '<section class="pull-down news-item news-item-s1">' +
                    aStr +
                    '<div class="news-wrap">' +
                    '<div class="txt-wrap">' +
                    '<h3>' +
                    topic +
                    '</h3>' +
                    '<p class="tags clearfix">' +
                    '<em class="tag tag-time">' +
                    (tagStr || dateStr) +
                    '</em>' +
                    '<em class="tag tag-src">' +
                    source +
                    '</em>' +
                    commentCountStr +
                    urlpvStr +
                    '</p>' +
                    '</div>' +
                    '<div class="img-wrap ' +
                    imgClass +
                    '"><img data-lbimg="' +
                    (item.lbimg[0] ? item.lbimg[0].src : '') +
                    '" class="lazy" data-original="' +
                    (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                    '" alt="' +
                    (imgArr.length ? imgArr[0].alt : '') +
                    '"></div>' +
                    '</div>' +
                    '</a>' +
                    '</section>'
                );
              }
            }
          }
        }
        scope.prependGgDom(i);
      }
      if (newNewsQids.contains(GLOBAL.Et.qid)) {
        // 进屏日志
        try {
          scope.registerInview();
        } catch (e) {
          console.error(e);
        }
      }
      scope.pullDownComplete(len);
    },

    /**
     * 汽车 - 推荐频道下拉加载数据生成DOM
     * @param  {[type]} d 数据
     * @return {[type]}   [description]
     */
    generateAutoDomForPulldown: function(d) {
      var scope = this,
        data = d && d.data,
        len = data.length;

      if (!data || !data.length) {
        // $loading.hide();
        return false;
      }
      // 计数
      scope.pulldown_num++;
      scope.startKey[scope.newsType] = d.endkey;
      wsCache.set(
        'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        d.endkey,
        {
          exp: 24 * 3600
        }
      );
      scope.endKey[scope.newsType] = d.newkey;
      wsCache.set('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid, d.newkey, {
        exp: 24 * 3600
      });
      scope.tagsKey[scope.newsType] = d.tagskey;
      wsCache.set(
        'tagskey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        d.tagskey,
        {
          exp: 24 * 3600
        }
      );
      // 反转数组(reverse方法会改变原来的数组，而不会创建新的数组。)
      data.reverse();
      // 删除阅读历史位置DOM元素（后面重新更新位置）
      $body.find('.J-read-position').remove();
      $newsList.prepend(
        '<a class="J-read-position read-position">上次浏览到这里，点击刷新。</a>'
      );

      var inviewIdx = 0;
      // 循环生成新闻
      for (var i = 0; i < len; i++) {
        var item = data[i],
          url = item.url,
          urlNum = url.substring(
            url.lastIndexOf('/') + 1,
            url.indexOf('.html')
          ),
          dateStr = item.date,
          topic = item.topic,
          source = item.source,
          imgArr = item.miniimg,
          recommendtype = item.recommendtype ? item.recommendtype : '-1',
          hotnews = item.hotnews,
          ispicnews = item.ispicnews, // 大图新闻(1)、小图新闻(0)、无图新闻(-1)
          videonews = item.videonews, // 视频新闻
          // videoList = item.videolist, // 视频列表
          // advId = item.adv_id || '',
          type = item.type,
          subtype = item.subtype,
          imgLen = imgArr.length,
          // rowkey = item.rowkey,
          titledisplay = item.titledisplay || '', // 用于判断标签类别
          ishot = Number(item.hotnews), // 热门
          isrec = Number(item.isrecom), // 推荐
          isvideo = Number(item.isvideo), // 视频
          commentCount = Number(item.comment_count), // 评论数
          urlpv = Number(item.urlpv), // 浏览量
          picnums = item.picnums, // 图片数量
          tagId = item.tagId || '',
          // praisecnt = item.praisecnt,      // 顶
          // tramplecnt = item.tramplecnt,    // 踩
          commentCountStr = '',
          urlpvStr = '',
          tagStr = '',
          batcheid = item.batcheid || 'null',
          recommendurl = item.recommendurl || 'null',
          suptop = item.suptop || 'null',
          aStr = '';

        if (newNewsQids.contains(GLOBAL.Et.qid)) {
          scope.readUrlNum =
            JSON.parse(
              wsCache.get('read_urlnum_' + scope.newsType + '_' + GLOBAL.Et.qid)
            ) || {};
          if (scope.readUrlNum[urlNum]) {
            // 前端对加载过的新闻做去重
            scope.prependGgDom(i);
            continue;
          }
        }
        inviewIdx++;

        if (titledisplay) {
          // 新处理方式
          tagStr = scope.getTagStr(titledisplay);
        } else {
          if (ishot) {
            tagStr = '<i class="tag tag-hot">热门</i>';
            if (isvideo) {
              tagStr += '<i class="tag tag-video">视频</i>';
            }
          } else if (isrec) {
            tagStr = '<i class="tag tag-rec">推荐</i>';
          } else if (isvideo) {
            tagStr = '<i class="tag tag-video">视频</i>';
          }
        }

        // 阅读量（PV为0就不展示评论数和pv量）
        if (urlpv !== 0) {
          urlpvStr =
            '<em class="tag tag-view">' +
            GLOBAL.Util.getSpecialCountStr(urlpv) +
            '阅读</em>';
        }
        if (commentCount !== 0) {
          commentCountStr =
            '<em class="tag tag-com">' +
            GLOBAL.Util.getSpecialCountStr(commentCount) +
            '评论</em>';
        }

        url +=
          '?qid=' +
          GLOBAL.Et.qid +
          '&idx=' +
          (scope.pulldown_idx - i - 1) +
          '&recommendtype=' +
          recommendtype +
          '&ishot=' +
          hotnews +
          '&fr=' +
          scope.anewsType +
          '&pgnum=' +
          scope.pulldown_pgNum +
          '&suptop=' +
          suptop;
        if (tagId) {
          url += '&tagId=' + tagId;
        }

        // a标签
        aStr =
          '<a class="J-news" href="' +
          url +
          '" data-ispicnews="' +
          ispicnews +
          '" data-hotnews="' +
          hotnews +
          '" data-suptop="' +
          suptop +
          '" data-recommendurl="' +
          recommendurl +
          '" data-recommendtype="' +
          recommendtype +
          '" data-batcheid="' +
          batcheid +
          '" data-type="' +
          type +
          '" data-subtype="' +
          subtype +
          '" data-pgnum="' +
          scope.pulldown_pgNum +
          '" data-tagId="' +
          tagId +
          '" data-idx="' +
          inviewIdx +
          '">';

        /* ==== 新闻流 ==== */
        if (videonews == '2') {
          // jshint ignore:line
          urlpvStr = urlpvStr.replace('阅读', '观看');
          if (isThanAndroid4) {
            $newsList.prepend(
              '<section class="news-item news-item-video-link">' +
                aStr +
                '<div class="news-wrap">' +
                '<div class="txt-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-video">视频</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '<div class="img-wrap">' +
                '<img class="lazy" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '">' +
                '<span class="play-btn"></span>' +
                '</div>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
          }
        } else {
          dateStr = scope.getSpecialTime(dateStr);
          // 大图模式
          if (ispicnews == '1') {
            // jshint ignore:line
            imgArr = item.lbimg;
            $newsList.prepend(
              '<section class="pull-down news-item news-item-s3">' +
                aStr +
                '<div class="news-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<div class="img-wrap clearfix">' +
                '<img class="lazy fl" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '" alt="' +
                imgArr[0].alt +
                '">' +
                '</div>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
            // 图片新闻
          } else if (ispicnews == '2') {
            // jshint ignore:line
            imgArr = item.lbimg;
            $newsList.prepend(
              '<section class="news-item news-item-pic-link-special">' +
                aStr +
                '<h3>' +
                topic +
                '</h3>' +
                '<div class="img-wrap">' +
                '<img class="lazy" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '" alt="">' +
                '<span class="num">' +
                picnums +
                '图</span>' +
                '</div>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</a>' +
                '</section>'
            );
            // 无图模式
          } else if (ispicnews == '-1') {
            // jshint ignore:line
            $newsList.prepend(
              '<section class="news-item news-item-noimg">' +
                aStr +
                '<div class="news-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
          } else if (ispicnews == '0') {
            // jshint ignore:line
            if (imgLen >= 3) {
              // if (newThreeQids[GLOBAL.Et.qid] && i === 6) {
              //     $newsList.prepend('<section class="pull-down news-item news-item-s2">' +
              //     aStr +
              //     '<div class="news-wrap">' +
              //     '<h3>' + topic + '</h3>' +
              //     '<div class="img-wrap2">' +
              //     '<div class="img-item">' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') + '"></div>' +
              //     '</div>' +
              //     '<div class="img-item">' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') + '"></div>' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') + '"></div>' +
              //     '</div>' +
              //     '</div>' +
              //     '<p class="tags clearfix">' +
              //     '<em class="tag tag-time">' + (tagStr || dateStr) + '</em>' +
              //     '<em class="tag tag-src">' + source + '</em>' + commentCountStr + urlpvStr +
              //     '</p>' +
              //     '</div>' +
              //     '</a>' +
              //     '</section>');
              // } else {
              // }
              $newsList.prepend(
                '<section class="pull-down news-item news-item-s2">' +
                  aStr +
                  '<div class="news-wrap">' +
                  '<h3>' +
                  topic +
                  '</h3>' +
                  '<div class="img-wrap">' +
                  '<div class="img"><img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  '"></div>' +
                  '<div class="img"><img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') +
                  '"></div>' +
                  '<div class="img"><img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') +
                  '"></div>' +
                  '</div>' +
                  '<p class="tags clearfix">' +
                  '<em class="tag tag-time">' +
                  (tagStr || dateStr) +
                  '</em>' +
                  '<em class="tag tag-src">' +
                  source +
                  '</em>' +
                  commentCountStr +
                  urlpvStr +
                  '</p>' +
                  '</div>' +
                  '</a>' +
                  '</section>'
              );
            } else {
              $newsList.prepend(
                '<section class="pull-down news-item news-item-s1">' +
                  aStr +
                  '<div class="news-wrap">' +
                  '<div class="txt-wrap">' +
                  '<h3>' +
                  topic +
                  '</h3>' +
                  '<p class="tags clearfix">' +
                  '<em class="tag tag-time">' +
                  (tagStr || dateStr) +
                  '</em>' +
                  '<em class="tag tag-src">' +
                  source +
                  '</em>' +
                  commentCountStr +
                  urlpvStr +
                  '</p>' +
                  '</div>' +
                  '<div class="img-wrap"><img data-lbimg="' +
                  (item.lbimg[0] ? item.lbimg[0].src : '') +
                  '" class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  '" alt="' +
                  imgArr[0].alt +
                  '"></div>' +
                  '</div>' +
                  '</a>' +
                  '</section>'
              );
            }
          }
        }
        scope.prependGgDom(i);
      }
      // 进屏日志
      if (newNewsQids.contains(GLOBAL.Et.qid)) {
        try {
          scope.registerInview();
        } catch (e) {
          console.error(e);
        }
      }
      scope.pullDownComplete(len);
    },

    /**
     * 汽车 - 除 推荐 频道频道下拉加载数据生成DOM
     * @param  {[type]} d 数据
     * @return {[type]}   [description]
     */
    generateAutoDomForPulldownByOthers: function(d) {
      var scope = this,
        data = d && d.data,
        len = data.length;

      if (!data || !data.length) {
        // $loading.hide();
        return false;
      }
      // 计数
      scope.pulldown_num++;
      scope.startKey[scope.anewsType] = d.endkey;
      wsCache.set(
        'startkey_' + scope.anewsType + '_' + GLOBAL.Et.qid,
        d.endkey,
        {
          exp: 24 * 3600
        }
      );
      scope.endKey[scope.anewsType] = d.newkey;
      wsCache.set('endkey_' + scope.anewsType + '_' + GLOBAL.Et.qid, d.newkey, {
        exp: 24 * 3600
      });
      // 反转数组(reverse方法会改变原来的数组，而不会创建新的数组。)
      data.reverse();
      // 删除阅读历史位置DOM元素（后面重新更新位置）
      $body.find('.J-read-position').remove();
      $newsList.prepend(
        '<a class="J-read-position read-position">上次浏览到这里，点击刷新。</a>'
      );

      var inviewIdx = 0;
      // 循环生成新闻
      for (var i = 0; i < len; i++) {
        var item = data[i],
          url = item.url,
          dateStr = item.date,
          topic = item.topic,
          source = item.source,
          imgArr = item.miniimg,
          recommendtype = item.recommendtype ? item.recommendtype : '-1',
          hotnews = item.hotnews,
          ispicnews = item.ispicnews, // 大图新闻(1)、小图新闻(0)、无图新闻(-1)
          videonews = item.videonews, // 视频新闻
          // videoList = item.videolist, // 视频列表
          // advId = item.adv_id || '',
          type = item.type,
          subtype = item.subtype,
          imgLen = imgArr.length,
          // rowkey = item.rowkey,
          titledisplay = item.titledisplay || '', // 用于判断标签类别
          ishot = Number(item.hotnews), // 热门
          isrec = Number(item.isrecom), // 推荐
          isvideo = Number(item.isvideo), // 视频
          commentCount = Number(item.comment_count), // 评论数
          urlpv = Number(item.urlpv), // 浏览量
          picnums = item.picnums, // 图片数量
          // praisecnt = item.praisecnt,      // 顶
          // tramplecnt = item.tramplecnt,    // 踩
          commentCountStr = '',
          urlpvStr = '',
          tagStr = '',
          batcheid = item.batcheid || 'null',
          recommendurl = item.recommendurl || 'null',
          suptop = item.suptop || 'null',
          aStr = '';
        inviewIdx++;

        if (titledisplay) {
          // 新处理方式
          tagStr = scope.getTagStr(titledisplay);
        } else {
          if (ishot) {
            tagStr = '<i class="tag tag-hot">热门</i>';
            if (isvideo) {
              tagStr += '<i class="tag tag-video">视频</i>';
            }
          } else if (isrec) {
            tagStr = '<i class="tag tag-rec">推荐</i>';
          } else if (isvideo) {
            tagStr = '<i class="tag tag-video">视频</i>';
          }
        }

        // 阅读量（PV为0就不展示评论数和pv量）
        if (urlpv !== 0) {
          urlpvStr =
            '<em class="tag tag-view">' +
            GLOBAL.Util.getSpecialCountStr(urlpv) +
            '阅读</em>';
        }
        if (commentCount !== 0) {
          commentCountStr =
            '<em class="tag tag-com">' +
            GLOBAL.Util.getSpecialCountStr(commentCount) +
            '评论</em>';
        }

        url +=
          '?qid=' +
          GLOBAL.Et.qid +
          '&idx=' +
          (scope.pulldown_idx - i - 1) +
          '&recommendtype=' +
          recommendtype +
          '&ishot=' +
          hotnews +
          '&fr=' +
          scope.anewsType +
          '&pgnum=' +
          scope.pulldown_pgNum +
          '&suptop=' +
          suptop;

        // a标签
        aStr =
          '<a class="" href="' +
          url +
          '" data-ispicnews="' +
          ispicnews +
          '" data-hotnews="' +
          hotnews +
          '" data-suptop="' +
          suptop +
          '" data-recommendurl="' +
          recommendurl +
          '" data-recommendtype="' +
          recommendtype +
          '" data-batcheid="' +
          batcheid +
          '" data-type="' +
          type +
          '" data-subtype="' +
          subtype +
          '" data-pgnum="' +
          scope.pulldown_pgNum +
          '" data-idx="' +
          inviewIdx +
          '">';

        /* ==== 新闻流 ==== */
        if (videonews == '2') {
          // jshint ignore:line
          urlpvStr = urlpvStr.replace('阅读', '观看');
          if (isThanAndroid4) {
            $newsList.prepend(
              '<section class="news-item news-item-video-link">' +
                aStr +
                '<div class="news-wrap">' +
                '<div class="txt-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-video">视频</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '<div class="img-wrap">' +
                '<img class="lazy" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '">' +
                '<span class="play-btn"></span>' +
                '</div>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
          }
        } else {
          dateStr = scope.getSpecialTime(dateStr);
          // 大图模式
          if (ispicnews == '1') {
            // jshint ignore:line
            imgArr = item.lbimg;
            $newsList.prepend(
              '<section class="pull-down news-item news-item-s3">' +
                aStr +
                '<div class="news-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<div class="img-wrap clearfix">' +
                '<img class="lazy fl" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '" alt="' +
                imgArr[0].alt +
                '">' +
                '</div>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
            // 图片新闻
          } else if (ispicnews == '2') {
            // jshint ignore:line
            imgArr = item.lbimg;
            $newsList.prepend(
              '<section class="news-item news-item-pic-link-special">' +
                aStr +
                '<h3>' +
                topic +
                '</h3>' +
                '<div class="img-wrap">' +
                '<img class="lazy" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '" alt="">' +
                '<span class="num">' +
                picnums +
                '图</span>' +
                '</div>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</a>' +
                '</section>'
            );
            // 无图模式
          } else if (ispicnews == '-1') {
            // jshint ignore:line
            $newsList.prepend(
              '<section class="news-item news-item-noimg">' +
                aStr +
                '<div class="news-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
          } else if (ispicnews == '0') {
            // jshint ignore:line
            if (imgLen >= 3) {
              // if (newThreeQids[GLOBAL.Et.qid] && i === 6) {
              //     $newsList.prepend('<section class="pull-down news-item news-item-s2">' +
              //     aStr +
              //     '<div class="news-wrap">' +
              //     '<h3>' + topic + '</h3>' +
              //     '<div class="img-wrap2">' +
              //     '<div class="img-item">' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') + '"></div>' +
              //     '</div>' +
              //     '<div class="img-item">' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') + '"></div>' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') + '"></div>' +
              //     '</div>' +
              //     '</div>' +
              //     '<p class="tags clearfix">' +
              //     '<em class="tag tag-time">' + (tagStr || dateStr) + '</em>' +
              //     '<em class="tag tag-src">' + source + '</em>' + commentCountStr + urlpvStr +
              //     '</p>' +
              //     '</div>' +
              //     '</a>' +
              //     '</section>');
              // } else {
              // }
              $newsList.prepend(
                '<section class="pull-down news-item news-item-s2">' +
                  aStr +
                  '<div class="news-wrap">' +
                  '<h3>' +
                  topic +
                  '</h3>' +
                  '<div class="img-wrap">' +
                  '<div class="img"><img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  '"></div>' +
                  '<div class="img"><img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') +
                  '"></div>' +
                  '<div class="img"><img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') +
                  '"></div>' +
                  '</div>' +
                  '<p class="tags clearfix">' +
                  '<em class="tag tag-time">' +
                  (tagStr || dateStr) +
                  '</em>' +
                  '<em class="tag tag-src">' +
                  source +
                  '</em>' +
                  commentCountStr +
                  urlpvStr +
                  '</p>' +
                  '</div>' +
                  '</a>' +
                  '</section>'
              );
            } else {
              $newsList.prepend(
                '<section class="pull-down news-item news-item-s1">' +
                  aStr +
                  '<div class="news-wrap">' +
                  '<div class="txt-wrap">' +
                  '<h3>' +
                  topic +
                  '</h3>' +
                  '<p class="tags clearfix">' +
                  '<em class="tag tag-time">' +
                  (tagStr || dateStr) +
                  '</em>' +
                  '<em class="tag tag-src">' +
                  source +
                  '</em>' +
                  commentCountStr +
                  urlpvStr +
                  '</p>' +
                  '</div>' +
                  '<div class="img-wrap"><img data-lbimg="' +
                  (item.lbimg[0] ? item.lbimg[0].src : '') +
                  '" class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  '" alt="' +
                  imgArr[0].alt +
                  '"></div>' +
                  '</div>' +
                  '</a>' +
                  '</section>'
              );
            }
          }
        }
        scope.prependGgDom(i);
      }
      // 进屏日志
      // if (newNewsQids.contains(GLOBAL.Et.qid)) {
      //     try {
      //         scope.registerInview();
      //     } catch (e) {
      //         console.error(e);
      //     }
      // }
      scope.pullDownComplete(len);
    },

    /**
     * 下拉加载视频DOM
     * @param  {[type]} d [description]
     * @return {[type]}   [description]
     */
    generateVideoDomForPulldown: function(d) {
      var scope = this,
        data = d.data ? d.data : null,
        existVideoCtg = false,
        len = data ? data.length : 0;
      if (!data || !len) {
        return false;
      }
      // 计数
      scope.pulldown_num++;
      scope.startKey[scope.newsType] = d.endkey;
      wsCache.set(
        'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        d.endkey,
        {
          exp: 24 * 3600
        }
      );
      scope.endKey[scope.newsType] = d.newkey;
      wsCache.set('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid, d.newkey, {
        exp: 24 * 3600
      });
      // 反转数组(reverse方法会改变原来的数组，而不会创建新的数组。)
      data.reverse();
      // 删除阅读历史位置DOM元素（后面重新更新位置）
      $body.find('.J-read-position').remove();
      $newsList.prepend(
        '<a class="J-read-position read-position">上次浏览到这里，点击刷新。</a>'
      );
      var inviewIdx = 0;
      for (var i = 0; i < len; i++) {
        var item = data[i],
          miniImg = item.miniimg, // 4:3
          itemImg = miniImg[0],
          hotnews = item.hotnews,
          recommendtype = item.recommendtype ? item.recommendtype : '-1',
          dateStr = item.date,
          type = item.type,
          topic = item.topic,
          source = item.source,
          imgSrc = itemImg.src,
          imgWidth = itemImg.imgwidth,
          imgHeight = itemImg.imgheight,
          commentCount = Number(item.comment_count), // 评论数
          urlpv = Number(item.urlpv), // 阅读量
          titledisplay = item.titledisplay || '', // 用于判断标签类别
          ishot = Number(item.hotnews), // 热门
          isrec = Number(item.isrecom), // 推荐
          suptop = item.suptop || 'null',
          url =
            item.url02 +
            '?qid=' +
            scope.qid +
            '&idx=' +
            (scope.pulldown_idx - i - 1) +
            '&recommendtype=' +
            recommendtype +
            '&ishot=' +
            hotnews +
            '&fr=' +
            scope.vnewsType +
            '&pgnum=' +
            scope.pulldown_pgNum +
            '&suptop=' +
            suptop,
          ctgArr = [],
          commentCountStr = '',
          urlpvStr = '',
          videoCtgStr = '',
          tagStr = '',
          batcheid = item.batcheid || 'null',
          recommendurl = item.recommendurl || 'null',
          ispicnews = item.ispicnews || 'null',
          subtype = item.subtype || 'null',
          aStr = '';
        inviewIdx++;

        if (titledisplay) {
          // 新处理方式
          tagStr = scope.getTagStr(titledisplay);
        } else {
          if (ishot) {
            tagStr = '<i class="tag tag-hot">热门</i>';
          } else if (isrec) {
            tagStr = '<i class="tag tag-rec">推荐</i>';
          }
        }

        // 阅读量（PV为0就不展示评论数和pv量）
        if (urlpv !== 0) {
          urlpvStr =
            '<em class="tag tag-view">' +
            GLOBAL.Util.getSpecialCountStr(urlpv) +
            '观看</em>';
        }
        if (commentCount !== 0) {
          commentCountStr =
            '<em class="tag tag-com">' +
            GLOBAL.Util.getSpecialCountStr(commentCount) +
            '评论</em>';
        }
        dateStr = scope.getSpecialTime(dateStr);
        // a标签
        aStr =
          '<a class="news-link" href="' +
          url +
          '" data-ispicnews="' +
          ispicnews +
          '" data-hotnews="' +
          hotnews +
          '" data-suptop="' +
          suptop +
          '" data-recommendurl="' +
          recommendurl +
          '" data-recommendtype="' +
          recommendtype +
          '" data-batcheid="' +
          batcheid +
          '" data-type="' +
          type +
          '" data-subtype="' +
          subtype +
          '" data-pgnum="' +
          scope.pulldown_pgNum +
          '" data-idx="' +
          inviewIdx +
          '">';
        $newsList.prepend(
          [
            '<section class="news-item news-img1 news-video">',
            // '<div class="one-px-border"></div>',
            aStr + '<div class="info">',
            '<h3 class="title dotdot line3">' + topic + '</h3>',
            '<p class="tags">',
            tagStr
              ? '<em class="tag tag-time">' + tagStr + '</em>'
              : dateStr
                ? '<em class="tag tag-time">' + dateStr + '</em>'
                : '',
            commentCountStr,
            urlpvStr,
            '<em class="tag tag-src">' + source + '</em>',
            '</p>',
            '</div>',
            '<div class="img img-bg"><img class="image lazy" data-original="' +
              imgSrc +
              '" data-width="' +
              imgWidth +
              '" data-height="' +
              imgHeight +
              '"><span class="video-btn"></span></div>',
            '</a>',
            '</section>'
          ].join('')
        );

        // 插入视频分类列表（第一屏在第6个位置插入，后面每屏在第1、第6个位置插入）
        if (
          i !== 0 &&
          i % 1 === 0 &&
          !existVideoCtg &&
          !newVideoCtgQids[GLOBAL.Et.qid]
        ) {
          var advIdObj = {
            jinlisun: 'jinlisun_spdh_h5'
          };
          var advId = advIdObj[GLOBAL.Et.qid] || '';
          ctgArr = scope.getRecommendVideoCtg();
          // 对于“纪录片”频道，不加“频道”两字
          videoCtgStr =
            scope.vnewsType === 'vjilupian'
              ? currentVideoCtg.name
              : currentVideoCtg.name + '频道';
          if (ctgArr.length !== 0) {
            $newsList.prepend(
              '<section class="news-ctg"><div class="video-ctg-wrap"><div class="wrapper clearfix"><span class="fl">' +
                videoCtgStr +
                '</span><div class="link-wrap fl"><a class="J-video-ctg" data-advid="' +
                advId +
                '" data-type="' +
                ctgArr[0].value +
                '" href="javascript:;">' +
                ctgArr[0].name +
                '</a><a class="J-video-ctg" data-advid="' +
                advId +
                '" data-type="' +
                ctgArr[1].value +
                '" href="javascript:;">' +
                ctgArr[1].name +
                '</a><a class="J-video-ctg" data-advid="' +
                advId +
                '" data-type="' +
                ctgArr[2].value +
                '" href="javascript:;">' +
                ctgArr[2].name +
                '</a><a class="J-video-ctg" data-advid="' +
                advId +
                '" data-type="' +
                ctgArr[3].value +
                '" href="javascript:;">' +
                ctgArr[3].name +
                '</a></div></div></div></section>'
            );
          }
          existVideoCtg = true;
        }
        scope.prependGgDom(i);
      }
      // 进屏日志
      // if (newNewsQids.contains(GLOBAL.Et.qid)) {
      //     try {
      //         scope.registerInview();
      //     } catch (e) {
      //         console.error(e);
      //     }
      // }
      scope.pullDownComplete(len);
    },

    /**
     * 下拉加载图片DOM
     * @param  {Array} d 图片数据
     * @return {[type]}   [description]
     */
    generatePicDomForPulldown: function(d) {
      var scope = this,
        data = d.data ? d.data : null,
        // existGg = false,
        len = data ? data.length : 0;
      if (!data || !len) {
        return false;
      }
      // 计数
      scope.pulldown_num++;
      scope.startKey[scope.newsType] = d.endkey;
      wsCache.set(
        'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        d.endkey,
        {
          exp: 24 * 3600
        }
      );
      scope.endKey[scope.newsType] = d.newkey;
      wsCache.set('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid, d.newkey, {
        exp: 24 * 3600
      });
      // 反转数组(reverse方法会改变原来的数组，而不会创建新的数组。)
      data.reverse();
      // 删除阅读历史位置DOM元素（后面重新更新位置）
      $body.find('.J-read-position').remove();
      $newsList.prepend(
        '<a class="J-read-position read-position">上次浏览到这里，点击刷新。</a>'
      );
      var inviewIdx = 0;
      for (var i = 0; i < len; i++) {
        var item = data[i],
          // 小图
          // miniImg = item.miniimg,  // 4:3
          // itemImg = miniImg[0],
          // imgSrc = itemImg.src,
          // imgWidth = itemImg.imgwidth,
          // imgHeight = itemImg.imgheight,
          // 大图
          lbImg = item.lbimg, // 2:1
          lbItemImg = lbImg[0],
          lbimgSrc = lbItemImg.src,
          lbimgWidth = lbItemImg.imgwidth,
          lbimgHeight = lbItemImg.imgheight,
          picnums = item.picnums, // 图片数量
          hotnews = item.hotnews,
          recommendtype = item.recommendtype ? item.recommendtype : '-1',
          dateStr = item.date,
          type = item.type,
          topic = item.topic,
          source = item.source,
          // commentCount = Number(item.comment_count),   // 评论数
          urlpv = Number(item.urlpv), // 阅读量
          titledisplay = item.titledisplay || '', // 用于判断标签类别
          ishot = Number(item.hotnews), // 热门
          isrec = Number(item.isrecom), // 推荐
          suptop = item.suptop || 'null',
          url =
            item.url +
            '?qid=' +
            scope.qid +
            '&idx=' +
            (scope.pulldown_idx - i - 1) +
            '&recommendtype=' +
            recommendtype +
            '&ishot=' +
            hotnews +
            '&fr=' +
            scope.pnewsType +
            '&pgnum=' +
            scope.pulldown_pgNum +
            '&suptop=' +
            suptop,
          // ctgArr = [],
          commentCountStr = '',
          urlpvStr = '',
          // videoCtgStr = '',
          tagStr = '',
          batcheid = item.batcheid || 'null',
          recommendurl = item.recommendurl || 'null',
          ispicnews = item.ispicnews || 'null',
          subtype = item.subtype || 'null',
          aStr = '';
        inviewIdx++;

        if (titledisplay) {
          // 新处理方式
          tagStr = scope.getTagStr(titledisplay);
        } else {
          if (ishot) {
            tagStr = '<i class="tag tag-hot">热门</i>';
          } else if (isrec) {
            tagStr = '<i class="tag tag-rec">推荐</i>';
          }
        }

        // 阅读量（PV为0就不展示评论数和pv量）
        if (urlpv !== 0) {
          urlpvStr =
            '<em class="tag tag-view">' +
            GLOBAL.Util.getSpecialCountStr(urlpv) +
            '浏览</em>';
          // commentCountStr = '<em class="tag tag-com">' + GLOBAL.Util.getSpecialCountStr(commentCount) + '评论</em>';
        }
        dateStr = scope.getSpecialTime(dateStr);
        // a标签
        aStr =
          '<a class="" href="' +
          url +
          '" data-ispicnews="' +
          ispicnews +
          '" data-hotnews="' +
          hotnews +
          '" data-suptop="' +
          suptop +
          '" data-recommendurl="' +
          recommendurl +
          '" data-recommendtype="' +
          recommendtype +
          '" data-batcheid="' +
          batcheid +
          '" data-type="' +
          type +
          '" data-subtype="' +
          subtype +
          '" data-pgnum="' +
          scope.pulldown_pgNum +
          '" data-idx="' +
          inviewIdx +
          '">';
        // 前面累加 prepend
        $newsList.prepend(
          '<section class="news-item news-item-pic-link">' +
            aStr +
            '<div class="img-wrap">' +
            '<img class="lazy" data-original="' +
            lbimgSrc +
            '" alt="" data-width="' +
            lbimgWidth +
            '" data-height="' +
            lbimgHeight +
            '">' +
            '<span class="num">' +
            picnums +
            '图</span>' +
            '</div>' +
            '<h3>' +
            topic +
            '</h3>' +
            '<p class="tags clearfix">' +
            '<em class="tag tag-time">' +
            (tagStr || dateStr) +
            '</em>' +
            commentCountStr +
            urlpvStr +
            '<em class="tag tag-src">' +
            source +
            '</em>' +
            '</p>' +
            '</a>' +
            '</section>'
        );
      }
      // 进屏日志
      // if (newNewsQids.contains(GLOBAL.Et.qid)) {
      //     try {
      //         scope.registerInview();
      //     } catch (e) {
      //         console.error(e);
      //     }
      // }
      scope.pullDownComplete(len);
    },

    /**
     * 下拉加载数据生成DOM<段子>
     * @param  {[type]} d 数据
     * @return {[type]}   [description]
     */
    generateDomForDuanziPulldown: function(d) {
      var scope = this,
        data = d && d.data,
        len = data.length;

      if (!data || !data.length) {
        // $loading.hide();
        return false;
      }
      // 计数
      scope.pulldown_num++;
      scope.startKey[scope.newsType] = data[len - 1].endkey;
      wsCache.set(
        'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        data[len - 1].endkey,
        {
          exp: 24 * 3600
        }
      );
      // scope.endKey[scope.newsType] = d.newkey;
      // wsCache.set('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid, d.newkey, { exp: 24 * 3600 });
      // 反转数组(reverse方法会改变原来的数组，而不会创建新的数组。)
      data.reverse();
      // 删除阅读历史位置DOM元素（后面重新更新位置）
      $body.find('.J-read-position').remove();
      $newsList.prepend(
        '<a class="J-read-position read-position">上次浏览到这里，点击刷新。</a>'
      );

      // var ranNum = Math.floor((len - 1) * Math.random());
      // 循环生成新闻
      for (var i = 0; i < len; i++) {
        var item = data[i],
          cts = item.cts,
          // endkey = item.endkey,
          // headimg = item.headimg,
          // htmlname = item.htmlname,
          // imgjs = item.imgjs,
          // iscrawler = item.iscrawler,
          // mtp = item.mtp,
          // npvtype = item.npvtype,
          // psrc = item.psrc,
          // purl = item.purl,
          // rdts = item.rdts,
          // servid = item.servid,
          // title = item.title,
          // tpch = item.tpch,
          tpid = item.tpid,
          tppy = item.tppy,
          // ufr = item.ufr,
          url = item.url,
          // videojs = item.videojs,
          z0000 = item.z0000,
          zd0000 = item.zd0000,
          // artrev = item.artrev,
          zw = item.zw;

        // 非原生广告（原生广告url中不添加参数）
        url +=
          '?qid=' +
          GLOBAL.Et.qid +
          '&idx=' +
          (scope.pulldown_idx - i - 1) +
          '&fr=' +
          scope.newsType +
          '&pgnum=' +
          scope.pulldown_pgNum;

        // 用li、li2位置广告
        try {
          scope.loadTxtGg(i, $newsList, false);
        } catch (e) {
          console.error('loadTxtGg has error：\n', e);
        }

        /* ==== 新闻流 ==== */
        $newsList.prepend(
          '<section class="news-item news-item-duanzi">' +
            '<a href="' +
            url +
            '" class="content" data-type="duanzi" data-tpid="' +
            tpid +
            '" data-tppy="' +
            tppy +
            '">' +
            zw +
            '</a>' +
            '<div class="options">' +
            '<span class="J-duanzi-good good" data-cts="' +
            cts +
            '" data-url="' +
            url +
            '">' +
            z0000 +
            '</span>' +
            '<span class="J-duanzi-bad bad" data-cts="' +
            cts +
            '" data-url="' +
            url +
            '">' +
            zd0000 +
            '</span>' +
            // '<span class="J-duanzi-comment comment" data-url="' + url + '">' + artrev + '</span>' +
            '</div>' +
            '</section>'
        );
      }
      // 提示推荐新闻条数
      var $rn = $(
        '<p id="J_recommend_news" class="recommend-news">为您推荐<span>' +
          len +
          '</span>条新闻</p>'
      );
      $rn.appendTo('body');
      setTimeout(function() {
        $rn.animate(
          {
            scale: 0,
            opacity: 0.5
          },
          '600',
          function() {
            $rn.remove();
          }
        );
      }, 1200);
      // 如果下拉加载数据次数超过20次，清空信息流末尾新闻数据。
      if (scope.pulldown_num >= 20) {
        scope.pulldown_num = 0;
        var $newsListChildrens = $newsList.children(),
          newsLen = $newsListChildrens.length;
        for (i = newsLen - 1; i >= newsLen - 20; i--) {
          $newsListChildrens[i].remove();
        }
      }
      // 记录pulldown_idx
      wsCache.set(
        'pulldown_idx_' + scope.newsType + '_' + GLOBAL.Et.qid,
        scope.pulldown_idx - len,
        {
          exp: 40 * 60
        }
      );
      setTimeout(function() {
        // 清除pull-down类
        $newsList.children().removeClass('pull-down');
        // 缓存当前类别加载的新闻（缓存40分钟）
        wsCache.set(
          'news_' + scope.newsType + '_' + GLOBAL.Et.qid,
          $newsList.html(),
          {
            exp: 40 * 60
          }
        );
      }, 400);
    },

    /**
     * 将已经点过赞、点过踩的图标高亮显示出来
     * @return {[type]} [description]
     */
    // highlightPraiseTrample: function () {
    //     var scope = this;
    //     if (scope.newsType == 'meinv') {
    //         $newsList.find('.J-good').each(function () {
    //             var $this = $(this);
    //             if (scope.getPraiseTrampleStatus($this.data('rowkey')) === 1) {
    //                 $this.addClass('active');
    //             }
    //         });
    //         $newsList.find('.J-bad').each(function () {
    //             var $this = $(this);
    //             if (scope.getPraiseTrampleStatus($this.data('rowkey')) === -1) {
    //                 $this.addClass('active');
    //             }
    //         });
    //     }
    // },

    /**
     * 缓存赞、踩记录
     * @param  {Number} ctg 必需 -  赞：1； 踩：-1；
     * @param  {String} rk 必需 -  需要缓存的rowkey
     * @return {[type]}     [description]
     */
    // cachePraiseTrampleRowkey: function (ctg, rk) {
    //     var rks = wsCache.get('praise_trample_rowkey'),
    //         praiseRk = wsCache.get('praise_rowkey'),
    //         trampleRk = wsCache.get('trample_rowkey');
    //     if (rks) {
    //         rks += (',' + rk);
    //     } else {
    //         rks = rk;
    //     }
    //     wsCache.set('praise_trample_rowkey', rks, {
    //         exp: 2 * 3600
    //     });
    //     if (ctg === 1) {
    //         if (praiseRk) {
    //             praiseRk += (',' + rk);
    //         } else {
    //             praiseRk = rk;
    //         }
    //         wsCache.set('praise_rowkey', praiseRk, {
    //             exp: 2 * 3600
    //         });
    //     } else {
    //         if (trampleRk) {
    //             trampleRk += (',' + rk);
    //         } else {
    //             trampleRk = rk;
    //         }
    //         wsCache.set('trample_rowkey', trampleRk, {
    //             exp: 2 * 3600
    //         });
    //     }
    // },

    /**
     * 判断赞、踩状态
     * @param  {String} rk rowkey
     * @return {Number}    1：赞过；-1：踩过；0：未赞未踩过。
     */
    // getPraiseTrampleStatus: function (rk) {
    //     var praiseRk = wsCache.get('praise_rowkey'),
    //         trampleRk = wsCache.get('trample_rowkey');
    //     if (praiseRk && praiseRk.indexOf(rk) !== -1) {
    //         return 1;
    //     } else if (trampleRk && trampleRk.indexOf(rk) !== -1) {
    //         return -1;
    //     }
    //     return 0;
    // },

    /**
     * 缓存赞、踩记录 段子频道
     * @param  {Number} ctg 必需 -  赞：1； 踩：-1；
     * @param  {String} htmlname 必需 -  需要缓存的rowkey
     * @return {[type]}     [description]
     */
    cacheZanCaiHtmlName: function(ctg, htmlname) {
      var zcs = wsCache.get('zan_cai_htmlname'),
        zanHtmlName = wsCache.get('zan_htmlname'),
        caiHtmlName = wsCache.get('cai_htmlname');
      if (zcs) {
        zcs += ',' + htmlname;
      } else {
        zcs = htmlname;
      }
      wsCache.set('zan_cai_htmlname', zcs, {
        exp: 2 * 3600
      });
      if (ctg === 1) {
        if (zanHtmlName) {
          zanHtmlName += ',' + htmlname;
        } else {
          zanHtmlName = htmlname;
        }
        wsCache.set('zan_htmlname', zanHtmlName, {
          exp: 2 * 3600
        });
      } else {
        if (caiHtmlName) {
          caiHtmlName += ',' + htmlname;
        } else {
          caiHtmlName = htmlname;
        }
        wsCache.set('cai_htmlname', caiHtmlName, {
          exp: 2 * 3600
        });
      }
    },

    /**
     * 判断赞、踩状态 段子频道
     * @param  {String} htmlname
     * @return {Number}    1：赞过；-1：踩过；0：未赞未踩过。
     */
    getZanCaiStatus: function(htmlname) {
      var zanHtmlName = wsCache.get('zan_htmlname'),
        caiHtmlName = wsCache.get('cai_htmlname');
      if (zanHtmlName && zanHtmlName.indexOf(htmlname) !== -1) {
        return 1;
      } else if (caiHtmlName && caiHtmlName.indexOf(htmlname) !== -1) {
        return -1;
      }
      return 0;
    },

    /**
     * 将已经点过赞、点过踩的图标高亮显示出来 段子频道
     * @return {[type]} [description]
     */
    highlightZanCai: function() {
      var scope = this;
      if (scope.newsType == 'duanzi') {
        $newsList.find('.J-duanzi-good').each(function() {
          var $this = $(this);
          var htmlName = scope.getHtmlName($this.attr('data-url'));
          if (scope.getZanCaiStatus(htmlName) === 1) {
            $this.addClass('active');
          }
        });
        $newsList.find('.J-duanzi-bad').each(function() {
          var $this = $(this);
          var htmlName = scope.getHtmlName($this.attr('data-url'));
          if (scope.getZanCaiStatus(htmlName) === -1) {
            $this.addClass('active');
          }
        });
      }
    },

    /**
     * 获取地方站的接口数据
     * @return {[type]} [description]
     */
    location: function() {
      var scope = this;
      $.ajax({
        url: positionUrl,
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        success: function(res) {
          var pos = res.position,
            py = scope.getCityPinyin(pos.provname),
            loc = null;
          if (py) {
            loc = {
              prov_id: pos.pro_id,
              prov_py: py,
              prov_name: pos.provname,
              prov_city: pos.cityname
            };
            scope.updateDomLocation(loc);
            // 缓存位置信息
            wsCache.set('cur_location', loc, {
              exp: 3 * 24 * 3600
            });
          }
        },
        error: function(jqXHR, textStatus) {
          console.error(textStatus);
        }
      });
    },

    /**
     * 更新位置信息
     * @param  {[type]} loc [description]
     * @return {[type]}     [description]
     */
    updateDomLocation: function(loc) {
      var type = GLOBAL.Et.qid === 'qid10760' ? 'toutiao' : 'wzry'; // 应放在哪个频道后面
      $newsTabsWrap.children('a').each(function() {
        var $this = $(this);
        if ($this.attr('data-type') === type) {
          $this.after(
            '<a data-type="' + loc.prov_py + '">' + loc.prov_name + '</a>'
          );
          return false;
        }
      });
    },

    /**
     * 通过城市中文名获取拼音
     * @param  {[type]} city 中文名
     * @return {[type]}      拼音
     */
    getCityPinyin: function(city) {
      switch (city) {
        case '上海':
          return 'shanghai';
        case '北京':
          return 'beijing';
        case '河南':
          return 'henan';
        case '广东':
          return 'guangdong';
        case '山东':
          return 'shandong';
        case '河北':
          return 'hebei';
        case '江苏':
          return 'jiangsu';
        case '浙江':
          return 'zhejiang';
        case '安徽':
          return 'anhui';
        case '湖南':
          return 'hunan';
        default:
          return null;
      }
    },

    /**
     * 缓存已经阅读的url编号
     * @param {[type]} urlNum url编号
     */
    cacheReadUrl: function(urlNum, type, subtype) {
      var scope = this;
      if (scope.newsType === 'shipin') {
        scope.cacheVideoReadUrl(urlNum, type, subtype);
      } else if (scope.newsType === 'tupian') {
        scope.cachePicReadUrl(urlNum, type, subtype);
      } else if (scope.newsType === 'qiche') {
        scope.cacheAutoReadUrl(urlNum, type, subtype);
      } else {
        scope.cacheNewsReadUrl(urlNum, type, subtype);
      }
    },

    /**
     * 缓存已阅读过的新闻
     * @return {[type]} [description]
     */
    cacheNewsReadUrl: function(urlNum, type, subtype) {
      var scope = this;
      // if (!scope.existNewsReadUrl(urlNum) && !newsTypeArr_special.contains(type)) {
      if (!scope.existNewsReadUrl(urlNum)) {
        // 判断是否缓存过
        // read_url_all
        var rua = wsCache.get('read_url_all_' + GLOBAL.Et.qid);
        if (rua) {
          rua = rua.split(',');
          while (rua.length >= 5) {
            rua.shift();
          }
          rua.push(urlNum);
          scope.readUrl = rua.join(',');
        } else {
          scope.readUrl = urlNum;
        }
        wsCache.set('read_url_all_' + GLOBAL.Et.qid, scope.readUrl, {
          exp: 3 * 24 * 3600
        });
        // read_url_type
        var rut = wsCache.get('read_url_' + type + '_' + GLOBAL.Et.qid); // xxxx,xxxx,xxxx
        if (rut) {
          rut = rut.split(',');
          while (rut.length >= 3) {
            rut.shift();
          }
          rut.push(urlNum);
          rut = rut.join(',');
        } else {
          rut = urlNum;
        }
        wsCache.set('read_url_' + type + '_' + GLOBAL.Et.qid, rut, {
          exp: 3 * 24 * 3600
        });
        // read_url_subtype
        if (subtype) {
          var rust = wsCache.get('read_url_' + subtype + '_' + GLOBAL.Et.qid); // xxxx,xxxx,xxxx
          if (rust) {
            rust = rust.split(',');
            while (rust.length >= 3) {
              rust.shift();
            }
            rust.push(urlNum);
            rust = rust.join(',');
          } else {
            rust = urlNum;
          }
          wsCache.set('read_url_' + subtype + '_' + GLOBAL.Et.qid, rust, {
            exp: 3 * 24 * 3600
          });
        }
      }
    },

    /**
     * 缓存置顶的新闻
     * @return {[type]} [description]
     */
    cacheStickNews: function(urlNum, type) {
      var rua = wsCache.get(type + '_' + GLOBAL.Et.qid),
        stickNew = urlNum;
      if (rua) {
        rua = rua.split(',');
        var eIndex = $.inArray(urlNum, rua);
        if (eIndex > -1) {
          return;
        }
        while (rua.length >= 5) {
          rua.shift();
        }
        rua.push(urlNum);
        stickNew = rua.join(',');
      }
      wsCache.set(type + '_' + GLOBAL.Et.qid, stickNew, {
        exp: 2 * 3600
      });
    },

    /**
     * 获取缓存置顶的新闻
     * @return {[type]} [description]
     */
    getCacheStickNews: function(type) {
      var stickNewsStr = wsCache.get(type + '_' + GLOBAL.Et.qid);
      if (!stickNewsStr) {
        stickNewsStr = '';
      }
      return stickNewsStr;
    },

    /**
     * 缓存已阅读过的视频
     * @return {[type]} [description]
     */
    cacheVideoReadUrl: function(urlNum, type, subtype) {
      var scope = this;
      // 判断是否存储过
      if (!scope.existVideoReadUrl(urlNum)) {
        // video_read_url_all
        var rua = wsCache.get('video_read_url_all_' + GLOBAL.Et.qid);
        if (rua) {
          rua = rua.split(',');
          while (rua.length >= 5) {
            rua.shift();
          }
          rua.push(urlNum);
          scope.readUrl = rua.join(',');
        } else {
          scope.readUrl = urlNum;
        }
        wsCache.set('video_read_url_all' + GLOBAL.Et.qid, scope.readUrl, {
          exp: 3 * 24 * 3600
        });
        // video_read_url_type
        var rut = wsCache.get('video_read_url_' + type + '_' + GLOBAL.Et.qid); // xxxx,xxxx,xxxx
        if (rut) {
          rut = rut.split(',');
          while (rut.length >= 3) {
            rut.shift();
          }
          rut.push(urlNum);
          rut = rut.join(',');
        } else {
          rut = urlNum;
        }
        wsCache.set('video_read_url_' + type + '_' + GLOBAL.Et.qid, rut, {
          exp: 3 * 24 * 3600
        });
        // video_read_url_subtype
        if (subtype) {
          var rust = wsCache.get(
            'video_read_url_' + subtype + '_' + GLOBAL.Et.qid
          ); // xxxx,xxxx,xxxx
          if (rust) {
            rust = rust.split(',');
            while (rust.length >= 3) {
              rust.shift();
            }
            rust.push(urlNum);
            rust = rust.join(',');
          } else {
            rust = urlNum;
          }
          wsCache.set('video_read_url_' + subtype + '_' + GLOBAL.Et.qid, rust, {
            exp: 3 * 24 * 3600
          });
        }
      }
    },

    /**
     * 缓存已浏览过的图片频道的新闻
     * @return {[type]} [description]
     */
    cachePicReadUrl: function(urlNum, type, subtype) {
      var scope = this;
      // 判断是否存储过
      if (!scope.existPicReadUrl(urlNum)) {
        // pic_read_url_all
        var rua = wsCache.get('pic_read_url_all_' + GLOBAL.Et.qid);
        if (rua) {
          rua = rua.split(',');
          while (rua.length >= 5) {
            rua.shift();
          }
          rua.push(urlNum);
          scope.readUrl = rua.join(',');
        } else {
          scope.readUrl = urlNum;
        }
        wsCache.set('pic_read_url_all' + GLOBAL.Et.qid, scope.readUrl, {
          exp: 3 * 24 * 3600
        });
        // video_read_url_type
        var rut = wsCache.get('pic_read_url_' + type + '_' + GLOBAL.Et.qid); // xxxx,xxxx,xxxx
        if (rut) {
          rut = rut.split(',');
          while (rut.length >= 3) {
            rut.shift();
          }
          rut.push(urlNum);
          rut = rut.join(',');
        } else {
          rut = urlNum;
        }
        wsCache.set('pic_read_url_' + type + '_' + GLOBAL.Et.qid, rut, {
          exp: 3 * 24 * 3600
        });
        // pic_read_url_subtype
        if (subtype) {
          var rust = wsCache.get(
            'pic_read_url_' + subtype + '_' + GLOBAL.Et.qid
          ); // xxxx,xxxx,xxxx
          if (rust) {
            rust = rust.split(',');
            while (rust.length >= 3) {
              rust.shift();
            }
            rust.push(urlNum);
            rust = rust.join(',');
          } else {
            rust = urlNum;
          }
          wsCache.set('pic_read_url_' + subtype + '_' + GLOBAL.Et.qid, rust, {
            exp: 3 * 24 * 3600
          });
        }
      }
    },

    /**
     * 缓存已阅读过的视频
     * @return {[type]} [description]
     */
    cacheAutoReadUrl: function(urlNum, type, subtype) {
      var scope = this;
      // 判断是否存储过
      if (!scope.existAutoReadUrl(urlNum)) {
        // auto_read_url_all
        var rua = wsCache.get('auto_read_url_all_' + GLOBAL.Et.qid);
        if (rua) {
          rua = rua.split(',');
          while (rua.length >= 5) {
            rua.shift();
          }
          rua.push(urlNum);
          scope.readUrl = rua.join(',');
        } else {
          scope.readUrl = urlNum;
        }
        wsCache.set('auto_read_url_all_' + GLOBAL.Et.qid, scope.readUrl, {
          exp: 3 * 24 * 3600
        });
        // auto_read_url_type
        var rut = wsCache.get('auto_read_url_' + type + '_' + GLOBAL.Et.qid); // xxxx,xxxx,xxxx
        if (rut) {
          rut = rut.split(',');
          while (rut.length >= 3) {
            rut.shift();
          }
          rut.push(urlNum);
          rut = rut.join(',');
        } else {
          rut = urlNum;
        }
        wsCache.set('auto_read_url_' + type + '_' + GLOBAL.Et.qid, rut, {
          exp: 3 * 24 * 3600
        });
        // auto_read_url_subtype
        if (subtype) {
          var rust = wsCache.get(
            'auto_read_url_' + subtype + '_' + GLOBAL.Et.qid
          ); // xxxx,xxxx,xxxx
          if (rust) {
            rust = rust.split(',');
            while (rust.length >= 3) {
              rust.shift();
            }
            rust.push(urlNum);
            rust = rust.join(',');
          } else {
            rust = urlNum;
          }
          wsCache.set('auto_read_url_' + subtype + '_' + GLOBAL.Et.qid, rust, {
            exp: 3 * 24 * 3600
          });
        }
      }
    },

    /**
     * 判断是否存储过该url编号
     * @param  {[type]} urlNum url编号
     * @return {[type]}        true: 已经缓存过了，false：未缓存过
     */
    existNewsReadUrl: function(urlNum) {
      var read_url_all = wsCache.get('read_url_all_' + GLOBAL.Et.qid); // xxxx,xxxx,xxxx
      // 已经缓存过了
      if (read_url_all && read_url_all.indexOf(urlNum) !== -1) {
        return true;
      }
      return false;
    },

    /**
     * 判断是否存储过该url编号
     * @param  {[type]} urlNum url编号
     * @return {[type]}        true: 已经缓存过了，false：未缓存过
     */
    existVideoReadUrl: function(urlNum) {
      var video_read_url_all = wsCache.get(
        'video_read_url_all_' + GLOBAL.Et.qid
      ); // xxxx,xxxx,xxxx
      // 已经缓存过了
      if (video_read_url_all && video_read_url_all.indexOf(urlNum) !== -1) {
        return true;
      }
      return false;
    },

    /**
     * 判断是否存储过该url编号
     * @param  {[type]} urlNum url编号
     * @return {[type]}        true: 已经缓存过了，false：未缓存过
     */
    existPicReadUrl: function(urlNum) {
      var pic_read_url_all = wsCache.get('pic_read_url_all_' + GLOBAL.Et.qid); // xxxx,xxxx,xxxx
      // 已经缓存过了
      if (pic_read_url_all && pic_read_url_all.indexOf(urlNum) !== -1) {
        return true;
      }
      return false;
    },

    /**
     * 判断是否存储过该url编号
     * @param  {[type]} urlNum url编号
     * @return {[type]}        true: 已经缓存过了，false：未缓存过
     */
    existAutoReadUrl: function(urlNum) {
      var auto_read_url_all = wsCache.get('auto_read_url_all_' + GLOBAL.Et.qid); // xxxx,xxxx,xxxx
      // 已经缓存过了
      if (auto_read_url_all && auto_read_url_all.indexOf(urlNum) !== -1) {
        return true;
      }
      return false;
    },

    /**
     * 使当前频道分类显示在导航菜单中间(注意：此方法适用于特定的dom结构，div(parent) > a（children）)
     * @param  {[type]} $target [description]
     * @return {[type]}         [description]
     */
    scrollTo: function($target) {
      var $parent = $target.parent(),
        $newsTabs = $parent.children('a'),
        winWidth = $(window).width(),
        targetOffsetLeft = $target[0].offsetLeft,
        targetWidth = $target.width();
      $newsTabs.removeClass('active');
      $target.addClass('active');
      $parent.scrollLeft(targetOffsetLeft + targetWidth / 2 - winWidth / 2);
    },

    /**
     * 日志收集
     * @param {Object} options 自定义参数对象
     */
    addLog: function(options) {
      var pixel = GLOBAL.Util.getPixel(),
        scope = this;
      options = options || {};
      // 发送操作信息
      $.ajax({
        url: logUrl,
        data: {
          qid: scope.qid || 'null', // 渠道号
          uid: scope.userId || 'null', // 从服务器端获取的uid
          softtype: 'news', // 软件type（当前默认news）
          softname: 'eastday_wapnews', // 软件名（当前默认eastday_wapnews）
          newstype: options.ntype || scope.newsType || 'null', // 当前新闻类别
          from:
            options.fr ||
            wsCache.get('prev_newstype_' + GLOBAL.Et.qid) ||
            'null', // url上追加的fr字段
          to:
            options.to ||
            wsCache.get('current_newstype_' + GLOBAL.Et.qid) ||
            'null', // 当前页面
          os_type: scope.osType || 'null', // 客户端操作系统
          browser_type: scope.browserType || 'null', // 客户端浏览器类别
          pixel: pixel.w + '*' + pixel.h, // 客户端分辨率
          fr_url: GLOBAL.Util.getReferrer() || 'null', // 浏览器的refer属性
          loginid: 'null', // App端分享新闻时url上追加的ttaccid
          ime: 'null', // App端用户imei号
          idx: 'null', // 当前新闻的idx属性
          ishot: 'null', // 当前新闻是不是热点新闻
          ver: 'null', // App版本（1.2.9）url上追加的ver
          appqid: 'null', // App渠道号url上追加的appqid
          ttloginid: 'null', // App端分享新闻时url上追加的ttloginid
          apptypeid: GLOBAL.Util.getQueryString('apptypeid') || 'null', // App端的软件类别url上追加的apptypeid
          appver: 'null', // App版本（010209）url上追加的appver
          recommendtype: 'null', // 推荐新闻类别url上追加的recommendtype
          ispush: 'null' // 是不是推送新闻url上追加的ispush
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        success: function() {},
        error: function() {
          console.error(arguments);
        }
      });
    },

    /**
     * 收集在线日志
     */
    addOnlineLog: function() {
      var scope = this,
        infostr =
          GLOBAL.Util.getUrlNoParams() +
          '\t' +
          scope.userId +
          '\t' +
          scope.qid +
          '\tnull\tnull\tnull\t' +
          scope.newsType +
          '\t10' +
          '\tnull\tnull\t' +
          scope.osType +
          '\tnull';
      $.ajax({
        url: onlineUrl,
        data: {
          param: encodeURI(infostr)
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback'
      });
    },

    /**
     * 刷新数据
     * @param {Function} callback 回调方法
     * @return {[type]} [description]
     */
    refreshData: function(callback) {
      var scope = this;
      var cacheNews = wsCache.get(
          'news_' + scope.newsType + '_' + GLOBAL.Et.qid
        ),
        cachePos = wsCache.get(
          'news_pos_' + scope.newsType + '_' + GLOBAL.Et.qid
        ),
        cacheTxtGgIdsForPullUp = [],
        cacheTxtGgIdsForPullDown = [],
        cacheGgIdsForPullUp = [],
        cacheGgIdsForDsp = [],
        cacheGgIdsForPullDown = [];
      // 活动banner
      // try {
      //     scope.getBannerData();
      // } catch (e) { console.error(e); }
      // 更新频道广告ID
      tempGgForPullUp = GLOBAL.Et.ggForPullUp.concat();
      tempGgForDsp = GLOBAL.Et.ggForDsp.concat();
      tempGgForPullDown = GLOBAL.Et.ggForPullDown.concat();
      tempTxtGgForPullUp = GLOBAL.Et.txtGgForPullUp.concat();
      tempTxtGgForPullDown = GLOBAL.Et.txtGgForPullDown.concat();
      if (newVideoCtgQids[GLOBAL.Et.qid]) {
        // 部分渠道支持
        if (scope.newsType === 'shipin') {
          // 如果是视频频道，需要添加视频分类
          scope.loadVideoCtg();
        } else {
          // 否则删除视频分类
          scope.clearVideoCtg();
        }
      }
      if (scope.newsType === 'tupian') {
        // 如果是图片频道，需要添加图片分类
        scope.loadPicCtg();
      } else {
        // 否则删除图片分类
        scope.clearPicCtg();
      }
      if (scope.newsType === 'qiche') {
        // 如果是汽车频道，需要添加汽车分类
        scope.loadAutoCtg();
      } else {
        // 否则删除汽车分类
        scope.clearAutoCtg();
      }
      // if (scope.newsType === 'worldcup') {
      //     scope.loadopWorldCup();
      //     // console.log(250);
      // } else {
      //     scope.clearWorldCup();
      // }
      // if (['null', 'ioswechat', 'qqwechat', 'baiducom'].contains(GLOBAL.Et.qid)) {
      //     if (scope.newsType === 'tiyu') {
      //         // 如果是汽车频道，需要添加体育直播
      //         try {
      //             scope.loadSportsLive();
      //         } catch (e) { console.error(e); }
      //     } else {
      //         // 否则删除体育直播
      //         scope.clearSportsLive();
      //     }
      // }

      // 体育频道列表
      if (
        ['null', 'ioswechat', 'qqwechat', 'baiducom'].contains(GLOBAL.Et.qid)
      ) {
        if (scope.newsType === 'tiyu') {
          $('.swiper-topList').show();
          if (sportLoadFlag) {
            try {
              scope.loadSportsList();
              scope.loadSportsMatch();
              sportLoadFlag = false;
            } catch (e) {
              console.error(e);
            }
          }
        } else if (scope.newsType != 'tiyu') {
          $('.swiper-topList').hide();
        }
      }
      // 删除王者荣耀特有内容
      scope.clearWangzheHeros();
      if (cacheNews) {
        if (scope.newsType === 'wzry') {
          $newsList.before(
            wsCache.get('news_wzry_heros_' + GLOBAL.Et.qid) || ''
          );
          scope.activeSwiper();
        }
        $newsList.html(cacheNews);
        scope.imgLazyload();
        // 页面滚到记录的位置处
        if (typeof cachePos === 'number') {
          $(window).scrollTop(cachePos);
        }
        callback && callback(); // jshint ignore:line
        // 获取上拉加载了的缓存的百度ID
        cacheGgIdsForPullUp =
          wsCache.get(
            'bdggid_pullup_' + scope.newsType + '_' + GLOBAL.Et.qid
          ) || [];
        tempGgForPullUp = GLOBAL.Array.difference(
          GLOBAL.Et.ggForPullUp,
          cacheGgIdsForPullUp
        );
        // 获取上拉加载了的缓存的百度ID
        cacheGgIdsForDsp =
          wsCache.get('bdggid_dsp_' + scope.newsType + '_' + GLOBAL.Et.qid) ||
          [];
        tempGgForDsp = GLOBAL.Array.difference(
          GLOBAL.Et.ggForDsp,
          cacheGgIdsForDsp
        );
        // 获取下拉加载了的缓存的百度ID
        cacheGgIdsForPullDown =
          wsCache.get(
            'bdggid_pulldown_' + scope.newsType + '_' + GLOBAL.Et.qid
          ) || [];
        tempGgForPullDown = GLOBAL.Array.difference(
          GLOBAL.Et.ggForPullDown,
          cacheGgIdsForPullDown
        );
        // 获取上拉加载了的缓存的文字链广告ID
        cacheTxtGgIdsForPullUp =
          wsCache.get(
            'txtggid_pullup_' + scope.newsType + '_' + GLOBAL.Et.qid
          ) || [];
        tempTxtGgForPullUp = GLOBAL.Array.difference(
          GLOBAL.Et.txtGgForPullUp,
          cacheTxtGgIdsForPullUp
        );
        // 获取下拉加载了的缓存的文字链广告ID
        cacheTxtGgIdsForPullDown =
          wsCache.get(
            'txtggid_pulldown_' + scope.newsType + '_' + GLOBAL.Et.qid
          ) || [];
        tempTxtGgForPullDown = GLOBAL.Array.difference(
          GLOBAL.Et.txtGgForPullDown,
          cacheTxtGgIdsForPullDown
        );
      } else {
        // 未找到缓存的新闻，就删除缓存的广告ID 和 缓存的下拉叠加新闻的idx
        wsCache.delete('bdggid_pullup_' + scope.newsType + '_' + GLOBAL.Et.qid);
        wsCache.delete('bdggid_dsp_' + scope.newsType + '_' + GLOBAL.Et.qid);
        wsCache.delete(
          'bdggid_pulldown_' + scope.newsType + '_' + GLOBAL.Et.qid
        );
        wsCache.delete('pulldown_idx_' + scope.newsType + '_' + GLOBAL.Et.qid);
        wsCache.delete(
          'txtggid_pullup_' + scope.newsType + '_' + GLOBAL.Et.qid
        );
        wsCache.delete(
          'txtggid_pulldown_' + scope.newsType + '_' + GLOBAL.Et.qid
        );
        wsCache.delete('read_urlnum_' + scope.newsType + '_' + GLOBAL.Et.qid);
        wsCache.delete('dsp_read_index');
        wsCache.set('pgnum_' + scope.newsType + '_' + GLOBAL.Et.qid, 1, {
          exp: 40 * 60
        });
        scope.pgNum = 1;
        // 全量刷新计数
        scope.refresh_num = Number(
          wsCache.get('refresh_num_' + scope.newsType + '_' + GLOBAL.Et.qid)
        );
        scope.pulldown_total_num = Number(
          wsCache.get(
            'pulldown_total_num_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
        );
        var currTime = GLOBAL.Util.timeToString(new Date()).split(' ')[0];
        var cookieTime = wsCache.get('curr_date_list');
        if (currTime !== cookieTime) {
          // 日期不同表示到了第二天 计数重置
          scope.refresh_num = 0;
          scope.pulldown_total_num = 0;
          wsCache.set('curr_date_list', currTime, {
            exp: 24 * 3600
          });
        }
        wsCache.set(
          'refresh_num_' + scope.newsType + '_' + GLOBAL.Et.qid,
          ++scope.refresh_num,
          {
            exp: 24 * 3600
          }
        );
        wsCache.set(
          'pulldown_total_num_' + scope.newsType + '_' + GLOBAL.Et.qid,
          ++scope.pulldown_total_num,
          {
            exp: 24 * 3600
          }
        );
        if (scope.newsType === 'shipin') {
          // 视频频道新闻
          // 获取阅读历史
          scope.readUrl = scope.getVideoReadUrl();
          scope.loadVideoData(callback);
        } else if (scope.newsType === 'tupian') {
          // 图片频道新闻
          // 获取阅读历史
          scope.readUrl = scope.getPicReadUrl();
          scope.loadPicData(callback);
        } else if (scope.newsType === 'qiche') {
          // 获取阅读历史
          scope.readUrl = scope.getAutoReadUrl();
          if (scope.anewsType === 'qiche') {
            scope.loadAutoDataByQiche(callback);
          } else {
            scope.loadAutoDataByOthers(callback);
          }
        } else if (scope.newsType === 'duanzi') {
          // 获取阅读历史
          scope.readUrl = scope.getNewsReadUrl();
          scope.loadDuanziData(callback);
        } else {
          // “王者荣耀”频道
          // if(scope.newsType === 'wzry'){
          // scope.loadWangzheHeros();
          // }
          // 获取阅读历史
          scope.readUrl = scope.getNewsReadUrl();
          scope.loadNewsData(callback);
        }
      }
    },

    /**
     * 加载新闻数据
     */
    loadNewsData: function(callback) {
      var scope = this;
      var url = refreshUrl;
      var funcName = arguments.callee.name; // eslint-disable-line
      var data = {
        htps: isHttps ? '1' : '0',
        type: scope.newsType,
        recgid: scope.userId, // 用户ID
        qid: scope.qid,
        picnewsnum: 1,
        readhistory: scope.readUrl,
        zdnews: scope.getCacheStickNews('stick_news'),
        idx: 0,
        pgnum: 1,
        os: scope.osType,
        sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0,
        newsnum: GLOBAL.Et.qid === 'ccllq' ? 15 : 20,
        pos_pro: Cookies.get('cur_prov_name') || 'null',
        pos_city: Cookies.get('cur_city_name') || 'null'
      };
      if (scope.newsType === 'wzry') {
        // 王者荣耀
        url = autoUrl;
        data = {
          htps: isHttps ? '1' : '0',
          typecode: '30100001',
          startkey: '',
          newkey: '',
          pgnum: 1,
          readhistory: scope.readUrl,
          recgid: scope.userId,
          domain: 'eastday_wzry',
          qid: scope.qid,
          os: scope.osType,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0,
          newsnum: GLOBAL.Et.qid === 'ccllq' ? 15 : 20,
          pos_pro: Cookies.get('cur_prov_name') || 'null',
          pos_city: Cookies.get('cur_city_name') || 'null'
        };
      }
      $.ajax({
        url: url,
        data: data,
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: newsTimeoutQids[GLOBAL.Et.qid] ? 3000 : 8000,
        beforeSend: function() {
          ggWrapIdArr = [];
          wfkyGgWrapIdArr = [];
          $newsList.html('');
          if (GLOBAL.Et.qid === 'wfky') {
            scope.filterArea(['福建'], function(isSpecialCity) {
              if (!isSpecialCity) {
                for (var i = 0; i < 20; i++) {
                  scope.loadBaiduGg({
                    $dom: $newsList,
                    id: wfkyGgId.shift(),
                    type: 'baidu'
                  });
                }
              }
            });
          }
        },
        success: function(data) {
          if (scope.newsType === 'wzry') {
            // 加载王者荣耀banner和英雄数据
            scope.loadWangzheHeros(data.data);
            data.data = _.drop(data.data, 5);
          }
          // idx还原
          scope.idx = scope.newsType === 'wzry' ? 5 : 0;
          isFirstPage = true;
          scope.generateDom(data);
          // 页面滚到记录的位置处
          var cachePos = wsCache.get(
            'news_pos_' + scope.newsType + '_' + GLOBAL.Et.qid
          );
          if (cachePos) {
            $(window).scrollTop(cachePos);
          }
        },
        error: function(e) {
          console.error('新闻请求超时:::\n', e);
          if (newsTimeoutQids[GLOBAL.Et.qid]) {
            scope.getNewsError(funcName);
          }
        },
        complete: function() {
          callback && callback(); // jshint ignore:line
        }
      });
    },

    /**
     * 请求新闻接口超时处理
     */
    getNewsError: function(funcName) {
      var scope = this;
      scope.sendAdShowLog({
        advId: GLOBAL.Et.qid + '_xinwenchaoshi_H5'
      });
      $('#J_loading').hide();
      if (!$newsList.children('.news-error-wrap').length) {
        var height = window.screen.height - 37;
        $newsList.append(
          '<div class="news-error-wrap" style="height:' +
            height +
            'px"><a class="J-error-link" data-func="' +
            funcName +
            '"><img src="//mini.eastday.com/toutiaoh5/img/news-error.png"><p>抱歉，网络链接超时 请点击重试</p></a></div>'
        );
      }
    },

    /**
     * 加载段子频道数据
     */
    loadDuanziData: function(callback) {
      var scope = this;
      $.ajax({
        url: duanziUrl,
        data: {
          htps: isHttps ? '1' : '0',
          uid: GLOBAL.Et.uid,
          qid: GLOBAL.Et.qid,
          type: scope.newsType,
          readhistory: scope.readUrl,
          pgnum: scope.pgNum,
          domain: 'eastday_duanzi',
          idx: scope.idx,
          os: scope.osType,
          endkey: ''
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          $newsList.html('');
        },
        success: function(data) {
          // idx还原
          scope.idx = 0;
          isFirstPage = true;
          scope.generateDuanziDom(data, []);
          // 页面滚到记录的位置处
          var cachePos = wsCache.get(
            'news_pos_' + scope.newsType + '_' + GLOBAL.Et.qid
          );
          if (cachePos) {
            $(window).scrollTop(cachePos);
          }
        },
        complete: function() {
          callback && callback(); // jshint ignore:line
        }
      });
    },

    /**
     * 生成段子频道列表
     */
    generateDuanziDom: function(d, dspData) {
      var scope = this;
      var data = d && d.data;
      var len = data.length;
      if (!data || !len) {
        // $loading.hide();
        return false;
      }
      // 存储加载的新闻中的最后一条新闻的rowkey
      // wsCache.set('rowkey_' + scope.newsType, d.endkey, {exp: 24 * 3600});
      scope.startKey[scope.newsType] = data[len - 1].endkey;
      wsCache.set(
        'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        data[len - 1].endkey,
        {
          exp: 24 * 3600
        }
      );
      // var ranNum = Math.floor((len - 1) * Math.random());
      for (var i = 0; i < len; i++) {
        var item = data[i],
          cts = item.cts,
          // endkey = item.endkey,
          // headimg = item.headimg,
          // htmlname = item.htmlname,
          // imgjs = item.imgjs,
          // iscrawler = item.iscrawler,
          // mtp = item.mtp,
          // npvtype = item.npvtype,
          // psrc = item.psrc,
          // purl = item.purl,
          // rdts = item.rdts,
          // servid = item.servid,
          // title = item.title,
          // tpch = item.tpch,
          tpid = item.tpid,
          tppy = item.tppy,
          // ufr = item.ufr,
          url = item.url,
          // videojs = item.videojs,
          z0000 = item.z0000,
          zd0000 = item.zd0000,
          // artrev = item.artrev,
          zw = item.zw;

        // 非原生广告（原生广告url中不添加参数）
        url +=
          '?qid=' +
          GLOBAL.Et.qid +
          '&idx=' +
          (scope.idx + i + 1) +
          '&fr=' +
          scope.newsType +
          '&pgnum=' +
          scope.pgNum;

        $newsList.append(
          '<section class="news-item news-item-duanzi">' +
            '<a href="' +
            url +
            '" class="content" data-type="duanzi" data-tpid="' +
            tpid +
            '" data-tppy="' +
            tppy +
            '">' +
            zw +
            '</a>' +
            '<div class="options">' +
            '<span class="J-duanzi-good good" data-cts="' +
            cts +
            '" data-url="' +
            url +
            '">' +
            z0000 +
            '</span>' +
            '<span class="J-duanzi-bad bad" data-cts="' +
            cts +
            '" data-url="' +
            url +
            '">' +
            zd0000 +
            '</span>' +
            // '<span class="J-duanzi-comment comment" data-url="' + url + '">' + artrev + '</span>' +
            '</div>' +
            '</section>'
        );

        try {
          scope.loadTxtGg(i, $newsList, true);
        } catch (e) {
          console.error('loadTxtGg has error：\n', e);
        }
      }
      // 记录idx
      wsCache.set(
        'idx_' + scope.newsType + '_' + GLOBAL.Et.qid,
        scope.idx + len,
        {
          exp: 40 * 60
        }
      );
      setTimeout(function() {
        // 缓存当前类别加载的新闻（缓存40分钟）
        wsCache.set(
          'news_' + scope.newsType + '_' + GLOBAL.Et.qid,
          $newsList.html(),
          {
            exp: 40 * 60
          }
        );
      }, 400);
    },

    /**
     * 加载视频新闻数据
     */
    loadVideoData: function(callback) {
      var scope = this;
      $.ajax({
        url: videoUrl,
        data: {
          htps: isHttps ? '1' : '0',
          type: scope.vnewsType,
          startkey: '',
          recgid: scope.userId, // 用户ID
          qid: scope.qid,
          readhistory: scope.readUrl,
          idx: 0,
          pgnum: 1,
          os: scope.osType,
          newsnum: GLOBAL.Et.qid === 'ccllq' ? 15 : 20,
          domain: 'dfttvideoh5',
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          scope.clearPicCtg();
          $newsList.html('');
          ggWrapIdArr = [];
          wfkyGgWrapIdArr = [];
        },
        success: function(data) {
          // idx还原
          scope.idx = 0;
          isFirstPage = true;
          scope.generateVideoDom(data);
          // 页面滚到记录的位置处
          var cachePos = wsCache.get(
            'news_pos_' + scope.newsType + '_' + GLOBAL.Et.qid
          );
          if (cachePos) {
            $(window).scrollTop(cachePos);
          }
        },
        complete: function() {
          callback && callback(); // jshint ignore:line
        }
      });
    },

    /**
     * 加载视频频道的视频分类
     */
    loadVideoCtg: function() {
      var scope = this;
      if (!$videoCtgWrap) {
        $('body').css('padding-top', '77px');
        $videoCtgWrap = $('<div class="news-video-ctg"></div>');
        for (var i = 0; i < newVideoCtg.length; i++) {
          var video = newVideoCtg[i];
          if (scope.vnewsType === video.value) {
            $videoCtgWrap.append(
              '<a class="J-video-nav active" data-type="' +
                video.value +
                '" href="javascript:;"><img src="//mini.eastday.com/toutiaoh5/img/video/' +
                video.value +
                '.png">' +
                video.name +
                '</a>'
            );
          } else {
            $videoCtgWrap.append(
              '<a class="J-video-nav" data-type="' +
                video.value +
                '" href="javascript:;"><img src="//mini.eastday.com/toutiaoh5/img/video/' +
                video.value +
                '.png">' +
                video.name +
                '</a>'
            );
          }
        }
        // $newsList.before($videoCtgWrap);
        $('#J_content').before($videoCtgWrap);
        $videoCtgWrap.children('a').each(function() {
          var $this = $(this),
            dtype = $this.attr('data-type');
          if (dtype === scope.vnewsType) {
            setTimeout(function() {
              scope.scrollTo($this);
            }, 50);
            return false;
          }
        });
        $('.J-video-nav').on('click', function() {
          var $this = $(this);
          if ($this.hasClass('active') || newsloading) {
            return;
          }
          scope.sendPromoteNewslog({
            advId: GLOBAL.Et.qid + '_xspdh_h5'
          });
          newsloading = true;
          // 使当前频道分类显示在导航菜单中间
          scope.scrollTo($this);
          // $this.addClass('active').siblings().removeClass('active');
          scope.vnewsType = $this.attr('data-type');
          // 缓存当前图片频道de类别（缓存40分钟）
          wsCache.set('vnewstype_' + GLOBAL.Et.qid, scope.vnewsType, {
            exp: 40 * 60
          });
          // 加载点击的频道的数据
          scope.reloadData(function() {
            newsloading = false;
          });
          // scope.loadPicData();
        });
      }
    },

    /**
     * 删除视频分类
     */
    clearVideoCtg: function() {
      $('body').css('padding-top', '37px');
      $videoCtgWrap && $videoCtgWrap.remove();
      $videoCtgWrap = null;
    },

    /**
     * 删除图片分类
     */
    clearPicCtg: function() {
      $picCtgWrap && $picCtgWrap.remove();
      $picCtgWrap = null;
    },

    /**
     * 加载图片频道的图片分类
     */
    loadPicCtg: function() {
      var scope = this;
      // 添加图片分类
      if (!$picCtgWrap) {
        $picCtgWrap = $('<div class="news-pic-ctg"></div>');
        for (var i = 0; i < picCtg.length; i++) {
          var pc = picCtg[i];
          if (scope.pnewsType === pc.value) {
            $picCtgWrap.append(
              '<a class="J-pic-ctg active" data-type="' +
                pc.value +
                '" href="javascript:;">' +
                pc.name +
                '</a>'
            );
          } else {
            $picCtgWrap.append(
              '<a class="J-pic-ctg" data-type="' +
                pc.value +
                '" href="javascript:;">' +
                pc.name +
                '</a>'
            );
          }
        }
        $newsList.before($picCtgWrap);
        $picCtgWrap.children('a').each(function() {
          var $this = $(this),
            dtype = $this.attr('data-type');
          if (dtype === scope.pnewsType) {
            setTimeout(function() {
              scope.scrollTo($this);
            }, 50);
            return false;
          }
        });
        $('.J-pic-ctg').on('click', function() {
          var $this = $(this);
          if ($this.hasClass('active') || newsloading) {
            return;
          }
          newsloading = true;
          // 使当前频道分类显示在导航菜单中间
          scope.scrollTo($this);
          // $this.addClass('active').siblings().removeClass('active');
          scope.pnewsType = $this.attr('data-type');
          // 缓存当前图片频道de类别（缓存40分钟）
          wsCache.set('pnewstype_' + GLOBAL.Et.qid, scope.pnewsType, {
            exp: 40 * 60
          });
          // 加载点击的频道的数据
          scope.reloadData(function() {
            newsloading = false;
          });
          // scope.loadPicData();
        });
      }
    },

    /**
     * 加载图片频道数据
     */
    loadPicData: function(callback) {
      var scope = this;
      $.ajax({
        url: picUrl,
        data: {
          htps: isHttps ? '1' : '0',
          type: scope.pnewsType,
          startkey: '',
          recgid: scope.userId, // 用户ID
          qid: scope.qid,
          domain: 'eastday.com',
          readhistory: scope.readUrl,
          idx: 0,
          pgnum: 1,
          os: scope.osType,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0,
          newsnum: GLOBAL.Et.qid === 'ccllq' ? 15 : 20
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          $newsList.html('');
          $('#J_loading')
            .children('.spinner')
            .show();
          $('#J_loading')
            .children('.txt')
            .html('数据加载中');
        },
        success: function(data) {
          // idx还原
          scope.idx = 0;
          scope.generatePicDom(data);
          // 页面滚到记录的位置处
          var cachePos = wsCache.get(
            'news_pos_' + scope.newsType + '_' + GLOBAL.Et.qid
          );
          if (cachePos) {
            $(window).scrollTop(cachePos);
          }
        },
        complete: function() {
          callback && callback(); // jshint ignore:line
        }
      });
    },

    /**
     * 加载汽车频道数据
     */
    loadAutoDataByQiche: function(callback) {
      var scope = this;
      $.ajax({
        url: refreshUrl,
        data: {
          htps: isHttps ? '1' : '0',
          type: scope.anewsType,
          recgid: scope.userId, // 用户ID
          qid: scope.qid,
          picnewsnum: 1,
          readhistory: scope.readUrl,
          // zdnews: scope.getCacheStickNews("stick_news"),
          idx: 0,
          pgnum: 1,
          os: scope.osType,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0,
          newsnum: GLOBAL.Et.qid === 'ccllq' ? 15 : 20,
          pos_pro: Cookies.get('cur_prov_name') || 'null',
          pos_city: Cookies.get('cur_city_name') || 'null'
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          $newsList.html('');
          $('#J_loading')
            .children('.spinner')
            .show();
          $('#J_loading')
            .children('.txt')
            .html('数据加载中');
          ggWrapIdArr = [];
          wfkyGgWrapIdArr = [];
        },
        success: function(data) {
          // idx还原
          scope.idx = 0;
          isFirstPage = true;
          scope.generateAutoDom(data);
          // 页面滚到记录的位置处
          var cachePos = wsCache.get(
            'news_pos_' + scope.newsType + '_' + GLOBAL.Et.qid
          );
          if (cachePos) {
            $(window).scrollTop(cachePos);
          }
        },
        complete: function() {
          callback && callback(); // jshint ignore:line
        }
      });
    },

    /**
     * 加载汽车频道子频道（“推荐”频道除外）数据
     */
    loadAutoDataByOthers: function(callback) {
      var scope = this;
      $.ajax({
        url: autoUrl,
        data: {
          htps: isHttps ? '1' : '0',
          typecode: scope.anewsType,
          startkey: wsCache.get(
            'startkey_' + scope.anewsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.anewsType + '_' + GLOBAL.Et.qid)
            : scope.startKey[scope.anewsType],
          newkey: '',
          pgnum: scope.pgNum,
          readhistory: scope.readUrl,
          recgid: scope.userId,
          domain: 'eastday_qiche',
          qid: scope.qid,
          os: scope.osType,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0,
          newsnum: GLOBAL.Et.qid === 'ccllq' ? 15 : 20
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          $newsList.html('');
          $('#J_loading')
            .children('.spinner')
            .show();
          $('#J_loading')
            .children('.txt')
            .html('数据加载中');
          ggWrapIdArr = [];
          wfkyGgWrapIdArr = [];
        },
        success: function(data) {
          // idx还原
          scope.idx = 0;
          isFirstPage = true;
          scope.generateAutoDomByOthers(data);
          // 页面滚到记录的位置处
          var cachePos = wsCache.get(
            'news_pos_' + scope.newsType + '_' + GLOBAL.Et.qid
          );
          if (cachePos) {
            $(window).scrollTop(cachePos);
          }
        },
        complete: function() {
          callback && callback(); // jshint ignore:line
        }
      });
    },

    /**
     * 删除汽车分类
     */
    clearAutoCtg: function() {
      $autoNavWrap && $autoNavWrap.remove(); // jshint ignore:line
      $autoNavWrap = null;
    },

    /**
     * 删除世界杯分类
     */
    // clearWorldCup: function () {
    //     $('.opList') && $('.opList').remove();
    // },

    /**
     * 加载汽车频道的汽车分类
     */
    loadAutoCtg: function() {
      var scope = this,
        $autoCtgWrap = null,
        carUrl = 'https://mini.eastday.com/toutiaoh5/model_list.html',
        className = '',
        advId = '';
      // 添加汽车分类
      if (!$autoNavWrap) {
        if (GLOBAL.Et.qid === 'null') {
          advId = 'mopauto_chexingdaquan';
          className = 'J-promote-news';
          carUrl = 'https://mauto.mop.com/#lookAuto?qid02624';
        }
        $autoNavWrap = $(
          '<div class="auto-nav">' +
            '<div class="auto-nav-top">' +
            '<a class="' +
            className +
            ' auto-all" data-advid="' +
            advId +
            '" href=' +
            carUrl +
            '>' +
            '<span class="icon"></span><span class="txt">车型大全</span>' +
            '</a>' +
            '<a href="//mini.eastday.com/toutiaoh5/car_video.html" class="auto-guide">' +
            '<span class="icon"></span><span class="txt">汽车视频</span>' +
            '</a>' +
            '</div>' +
            '</div>'
        );
        $autoCtgWrap = $('<div class="auto-nav-bottom"></div>');
        for (var i = 0; i < autoCtg.length; i++) {
          var at = autoCtg[i];
          if (scope.anewsType === at.value) {
            $autoCtgWrap.append(
              '<div class="auto-ctg-wrap"><a class="J-auto-ctg auto-ctg active" data-type="' +
                at.value +
                '" href="javascript:;">' +
                at.name +
                '</a></div>'
            );
          } else {
            $autoCtgWrap.append(
              '<div class="auto-ctg-wrap"><a class="J-auto-ctg auto-ctg" data-type="' +
                at.value +
                '" href="javascript:;">' +
                at.name +
                '</a></div>'
            );
          }
        }
        $newsList.before($autoNavWrap.append($autoCtgWrap));
        $('.J-auto-ctg').on('click', function(e) {
          var $this = $(this);
          var fr = '';
          if ($this.hasClass('active') || newsloading) {
            return;
          }
          newsloading = true;
          $('.J-auto-ctg').each(function() {
            var $this = $(this);
            if ($this.hasClass('active')) {
              fr = $this.attr('data-type');
              return false;
            }
          });
          $this
            .addClass('active')
            .parent()
            .siblings()
            .children('a')
            .removeClass('active');
          scope.anewsType = $this.attr('data-type');
          // 缓存当前图片频道de类别（缓存40分钟）
          wsCache.set('anewstype_' + GLOBAL.Et.qid, scope.anewsType, {
            exp: 40 * 60
          });
          // 加载点击的频道的数据
          scope.reloadData(function() {
            newsloading = false;
          });
          // 日志发送
          scope.addLog({
            ntype: 'qiche',
            fr: fr,
            to: scope.anewsType
          });
        });
      }
    },

    /**
     * 世界杯类别
     */
    // loadopWorldCup: function () {
    //     var url = 'https://msports.eastday.com/theme/worldcup.html?qid=qid10602';
    //     var opsHeight = GLOBAL.Util.getPixel().h;
    //     var opHeight = opsHeight - 36 + 'px';
    //     $newsList.before('<div class="opList"><iframe name="sonIframe" id="objid" src="' + url + '" width="100%" height="' + opHeight + '" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="yes" allowtransparency="yes"></iframe></div>');
    //     $('#J_loading').hide();
    // },

    /**
     * 加载体育直播列表数据
     */
    loadSportsList: function() {
      var scope = this;
      scope.getSportsListData(function(data) {
        var rst = data.data || [];
        if (!rst.length) {
          return;
        }
        var swiperSportArr = [];
        var sportsListImg = [
          'https://mini.eastday.com/toutiaoh5/img/sport/zhibo.png',
          'https://mini.eastday.com/toutiaoh5/img/sport/nba.png',
          'https://mini.eastday.com/toutiaoh5/img/sport/cba.png',
          'https://mini.eastday.com/toutiaoh5/img/sport/zhongchao.png',
          'https://mini.eastday.com/toutiaoh5/img/sport/yingchao.png',
          'https://mini.eastday.com/toutiaoh5/img/sport/xiajia.png',
          'https://mini.eastday.com/toutiaoh5/img/sport/yijia.png',
          'https://mini.eastday.com/toutiaoh5/img/sport/dejia.png',
          'https://mini.eastday.com/toutiaoh5/img/sport/yaguan.png',
          'https://mini.eastday.com/toutiaoh5/img/sport/ouguan.png',
          'https://mini.eastday.com/toutiaoh5/img/sport/fajia.png'
        ];
        var $sportListContainer = $('<div class="swiper-topList"></div>');
        var $sportSwiperContainer = $('<div class="swiper-containers"></div>');
        var $sportSwiperWrapper = $(
          '<div class="swiper-wrapper top-swiper"></div>'
        );
        // var sportFlag = false;
        for (var i = 0; i < rst.length; i++) {
          var sportData = rst[i];
          var $sportListDom = $(
            '<div class="swiper-slide"><a class="sport-listLog J-promote-news" data-advid="tioutiaoh5_tiyusslb" href=' +
              sportData.url +
              '><img class= "sportList" src= ' +
              sportsListImg[i] +
              '><div class="sportTxt">' +
              sportData.name +
              '</div></a ></div>'
          );
          swiperSportArr.push($sportListDom);
        }
        swiperSportArr.join('');
        var $sportDomStep1 = $sportSwiperWrapper.append(swiperSportArr);
        var $sportDomStep2 = $sportSwiperContainer.append($sportDomStep1);
        var $sportDomStep3 = $sportListContainer.append($sportDomStep2);
        $newsList.before($sportDomStep3);
        var swiper = new Swiper('.swiper-containers', {
          // eslint-disable-line
          slidesPerView: 5,
          spaceBetween: 0,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        });
      });
    },

    loadSportsMatch: function() {
      var scope = this;
      scope.getSportsMatchData(function(data) {
        var rst = data.data || [];
        if (!rst.length) {
          return;
        }
        var swiperSportMatchArr = [];
        var $sportMatchContainer = $('.swiper-topList');
        var $sportsShiPin = $('<div class="sportsShiPin"></div>');
        var $swiperZhiBo = $(
          '<div class="swiper-container swiper-zhibo" ></div>'
        );
        // var sportFlag = false;
        // var sportsStatus = '';
        // var sportsScore = '';
        var curTime = rst[0].currentServerTime;
        var $sportListDom = '';
        var sportsStatusArr = [];
        var transNum = '';
        var sportsStatusArrFlag = true;
        var sportWeight = GLOBAL.Util.getPixel().w;
        var sportCenterNum = (sportWeight - 260) / 2;
        var type = '';
        var score = '';
        for (var i = 0; i < rst.length; i++) {
          var sportsMatchData = rst[i];
          // var sportTitle = sportsMatchData.title.split(' ');
          var ismatched = parseInt(sportsMatchData.ismatched);
          sportsStatusArr.push(ismatched);
          if (ismatched === 1) {
            type = '集锦';
            score =
              sportsMatchData.home_score + ' : ' + sportsMatchData.visit_score;
            if (sportsStatusArrFlag) {
              transNum = -((rst.length - 2) * 250 + 120);
            }
          } else if (ismatched === -1) {
            if (sportsStatusArrFlag) {
              transNum = sportsStatusArr.indexOf(-1);
              transNum = -(transNum * 250 - sportCenterNum);
              sportsStatusArrFlag = false;
              // console.log(transNum);
            }
            type = '未开始';
            score = GLOBAL.Util.getSpecialTimeStrForLive(
              sportsMatchData.starttime,
              curTime
            );
          } else {
            transNum = sportsStatusArr.indexOf(0);
            transNum = -(transNum * 250 - sportCenterNum);
            sportsStatusArrFlag = false;
            type = '直播中';
            score =
              sportsMatchData.home_score + ' : ' + sportsMatchData.visit_score;
          }
          if (sportsMatchData.home_logoname && sportsMatchData.visit_logoname) {
            $sportListDom = $(
              '<div class="swiper-slide slide-bgc" ><section class="sec-match" id="secMatch"><ul class= "clearfix sports-bgc" ><li class="clearfix" id="sports-li"><a class="J-promote-news clearfix" data-advid="tioutiaoh5_tiyutjss" href=' +
                sportsMatchData.liveurl +
                '><h3>' +
                sportsMatchData.title02 +
                '</h3><div class="teams"><img src=' +
                sportsMatchData.home_logoname +
                '><p>' +
                sportsMatchData.home_team +
                '</p></div><div class="info swiper-info" ><div class="score">' +
                score +
                '</div><span class="' +
                (type === '未开始' ? 'white' : '') +
                '" >' +
                type +
                '</span></div><div class="teams"><img src=' +
                sportsMatchData.visit_logoname +
                '><p>' +
                sportsMatchData.visit_team +
                '</p></div></a></li></ul></section><div>'
            );
          } else {
            $sportListDom = $(
              '<div class="swiper-slide slide-bgc"><section class="sec-match" id="secMatchs"><ul class= "clearfix sports-bgc" id="else-ul" ><li class="clearfix" id="sports-li"><a class="J-promote-news data-advid="tioutiaoh5_tiyutjss" clearfix" id="else-a" href=' +
                sportsMatchData.liveurl +
                '><h3 id="else-h3">' +
                sportsMatchData.title02 +
                '</h3><h3 id="else-h4">' +
                sportsMatchData.title +
                '</h3><div class="info" id="infoContainer"><div class="scores fl else-score">' +
                score +
                '</div><span class="' +
                (type === '未开始' ? 'white' : '') +
                ' else-span">' +
                type +
                '</span></div></a></li></ul></section><div>'
            );
          }
          swiperSportMatchArr.push($sportListDom);
        }
        var $sportSwiperContainer = $(
          '<div class="swiper-wrapper" style="transform: translateX(' +
            transNum +
            'px)"></div>'
        );
        swiperSportMatchArr.join('');
        var $sportDomStep11 = $sportSwiperContainer.append(swiperSportMatchArr);
        var $sportDomStep22 = $swiperZhiBo.append($sportDomStep11);
        var $sportDomStep33 = $sportsShiPin.append($sportDomStep22);
        $sportMatchContainer.append($sportDomStep33);
        var swiper = new Swiper('.swiper-container', {
          // eslint-disable-line
          slidesPerView: 'auto',
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            loopedSlides: 88
          }
        });
      });
    },

    /**
     * 获取体育列表数据
     */
    getSportsListData: function(callback) {
      $.ajax({
        url: sportsListUrl,
        data: {
          ime: GLOBAL.Et.uid,
          position: '',
          accid: '',
          key: '',
          softtype: 'H5TT_tiyutype',
          softname: 'tioutiaoh5_tiyutype',
          appqid: '',
          apptypeid: '',
          ver: '',
          os: GLOBAL.Util.getOsType(),
          appver: '',
          deviceid: ''
        },
        type: 'POST',
        dataType: 'jsonp',
        success: function(data) {
          callback && callback(data);
        },
        error: function(jqXHR, textStatus) {
          console.error(textStatus);
        }
      });
    },

    /**
     * 加载体育比赛数据
     */
    getSportsMatchData: function(callback) {
      $.ajax({
        url: sportsMatchUrl,
        data: {
          ime: GLOBAL.Et.uid,
          position: '',
          accid: '',
          key: '',
          softtype: 'H5TT_tiyutype',
          softname: 'tioutiaoh5_tiyutype',
          appqid: '',
          apptypeid: '',
          ver: '',
          os: GLOBAL.Util.getOsType(),
          appver: '',
          deviceid: ''
        },
        type: 'POST',
        dataType: 'jsonp',
        success: function(data) {
          callback && callback(data);
        },
        error: function(jqXHR, textStatus) {
          console.error(textStatus);
        }
      });
    },

    /**
     * 删除体育分类
     */
    // clearSportsLive: function () {
    //     $sportsLiveWrap && $sportsLiveWrap.remove(); // jshint ignore:line
    //     $sportsLiveWrap = null;
    // },

    /**
     * 加载体育频道的体育直播
     */
    // loadSportsLive: function () {
    //     var scope = this,
    //         $autoCtgWrap = null;
    //     scope.clearSportsLive();
    //     // 添加图片分类
    //     if (!$sportsLiveWrap) {
    //         scope.getSportsLiveData(function (data) {
    //             var d = data.data || [];
    //             if (!d.length) {
    //                 return;
    //             }
    //             var $sportsLiveUl = $('<ul class="clearfix"></ul>');
    //             var type = '';
    //             var url = '';
    //             var score = '';
    //             var titleArr = '';
    //             var title = '';
    //             var advid = 'dftth5_to_msportslive_l';
    //             var curTime = d[0].currentServerTime;
    //             $sportsLiveWrap = $('<section class="sec-match" id="secMatch"></section>');
    //             for (var i = 0; i < d.length; i++) {
    //                 var ismatched = parseInt(d[i].ismatched);
    //                 if (ismatched === -1) {
    //                     type = '未开始';
    //                     url = d[i].liveurl + '?qid=dftth5&redirect=dftth5&tab=saikuang';
    //                     score = GLOBAL.Util.getSpecialTimeStrForLive(d[i].starttime, curTime);
    //                 } else if (ismatched === 0) {
    //                     type = '直播中';
    //                     url = d[i].liveurl + '?qid=dftth5&redirect=dftth5';
    //                     score = d[i].home_score + ' : ' + d[i].visit_score;
    //                 } else {
    //                     type = '集锦';
    //                     url = d[i].liveurl + '?qid=dftth5&redirect=dftth5&tab=saikuang';
    //                     score = d[i].home_score + ' : ' + d[i].visit_score;
    //                 }
    //                 titleArr = d[i].title.split(' ');
    //                 title = titleArr.length > 1 ? titleArr[1] : titleArr[0];
    //                 advid = (i === 0 ? 'dftth5_to_msportslive_l' : 'dftth5_to_msportslive_r');
    //                 $sportsLiveUl.append('<li class="clearfix">' +
    //                     '<a class="J-sportslive clearfix" href="' + url + '" data-advid="' + advid + '">' +
    //                     '<h3>' + title + '</h3>' +
    //                     '<div class="team">' +
    //                     '<img src="' + d[i].home_logoname + '" alt="">' +
    //                     '<p>' + d[i].home_team + '</p>' +
    //                     '</div>' +
    //                     '<div class="info">' +
    //                     '<div class="score">' + score + '</div>' +
    //                     '<span class="' + (type === '未开始' ? 'white' : '') + '">' + type + '</span>' +
    //                     '</div>' +
    //                     '<div class="team">' +
    //                     '<img src="' + d[i].visit_logoname + '" alt="">' +
    //                     '<p>' + d[i].visit_team + '</p>' +
    //                     '</div>' +
    //                     '</a>' +
    //                     '</li>');
    //                 // 调用show统计接口
    //                 scope.sendAdShowLog(advId: advid, advUrl: url);
    //             }
    //             $newsList.before($sportsLiveWrap.append($sportsLiveUl));
    //             $('.J-sportslive').on('click', function (e) {
    //                 e.preventDefault();
    //                 var href = $(this).attr('href');
    //                 var advId = $(this).attr('data-advid');
    //                 scope.sendPromoteNewslog({
    //                     advUrl: href,
    //                     advId: advId,
    //                     callback: function () {
    //                         window.location.href = href;
    //                     }
    //                 });
    //             });
    //         });
    //     }
    // },

    /**
     * 获取体育直播数据
     */
    // getSportsLiveData: function (callback) {
    //     $.ajax({
    //         url: sportsLiveUrl,
    //         data: {
    //             os: GLOBAL.Util.getOsType(),
    //             recgid: GLOBAL.Et.uid,
    //             qid: GLOBAL.Et.qid,
    //             domain: 'eastday_tiyu'
    //         },
    //         dataType: 'jsonp',
    //         jsonp: 'callback',
    //         timeout: 8000,
    //         beforeSend: function () {

    //         },
    //         success: function (data) {
    //             callback && callback(data);
    //         },
    //         error: function (jqXHR, textStatus) {
    //             console.error(textStatus);
    //         }
    //     });
    // },

    /**
     * 加载“王者荣耀”频道英雄数据
     * @param  {[type]} data banner数据
     * @return {[type]}      [description]
     */
    loadWangzheHeros: function(data) {
      var scope = this;
      var $wangzheContainer = $('<div class="wangzhe-container"></div>');
      var $swiperContainer = $('<div class="swiper-container"></div>');
      var $swiperWrapper = $('<div class="swiper-wrapper"></div>');
      var $heroList = $('<div class="hero-list"></div>');
      var swiperSlideArr = [];
      var i = 0;
      var imgUrlPre = '//mini.eastday.com/toutiaoh5/img/wangzhe/';
      var urlPre = '//mini.eastday.com/wzry/';
      var urlParams = '?qid=' + scope.qid + '&fr=wzry';
      var topHeroData = [
        {
          name: '大乔',
          avatar: imgUrlPre + 'hero1.png',
          url: urlPre + '30200068.html' + urlParams
        },
        {
          name: '诸葛亮',
          avatar: imgUrlPre + 'hero2.png',
          url: urlPre + '30200026.html' + urlParams
        },
        {
          name: '张飞',
          avatar: imgUrlPre + 'hero3.png',
          url: urlPre + '30200052.html' + urlParams
        },
        {
          name: '哪吒',
          avatar: imgUrlPre + 'hero4.png',
          url: urlPre + '30200007.html' + urlParams
        },
        {
          name: '东皇太一',
          avatar: imgUrlPre + 'hero5.png',
          url: urlPre + '30200043.html' + urlParams
        }
      ];

      for (i = 0; i < topHeroData.length; i++) {
        $heroList.append(
          '<a class="hero-item" href="' +
            topHeroData[i].url +
            '">' +
            '<img class="avatar" src="' +
            topHeroData[i].avatar +
            '" alt="">' +
            '<span class="name">' +
            topHeroData[i].name +
            '</span>' +
            '</a>'
        );
      }
      $heroList.append(
        '<a href="//mini.eastday.com/toutiaoh5/wangzhery/hero_list.html" class="hero-more">更多英雄</a>'
      );

      for (i = 0; i < 5; i++) {
        var item = data[i],
          url = item.url,
          topic = item.topic,
          lbImgArr = item.lbimg,
          recommendtype = item.recommendtype ? item.recommendtype : '-1',
          hotnews = item.hotnews,
          type = item.type,
          subtype = item.subtype;
        url +=
          '?idx=' +
          (i + 1) +
          '&recommendtype=' +
          recommendtype +
          '&ishot=' +
          hotnews +
          '&fr=' +
          scope.newsType +
          '&pgnum=1';
        swiperSlideArr.push(
          '<div class="swiper-slide">' +
            '<a href="' +
            url +
            '" data-type="' +
            type +
            '" data-subtype="' +
            subtype +
            '">' +
            '<img src="' +
            (lbImgArr.length ? lbImgArr[0].src : '') +
            '" alt="' +
            lbImgArr[0].alt +
            '" width="100%">' +
            '<p class="desc">' +
            topic +
            '</p>' +
            '</a>' +
            '</div>'
        );
      }

      $swiperWrapper.append(swiperSlideArr.join(''));
      $swiperContainer
        .append($swiperWrapper)
        .append('<div class="swiper-pagination"></div>');
      $wangzheContainer.append($swiperContainer).append($heroList);
      $newsList.before($wangzheContainer);
      scope.activeSwiper();
      wsCache.set(
        'news_wzry_heros_' + GLOBAL.Et.qid,
        $wangzheContainer[0].outerHTML
      );
    },

    /**
     * 激活轮播功能
     * @return {[type]} [description]
     */
    activeSwiper: function() {
      var swiper = new Swiper('.swiper-container', {
        // eslint-disable-line
        pagination: '.swiper-pagination',
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        loop: true,
        paginationType: 'fraction'
      });
    },

    /**
     * 清空王者荣耀英雄和轮播
     * @return {[type]} [description]
     */
    clearWangzheHeros: function() {
      $('.wangzhe-container').remove();
    },

    /**
     * 上拉加载数据
     * @return {[type]} [description]
     */
    pullUpLoadData: function() {
      var scope = this;
      // 页码（获取之后加一再存储）
      scope.pgNum = Number(
        wsCache.get('pgnum_' + scope.newsType + '_' + GLOBAL.Et.qid)
      );
      wsCache.set(
        'pgnum_' + scope.newsType + '_' + GLOBAL.Et.qid,
        ++scope.pgNum,
        {
          exp: 24 * 3600
        }
      );
      // 获取链接索引
      scope.idx = Number(
        wsCache.get('idx_' + scope.newsType + '_' + GLOBAL.Et.qid)
      );
      if (!scope.idx) {
        scope.idx = 0;
      }
      if (scope.newsType === 'shipin') {
        // 获取阅读历史
        scope.readUrl = scope.getVideoReadUrl();
        scope.pullUpLoadVideoData();
      } else if (scope.newsType === 'tupian') {
        // 获取阅读历史
        scope.readUrl = scope.getPicReadUrl();
        scope.pullUpLoadPicData();
      } else if (scope.newsType === 'qiche') {
        // 获取阅读历史
        scope.readUrl = scope.getAutoReadUrl();
        if (scope.anewsType === 'qiche') {
          // scope.loadAutoDataByQiche();
          scope.pullUpLoadAutoDataByQiche();
        } else {
          // scope.loadAutoDataByOthers();
          scope.pullUpLoadAutoDataByOthers();
        }
      } else if (scope.newsType === 'duanzi') {
        scope.pullUpLoadDuanziData();
      } else {
        // 获取阅读历史
        scope.readUrl = scope.getNewsReadUrl();
        scope.pullUpLoadNewsData();
      }
    },

    /**
     * 上拉加载段子频道数据
     */
    pullUpLoadDuanziData: function() {
      var scope = this;
      $.ajax({
        url: duanziUrl,
        data: {
          htps: isHttps ? '1' : '0',
          uid: GLOBAL.Et.uid,
          qid: GLOBAL.Et.qid,
          type: scope.newsType,
          readhistory: scope.readUrl,
          pgnum: scope.pgNum,
          domain: 'eastday_duanzi',
          idx: scope.idx,
          os: scope.osType,
          endkey: wsCache.get(
            'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.startKey
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          scope.pullUpFlag = false;
          // $newsList.html('');
          // $loading.show();
        },
        success: function(data) {
          isFirstPage = false;
          scope.generateDuanziDom(data, []);
          // 上拉加载标志（前一页数据未渲染完，不允许加载下一页数据）
          scope.pullUpFlag = true;
        },
        error: function(jqXHR, textStatus) {
          console.error(textStatus);
        },
        complete: function() {
          // scope.pullUpFlag = true;
          // $loading.hide();
        }
      });
    },

    /**
     * 上拉加载新闻数据
     */
    pullUpLoadNewsData: function() {
      var scope = this;
      var url = pullUpUrl;
      var funcName = arguments.callee.name; // eslint-disable-line
      var data = {
        htps: isHttps ? '1' : '0',
        type: scope.newsType,
        startkey: wsCache.get(
          'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid
        )
          ? wsCache.get('startkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
          : scope.startKey[scope.newsType],
        lastkey: wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
          ? wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
          : scope.endKey[scope.newsType],
        tagskey: wsCache.get('tagskey_' + scope.newsType + '_' + GLOBAL.Et.qid)
          ? wsCache.get('tagskey_' + scope.newsType + '_' + GLOBAL.Et.qid)
          : scope.tagsKey[scope.newsType],
        newsnum: GLOBAL.Et.qid === 'ccllq' ? 15 : 20,
        zdnews: scope.getCacheStickNews('stick_news'),
        qid: scope.qid,
        readhistory: scope.readUrl,
        idx: scope.idx,
        recgid: scope.userId, // 用户ID
        pgnum: scope.pgNum,
        os: scope.osType,
        sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0,
        pos_pro: Cookies.get('cur_prov_name') || 'null',
        pos_city: Cookies.get('cur_city_name') || 'null'
      };
      if (scope.newsType === 'wzry') {
        // 王者荣耀
        url = autoUrl;
        data = {
          htps: isHttps ? '1' : '0',
          typecode: '30100001',
          startkey: wsCache.get(
            'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.startKey[scope.newsType],
          newkey: '',
          pgnum: scope.pgNum,
          readhistory: scope.readUrl,
          recgid: scope.userId,
          domain: 'eastday_wzry',
          qid: scope.qid,
          os: scope.osType,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0,
          newsnum: GLOBAL.Et.qid === 'ccllq' ? 15 : 20
        };
      }
      $.ajax({
        url: url,
        data: data,
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: newsTimeoutQids[GLOBAL.Et.qid] ? 3000 : 8000,
        beforeSend: function() {
          scope.pullUpFlag = false;
          ggWrapIdArr = [];
          wfkyGgWrapIdArr = [];
          // $newsList.html('');
          // $loading.show();
        },
        success: function(data) {
          isFirstPage = false;
          scope.generateDom(data);
          // 上拉加载标志（前一页数据未渲染完，不允许加载下一页数据）
          scope.pullUpFlag = true;
        },
        error: function(e) {
          console.error('新闻请求超时:::\n', e);
          if (newsTimeoutQids[GLOBAL.Et.qid]) {
            scope.getNewsErrorForPullUp(funcName);
          }
        },
        complete: function() {
          // scope.pullUpFlag = true;
          // $loading.hide();
        }
      });
    },

    /**
     * 请求新闻接口超时处理
     */
    getNewsErrorForPullUp: function(funcName) {
      var scope = this;
      scope.sendAdShowLog({
        advId: GLOBAL.Et.qid + '_xinwenchaoshi_H5'
      });
      $('#J_loading').hide();
      if (!$newsList.children('.news-error-pullup').length) {
        $newsList.append(
          '<div class="news-error-pullup"><a class="J-error-link read-position" data-func="' +
            funcName +
            '">网络请求异常，点击重试</a></div>'
        );
      }
    },

    /**
     * 上拉加载"汽车"频道 - "推荐"新闻数据
     */
    pullUpLoadAutoDataByQiche: function() {
      var scope = this;
      $.ajax({
        url: pullUpUrl,
        data: {
          htps: isHttps ? '1' : '0',
          type: scope.anewsType,
          startkey: wsCache.get(
            'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.startKey[scope.newsType],
          lastkey: wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            ? wsCache.get('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.endKey[scope.newsType],
          tagskey: wsCache.get(
            'tagskey_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('tagskey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.tagsKey[scope.newsType],
          newsnum: GLOBAL.Et.qid === 'ccllq' ? 15 : 20,
          // zdnews: scope.getCacheStickNews("stick_news"),
          qid: scope.qid,
          readhistory: scope.readUrl,
          idx: scope.idx,
          recgid: scope.userId, // 用户ID
          pgnum: scope.pgNum,
          os: scope.osType,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0,
          pos_pro: Cookies.get('cur_prov_name') || 'null',
          pos_city: Cookies.get('cur_city_name') || 'null'
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          scope.pullUpFlag = false;
          ggWrapIdArr = [];
          wfkyGgWrapIdArr = [];
          // $newsList.html('');
          // $loading.show();
        },
        success: function(data) {
          isFirstPage = false;
          scope.generateAutoDom(data);
          // 上拉加载标志（前一页数据未渲染完，不允许加载下一页数据）
          scope.pullUpFlag = true;
        },
        error: function(jqXHR, textStatus) {
          console.error(textStatus);
        },
        complete: function() {
          // scope.pullUpFlag = true;
          // $loading.hide();
        }
      });
    },

    /**
     * 上拉加载"汽车"频道 - 除"推荐"新闻数据
     */
    pullUpLoadAutoDataByOthers: function() {
      var scope = this;
      $.ajax({
        url: autoUrl,
        data: {
          htps: isHttps ? '1' : '0',
          typecode: scope.anewsType,
          startkey: wsCache.get(
            'startkey_' + scope.anewsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.anewsType + '_' + GLOBAL.Et.qid)
            : scope.startKey[scope.anewsType],
          newkey: '',
          pgnum: scope.pgNum,
          readhistory: scope.readUrl,
          recgid: scope.userId,
          domain: 'eastday_qiche',
          qid: scope.qid,
          os: scope.osType,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0,
          newsnum: GLOBAL.Et.qid === 'ccllq' ? 15 : 20
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          scope.pullUpFlag = false;
          ggWrapIdArr = [];
          wfkyGgWrapIdArr = [];
          // $newsList.html('');
          // $loading.show();
        },
        success: function(data) {
          isFirstPage = false;
          scope.generateAutoDomByOthers(data);
          // 上拉加载标志（前一页数据未渲染完，不允许加载下一页数据）
          scope.pullUpFlag = true;
        },
        error: function(jqXHR, textStatus) {
          console.error(textStatus);
        },
        complete: function() {
          // scope.pullUpFlag = true;
          // $loading.hide();
        }
      });
    },

    /**
     * 上拉加载"视频"频道数据
     */
    pullUpLoadVideoData: function() {
      var scope = this;
      $.ajax({
        url: videoUrl,
        data: {
          htps: isHttps ? '1' : '0',
          type: scope.vnewsType,
          idx: scope.idx,
          startkey: wsCache.get(
            'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.startKey[scope.newsType],
          recgid: scope.userId, // 用户ID
          qid: scope.qid,
          readhistory: scope.readUrl,
          pgnum: scope.pgNum,
          os: scope.osType,
          domain: 'dfttvideoh5',
          newsnum: GLOBAL.Et.qid === 'ccllq' ? 15 : 20,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          scope.pullUpFlag = false;
          ggWrapIdArr = [];
          wfkyGgWrapIdArr = [];
          // $newsList.html('');
          // $loading.show();
        },
        success: function(data) {
          isFirstPage = false;
          scope.generateVideoDom(data);
          // 上拉加载标志（前一页数据未渲染完，不允许加载下一页数据）
          scope.pullUpFlag = true;
        },
        error: function(jqXHR, textStatus) {
          console.error(textStatus);
        },
        complete: function() {
          scope.pullUpFlag = true;
          // $loading.hide();
        }
      });
    },

    /**
     * 上拉加载"图片"频道数据
     */
    pullUpLoadPicData: function() {
      var scope = this;
      $.ajax({
        url: picUrl,
        data: {
          htps: isHttps ? '1' : '0',
          type: scope.pnewsType,
          newsnum: GLOBAL.Et.qid === 'ccllq' ? 15 : 20,
          idx: scope.idx,
          startkey: wsCache.get(
            'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid
          )
            ? wsCache.get('startkey_' + scope.newsType + '_' + GLOBAL.Et.qid)
            : scope.startKey[scope.newsType],
          recgid: scope.userId, // 用户ID
          qid: scope.qid,
          domain: 'eastday.com',
          readhistory: scope.readUrl,
          pgnum: scope.pgNum,
          os: scope.osType,
          sclog: newNewsQids.contains(GLOBAL.Et.qid) ? 1 : 0
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 8000,
        beforeSend: function() {
          scope.pullUpFlag = false;
          $('#J_loading')
            .children('.spinner')
            .show();
          $('#J_loading')
            .children('.txt')
            .html('数据加载中');
        },
        success: function(data) {
          scope.generatePicDom(data);
        },
        error: function(jqXHR, textStatus) {
          console.error('pullUpLoadPicData: \n', textStatus);
        },
        complete: function() {
          scope.pullUpFlag = true;
        }
      });
    },

    /**
     * 图片懒加载
     */
    imgLazyload: function() {
      $('img[data-original]').lazyload({
        threshold: 100,
        placeholder:
          'data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw=='
      });
    },

    /**
     * 上拉加载完 缓存idx和新闻内容
     */
    pullUpComplete: function(len) {
      var scope = this;
      scope.imgLazyload();
      try {
        scope.loadGg();
      } catch (e) {
        console.log('loadGg has error::\n', e);
      }
      // 记录idx
      wsCache.set(
        'idx_' + scope.newsType + '_' + GLOBAL.Et.qid,
        scope.idx + len,
        {
          exp: 40 * 60
        }
      );
      setTimeout(function() {
        // 缓存当前类别加载的新闻（缓存40分钟）
        wsCache.set(
          'news_' + scope.newsType + '_' + GLOBAL.Et.qid,
          $newsList.html(),
          {
            exp: 40 * 60
          }
        );
      }, 400);
    },

    /**
     * 将数据组装成html代码
     * @param  {[type]} d 数据
     * @return {[type]}   [description]
     */
    generateDom: function(d) {
      var scope = this;
      var data = d && d.data;
      if (!data || !data.length) {
        // $loading.hide();
        return false;
      }
      // 接口返回的endkey作为下一次请求的startkey参数的值
      scope.startKey[scope.newsType] = d.endkey;
      wsCache.set(
        'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        d.endkey,
        {
          exp: 24 * 3600
        }
      );
      // 接口返回的newkey作为下一次请求的lastkey参数的值
      scope.endKey[scope.newsType] = d.newkey;
      wsCache.set('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid, d.newkey, {
        exp: 24 * 3600
      });
      // 接口返回的tagskey作为下一次请求的tagskey参数的值
      scope.tagsKey[scope.newsType] = d.tagskey;
      wsCache.set(
        'tagskey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        d.tagskey,
        {
          exp: 24 * 3600
        }
      );

      var len = data.length;
      var inviewIdx = 0; // 进屏日志idx参数 不会因为新闻被去重影响计数 value:1-20
      for (var i = 0; i < len; i++) {
        var item = data[i],
          url = item.url,
          urlNum = url.substring(
            url.lastIndexOf('/') + 1,
            url.indexOf('.html')
          ),
          dateStr = item.date,
          topic = item.topic,
          source = item.source,
          // accurateurl = item.accurateurl,
          imgArr = item.miniimg,
          imgGifArr = item.imggif,
          recommendtype = item.recommendtype ? item.recommendtype : '-1',
          hotnews = item.hotnews,
          batcheid = item.batcheid || 'null',
          recommendurl = item.recommendurl || 'null',
          ispicnews = item.ispicnews, // 大图新闻(1)、小图新闻(0)、无图新闻(-1)
          videonews = item.videonews, // 视频新闻
          // videoList = item.videolist, // 视频列表
          type = item.type,
          subtype = item.subtype || 'null',
          // rowkey = item.rowkey,
          titledisplay = item.titledisplay || '', // 用于判断标签类别
          iszd = Number(item.zd) || '', // 置顶
          ishot = Number(item.hotnews), // 热门
          isrec = Number(item.isrecom), // 推荐
          issptopic = Number(item.issptopic), // 专题
          isvideo = Number(item.isvideo), // 视频
          isadv = Number(item.isadv) || '', // 广告
          isnuanwen = Number(item.isnxw), // 暖文
          commentCount = Number(item.comment_count), // 评论数
          urlpv = Number(item.urlpv), // 浏览量
          picnums = item.picnums, // 图片数量
          suptop = item.suptop,
          tagId = item.tagId || '',
          // praisecnt = item.praisecnt, // 顶
          // tramplecnt = item.tramplecnt, // 踩
          commentCountStr = '',
          urlpvStr = '',
          aStr = '',
          imgClass = '',
          tagStr = '';

        if (testQids[GLOBAL.Et.qid]) {
          // 使用16:9样式
          imgClass = 'b';
        }
        var imgLen = imgArr.length;
        var imgGifLen = imgGifArr ? imgGifArr.length : 0;
        if (newNewsQids.contains(GLOBAL.Et.qid)) {
          scope.readUrlNum =
            JSON.parse(
              wsCache.get('read_urlnum_' + scope.newsType + '_' + GLOBAL.Et.qid)
            ) || {};
          if (scope.readUrlNum[urlNum]) {
            // 前端对加载过的新闻做去重
            // 插入广告容器
            scope.appendGgDom(i, len);
            continue;
          }
        }
        inviewIdx++;
        // 标签处理
        if (titledisplay) {
          // 新处理方式
          tagStr = scope.getTagStr(titledisplay);
        } else {
          if (isadv === 1) {
            tagStr = '<i class="tag tag-gg">广告</i>';
          } else if (issptopic) {
            tagStr = '<i class="tag tag-sptopic">专题</i>';
          } else if (ishot) {
            tagStr = '<i class="tag tag-hot">热门</i>';
            if (isvideo) {
              tagStr += '<i class="tag tag-video">视频</i>';
            }
          } else if (isrec) {
            tagStr = '<i class="tag tag-rec">推荐</i>';
          } else if (isvideo) {
            tagStr = '<i class="tag tag-video">视频</i>';
          } else if (isnuanwen) {
            tagStr = '<i class="tag tag-nuanwen">暖文</i>';
          } else if (iszd) {
            tagStr = '<i class="tag tag-zd">顶</i>';
          }
        }

        // 置顶新闻缓存
        if (iszd) {
          var newId = url.substring(
            url.lastIndexOf('/') + 1,
            url.indexOf('.html')
          );
          scope.cacheStickNews(newId, 'stick_news');
        }

        // if (scope.newsType === 'meinv') {
        //     url += '?qid=' + GLOBAL.Et.qid + '&idx=' + (scope.idx + i + 1) + '&fr=meinv&#&gid=1&pid=1';
        //     if (apptypeid) {
        //         url += '&apptypeid=' + apptypeid;
        //     }
        // } else {
        // }

        // url处理
        url +=
          '?qid=' +
          GLOBAL.Et.qid +
          '&idx=' +
          (scope.idx + i + 1) +
          '&recommendtype=' +
          recommendtype +
          '&ishot=' +
          hotnews +
          '&fr=' +
          scope.newsType +
          '&pgnum=' +
          scope.pgNum +
          '&suptop=' +
          suptop;
        if (apptypeid) {
          url += '&apptypeid=' + apptypeid;
        }
        if (tagId) {
          url += '&tagId=' + tagId;
        }
        // if (scope.newsType === 'meinv') { // 美女特殊处理
        //     $newsList.append('<section class="news-item news-item-s4">' +
        //         '<a data-type="' + type + '" data-subtype="' + subtype + '" href="' + url + '">' +
        //         '<div class="news-wrap">' +
        //         '<h3>' + topic + '</h3>' +
        //         '<div class="img-wrap clearfix"><img class="lazy fl" src="' + (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') + '"></div>' +
        //         '</div>' +
        //         '</a>' +
        //         '<div class="options">' +
        //         '<span class="num">' + picnums + ' 图</span>' +
        //         '<span class="view">' + GLOBAL.Util.getSpecialCountStr(urlpv) + '</span>' +
        //         '<span class="split">|</span>' +
        //         '<span class="J-good good" data-rowkey="' + rowkey + '">' + praisecnt + '</span>' +
        //         '<span class="J-bad bad" data-rowkey="' + rowkey + '">' + tramplecnt + '</span>' +
        //         '</div>' +
        //         '</section>');
        // } else {
        // }
        // 阅读量（PV为0就不展示评论数和pv量）
        if (urlpv !== 0) {
          urlpvStr =
            '<em class="tag tag-view">' +
            GLOBAL.Util.getSpecialCountStr(urlpv) +
            '阅读</em>';
        }
        if (commentCount !== 0) {
          commentCountStr =
            '<em class="tag tag-com">' +
            GLOBAL.Util.getSpecialCountStr(commentCount) +
            '评论</em>';
        }

        // a标签
        aStr =
          '<a class="J-news" href="' +
          url +
          '" data-ispicnews="' +
          ispicnews +
          '" data-hotnews="' +
          hotnews +
          '" data-suptop="' +
          suptop +
          '" data-recommendurl="' +
          recommendurl +
          '" data-recommendtype="' +
          recommendtype +
          '" data-batcheid="' +
          batcheid +
          '" data-type="' +
          type +
          '" data-subtype="' +
          subtype +
          '" data-pgnum="' +
          scope.pgNum +
          '"  data-tagId="' +
          tagId +
          '" data-idx="' +
          inviewIdx +
          '">';

        /* ======== 新闻流 ========= */
        // 视频模式（直接播放的视频）
        // if (videonews == '1') { // jshint ignore:line
        //     urlpvStr = urlpvStr.replace('阅读', '观看');
        //     if (isThanAndroid4) {
        //         var videoImg = item.lbimg[0].src;
        //         var $itemVideo = $('<section class="news-item news-item-video">' +
        //             '<div class="video-wrap">' +
        //             '<h3>' + topic + '</h3>' +
        //             '<div class="J-video-box video-box">' +
        //             '<video controls="auto" data-type="' + type + '" data-idx="' + (scope.idx + i + 1) + '" poster="' + videoImg + '" autobuffer="true" preload="none">' +
        //             '<source src="' + videoList[0].src + '" type="video/mp4">您的浏览器不支持该视频播放。' +
        //             '</video>' +
        //             '</div>' +
        //             '<p class="tags clearfix">' +
        //             '<em class="tag tag-video">视频</em>' +
        //             '<em class="tag tag-src">' + source + '</em>' + commentCountStr + urlpvStr +
        //             '</p>' +
        //             '</div>' +
        //             '</section>');
        //         $newsList.append($itemVideo);
        //     }
        // } else
        // 需要点击进去播放的视频
        if (videonews == '2') {
          // jshint ignore:line
          urlpvStr = urlpvStr.replace('阅读', '观看');
          if (isThanAndroid4) {
            if (testQids[GLOBAL.Et.qid]) {
              $newsList.append(
                '<section class="news-item news-item-video-link">' +
                  aStr +
                  '<div class="news-wrap">' +
                  '<div class="txt-wrap">' +
                  '<h3>' +
                  topic +
                  '</h3>' +
                  '<p class="tags clearfix">' +
                  '<em class="tag tag-video">视频</em>' +
                  '<em class="tag tag-src">' +
                  source +
                  '</em>' +
                  commentCountStr +
                  urlpvStr +
                  '</p>' +
                  '</div>' +
                  '<div class="img-wrap ' +
                  imgClass +
                  '" style="background-image:url(' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  ')">' +
                  '<span class="play-btn"></span>' +
                  '</div>' +
                  '</div>' +
                  '</a>' +
                  '</section>'
              );
            } else {
              $newsList.append(
                '<section class="news-item news-item-video-link">' +
                  aStr +
                  '<div class="news-wrap">' +
                  '<div class="txt-wrap">' +
                  '<h3>' +
                  topic +
                  '</h3>' +
                  '<p class="tags clearfix">' +
                  '<em class="tag tag-video">视频</em>' +
                  '<em class="tag tag-src">' +
                  source +
                  '</em>' +
                  commentCountStr +
                  urlpvStr +
                  '</p>' +
                  '</div>' +
                  '<div class="img-wrap ' +
                  imgClass +
                  '">' +
                  '<img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  '">' +
                  '<span class="play-btn"></span>' +
                  '</div>' +
                  '</div>' +
                  '</a>' +
                  '</section>'
              );
            }
          }
        } else {
          dateStr = scope.getSpecialTime(dateStr);
          // 大图模式
          if (ispicnews == '1') {
            // jshint ignore:line
            imgArr = item.lbimg;
            if (!imgArr.length) {
              imgArr = item.miniimg || item.miniimg02;
            }
            $newsList.append(
              '<section class="news-item news-item-s3">' +
                aStr +
                '<div class="news-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<div class="img-wrap clearfix"><img class="lazy fl" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '"></div>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
            // 图片模式
          } else if (ispicnews == '2') {
            // jshint ignore:line
            imgArr = item.lbimg;
            $newsList.append(
              '<section class="news-item news-item-pic-link-special">' +
                aStr +
                '<h3>' +
                topic +
                '</h3>' +
                '<div class="img-wrap">' +
                '<img class="lazy" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '" alt="">' +
                '<span class="num">' +
                picnums +
                '图</span>' +
                '</div>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</a>' +
                '</section>'
            );
            // 无图模式
          } else if (ispicnews == '-1') {
            // jshint ignore:line
            $newsList.append(
              '<section class="news-item news-item-noimg">' +
                aStr +
                '<div class="news-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
          } else if (ispicnews == '0') {
            // jshint ignore:line
            // 三图模式
            if (imgGifQid[GLOBAL.Et.qid]) {
              if (imgGifLen > 2) {
                imgArr = imgGifArr;
              } else if (imgGifLen > 0) {
                imgArr[0] = imgGifArr[0];
              }
            }
            if (imgLen >= 3) {
              // if (newThreeQids[GLOBAL.Et.qid] && i === 2) {
              //     $newsList.append('<section class="news-item news-item-s2">' +
              //     aStr +
              //     '<div class="news-wrap">' +
              //     '<h3>' + topic + '</h3>' +
              //     '<div class="img-wrap2">' +
              //     '<div class="img-item">' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') + '"></div>' +
              //     '</div>' +
              //     '<div class="img-item">' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') + '"></div>' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') + '"></div>' +
              //     '</div>' +
              //     '</div>' +
              //     '<p class="tags clearfix">' +
              //     '<em class="tag tag-time">' + (tagStr || dateStr) + '</em>' +
              //     '<em class="tag tag-src">' + source + '</em>' + commentCountStr + urlpvStr +
              //     '</p>' +
              //     '</div>' +
              //     '</a>' +
              //     '</section>');
              // } else {
              // }
              if (testQids[GLOBAL.Et.qid]) {
                $newsList.append(
                  '<section class="news-item news-item-s2">' +
                    aStr +
                    '<div class="news-wrap">' +
                    '<h3>' +
                    topic +
                    '</h3>' +
                    '<div class="img-wrap ' +
                    imgClass +
                    '">' +
                    '<div class="img" style="background-image:url(' +
                    (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                    ')"></div>' +
                    '<div class="img" style="background-image:url(' +
                    (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') +
                    ')"></div>' +
                    '<div class="img" style="background-image:url(' +
                    (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') +
                    ')"></div>' +
                    '</div>' +
                    '<p class="tags clearfix">' +
                    '<em class="tag tag-time">' +
                    (tagStr || dateStr) +
                    '</em>' +
                    '<em class="tag tag-src">' +
                    source +
                    '</em>' +
                    commentCountStr +
                    urlpvStr +
                    '</p>' +
                    '</div>' +
                    '</a>' +
                    '</section>'
                );
              } else {
                $newsList.append(
                  '<section class="news-item news-item-s2">' +
                    aStr +
                    '<div class="news-wrap">' +
                    '<h3>' +
                    topic +
                    '</h3>' +
                    '<div class="img-wrap ' +
                    imgClass +
                    '">' +
                    '<div class="img"><img class="lazy" data-original="' +
                    (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                    '"></div>' +
                    '<div class="img"><img class="lazy" data-original="' +
                    (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') +
                    '"></div>' +
                    '<div class="img"><img class="lazy" data-original="' +
                    (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') +
                    '"></div>' +
                    '</div>' +
                    '<p class="tags clearfix">' +
                    '<em class="tag tag-time">' +
                    (tagStr || dateStr) +
                    '</em>' +
                    '<em class="tag tag-src">' +
                    source +
                    '</em>' +
                    commentCountStr +
                    urlpvStr +
                    '</p>' +
                    '</div>' +
                    '</a>' +
                    '</section>'
                );
              }
              // 单图模式
              // } else if (imgLen >= 1) {
            } else {
              if (testQids[GLOBAL.Et.qid]) {
                $newsList.append(
                  '<section class="news-item news-item-s1">' +
                    aStr +
                    '<div class="news-wrap">' +
                    '<div class="txt-wrap">' +
                    '<h3>' +
                    topic +
                    '</h3>' +
                    '<p class="tags clearfix">' +
                    '<em class="tag tag-time">' +
                    (tagStr || dateStr) +
                    '</em>' +
                    '<em class="tag tag-src">' +
                    source +
                    '</em>' +
                    commentCountStr +
                    urlpvStr +
                    '</p>' +
                    '</div>' +
                    '<div class="img-wrap ' +
                    imgClass +
                    '" style="background-image:url(' +
                    (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                    ')"></div>' +
                    '</div>' +
                    '</a>' +
                    '</section>'
                );
              } else {
                $newsList.append(
                  '<section class="news-item news-item-s1">' +
                    aStr +
                    '<div class="news-wrap">' +
                    '<div class="txt-wrap">' +
                    '<h3>' +
                    topic +
                    '</h3>' +
                    '<p class="tags clearfix">' +
                    '<em class="tag tag-time">' +
                    (tagStr || dateStr) +
                    '</em>' +
                    '<em class="tag tag-src">' +
                    source +
                    '</em>' +
                    commentCountStr +
                    urlpvStr +
                    '</p>' +
                    '</div>' +
                    '<div class="img-wrap ' +
                    imgClass +
                    '"><img data-lbimg="' +
                    (item.lbimg[0] ? item.lbimg[0].src : '') +
                    '" class="lazy" data-original="' +
                    (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                    '"></div>' +
                    '</div>' +
                    '</a>' +
                    '</section>'
                );
              }
            }
          }
        }
        // 插入广告容器
        scope.appendGgDom(i, len);
      }
      // 进屏日志
      if (newNewsQids.contains(GLOBAL.Et.qid)) {
        try {
          scope.registerInview();
        } catch (e) {
          console.error(e);
        }
      }
      // 上拉加载完数据后做的一些操作
      scope.pullUpComplete(len);
    },

    /**
     * 汽车频道数据渲染 - 推荐频道
     * @param  {JSON} d       数据
     * @return {[type]}         [description]
     */
    generateAutoDom: function(d) {
      var scope = this;
      var data = d && d.data;
      if (!data || !data.length) {
        // $loading.hide();
        return false;
      }
      // 加载汽车分类
      // scope.loadAutoCtg();

      // 接口返回的endkey作为下一次请求的startkey参数的值
      scope.startKey[scope.newsType] = d.endkey;
      wsCache.set(
        'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        d.endkey,
        {
          exp: 24 * 3600
        }
      );
      // 接口返回的newkey作为下一次请求的lastkey参数的值
      scope.endKey[scope.newsType] = d.newkey;
      wsCache.set('endkey_' + scope.newsType + '_' + GLOBAL.Et.qid, d.newkey, {
        exp: 24 * 3600
      });
      // 接口返回的tagskey作为下一次请求的tagskey参数的值
      scope.tagsKey[scope.newsType] = d.tagskey;
      wsCache.set(
        'tagskey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        d.tagskey,
        {
          exp: 24 * 3600
        }
      );

      var len = data.length;
      var inviewIdx = 0;
      for (var i = 0; i < len; i++) {
        var item = data[i];
        var url = item.url;
        var urlNum = url.substring(
          url.lastIndexOf('/') + 1,
          url.indexOf('.html')
        );
        var dateStr = item.date;
        var topic = item.topic;
        var source = item.source;
        var imgArr = item.miniimg;
        var imgLen = imgArr.length;
        var recommendtype = item.recommendtype ? item.recommendtype : '-1';
        var hotnews = item.hotnews;
        var ispicnews = item.ispicnews; // 大图新闻(1)、小图新闻(0)、无图新闻(-1)
        var videonews = item.videonews; // 视频新闻
        // advId = item.adv_id || '';
        var type = item.type;
        var subtype = item.subtype || 'null';
        // rowkey = item.rowkey;
        var titledisplay = item.titledisplay || ''; // 用于判断标签类别
        var ishot = Number(item.hotnews); // 热门
        var isrec = Number(item.isrecom); // 推荐
        var isvideo = Number(item.isvideo); // 视频
        var commentCount = Number(item.comment_count); // 评论数
        var urlpv = Number(item.urlpv); // 浏览量
        var picnums = item.picnums; // 图片数量
        // praisecnt = item.praisecnt; // 顶
        // tramplecnt = item.tramplecnt; // 踩
        var commentCountStr = '';
        var urlpvStr = '';
        var tagStr = '';
        var batcheid = item.batcheid || 'null';
        var recommendurl = item.recommendurl || 'null';
        var suptop = item.suptop || 'null';
        var aStr = '';
        var tagId = item.tagId || '';
        if (newNewsQids.contains(GLOBAL.Et.qid)) {
          scope.readUrlNum =
            JSON.parse(
              wsCache.get('read_urlnum_' + scope.newsType + '_' + GLOBAL.Et.qid)
            ) || {};
          if (scope.readUrlNum[urlNum]) {
            // 前端对加载过的新闻做去重
            // 插入广告容器
            scope.appendGgDom(i, len);
            continue;
          }
        }
        inviewIdx++;
        // 标签处理
        if (titledisplay) {
          // 新处理方式
          tagStr = scope.getTagStr(titledisplay);
        } else {
          if (ishot) {
            tagStr = '<i class="tag tag-hot">热门</i>';
            if (isvideo) {
              tagStr += '<i class="tag tag-video">视频</i>';
            }
          } else if (isrec) {
            tagStr = '<i class="tag tag-rec">推荐</i>';
          } else if (isvideo) {
            tagStr = '<i class="tag tag-video">视频</i>';
          }
        }

        // url处理
        url +=
          '?qid=' +
          GLOBAL.Et.qid +
          '&idx=' +
          (scope.idx + i + 1) +
          '&recommendtype=' +
          recommendtype +
          '&ishot=' +
          hotnews +
          '&fr=' +
          scope.anewsType +
          '&pgnum=' +
          scope.pgNum +
          '&suptop=' +
          suptop;
        if (tagId) {
          url += '&tagId=' + tagId;
        }
        // 阅读量（PV为0就不展示评论数和pv量）
        if (urlpv !== 0) {
          urlpvStr =
            '<em class="tag tag-view">' +
            GLOBAL.Util.getSpecialCountStr(urlpv) +
            '阅读</em>';
        }
        if (commentCount !== 0) {
          commentCountStr =
            '<em class="tag tag-com">' +
            GLOBAL.Util.getSpecialCountStr(commentCount) +
            '评论</em>';
        }
        // a标签
        aStr =
          '<a class="J-news" href="' +
          url +
          '" data-ispicnews="' +
          ispicnews +
          '" data-hotnews="' +
          hotnews +
          '" data-suptop="' +
          suptop +
          '" data-recommendurl="' +
          recommendurl +
          '" data-recommendtype="' +
          recommendtype +
          '" data-batcheid="' +
          batcheid +
          '" data-type="' +
          type +
          '" data-subtype="' +
          subtype +
          '" data-pgnum="' +
          scope.pgNum +
          '"  data-tagId="' +
          tagId +
          '" data-idx="' +
          inviewIdx +
          '">';
        /* ======== 新闻流 ========= */
        if (videonews == '2') {
          // jshint ignore:line
          urlpvStr = urlpvStr.replace('阅读', '观看');
          if (isThanAndroid4) {
            $newsList.append(
              '<section class="news-item news-item-video-link">' +
                aStr +
                '<div class="news-wrap">' +
                '<div class="txt-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-video">视频</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '<div class="img-wrap">' +
                '<img class="lazy" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '">' +
                '<span class="play-btn"></span>' +
                '</div>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
          }
        } else {
          dateStr = scope.getSpecialTime(dateStr);
          // 大图模式
          if (ispicnews == '1') {
            // jshint ignore:line
            imgArr = item.lbimg;
            $newsList.append(
              '<section class="news-item news-item-s3">' +
                aStr +
                '<div class="news-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<div class="img-wrap clearfix"><img class="lazy fl" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '"></div>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
            // 图片模式
          } else if (ispicnews == '2') {
            // jshint ignore:line
            imgArr = item.lbimg;
            $newsList.append(
              '<section class="news-item news-item-pic-link-special">' +
                aStr +
                '<h3>' +
                topic +
                '</h3>' +
                '<div class="img-wrap">' +
                '<img class="lazy" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '" alt="">' +
                '<span class="num">' +
                picnums +
                '图</span>' +
                '</div>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</a>' +
                '</section>'
            );
            // 无图模式
          } else if (ispicnews == '-1') {
            // jshint ignore:line
            $newsList.append(
              '<section class="news-item news-item-noimg">' +
                aStr +
                '<div class="news-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
          } else if (ispicnews == '0') {
            // jshint ignore:line
            // 三图模式
            if (imgLen >= 3) {
              // if (newThreeQids[GLOBAL.Et.qid] && i === 2) {
              //     $newsList.append('<section class="news-item news-item-s2">' +
              //     aStr +
              //     '<div class="news-wrap">' +
              //     '<h3>' + topic + '</h3>' +
              //     '<div class="img-wrap2">' +
              //     '<div class="img-item">' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') + '"></div>' +
              //     '</div>' +
              //     '<div class="img-item">' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') + '"></div>' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') + '"></div>' +
              //     '</div>' +
              //     '</div>' +
              //     '<p class="tags clearfix">' +
              //     '<em class="tag tag-time">' + (tagStr || dateStr) + '</em>' +
              //     '<em class="tag tag-src">' + source + '</em>' + commentCountStr + urlpvStr +
              //     '</p>' +
              //     '</div>' +
              //     '</a>' +
              //     '</section>');
              // } else {
              // }
              $newsList.append(
                '<section class="news-item news-item-s2">' +
                  aStr +
                  '<div class="news-wrap">' +
                  '<h3>' +
                  topic +
                  '</h3>' +
                  '<div class="img-wrap">' +
                  '<div class="img"><img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  '"></div>' +
                  '<div class="img"><img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') +
                  '"></div>' +
                  '<div class="img"><img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') +
                  '"></div>' +
                  '</div>' +
                  '<p class="tags clearfix">' +
                  '<em class="tag tag-time">' +
                  (tagStr || dateStr) +
                  '</em>' +
                  '<em class="tag tag-src">' +
                  source +
                  '</em>' +
                  commentCountStr +
                  urlpvStr +
                  '</p>' +
                  '</div>' +
                  '</a>' +
                  '</section>'
              );
              // 单图模式
            } else if (imgLen >= 1) {
              $newsList.append(
                '<section class="news-item news-item-s1">' +
                  aStr +
                  '<div class="news-wrap">' +
                  '<div class="txt-wrap">' +
                  '<h3>' +
                  topic +
                  '</h3>' +
                  '<p class="tags clearfix">' +
                  '<em class="tag tag-time">' +
                  (tagStr || dateStr) +
                  '</em>' +
                  '<em class="tag tag-src">' +
                  source +
                  '</em>' +
                  commentCountStr +
                  urlpvStr +
                  '</p>' +
                  '</div>' +
                  '<div class="img-wrap"><img data-lbimg="' +
                  (item.lbimg[0] ? item.lbimg[0].src : '') +
                  '" class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  '"></div>' +
                  '</div>' +
                  '</a>' +
                  '</section>'
              );
            }
          }
        }
        // 插入广告容器
        scope.appendGgDom(i, len);
      }
      // 进屏日志
      if (newNewsQids.contains(GLOBAL.Et.qid)) {
        try {
          scope.registerInview();
        } catch (e) {
          console.error(e);
        }
      }
      // 上拉加载完数据后做的一些操作
      scope.pullUpComplete(len);
    },

    /**
     * 汽车频道数据渲染 - 除 推荐 频道
     * @param  {JSON} d       数据
     * @return {[type]}         [description]
     */
    generateAutoDomByOthers: function(d) {
      var scope = this;
      var data = d && d.data;
      if (!data || !data.length) {
        // $loading.hide();
        return false;
      }
      // 加载汽车分类
      // scope.loadAutoCtg();

      // 存储加载的新闻中的最后一条新闻的rowkey
      scope.startKey[scope.anewsType] = d.endkey;
      wsCache.set(
        'startkey_' + scope.anewsType + '_' + GLOBAL.Et.qid,
        d.endkey,
        {
          exp: 24 * 3600
        }
      );

      var len = data.length;
      var inviewIdx = 0;
      for (var i = 0; i < len; i++) {
        var item = data[i];
        var url = item.url;
        var dateStr = item.date;
        var topic = item.topic;
        var source = item.source;
        var imgArr = item.miniimg;
        var imgLen = imgArr.length;
        var recommendtype = item.recommendtype ? item.recommendtype : '-1';
        var hotnews = item.hotnews;
        var ispicnews = item.ispicnews; // 大图新闻(1)、小图新闻(0)、无图新闻(-1)
        var videonews = item.videonews; // 视频新闻
        // advId = item.adv_id || '';
        var type = item.type;
        var subtype = item.subtype || 'null';
        // rowkey = item.rowkey;
        var titledisplay = item.titledisplay || ''; // 用于判断标签类别
        var ishot = Number(item.hotnews); // 热门
        var isrec = Number(item.isrecom); // 推荐
        var isvideo = Number(item.isvideo); // 视频
        var commentCount = Number(item.comment_count); // 评论数
        var urlpv = Number(item.urlpv); // 浏览量
        var picnums = item.picnums; // 图片数量
        // praisecnt = item.praisecnt; // 顶
        // tramplecnt = item.tramplecnt; // 踩
        var commentCountStr = '';
        var urlpvStr = '';
        var tagStr = '';
        var batcheid = item.batcheid || 'null';
        var recommendurl = item.recommendurl || 'null';
        var suptop = item.suptop || 'null';
        var aStr = '';
        inviewIdx++;
        // 标签处理
        if (titledisplay) {
          // 新处理方式
          tagStr = scope.getTagStr(titledisplay);
        } else {
          if (ishot) {
            tagStr = '<i class="tag tag-hot">热门</i>';
            if (isvideo) {
              tagStr += '<i class="tag tag-video">视频</i>';
            }
          } else if (isrec) {
            tagStr = '<i class="tag tag-rec">推荐</i>';
          } else if (isvideo) {
            tagStr = '<i class="tag tag-video">视频</i>';
          }
        }

        // url处理
        url +=
          '?qid=' +
          GLOBAL.Et.qid +
          '&idx=' +
          (scope.idx + i + 1) +
          '&recommendtype=' +
          recommendtype +
          '&ishot=' +
          hotnews +
          '&fr=' +
          scope.anewsType +
          '&pgnum=' +
          scope.pgNum +
          '&suptop=' +
          suptop;
        // 阅读量（PV为0就不展示评论数和pv量）
        if (urlpv !== 0) {
          urlpvStr =
            '<em class="tag tag-view">' +
            GLOBAL.Util.getSpecialCountStr(urlpv) +
            '阅读</em>';
        }
        if (commentCount !== 0) {
          commentCountStr =
            '<em class="tag tag-com">' +
            GLOBAL.Util.getSpecialCountStr(commentCount) +
            '评论</em>';
        }
        // a标签
        aStr =
          '<a class="" href="' +
          url +
          '" data-ispicnews="' +
          ispicnews +
          '" data-hotnews="' +
          hotnews +
          '" data-suptop="' +
          suptop +
          '" data-recommendurl="' +
          recommendurl +
          '" data-recommendtype="' +
          recommendtype +
          '" data-batcheid="' +
          batcheid +
          '" data-type="' +
          type +
          '" data-subtype="' +
          subtype +
          '" data-pgnum="' +
          scope.pgNum +
          '"  data-idx="' +
          inviewIdx +
          '">';
        /* ======== 新闻流 ========= */
        if (videonews == '2') {
          // jshint ignore:line
          urlpvStr = urlpvStr.replace('阅读', '观看');
          if (isThanAndroid4) {
            $newsList.append(
              '<section class="news-item news-item-video-link">' +
                aStr +
                '<div class="news-wrap">' +
                '<div class="txt-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-video">视频</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '<div class="img-wrap">' +
                '<img class="lazy" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '">' +
                '<span class="play-btn"></span>' +
                '</div>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
          }
        } else {
          dateStr = scope.getSpecialTime(dateStr);
          // 大图模式
          if (ispicnews == '1') {
            // jshint ignore:line
            imgArr = item.lbimg;
            $newsList.append(
              '<section class="news-item news-item-s3">' +
                aStr +
                '<div class="news-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<div class="img-wrap clearfix"><img class="lazy fl" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '"></div>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
            // 图片模式
          } else if (ispicnews == '2') {
            // jshint ignore:line
            imgArr = item.lbimg;
            $newsList.append(
              '<section class="news-item news-item-pic-link-special">' +
                aStr +
                '<h3>' +
                topic +
                '</h3>' +
                '<div class="img-wrap">' +
                '<img class="lazy" data-original="' +
                (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                '" alt="">' +
                '<span class="num">' +
                picnums +
                '图</span>' +
                '</div>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</a>' +
                '</section>'
            );
            // 无图模式
          } else if (ispicnews == '-1') {
            // jshint ignore:line
            $newsList.append(
              '<section class="news-item news-item-noimg">' +
                aStr +
                '<div class="news-wrap">' +
                '<h3>' +
                topic +
                '</h3>' +
                '<p class="tags clearfix">' +
                '<em class="tag tag-time">' +
                (tagStr || dateStr) +
                '</em>' +
                '<em class="tag tag-src">' +
                source +
                '</em>' +
                commentCountStr +
                urlpvStr +
                '</p>' +
                '</div>' +
                '</a>' +
                '</section>'
            );
          } else if (ispicnews == '0') {
            // jshint ignore:line
            // 三图模式
            if (imgLen >= 3) {
              // if (newThreeQids[GLOBAL.Et.qid] && i === 2) {
              //     $newsList.append('<section class="news-item news-item-s2">' +
              //     aStr +
              //     '<div class="news-wrap">' +
              //     '<h3>' + topic + '</h3>' +
              //     '<div class="img-wrap2">' +
              //     '<div class="img-item">' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') + '"></div>' +
              //     '</div>' +
              //     '<div class="img-item">' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') + '"></div>' +
              //     '<div class="img"><img class="lazy" data-original="' + (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') + '"></div>' +
              //     '</div>' +
              //     '</div>' +
              //     '<p class="tags clearfix">' +
              //     '<em class="tag tag-time">' + (tagStr || dateStr) + '</em>' +
              //     '<em class="tag tag-src">' + source + '</em>' + commentCountStr + urlpvStr +
              //     '</p>' +
              //     '</div>' +
              //     '</a>' +
              //     '</section>');
              // } else {
              // }
              $newsList.append(
                '<section class="news-item news-item-s2">' +
                  aStr +
                  '<div class="news-wrap">' +
                  '<h3>' +
                  topic +
                  '</h3>' +
                  '<div class="img-wrap">' +
                  '<div class="img"><img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  '"></div>' +
                  '<div class="img"><img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') +
                  '"></div>' +
                  '<div class="img"><img class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') +
                  '"></div>' +
                  '</div>' +
                  '<p class="tags clearfix">' +
                  '<em class="tag tag-time">' +
                  (tagStr || dateStr) +
                  '</em>' +
                  '<em class="tag tag-src">' +
                  source +
                  '</em>' +
                  commentCountStr +
                  urlpvStr +
                  '</p>' +
                  '</div>' +
                  '</a>' +
                  '</section>'
              );
              // 单图模式
            } else if (imgLen >= 1) {
              $newsList.append(
                '<section class="news-item news-item-s1">' +
                  aStr +
                  '<div class="news-wrap">' +
                  '<div class="txt-wrap">' +
                  '<h3>' +
                  topic +
                  '</h3>' +
                  '<p class="tags clearfix">' +
                  '<em class="tag tag-time">' +
                  (tagStr || dateStr) +
                  '</em>' +
                  '<em class="tag tag-src">' +
                  source +
                  '</em>' +
                  commentCountStr +
                  urlpvStr +
                  '</p>' +
                  '</div>' +
                  '<div class="img-wrap"><img data-lbimg="' +
                  (item.lbimg[0] ? item.lbimg[0].src : '') +
                  '" class="lazy" data-original="' +
                  (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
                  '"></div>' +
                  '</div>' +
                  '</a>' +
                  '</section>'
              );
            }
          }
        }
        // 插入广告容器
        scope.appendGgDom(i, len);
      }
      // 进屏日志
      // if (newNewsQids.contains(GLOBAL.Et.qid)) {
      //     try {
      //         scope.registerInview();
      //     } catch (e) {
      //         console.error(e);
      //     }
      // }
      // 上拉加载完数据后做的一些操作
      scope.pullUpComplete(len);
    },

    /**
     * 将视频数据组装成html代码
     * @param  {[type]} d 视频数据
     * @param  {array} dspData dsp广告数据
     */
    generateVideoDom: function(d) {
      var scope = this;
      var data = d.data ? d.data : null;
      var len = data ? data.length : 0;
      if (!data || !len) {
        return false;
      }
      // 存储加载的新闻中的最后一条新闻的rowkey
      scope.startKey[scope.newsType] = d.endkey;
      wsCache.set(
        'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        d.endkey,
        {
          exp: 24 * 3600
        }
      );
      var inviewIdx = 0;
      for (var i = 0; i < len; i++) {
        var item = data[i];
        var miniImg = item.miniimg; // 4:3
        var itemImg = miniImg[0];
        // fr = GLOBAL.Util.getUrlNoParams();
        var dateStr = item.date;
        var type = item.type;
        var topic = item.topic;
        var source = item.source;
        var imgSrc = itemImg.src;
        var imgWidth = itemImg.imgwidth;
        var imgHeight = itemImg.imgheight;
        var recommendtype = item.recommendtype ? item.recommendtype : '-1';
        var commentCount = Number(item.comment_count);
        var urlpv = Number(item.urlpv); // 阅读量
        var hotnews = item.hotnews;
        var titledisplay = item.titledisplay || ''; // 用于判断标签类别
        var ishot = Number(item.hotnews); // 热门
        var isrec = Number(item.isrecom); // 推荐
        var suptop = item.suptop || 'null';
        // duration = GLOBAL.Util.msToTimestr(item.videoalltime);
        var url =
          item.url02 +
          '?qid=' +
          scope.qid +
          '&idx=' +
          (scope.idx + i + 1) +
          '&recommendtype=' +
          recommendtype +
          '&ishot=' +
          hotnews +
          '&fr=' +
          scope.vnewsType +
          '&pgnum=' +
          scope.pgNum +
          '&suptop=' +
          suptop;
        var commentCountStr = '';
        var urlpvStr = '';
        var tagStr = '';
        var videoCtgStr = '';
        var ctgArr = [];
        var batcheid = item.batcheid || 'null';
        var recommendurl = item.recommendurl || 'null';
        var subtype = item.subtype || 'null';
        var ispicnews = item.ispicnews || 'null';
        var aStr = '';
        inviewIdx++;
        if (titledisplay) {
          // 新处理方式
          tagStr = scope.getTagStr(titledisplay);
        } else {
          if (ishot) {
            tagStr = '<i class="tag tag-hot">热门</i>';
          } else if (isrec) {
            tagStr = '<i class="tag tag-rec">推荐</i>';
          }
        }

        // 阅读量（PV为0就不展示评论数和pv量）
        if (urlpv !== 0) {
          urlpvStr =
            '<em class="tag tag-view">' +
            GLOBAL.Util.getSpecialCountStr(urlpv) +
            '观看</em>';
        }
        if (commentCount !== 0) {
          commentCountStr =
            '<em class="tag tag-com">' +
            GLOBAL.Util.getSpecialCountStr(commentCount) +
            '评论</em>';
        }
        dateStr = scope.getSpecialTime(dateStr);
        // a标签
        aStr =
          '<a class="news-link" href="' +
          url +
          '" data-ispicnews="' +
          ispicnews +
          '" data-hotnews="' +
          hotnews +
          '" data-suptop="' +
          suptop +
          '" data-recommendurl="' +
          recommendurl +
          '" data-recommendtype="' +
          recommendtype +
          '" data-batcheid="' +
          batcheid +
          '" data-type="' +
          type +
          '" data-subtype="' +
          subtype +
          '" data-pgnum="' +
          scope.pgNum +
          '"  data-idx="' +
          inviewIdx +
          '">';
        $newsList.append(
          [
            '<section class="news-item news-img1 news-video">',
            // '<div class="one-px-border"></div>',
            aStr + '<div class="info">',
            '<h3 class="title dotdot line3">' + topic + '</h3>',
            '<p class="tags">' +
              (tagStr
                ? '<em class="tag tag-time">' + tagStr + '</em>'
                : dateStr
                  ? '<em class="tag tag-time">' + dateStr + '</em>'
                  : ''),
            commentCountStr,
            urlpvStr,
            '<em class="tag tag-src">' + source + '</em>',
            '</p>',
            '</div>',
            '<div class="img img-bg"><img class="image lazy" data-original="' +
              imgSrc +
              '" data-width="' +
              imgWidth +
              '" data-height="' +
              imgHeight +
              '"><span class="video-btn"></span></div>',
            '</a>',
            '</section>'
          ].join('')
        );
        // 插入视频分类列表（第一屏在第6个位置插入，后面每屏在第1、第6个位置插入）
        if (i !== 0 && (i + 1) % 10 === 0 && !newVideoCtgQids[GLOBAL.Et.qid]) {
          var advIdObj = {
            jinlisun: 'jinlisun_spdh_h5'
          };
          var advId = advIdObj[GLOBAL.Et.qid] || '';
          ctgArr = scope.getRecommendVideoCtg();
          // 对于“纪录片”频道，不加“频道”两字
          videoCtgStr =
            scope.vnewsType === 'vjilupian'
              ? currentVideoCtg.name
              : currentVideoCtg.name + '频道';
          if (ctgArr.length !== 0) {
            $newsList.append(
              '<section class="news-ctg">' +
                '<div class="video-ctg-wrap">' +
                '<div class="wrapper clearfix">' +
                '<span class="fl">' +
                videoCtgStr +
                '</span>' +
                '<div class="link-wrap fl">' +
                '<a class="J-video-ctg" data-advid="' +
                advId +
                '" data-type="' +
                ctgArr[0].value +
                '" href="javascript:;">' +
                ctgArr[0].name +
                '</a>' +
                '<a class="J-video-ctg" data-advid="' +
                advId +
                '" data-type="' +
                ctgArr[1].value +
                '" href="javascript:;">' +
                ctgArr[1].name +
                '</a>' +
                '<a class="J-video-ctg" data-advid="' +
                advId +
                '" data-type="' +
                ctgArr[2].value +
                '" href="javascript:;">' +
                ctgArr[2].name +
                '</a>' +
                '<a class="J-video-ctg" data-advid="' +
                advId +
                '" data-type="' +
                ctgArr[3].value +
                '" href="javascript:;">' +
                ctgArr[3].name +
                '</a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</section>'
            );
          }
        }
        // 插入广告容器
        scope.appendGgDom(i, len);
      }
      // 进屏日志
      // if (newNewsQids.contains(GLOBAL.Et.qid)) {
      //     try {
      //         scope.registerInview();
      //     } catch (e) {
      //         console.error(e);
      //     }
      // }
      // 上拉加载完数据后做的一些操作
      scope.pullUpComplete(len);
    },

    /**
     * 将图片数据组装成html代码
     * @param  {Array} d 图片数据
     */
    generatePicDom: function(d) {
      var scope = this,
        data = d.data ? d.data : null,
        len = data ? data.length : 0;
      if (!data || !len) {
        $('#J_loading')
          .children('.spinner')
          .hide();
        $('#J_loading')
          .children('.txt')
          .html('数据已经全部加载完！');
        return false;
      }
      // 加载图片分类
      // scope.loadPicCtg();

      // 存储加载的新闻中的最后一条新闻的rowkey
      scope.startKey[scope.newsType] = d.endkey;
      wsCache.set(
        'startkey_' + scope.newsType + '_' + GLOBAL.Et.qid,
        d.endkey,
        {
          exp: 24 * 3600
        }
      );
      var inviewIdx = 0;
      for (var i = 0; i < len; i++) {
        var item = data[i],
          // 小图
          // miniImg = item.miniimg,  // 4:3
          // itemImg = miniImg[0],
          // imgSrc = itemImg.src,
          // imgWidth = itemImg.imgwidth,
          // imgHeight = itemImg.imgheight,
          // 大图
          lbImg = item.lbimg, // 2:1
          lbItemImg = lbImg[0],
          lbimgSrc = lbItemImg.src,
          lbimgWidth = lbItemImg.imgwidth,
          lbimgHeight = lbItemImg.imgheight,
          // fr = GLOBAL.Util.getUrlNoParams(),
          dateStr = item.date,
          type = item.type,
          topic = item.topic,
          source = item.source,
          recommendtype = item.recommendtype ? item.recommendtype : '-1',
          // commentCount = Number(item.comment_count),
          picnums = Number(item.picnums), // 图片数量
          urlpv = Number(item.urlpv), // 阅读量
          hotnews = item.hotnews,
          // isadv = item.isadv || '',
          titledisplay = item.titledisplay || '', // 用于判断标签类别
          ishot = Number(item.hotnews), // 热门
          isrec = Number(item.isrecom), // 推荐
          suptop = item.suptop || 'null',
          // duration = GLOBAL.Util.msToTimestr(item.videoalltime),
          url =
            item.url +
            '?qid=' +
            scope.qid +
            '&idx=' +
            (scope.idx + i + 1) +
            '&recommendtype=' +
            recommendtype +
            '&ishot=' +
            hotnews +
            '&fr=' +
            scope.pnewsType +
            '&pgnum=' +
            scope.pgNum +
            '&suptop=' +
            suptop,
          // videoCtgStr = '',
          // ctgArr = [],
          commentCountStr = '',
          urlpvStr = '',
          tagStr = '',
          batcheid = item.batcheid || 'null',
          recommendurl = item.recommendurl || 'null',
          ispicnews = item.ispicnews || 'null',
          subtype = item.subtype || 'null',
          aStr = '';
        inviewIdx++;

        if (titledisplay) {
          // 新处理方式
          tagStr = scope.getTagStr(titledisplay);
        } else {
          if (ishot) {
            tagStr = '<i class="tag tag-hot">热门</i>';
          } else if (isrec) {
            tagStr = '<i class="tag tag-rec">推荐</i>';
          }
        }

        // 阅读量（PV为0就不展示评论数和pv量）
        if (urlpv !== 0) {
          urlpvStr =
            '<em class="tag tag-view">' +
            GLOBAL.Util.getSpecialCountStr(urlpv) +
            '浏览</em>';
          // commentCountStr = '<em class="tag tag-com">' + GLOBAL.Util.getSpecialCountStr(commentCount) + '评论</em>';
        }
        // a标签
        aStr =
          '<a class="" href="' +
          url +
          '" data-ispicnews="' +
          ispicnews +
          '" data-hotnews="' +
          hotnews +
          '" data-suptop="' +
          suptop +
          '" data-recommendurl="' +
          recommendurl +
          '" data-recommendtype="' +
          recommendtype +
          '" data-batcheid="' +
          batcheid +
          '" data-type="' +
          type +
          '" data-subtype="' +
          subtype +
          '" data-pgnum="' +
          scope.pgNum +
          '"  data-idx="' +
          inviewIdx +
          '">';
        dateStr = scope.getSpecialTime(dateStr);
        $newsList.append(
          '<section class="news-item news-item-pic-link">' +
            aStr +
            '<div class="img-wrap">' +
            '<img class="lazy" data-original="' +
            lbimgSrc +
            '" alt="" data-width="' +
            lbimgWidth +
            '" data-height="' +
            lbimgHeight +
            '">' +
            '<span class="num">' +
            picnums +
            '图</span>' +
            '</div>' +
            '<h3>' +
            topic +
            '</h3>' +
            '<p class="tags clearfix">' +
            '<em class="tag tag-time">' +
            (tagStr || dateStr) +
            '</em>' +
            commentCountStr +
            urlpvStr +
            '<em class="tag tag-src">' +
            source +
            '</em>' +
            '</p>' +
            '</a>' +
            '</section>'
        );
      }
      // 进屏日志
      // if (newNewsQids.contains(GLOBAL.Et.qid)) {
      //     try {
      //         scope.registerInview();
      //     } catch (e) {
      //         console.error(e);
      //     }
      // }
      // 上拉加载完数据后做的一些操作
      scope.pullUpComplete(len);
    },

    /**
     * 生成视频频道中的视频分类
     * 规则：每次四个分类，18个分类随机展示（但是保证18个分类在用户滑了2~3页的时候要全部展示完）。
     * @return {[type]} [description]
     */
    getRecommendVideoCtg: function() {
      // 获取除去当前视频频道的频道数组
      tempVideoCtg = this.getDiffFromArr1(
        this.getTempVideoCtg(),
        shownVideoCtg
      );
      var scope = this,
        vcLen = tempVideoCtg.length,
        mySplit = Math.floor(vcLen / 4),
        max = vcLen,
        min = 1,
        rd = 0,
        i = 0,
        clen = 0,
        ctgArr = [];
      // 随机生成4个分类推荐
      for (i = 0; i < 4; i++) {
        min = mySplit * i;
        if (i !== 3) {
          max = mySplit * (i + 1);
        } else {
          // 优化，使tempVideoCtg中的每一个值都能被随机取到。
          max = vcLen;
        }
        // 生成随机数
        rd = Math.floor((max - min) * Math.random() + min);
        // 如果当前频道不在“推荐”频道，推荐频道必须展示在每一栏的第一位
        if (i === 0 && scope.vnewsType !== 'vtuijian') {
          rd = 0;
        }
        ctgArr[i] = tempVideoCtg[rd];
      }
      // 缓存已经显示过的类别
      for (i = 0, clen = ctgArr.length; i < clen; i++) {
        if (ctgArr[i].value !== 'vtuijian') {
          shownVideoCtg.push(ctgArr[i]);
        }
      }
      // 清空缓存显示过的类别
      if (videoCtg.length - shownVideoCtg.length < 4) {
        shownVideoCtg = [];
      }
      // 将生成的推荐分类打乱再返还（不在推荐频道的话就不打乱了，因为推荐频道必须展示在每一栏的第一位）
      return scope.vnewsType !== 'vtuijian'
        ? ctgArr
        : GLOBAL.Util.dislocateArr(ctgArr);
    },

    /**
     * 获取除去了当前视频类别和已经展示的类别的类别数组
     */
    getTempVideoCtg: function() {
      var scope = this,
        i = 0,
        arr = [],
        len = videoCtg.length;
      for (i = 0; i < len; i++) {
        if (videoCtg[i].value !== scope.vnewsType) {
          arr.push(videoCtg[i]);
        } else {
          currentVideoCtg = videoCtg[i];
        }
      }
      return arr;
    },

    /**
     * 获取数组1中排除和数组2相同值的数组数据
     * @param  {Array} arr1 数组1
     * @param  {Array} arr2 数组2
     * @return {Array}      数组1中排除和数组2相同值的数组数据
     */
    getDiffFromArr1: function(arr1, arr2) {
      var len1 = arr1.length,
        len2 = arr2.length,
        temArr = [],
        i = 0,
        j = 0,
        flag = true;
      for (i = 0; i < len1; i++) {
        for (j = 0; j < len2; j++) {
          if (arr1[i].value === arr2[j].value) {
            flag = false;
          }
        }
        if (flag) {
          temArr.push(arr1[i]);
        } else {
          flag = true;
        }
      }
      return temArr;
    },

    /**
     * 获取处理后的时间字符串
     * @param  {[type]} dateStr [description]
     * @return {[type]}         [description]
     */
    getSpecialTime: function(dateStr) {
      var tTime = Date.parse(dateStr.replace(/-/g, '/')),
        cTime = new Date().getTime(),
        eightTime = 8 * 60 * 60 * 1000,
        disTime = Number(cTime - tTime),
        timeFlag = eightTime - disTime, // >0 8小时内的新闻；否则就是8小时前的新闻。
        timeTagStr = timeFlag > 0 ? GLOBAL.Util.getSpecialTimeStr(dateStr) : '';
      return timeTagStr;
    },

    /**
     * 插入广告容器
     * 下拉 每页第2、7新闻后
     */
    prependGgDom: function(i) {
      var ggWrapId =
        'ggwrap_' +
        Math.random()
          .toString(36)
          .split('.')[1];
      if ($.inArray(i, ggPulldownPos) !== -1) {
        ggWrapIdArr.push(ggWrapId);
        $newsList.prepend(
          '<div id="' + ggWrapId + '" class="J-gg-item"></div>'
        );
      }
    },

    /**
     * 插入广告容器
     * 首屏和上拉 每页第2、4、7、12、17新闻后
     */
    appendGgDom: function(i, len) {
      var scope = this;
      var ggWrapId =
        'ggwrap_' +
        Math.random()
          .toString(36)
          .split('.')[1];
      if (
        $.inArray(i, ggPullupPos) !== -1 ||
        (i < ggPullupPos[ggPullupPos.length - 1] && i === len - 1) // 兼容新闻条数不足最后一个广告位的情况
      ) {
        ggWrapIdArr.push(ggWrapId);
        $newsList.append('<div id="' + ggWrapId + '" class="J-gg-item"></div>');
      }
      if (GLOBAL.Et.qid === 'wfky') {
        // 加很多广告位 两条广告一条新闻
        var ggWrapId2 =
          'ggwrap2_' +
          Math.random()
            .toString(36)
            .split('.')[1];
        if ($.inArray(i, ggPullupPos) !== -1) {
          wfkyGgWrapIdArr.push(ggWrapId2);
          $newsList.append(
            '<div id="' + ggWrapId2 + '" class="J-gg-item"></div>'
          );
        } else {
          ggWrapId2 =
            'ggwrap2_' +
            Math.random()
              .toString(36)
              .split('.')[1];
          wfkyGgWrapIdArr.push(ggWrapId2);
          $newsList.append(
            '<div id="' + ggWrapId2 + '" class="J-gg-item"></div>'
          );
          ggWrapId2 =
            'ggwrap2_' +
            Math.random()
              .toString(36)
              .split('.')[1];
          wfkyGgWrapIdArr.push(ggWrapId2);
          $newsList.append(
            '<div id="' + ggWrapId2 + '" class="J-gg-item"></div>'
          );
        }
      }
      if (GLOBAL.Et.qid === 'qid10313' && scope.pgNum === 1) {
        if ($.inArray(i, ggPullupPos) === -1) {
          scope.loadUnionGg({
            type: 'baidu',
            id: qid10313Gg.shift(),
            $dom: $newsList
          });
        }
      }
    },

    /**
     * 加载信息流中广告(首页和上拉)
     */
    loadGg: function() {
      if (GLOBAL.Et.gg.my.nogg) {
        return;
      }
      var scope = this;
      scope.getDsp(function(dspData) {
        var data = dspData ? dspData.data : [];
        var dsp = {
          0: null,
          1: null,
          2: null,
          3: null,
          4: null
        };

        // 处理dsp数据
        for (var i = 0; i < data.length; i++) {
          if (Number(data[i].idx) === -1) {
            // 特殊位置
            dsp[1] = data[i];
          }
          if (Number(data[i].idx) === 1) {
            dsp[0] = data[i];
          }
          if (Number(data[i].idx) === 2) {
            dsp[2] = data[i];
          }
          if (Number(data[i].idx) === 3) {
            dsp[3] = data[i];
          }
          if (Number(data[i].idx) === 4) {
            dsp[4] = data[i];
          }
        }

        // 处理联盟广告数据
        var myGg = GLOBAL.Et.gg.my; // 广告后台 第一屏广告
        var unionGg = isFirstPage
          ? [myGg.li, tempGgForDsp.shift(), myGg.li2, myGg.li3, myGg.li4]
          : [
              tempGgForPullUp.shift(),
              tempGgForDsp.shift(),
              tempGgForPullUp.shift(),
              tempGgForPullUp.shift(),
              tempGgForPullUp.shift()
            ];

        // console.log('unionGg::', unionGg);
        // console.log('dsp::', dsp);
        // console.log('ggWrapIdArr::', ggWrapIdArr);

        // 加载广告
        for (var k = 0; k < ggWrapIdArr.length; k++) {
          if (k === 1) {
            if (scope.newsType === 'shipin' || GLOBAL.Et.onlySogouGgId) {
              continue;
            }
            scope.insertGgForDsp({
              id: ggWrapIdArr[k],
              dsp: dsp[k],
              union: unionGg[k]
            });
          } else {
            scope.insertGgForPullUp({
              id: ggWrapIdArr[k],
              dsp: dsp[k],
              union: unionGg[k]
            });
          }
        }
        if (GLOBAL.Et.qid === 'wfky') {
          scope.filterArea(['福建'], function(isSpecialCity) {
            if (!isSpecialCity) {
              for (var e = 0; e < wfkyGgWrapIdArr.length; e++) {
                scope.loadUnionGg({
                  type: 'baidu',
                  id: wfkyGgId.shift(),
                  $dom: $('#' + wfkyGgWrapIdArr[e])
                });
              }
            }
          });
        }
        setTimeout(function() {
          // 缓存当前类别加载的新闻（缓存40分钟）
          wsCache.set(
            'news_' + scope.newsType + '_' + GLOBAL.Et.qid,
            $newsList.html(),
            {
              exp: 40 * 60
            }
          );
        }, 500);
      });
    },

    /**
     * 加载信息流中广告(下拉)
     */
    loadGgForPullDown: function() {
      if (GLOBAL.Et.gg.my.nogg) {
        return;
      }
      var scope = this;
      scope.getDspForPullDown(function(dspData) {
        var data = dspData ? dspData.data : [];
        var dsp = {
          0: null,
          1: null
        };
        // 处理dsp数据
        for (var i = 0; i < data.length; i++) {
          if (Number(data[i].idx) === i + 1) {
            dsp[i] = data[i];
          }
        }
        // 联盟广告数据
        var unionGg = [tempGgForPullDown.shift(), tempGgForPullDown.shift()];
        // 加载广告
        for (var k = 0; k < ggWrapIdArr.length; k++) {
          scope.insertGgForPullDown({
            id: ggWrapIdArr[k],
            dsp: dsp[k],
            union: unionGg[k]
          });
        }
      });
    },

    /**
     * 上拉插入广告
     * @param  {Object} opts 广告数据
     * @param  id 广告容器id
     * @param  dsp dsp广告数据
     * @param  union 联盟广告数据
     */
    insertGgForPullUp: function(opts) {
      opts = opts || {};
      var scope = this;
      var $dom = $('#' + opts.id);
      var dspData = opts.dsp;
      var union = opts.union;
      $dom.attr('data-pgnum', scope.pgNum);
      if (dspData) {
        scope.loadDsp(dspData, $dom);
      } else {
        if (!union) {
          return;
        }
        if (typeof union === 'string') {
          // 针对有些广告传过来的是个字符串 'baidu@@qwerasdf|sougou@@542151' 需改成对象形式
          if (GLOBAL.Et.onlySogouGgId) {
            union = {
              type: 'sougou',
              id: GLOBAL.Et.onlySogouGgId
            };
          } else {
            var arr = union.split('@@');
            union = {
              type: arr[0],
              id: arr[1]
            };
          }
        }
        union && scope.cacheBdGgIdForPullUp(union.type + '@@' + union.id);
        union.$dom = $dom;
        scope.loadUnionGg(union);
      }
    },

    /**
     * 第4条广告后的特殊位置
     * @param  {Object} opts 广告数据
     * @param  id 广告容器id
     * @param  dsp dsp广告数据
     * @param  union 联盟广告数据
     */
    insertGgForDsp: function(opts) {
      opts = opts || {};
      var scope = this;
      var $dom = $('#' + opts.id);
      var dspData = opts.dsp;
      var union = opts.union;
      $dom.attr('data-pgnum', 0);
      if (dspData) {
        scope.loadDsp(dspData, $dom);
      } else {
        if (!union) {
          return;
        }
        if (typeof union === 'string') {
          // 针对有些广告传过来的是个字符串 'baidu@@qwerasdf|sougou@@542151' 需改成对象形式
          var arr = union.split('@@');
          union = {
            type: arr[0],
            id: arr[1]
          };
        }
        union && scope.cacheBdGgIdForDsp(union.type + '@@' + union.id);
        union.$dom = $dom;
        scope.loadUnionGg(union);
      }
    },

    /**
     * 下拉插入广告
     * @param  {Object} opts 广告数据
     * @param  id 广告容器id
     * @param  dsp dsp广告数据
     * @param  union 联盟广告数据
     */
    insertGgForPullDown: function(opts) {
      opts = opts || {};
      var scope = this;
      var $dom = $('#' + opts.id);
      var dspData = opts.dsp;
      var union = opts.union;
      $dom.attr('data-pgnum', scope.pulldown_pgNum);
      if (dspData) {
        scope.loadDspForPullDown(dspData, $dom);
      } else {
        if (!union) {
          return;
        }
        if (typeof union === 'string') {
          // 针对有些广告传过来的是个字符串 'baidu@@qwerasdf|sougou@@542151' 需改成对象形式
          if (GLOBAL.Et.onlySogouGgId) {
            union = {
              type: 'sougou',
              id: GLOBAL.Et.onlySogouGgId
            };
          } else {
            var arr = union.split('@@');
            union = {
              type: arr[0],
              id: arr[1]
            };
          }
        }
        union && scope.cacheBdGgIdForPullDown(union.type + '@@' + union.id);
        union.$dom = $dom;
        scope.loadUnionGg(union);
      }
    },

    /**
     * 加载联盟打底广告
     * @param {Object} union 联盟广告配置
     * @param {} $dom 广告容器
     */
    loadUnionGg: function(gg) {
      if (!gg || !gg.id || gg.isempty || GLOBAL.Et.gg.my.nogg) {
        return;
      }
      var type = gg.type;
      var scope = this;
      gg.$dom.attr('data-ggid', gg.id);
      switch (type) {
        case 'baidu':
          scope.loadBaiduGg(gg);
          break;
        case 'baidu2':
          scope.loadBaiduGg2(gg);
          break;
        case 'sougou':
          scope.loadSougouGg(gg);
          break;
        case 'afp':
          scope.loadAfpGg(gg);
          break;
        case 'ssp':
          scope.loadSspGg(gg);
          break;
        case 'huanqiu':
          scope.loadHuanqiuGg(gg);
          break;
        case 'yn':
          scope.loadYnGg(gg);
          break;
        default:
          break;
      }
    },

    /**
     * 百度广告
     */
    loadBaiduGg: function(gg) {
      var ggId = gg.id;
      // 分析是5.0广告还是5.0之前的广告
      var ggConfig = '';
      var reg = new RegExp(/^u[0-9]{7}/);
      var isV5 = !reg.test(ggId);
      var $dom = gg.$dom;
      if (isV5) {
        $dom.append(
          '<div class="bdgg-wrap"><div id="' +
            ggId +
            '"></div><div class="line"></div></div>'
        );
        GLOBAL.Util.getScript(
          '//df666.pzhttaax.cn/' + ggId + '.js',
          function() {},
          $('#' + ggId)[0]
        );
      } else {
        ggConfig =
          '(window.cpro_mobile_slot = window.cpro_mobile_slot || []).push({id : "' +
          ggId +
          '",at:"3", pat:"21", ptLH:"30", tn:"template_inlay_all_mobile_lu_native", rss1:"#FFFFFF", titFF:"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91", titFS:"12", rss2:"#000000", ptFS:"17", ptFC:"#000000", ptFF:"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91", ptFW:"0", conpl:"15", conpr:"15", conpt:"8", conpb:"15", cpro_h:"140", ptn:"1", ptp:"0", itecpl:"10", piw:"0", pih:"0", ptDesc:"2", ptLogo:"0", ptLogoFS:"10", ptLogoBg:"#FFFFFF", ptLogoC:"#999999", ptLogoH:"0", ptLogoW:"0"})';
        $dom.append(
          '<div class="bdgg-wrap"><div id="cpro_' +
            ggId +
            '"></div><div class="line"></div></div>'
        );
        GLOBAL.Util.createScript(
          ggConfig,
          function() {
            GLOBAL.Util.getScript(
              '//cpro.baidustatic.com/cpro/ui/cm.js',
              function() {},
              $('#cpro_' + ggId)[0]
            );
          },
          $('#cpro_' + ggId)[0]
        );
      }
    },

    /**
     * 加载百度广告(18-08-14新版代码，运营会把整段js代码填入后台，前端需截取需要的部分：<script type="text/javascript" src="//df666.pzhttaax.cn/source/zyjox.js?hcu=ykelyi"></script>)
     * @param {object} gg 广告配置
     */
    loadBaiduGg2: function(gg) {
      var str = gg.id;
      var scriptSrc = str.substring(
        str.indexOf('src="') + 5,
        str.lastIndexOf('">')
      );
      var id = Math.random()
        .toString(36)
        .split('.')[1];
      gg.$dom.append(
        '<div class="bdgg-wrap"><div id="' +
          id +
          '"></div><div class="line"></div></div>'
      );
      GLOBAL.Util.getScript(scriptSrc, function() {}, $('#' + id)[0]);
    },

    /**
     * 搜狗广告
     */
    loadSougouGg: function(gg) {
      var ggId = gg.id;
      var height = gg.height || '145';
      gg.$dom.append(
        '<div class="sougou-wrap">' +
          '<iframe src="https://mini.eastday.com/toutiaoh5/partner/gg_sogou.html?ggid=' +
          ggId +
          '" frameborder="0" scrolling="no" width="100%" height="' +
          height +
          '"></iframe>' +
          '<div class="one-px-border"></div>' +
          '</div>'
      );
    },

    /**
     * afp广告
     */
    loadAfpGg: function(gg) {
      var ggId = gg.id;
      var iframeId =
        'afp_' +
        Math.random()
          .toString(36)
          .split('.')[1];
      gg.$dom.append(
        '<div class="afp-wrap" style="width:100%;height:148px;overflow:hidden;"><iframe id="' +
          iframeId +
          '" src="//mini.eastday.com/toutiaoh5/partner/gg_afp.html?ggid=' +
          ggId +
          '&ifid=' +
          iframeId +
          '" frameborder="0" scrolling="no" width="100%" height="500"></iframe><div class="line"></div></div>'
      );
    },

    /**
     * 加载 ssp 广告
     * @param {object} gg 广告配置
     */
    loadSspGg: function(gg) {
      var id = gg.id;
      var height = gg.height || '135';
      if (height && height.indexOf(':') > -1) {
        height =
          (window.screen.width / height.split(':')[0]) * height.split(':')[1];
      }
      gg.$dom.append(
        '<div class="ssp-wrap" style="width:100%;height:' +
          height +
          'px;overflow:hidden;"><iframe src="//mini.eastday.com/toutiaoh5/partner/gg_ssp2.html?ggid=' +
          id +
          '" frameborder="0" scrolling="no" width="100%" height="500"></div>'
      );
    },

    /**
     * 环球广告
     */
    loadHuanqiuGg: function(gg) {
      var ggId = gg.id;
      var height = gg.height || '80'; // 环球广告尺寸
      gg.$dom.append('<div class="hq-wrap" id="' + ggId + '"></div>');
      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('smua', 'd=m&s=b&u=' + ggId + '&h=' + height);
      script.setAttribute('src', '//www.smucdn.com/smu0/o.js');
      $('#' + ggId).append(script);
    },

    /**
     * 赢纳广告
     */
    loadYnGg: function(gg) {
      var ggId = gg.id;
      gg.$dom.append(
        '<div id="' +
          ggId +
          '" class="bdgg-wrap"></div><div class="line"></div>'
      );
      GLOBAL.Util.getScript(
        '//js.soarfi.cn/' + ggId + '.js',
        function() {},
        $('#' + ggId)[0]
      );
    },

    /**
     * 加载wnwifi广告（wnwifi广告打底）
     * @return {[type]} [description]
     */
    // insertGgForWnwifi: function (idx) {
    //     var scope = this,
    //         params = 'qid=' + GLOBAL.Et.qid +
    //         '&uid=' + GLOBAL.Et.uid +
    //         '&cnurl=' + GLOBAL.Util.getUrlNoParams() +
    //         '&idx=' + (idx + (20 * (scope.pgNum - 1))) +
    //         '&adpgnum=' + scope.pgNum +
    //         '&newstype=' + scope.newsType +
    //         '&pgtype=list'; // 首页传list，详情页传detail
    //     // $newsList.append('<div class="wnwifigg-wrap"><iframe src="http://s.dftoutiao.com/wnwifi/wnwifi.html?' + params + '" frameborder="0" scrolling="no" width="100%" height="153"></iframe></div>');
    //     // 15条新闻的后面（加上广告的话是第18条新闻后面）
    //     $newsList.children().eq(idx + 1).after('<div class="wnwifigg-wrap"><iframe src="http://s.dftoutiao.com/wnwifi/wnwifi.html?' + params + '" frameborder="0" scrolling="no" width="100%" height="153"></iframe></div>');
    // },

    /**
     * 缓存文字链广告ID（上拉加载）
     * @param  {[type]} id 广告ID
     * @return {[type]}    [description]
     */
    cacheTxtGgIdForPullUp: function(id) {
      var scope = this,
        arr =
          wsCache.get(
            'txtggid_pullup_' + scope.newsType + '_' + GLOBAL.Et.qid
          ) || [];
      if (!arr.contains(id)) {
        arr.push(id);
      }
      wsCache.set(
        'txtggid_pullup_' + scope.newsType + '_' + GLOBAL.Et.qid,
        arr,
        {
          exp: 40 * 60
        }
      );
    },

    /**
     * 缓存文字链广告ID（下拉叠加）
     * @param  {[type]} id 广告ID
     * @return {[type]}    [description]
     */
    cacheTxtGgIdForPullDown: function(id) {
      var scope = this,
        arr =
          wsCache.get(
            'txtggid_pulldown_' + scope.newsType + '_' + GLOBAL.Et.qid
          ) || [];
      if (!arr.contains(id)) {
        arr.push(id);
      }
      wsCache.set(
        'txtggid_pulldown_' + scope.newsType + '_' + GLOBAL.Et.qid,
        arr,
        {
          exp: 40 * 60
        }
      );
    },

    /**
     * 缓存已经加载过的百度广告ID（上拉加载）
     * @param  {[type]} id 广告ID
     * @return {[type]}    [description]
     */
    cacheBdGgIdForPullUp: function(id) {
      var scope = this,
        arr =
          wsCache.get(
            'bdggid_pullup_' + scope.newsType + '_' + GLOBAL.Et.qid
          ) || [];
      if (!arr.contains(id)) {
        arr.push(id);
      }
      wsCache.set(
        'bdggid_pullup_' + scope.newsType + '_' + GLOBAL.Et.qid,
        arr,
        {
          exp: 40 * 60
        }
      );
    },

    /**
     * 缓存已经加载过的百度广告ID（上拉加载） ---- 替换dsp广告
     * @param  {[type]} id 广告ID
     * @return {[type]}    [description]
     */
    cacheBdGgIdForDsp: function(id) {
      var scope = this,
        arr =
          wsCache.get('bdggid_dsp_' + scope.newsType + '_' + GLOBAL.Et.qid) ||
          [];
      if (!arr.contains(id)) {
        arr.push(id);
      }
      wsCache.set('bdggid_dsp_' + scope.newsType + '_' + GLOBAL.Et.qid, arr, {
        exp: 40 * 60
      });
    },

    /**
     * 缓存已经加载过的百度广告ID（下拉叠加）
     * @param  {[type]} id 广告ID
     * @return {[type]}    [description]
     */
    cacheBdGgIdForPullDown: function(id) {
      var scope = this,
        arr =
          wsCache.get(
            'bdggid_pulldown_' + scope.newsType + '_' + GLOBAL.Et.qid
          ) || [];
      if (!arr.contains(id)) {
        arr.push(id);
      }
      wsCache.set(
        'bdggid_pulldown_' + scope.newsType + '_' + GLOBAL.Et.qid,
        arr,
        {
          exp: 40 * 60
        }
      );
    },

    /**
     * 获取dsp广告
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    getDsp: function(callback) {
      var scope = this;
      var errorLogObj = {
        jinlisun: 'jinlisun_dspchaoshi_h5',
        vivobrowser: 'vivobrowser_dspchaoshi_h5'
      };
      var errorLog = errorLogObj[GLOBAL.Et.qid];
      $.ajax({
        url: dspUrl,
        data: {
          type: scope.newsType,
          qid: scope.qid,
          uid: scope.userId, // 用户ID
          os: scope.osType,
          readhistory: scope.readUrl,
          adnum: 4,
          pgnum: scope.pgNum,
          adtype: 1236,
          dspver: '1.0.1',
          softtype: 'news',
          softname: 'eastday_wapnews',
          apimode: 'price', // 竞价模式  industry:行业保护模式  price:价格高低模式
          sectors: wsCache.get('dsp_read_sectors') || 'null',
          newstype: 'ad',
          browser_type: scope.browserType || 'null',
          pixel: window.screen.width + '*' + window.screen.height,
          site: 'ttz', // 站点名称
          fr_url: GLOBAL.Util.getReferrer() || 'null', // 首页是来源url(document.referer)
          refresh_num: scope.pgNum === 1 ? scope.refresh_num : 'null',
          total_num: scope.pgNum === 1 ? scope.pulldown_total_num : 'null' // 下拉累计计数 24h 每日重置
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 3000,
        beforeSend: function() {},
        success: function(data) {
          if (dspIndex % 2 === 0) {
            wsCache.delete('dsp_read_sectors');
          }
          wsCache.set('dsp_read_index', dspIndex, {
            exp: 40 * 60
          });
          dspIndex++;
          callback && callback(data);
        },
        error: function(jqXHR, textStatus) {
          errorLog &&
            scope.sendAdShowLog({
              advId: errorLog
            });
          console.error(textStatus);
          callback && callback(0); // eslint-disable-line
        }
      });
    },

    /**
     * 获取dsp广告
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    getDspForPullDown: function(callback) {
      var scope = this;
      var errorLogObj = {
        jinlisun: 'jinlisun_dspchaoshi_h5',
        vivobrowser: 'vivobrowser_dspchaoshi_h5'
      };
      var errorLog = errorLogObj[GLOBAL.Et.qid];
      $.ajax({
        url: dspUrl,
        data: {
          type: scope.newsType,
          qid: scope.qid,
          uid: scope.userId, // 用户ID
          os: scope.osType,
          readhistory: scope.readUrl,
          adnum: 2,
          pgnum: scope.pulldown_pgNum,
          apimode: 'industry', // 竞价模式  industry:行业保护模式  price:价格高低模式
          sectors: wsCache.get('dsp_read_sectors') || 'null',
          adtype: 1236,
          dspver: '1.0.1',
          softtype: 'news',
          softname: 'eastday_wapnews',
          newstype: 'ad',
          browser_type: scope.browserType || 'null',
          pixel: window.screen.width + '*' + window.screen.height,
          site: 'ttz', // 站点名称
          fr_url: GLOBAL.Util.getReferrer() || 'null', // 首页是来源url(document.referer)
          total_num: scope.pulldown_total_num // 下拉累计计数 24h 每日重置
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 3000,
        beforeSend: function() {},
        success: function(data) {
          if (dspIndex % 2 === 0) {
            wsCache.delete('dsp_read_sectors');
          }
          wsCache.set('dsp_read_index', dspIndex, {
            exp: 40 * 60
          });
          dspIndex++;
          callback && callback(data);
        },
        error: function(jqXHR, textStatus) {
          errorLog &&
            scope.sendAdShowLog({
              advId: errorLog
            });
          console.error(textStatus);
          callback && callback(0); // eslint-disable-line
        }
      });
    },

    /**
     * 加载dsp广告
     * @param  {Object} d 广告数据
     * @param  {[type]} $dom 广告容器
     * @return {[type]}      [description]
     */
    loadDsp: function(d, $dom) {
      var scope = this;
      var adposition = d.idx;
      var url = d.url;
      var dateStr = (d.date && scope.getSpecialTime(d.date)) || '';
      var topic = d.topic;
      var accurateurl = d.accurateurl;
      var platform = d.platform;
      var adStyle = d.adStyle; // 广告样式 （big：大图；one：单图；group：三图；full：全图广告）
      var imgArr = d.miniimg;
      var imgLen = imgArr.length;
      var source = '提供的广告';
      var tagStr = '<i>' + d.source + '</i>';
      var advId = d.adv_id || '';
      var advStr = '';
      var reporturl = d.reporturl;
      var dataStr = '';
      var sectors = d.sectors || ''; // 行业类型  需做缓存 下次请求接口时传给后端
      var summary = d.summary || '';
      var subadStyle = d.subadstyle || '';
      if (sectors) {
        if ((dspIndex - 1) % 2 !== 0) {
          var cacheSectors = wsCache.get('dsp_read_sectors')
            ? wsCache.get('dsp_read_sectors').split(',')
            : [];
          !cacheSectors.contains(sectors) && cacheSectors.push(sectors);
          wsCache.set('dsp_read_sectors', cacheSectors.join(','), {
            exp: 60 * 60
          });
        }
      }
      if (reporturl) {
        var isclientreport = d.isclientreport; // 是否是客户端上报第三方日志 0：服务端上报 1：客户端上报
        var clickrep = d.clickrep.join('\t');
        var showrep = d.showrep.join('\t');
        var bigpic = Number(d.bigpic) || 0;
        advStr =
          'class="J-uni-news" data-advurl="' +
          url +
          '" data-reporturl="' +
          reporturl +
          '" data-idx="1" data-pgnum="' +
          scope.pgNum +
          '" data-advid="' +
          advId +
          '" data-isclientreport="' +
          isclientreport +
          '" data-showrep="' +
          showrep +
          '" data-clickrep="' +
          clickrep +
          '"';
      } else {
        var isshowbackurl = d.isshowbackurl;
        var showbackurl = d.showbackurl;
        var isclickbackurl = d.isclickbackurl;
        var clickbackurl = d.clickbackurl;
        var inviewbackurl = d.inviewbackurl;
        advStr =
          'class="J-dsp-news J-gg-item news-promote" data-inviewbackurl="' +
          inviewbackurl +
          '" data-advurl="' +
          url +
          '" data-advid="' +
          advId +
          '" data-accurateurl="' +
          accurateurl +
          '" data-adpgnum="' +
          scope.pgNum +
          '" data-pgnum="' +
          scope.pgNum +
          '" data-adposition="' +
          adposition +
          '" data-clickbackurl="' +
          clickbackurl +
          '" data-showbackurl="' +
          showbackurl +
          '" data-isshowbackurl="' +
          isshowbackurl +
          '" data-isclickbackurl="' +
          isclickbackurl +
          '" data-platform="' +
          platform +
          '"';
      }
      // 大图
      if (adStyle === 'big' || bigpic === 1) {
        // eslint-disable-line
        imgArr = d.lbimg;
        dataStr =
          '<section class="news-item news-item-s3">' +
          '<a ' +
          advStr +
          ' href="javascript:;">' +
          '<div class="news-wrap">' +
          '<h3>' +
          topic +
          '</h3>' +
          '<div class="img-wrap clearfix"><img class="lazy fl" src="' +
          (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
          '"></div>' +
          '<div class="dsp-tag dsp-tag-big">' +
          '<p class="tags tag-big fl">' +
          summary +
          '</p>' +
          '<p class="tags fr clearfix">' +
          '<em class="tag tag-time">' +
          (tagStr || dateStr) +
          '</em>' +
          '<em class="tag tag-src">' +
          source +
          '</em>' +
          '</p>' +
          '</div>' +
          // '<div class="new-tag"></div>' +
          '</div>' +
          '</a>' +
          '</section>';
      } else if (adStyle == 'full') {
        // eslint-disable-line
        imgArr = d.lbimg;
        dataStr =
          '<section class="news-item news-item-full">' +
          '<a ' +
          advStr +
          ' href="javascript:;">' +
          '<div class="news-wrap">' +
          '<div class="img-wrap clearfix"><img class="lazy fl" src="' +
          (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
          '"></div>' +
          '<p class="tags clearfix">' +
          '<em class="tag tag-time">' +
          (tagStr || dateStr) +
          '</em>' +
          '<em class="tag tag-src">' +
          source +
          '</em>' +
          '</p>' +
          // '<div class="new-tag"></div>' +
          '</div>' +
          '</a>' +
          '</section>';
      } else if (adStyle === 'group' || (bigpic === 0 && imgLen === 3)) {
        // eslint-disable-line
        if (subadStyle === '1') {
          dataStr =
            '<section class="news-item news-item-s2">' +
            '<a ' +
            advStr +
            ' href="javascript:;">' +
            '<div class="news-wrap">' +
            '<h3>' +
            topic +
            '</h3>' +
            '<div class="news-img clearfix">' +
            '<div class="news-left fl"><img src="' +
            (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
            '"></div>' +
            '<div class="news-right fr"><img src="' +
            (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') +
            '">' +
            '<img class="img-two" src="' +
            (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') +
            '"></div>' +
            '</div>' +
            '<div class="dsp-tag">' +
            '<p class="tags tag-group fl">' +
            summary +
            '</p>' +
            '<p class="tags fr">' +
            '<em class="tag tag-time">' +
            (tagStr || dateStr) +
            '</em>' +
            '<em class="tag tag-src">' +
            source +
            '</em>' +
            '</p>' +
            '</div>' +
            '</div>' +
            '</a>' +
            '</section>';
        } else {
          dataStr =
            '<section class="news-item news-item-s2">' +
            '<a ' +
            advStr +
            ' href="javascript:;">' +
            '<div class="news-wrap">' +
            '<h3>' +
            topic +
            '</h3>' +
            '<div class="img-wrap clearfix">' +
            '<div class="img fl"><img class="lazy" src="' +
            (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
            '"></div>' +
            '<div class="img fl"><img class="lazy" src="' +
            (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') +
            '"></div>' +
            '<div class="img fl"><img class="lazy" src="' +
            (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') +
            '"></div>' +
            '</div>' +
            '<div class="dsp-tag">' +
            '<p class="tags tag-group fl">' +
            summary +
            '</p>' +
            '<p class="tags fr">' +
            '<em class="tag tag-time">' +
            (tagStr || dateStr) +
            '</em>' +
            '<em class="tag tag-src">' +
            source +
            '</em>' +
            '</p>' +
            '</div>' +
            // '<div class="new-tag"></div>' +
            '</div>' +
            '</a>' +
            '</section>';
        }
      } else if (adStyle === 'one' || (bigpic === 0 && imgLen === 1)) {
        // eslint-disable-line
        dataStr =
          '<section class="news-item news-item-s1">' +
          '<a ' +
          advStr +
          ' href="javascript:;">' +
          '<div class="news-wrap clearfix">' +
          '<div class="txt-wrap fl">' +
          '<h3>' +
          topic +
          '</h3>' +
          '<p class="tag-one">' +
          summary +
          '</p>' +
          '<p class="tags clearfix">' +
          '<em class="tag tag-time">' +
          (tagStr || dateStr) +
          '</em>' +
          '<em class="tag tag-src">' +
          source +
          '</em>' +
          '</p>' +
          // '<div class="new-tag"></div>' +
          '</div>' +
          '<div class="img-wrap fr"><img class="lazy" src="' +
          (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
          '"></div>' +
          '</div>' +
          '</a>' +
          '</section>';
      }
      $dom.append(dataStr);
      // show日志调用
      try {
        if (reporturl) {
          scope.sendAllianceLog({
            url: reporturl,
            advid: advId,
            to: url,
            idx: 1,
            pgnum: scope.pgNum,
            reporturl: showrep,
            reqtype: '99',
            isclientreport: isclientreport
          });
        } else {
          if (Number(isshowbackurl) === 1) {
            // jshint ignore:line
            var sbu = showbackurl.split('@@'); // 和后台约定的以@@分割url，如需修改请和后端开发协商
            var sbuLen = sbu.length;
            var i = 0;
            for (i = 0; i < sbuLen; i++) {
              new Image().src = sbu[i]; // eslint-disable-line
            }
          }
        }
      } catch (e) {
        console.error(e);
      }
      // DSP进屏日志(第一屏就出现广告，所以在渲染完就需判断并上报一次)
      try {
        var $dspDomArr = $('.J-dsp-news');
        $dspDomArr.each(function() {
          var $target = $(this);
          var wH = window.screen.height;
          var tH = $target.offset().top;
          var sH = $(window).scrollTop();
          var hasView = Number($target.attr('data-hasview')) || 0;
          if (tH - sH + 16 < wH) {
            if (hasView !== 1) {
              new Image().src = $target.attr('data-inviewbackurl'); // eslint-disable-line
              $target.attr('data-hasview', '1');
            }
          }
        });
      } catch (e) {
        console.error(e);
      }
    },

    /**
     * 加载dsp广告
     * @param  {[type]} data 广告数据
     * @return {[type]}      [description]
     */
    loadDspForPullDown: function(d, $dom) {
      var scope = this;
      var adposition = d.idx;
      var url = d.url;
      var dateStr = (d.date && scope.getSpecialTime(d.date)) || '';
      var topic = d.topic;
      var accurateurl = d.accurateurl;
      var platform = d.platform;
      var adStyle = d.adStyle; // 广告样式 （big：大图；one：单图；group：三图；full：全图广告）
      var imgArr = d.miniimg;
      var imgLen = imgArr.length;
      var source = '提供的广告';
      var tagStr = '<i>' + d.source + '</i>';
      var advId = d.adv_id || '';
      var advStr = '';
      var reporturl = d.reporturl;
      var dataStr = '';
      var sectors = d.sectors || ''; // 行业类型  需做缓存 下次请求接口时传给后端
      var summary = d.summary || ''; // 广告副标题
      var subadStyle = d.subadstyle || '';
      if (sectors) {
        if ((dspIndex - 1) % 2 !== 0) {
          var cacheSectors = wsCache.get('dsp_read_sectors')
            ? wsCache.get('dsp_read_sectors').split(',')
            : [];
          !cacheSectors.contains(sectors) && cacheSectors.push(sectors);
          wsCache.set('dsp_read_sectors', cacheSectors.join(','), {
            exp: 60 * 60
          });
        }
      }
      if (reporturl) {
        var isclientreport = d.isclientreport; // 是否是客户端上报第三方日志 0：服务端上报 1：客户端上报
        var clickrep = d.clickrep.join('\t');
        var showrep = d.showrep.join('\t');
        var bigpic = Number(d.bigpic) || 0;
        advStr =
          'class="J-uni-news" style="position:relative;" data-advurl="' +
          url +
          '" data-reporturl="' +
          reporturl +
          '" data-idx="1" data-pgnum="' +
          scope.pulldown_pgNum +
          '" data-advid="' +
          advId +
          '" data-isclientreport="' +
          isclientreport +
          '" data-showrep="' +
          showrep +
          '" data-clickrep="' +
          clickrep +
          '"';
      } else {
        var isshowbackurl = d.isshowbackurl;
        var showbackurl = d.showbackurl;
        var isclickbackurl = d.isclickbackurl;
        var clickbackurl = d.clickbackurl;
        var inviewbackurl = d.inviewbackurl;
        advStr =
          'class="J-dsp-news J-gg-item news-promote" style="position:relative;" data-inviewbackurl="' +
          inviewbackurl +
          '" data-advurl="' +
          url +
          '" data-advid="' +
          advId +
          '" data-accurateurl="' +
          accurateurl +
          '" data-adpgnum="' +
          scope.pulldown_pgNum +
          '" data-pgnum="' +
          scope.pulldown_pgNum +
          '" data-adposition="' +
          adposition +
          '" data-clickbackurl="' +
          clickbackurl +
          '" data-showbackurl="' +
          showbackurl +
          '" data-isshowbackurl="' +
          isshowbackurl +
          '" data-isclickbackurl="' +
          isclickbackurl +
          '" data-platform="' +
          platform +
          '"';
      }
      // 大图
      if (adStyle === 'big' || bigpic === 1) {
        // eslint-disable-line
        imgArr = d.lbimg;
        dataStr =
          '<section class="news-item news-item-s3">' +
          '<a ' +
          advStr +
          ' href="javascript:;">' +
          '<div class="news-wrap">' +
          '<h3>' +
          topic +
          '</h3>' +
          '<div class="img-wrap clearfix"><img class="lazy fl" src="' +
          (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
          '"></div>' +
          '<div class="dsp-tag dsp-tag-big">' +
          '<p class="tags tag-big fl">' +
          summary +
          '</p>' +
          '<p class="tags fr">' +
          '<em class="tag tag-time">' +
          (tagStr || dateStr) +
          '</em>' +
          '<em class="tag tag-src">' +
          source +
          '</em>' +
          '</p>' +
          '</div>' +
          // '<div class="new-tag"></div>' +
          '</div>' +
          '</a>' +
          '</section>';
      } else if (adStyle == 'full') {
        // eslint-disable-line
        imgArr = d.lbimg;
        dataStr =
          '<section class="news-item news-item-full">' +
          '<a ' +
          advStr +
          ' href="javascript:;">' +
          '<div class="news-wrap">' +
          '<div class="img-wrap clearfix"><img class="lazy fl" src="' +
          (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
          '"></div>' +
          '<p class="tags clearfix">' +
          '<em class="tag tag-time">' +
          (tagStr || dateStr) +
          '</em>' +
          '<em class="tag tag-src">' +
          source +
          '</em>' +
          '</p>' +
          // '<div class="new-tag"></div>' +
          '</div>' +
          '</a>' +
          '</section>';
      } else if (adStyle === 'group' || (bigpic === 0 && imgLen === 3)) {
        // eslint-disable-line
        if (subadStyle === '1') {
          dataStr =
            '<section class="news-item news-item-s2">' +
            '<a ' +
            advStr +
            ' href="javascript:;">' +
            '<div class="news-wrap">' +
            '<h3>' +
            topic +
            '</h3>' +
            '<div class="news-img clearfix">' +
            '<div class="news-left fl"><img src="' +
            (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
            '"></div>' +
            '<div class="news-right fr"><img src="' +
            (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') +
            '">' +
            '<img class="img-two" src="' +
            (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') +
            '"></div>' +
            '</div>' +
            '<div class="dsp-tag">' +
            '<p class="tags tag-group fl">' +
            summary +
            '</p>' +
            '<p class="tags fr">' +
            '<em class="tag tag-time">' +
            (tagStr || dateStr) +
            '</em>' +
            '<em class="tag tag-src">' +
            source +
            '</em>' +
            '</p>' +
            '</div>' +
            '</div>' +
            '</a>' +
            '</section>';
        } else {
          dataStr =
            '<section class="news-item news-item-s2">' +
            '<a ' +
            advStr +
            ' href="javascript:;">' +
            '<div class="news-wrap">' +
            '<h3>' +
            topic +
            '</h3>' +
            '<div class="img-wrap clearfix">' +
            '<div class="img fl"><img class="lazy" src="' +
            (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
            '"></div>' +
            '<div class="img fl"><img class="lazy" src="' +
            (imgArr.length ? scope.replaceImg(imgArr[1].src) : '') +
            '"></div>' +
            '<div class="img fl"><img class="lazy" src="' +
            (imgArr.length ? scope.replaceImg(imgArr[2].src) : '') +
            '"></div>' +
            '</div>' +
            '<div class="dsp-tag">' +
            '<p class="tags tag-group fl">' +
            summary +
            '</p>' +
            '<p class="tags fr">' +
            '<em class="tag tag-time">' +
            (tagStr || dateStr) +
            '</em>' +
            '<em class="tag tag-src">' +
            source +
            '</em>' +
            '</p>' +
            '</div>' +
            // '<div class="new-tag"></div>' +
            '</div>' +
            '</a>' +
            '</section>';
        }
      } else if (adStyle === 'one' || (bigpic === 0 && imgLen === 1)) {
        // eslint-disable-line
        dataStr =
          '<section class="news-item news-item-s1">' +
          '<a ' +
          advStr +
          ' href="javascript:;">' +
          '<div class="news-wrap clearfix">' +
          '<div class="txt-wrap fl">' +
          '<h3>' +
          topic +
          '</h3>' +
          '<p class="tag-one">' +
          summary +
          '</p>' +
          '<p class="tags clearfix">' +
          '<em class="tag tag-time">' +
          (tagStr || dateStr) +
          '</em>' +
          '<em class="tag tag-src">' +
          source +
          '</em>' +
          '</p>' +
          // '<div class="new-tag"></div>' +
          '</div>' +
          '<div class="img-wrap fr"><img class="lazy" src="' +
          (imgArr.length ? scope.replaceImg(imgArr[0].src) : '') +
          '"></div>' +
          '</div>' +
          '</a>' +
          '</section>';
      }
      $dom.append(dataStr);
      // show日志调用
      try {
        if (reporturl) {
          scope.sendAllianceLog({
            url: reporturl,
            advid: advId,
            to: url,
            idx: 1,
            pgnum: scope.pulldown_pgNum,
            reporturl: showrep,
            reqtype: '99',
            isclientreport: isclientreport
          });
        } else {
          if (Number(isshowbackurl) === 1) {
            // jshint ignore:line
            var sbu = showbackurl.split('@@'); // 和后台约定的以@@分割url，如需修改请和后端开发协商
            var sbuLen = sbu.length;
            var i = 0;
            for (i = 0; i < sbuLen; i++) {
              new Image().src = sbu[i]; // eslint-disable-line
            }
          }
        }
      } catch (e) {
        console.error(e);
      }
      // DSP进屏日志(第一屏就出现广告，所以在渲染完就需判断并上报一次)
      try {
        var $dspDomArr = $('.J-dsp-news');
        $dspDomArr.each(function() {
          var $target = $(this);
          var wH = window.screen.height;
          var tH = $target.offset().top;
          var sH = $(window).scrollTop();
          var hasView = Number($target.attr('data-hasview')) || 0;
          if (tH - sH + 16 < wH) {
            if (hasView !== 1) {
              new Image().src = $target.attr('data-inviewbackurl'); // eslint-disable-line
              $target.attr('data-hasview', '1');
            }
          }
        });
      } catch (e) {
        console.error(e);
      }
    },

    /**
     * 获取联盟api广告
     */
    getUnionApiGg: function(options) {
      $.ajax({
        url: unionUrl,
        data: {
          adnum: options.adnum,
          pgnum: options.pgnum,
          adtype: options.adtype, // big：大图 one：单图 group：三图
          paramjson: wsCache.get('union_' + GLOBAL.Et.uid + '_info')
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 3000,
        success: function(res) {
          options.callback && options.callback(res);
        },
        error: function(jqXHR, textStatus) {
          console.error(textStatus);
          options.callback && options.callback([]); // eslint-disable-line
        }
      });
    },

    /**
     * 发送联盟api广告接口日志
     */
    sendAllianceLog: function(options) {
      var logUrl = options.url;
      if (isHttps && options.url.indexOf('https') === -1) {
        logUrl = logUrl.replace('http:', 'https:');
      }
      var userInfo = JSON.parse(
        wsCache.get('union_' + GLOBAL.Et.uid + '_info')
      );
      $.ajax({
        url: logUrl,
        data: {
          softtype: userInfo.softtype || 'null',
          softname: userInfo.softname || 'null',
          position: userInfo.position || 'null',
          adv_id: options.advid || 'null',
          imei: userInfo.imei || 'null',
          qid: userInfo.qid || 'null',
          typeid: userInfo.typeid || 'null',
          ver: userInfo.ver || 'null',
          ttaccid: userInfo.ttaccid || 'null',
          deviceid: userInfo.deviceid || 'null',
          os: GLOBAL.Util.getOsType(),
          newstype: GLOBAL.Et.newsType,
          from: GLOBAL.Util.getUrlNoParams(),
          to: options.to,
          idx: options.idx,
          pgnum: options.pgnum,
          refer: GLOBAL.Util.getReferrer() || 'null',
          reporturl: options.reporturl, // 上报url地址(上报地址用\t拼接)
          reqtype: options.reqtype, // 上报类型 [ 进屏: 1 ，点击: 2 展示: 99 ]
          lat: userInfo.lat, // 纬度，用于精确识别地域
          lng: userInfo.lng, // 经度，用于精确识别地域
          coordtime: userInfo.coordtime, // 获取经纬度(lat/lng)的时间。其值 为从 GMT 1970-01-01 00：00：00 至今的毫秒值
          useragent: window.navigator.userAgent || userInfo.useragent,
          isclientreport: options.isclientreport,
          apiver: '3.0.1'
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        complete: function() {
          if (Number(options.isclientreport) !== 1 && options.advUrl) {
            // 服务端上报第三方日志时，需js跳转页面
            window.location.href = options.advUrl;
          }
        }
      });
    },

    /**
     * 发送联盟api接口中 第三方日志
     */
    sendUnionLog: function(options) {
      var arr = options.arr;
      var len = arr.length;
      if (!len) {
        return;
      }
      var ggImg = null;
      var count = 0;
      $('head').append('<meta name="referrer" content="never">');
      for (var i = 0; i < len; i++) {
        ggImg = new Image(); // eslint-disable-line
        ggImg.src = arr[i];
        if (options.url) {
          // 发送完日志需跳转页面
          ggImg.onload = function() {
            // jshint ignore:line
            count++;
            if (count === len) {
              window.location.href = options.url;
            }
          };
          ggImg.onerror = function() {
            // jshint ignore:line
            count++;
            if (count === len) {
              window.location.href = options.url;
            }
          };
        }
      }
      $('meta[name="referrer"]').remove();
    }
  };

  /**
   * app唤醒对象
   */
  function App() {
    var ct = GLOBAL.Util.getQueryString('type');
    var currentNewsType =
      ct || wsCache.get('current_newstype_' + GLOBAL.Et.qid);
    this.newsType = currentNewsType || 'toutiao'; // 新闻频道类别
    // this.appShowLogUrl = 'http://123.59.60.170/getwapdata/advshow';   // 测试接口
    this.appShowLogUrl = 'https://wapactlog.dftoutiao.com/getwapdata/advshow'; // 正式接口
    // this.appClickLogUrl = 'http://106.75.73.203/getwapdata/partner';    // 测试接口
    this.appClickLogUrl = 'https://wapactlog.dftoutiao.com/getwapdata/partner'; // 正式接口
    // 支持底部推荐下载的渠道
    this.btDownloadQids = ['null', 'qid00904', 'qid10208'];
  }

  App.prototype = {
    /**
     * 初始化
     */
    init: function() {
      var scope = this;
      var pkgInfo = {
        null: {
          androidpkgname: 'dongfangtoutiao_dftth5_dbxz'
        }
      };
      var curPkg = pkgInfo[GLOBAL.Et.qid] || pkgInfo['null'];

      // 加载底部推荐下载 - app唤醒（部分渠道不支持）
      try {
        if (scope.btDownloadQids.contains(GLOBAL.Et.qid)) {
          if (!Cookies.get('DFTT_APPDOWNLOAD_CLOSED')) {
            scope.loadBottomDownload({
              androidpkgname: curPkg.androidpkgname
            });
          }
        }
      } catch (e) {
        console.error(e);
      }

      try {
        scope.loadRedPacketDsp();
      } catch (e) {
        console.error(e);
      }
    },

    getDspGg: function(options, callback) {
      var scope = this;
      $.ajax({
        url: dspUrl,
        data: {
          type: scope.newsType,
          qid: GLOBAL.Et.qid,
          uid: GLOBAL.Et.uid,
          os: GLOBAL.Util.getOsType(),
          thisurl: GLOBAL.Util.getUrlNoParams(),
          reqcount: Cookies.get('DFTT_DSP_INDEX') || 1,
          adnum: options.adnum,
          pgnum: options.pgnum,
          adtype: options.adtype, // 1：大图 2：单图 3：三图
          dspver: '1.0.1',
          softtype: 'news',
          softname: 'eastday_wapnews',
          newstype: 'ad',
          site: options.site || 'ttz',
          readnewstype:
            (GLOBAL.Et.readNewsTypeArr &&
              GLOBAL.Et.readNewsTypeArr.join(',')) ||
            '',
          imei: GLOBAL.Util.getQueryString('ime') || 'null',
          browser_type: GLOBAL.Util.getBrowserType() || 'null',
          pixel: window.screen.width + '*' + window.screen.height,
          fr_url: GLOBAL.Util.getUrlNoParams() || 'null', // 内页是当前url
          apptypeid: GLOBAL.Util.getQueryString('apptypeid') || 'null',
          appver: GLOBAL.Util.getQueryString('appver') || 'null',
          ver: GLOBAL.Util.getQueryString('ver') || 'null',
          appqid: GLOBAL.Util.getQueryString('appqid') || 'null',
          ttaccid: GLOBAL.Util.getQueryString('ttaccid') || 'null',
          deviceid: GLOBAL.Util.getQueryString('deviceid') || 'null'
        },
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        timeout: 3000,
        beforeSend: function() {},
        success: function(res) {
          callback && callback(res); // eslint-disable-line
        },
        error: function(jqXHR, textStatus) {
          console.warn(textStatus);
          callback && callback([]); // eslint-disable-line
        }
      });
    },

    /**
     * 加载右下角悬浮广告
     */
    loadRedPacketDsp: function() {
      var scope = this;
      scope.getDspGg(
        {
          adtype: 'icon',
          pgnum: 0,
          adnum: 1
        },
        function(res) {
          var data = res ? res.data : [];
          var dlen = data ? data.length : 0;
          if (dlen) {
            var redPData = data[0];
            var redPImg = redPData.miniimg[0].src;
            var redPUrl = redPData.url;
            var isshowbackurl = redPData.isshowbackurl;
            var showbackurl = redPData.showbackurl;
            var inviewbackurl = redPData.inviewbackurl;
            var isclickbackurl = redPData.isclickbackurl;
            var clickbackurl = redPData.clickbackurl;
            $('body').append(
              '<section class="pack-red">' +
                '<a href="' +
                redPUrl +
                '" class="icon-pack J-dsp-news" id="icon-pack" data-inviewbackurl="' +
                inviewbackurl +
                '" data-isclickbackurl = "' +
                isclickbackurl +
                '" data-clickbackurl = "' +
                clickbackurl +
                '">' +
                '<img src="' +
                redPImg +
                '" style="width:110px;height:auto;" alt="" />' +
                '</a>' +
                '</section>'
            );
            // show日志调用
            try {
              if (Number(isshowbackurl) === 1) {
                // jshint ignore:line
                var sbu = showbackurl.split('@@'); // 和后台约定的以@@分割url，如需修改请和后端开发协商
                var sbuLen = sbu.length;
                var i = 0;
                for (i = 0; i < sbuLen; i++) {
                  new Image().src = sbu[i]; // eslint-disable-line
                }
              }
            } catch (e) {
              console.error(e);
            }
            // DSP进屏日志(第一屏就出现广告，所以在渲染完就需判断并上报一次)
            try {
              var $dspDomArr = $('.J-dsp-news');
              $dspDomArr.each(function() {
                var $target = $(this);
                var wH = window.screen.height;
                var tH = $target.offset().top;
                var sH = $(window).scrollTop();
                var hasView = Number($target.attr('data-hasview')) || 0;
                if (tH - sH + 16 < wH) {
                  if (hasView !== 1) {
                    new Image().src = $target.attr('data-inviewbackurl'); // eslint-disable-line
                    $target.attr('data-hasview', '1');
                  }
                }
              });
            } catch (e) {
              console.error(e);
            }
          } else {
            if (GLOBAL.Et.qid === 'baiducom') {
              scope.loadRedPacket({
                advId: 'dftt_baiducomred_red',
                advIdDetails: 'dftt_baiducomred_redinpage',
                advUrl: 'https://kp.dftoutiao.com/down/index?qid=H5_lbdb'
              });
            } else if (GLOBAL.Et.qid === 'null') {
              scope.loadRedPacket({
                advId: 'dftt_nullred_red',
                advIdDetails: 'dftt_nullred_redinpage',
                advUrl: 'https://kp.dftoutiao.com/down/index?qid=h5null_hb'
              });
            }
          }
        }
      );
    },

    /**
     * 悬浮红包
     */
    loadRedPacket: function(options) {
      var scope = this;
      var advId = options.advId;
      var advIdDetails = options.advIdDetails;
      var advUrl = options.advUrl;
      $('body').append(
        '<section class="pack-red">' +
          '<a href="javascript:;" class="icon-pack" id="icon-pack" data-advid="' +
          advId +
          '" data-advurl="' +
          advUrl +
          '">' +
          '<img src="//mini.eastday.com/toutiaoh5/img/redP/rp-st.gif" style="width:100px;height:auto;" alt="" />' +
          '</a>' +
          '</section>' +
          '<section class="page-pack" style="display:none;" id="page-pack">' +
          '<div class="big-pack-red">' +
          '<a id="open-pack" class="open-pack" href="' +
          advUrl +
          '" data-advid="' +
          advIdDetails +
          '">' +
          '<img src="//mini.eastday.com/toutiaoh5/img/redP/redpacket9.png" data-baiduimageplus-ignore id="big-picture" alt="" />' +
          '</a>' +
          '<div class="close-pack" id="close-pack" style="left:0px;"></div>' +
          '</div>' +
          '</section>'
      );

      // 小红包展示日志
      scope.appLinkShowLog({
        advUrl: advUrl,
        advId: advId
      });
      // 点击小红包，发送点击日志，显示大红包
      $('#icon-pack').on('click', function() {
        var $this = $(this);
        var id = $this.attr('data-advid');
        var href = $this.attr('data-advurl');
        scope.appLinkClickLog({
          advUrl: href,
          advId: id,
          callback: function() {
            $this.css('display', 'none');
            $('#page-pack').css('display', 'block');
            scope.appLinkShowLog({
              advUrl: advUrl,
              advId: advIdDetails
            });
          }
        });
      });

      // 点击关闭按钮关闭大红包
      $('#close-pack').on('click', function() {
        $('#page-pack').css('display', 'none');
        $('#icon-pack').css('display', 'block');
      });

      // 点击红包发送点击日志，下载app
      $('#open-pack').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var advUrl = $this.attr('href');
        scope.appLinkClickLog({
          advUrl: advUrl,
          advId: advIdDetails,
          callback: function() {
            window.location.href = advUrl;
          }
        });
      });
    },

    /**
     * 加载生成底部下载 - app唤醒
     * @return {[type]} [description]
     */
    loadBottomDownload: function(options) {
      var scope = this;
      var $body = $('body');
      var advId = 'toutiao_appdownload_bottom';
      var appUrl = '';
      if (GLOBAL.Os.ios) {
        appUrl = scope.getIosAppUrl();
      } else if (GLOBAL.Browser && GLOBAL.Browser.wechat) {
        appUrl = scope.getWechatAppUrl();
      } else if (GLOBAL.Os.android) {
        appUrl = scope.getAndroidAppUrl();
      }
      // appUrl = GLOBAL.Os.ios ? scope.getIosAppUrl() : scope.getAndroidAppUrl({ androidpkgname: options.androidpkgname });

      $body.prepend(
        '<div id="J_bottomappdownload" class="bottomappdownload-wrap">' +
          '<a class="J-bottomappdownload bottomappdownload" href="javascript:;" data-advid="' +
          advId +
          '" data-href="' +
          appUrl +
          '">' +
          '<div class="bottomContent clearfix">' +
          '<div class="tC-left">' +
          '<img class="tC-left-img" src="//mini.eastday.com/toutiaoh5/img/logo_dftt.png" alt="">' +
          '<div class="tC-right-div">' +
          '<p class="p1">东方头条</p>' +
          '<p class="p2">只做您关注的头条</p>' +
          '</div>' +
          '</div>' +
          '<span class="tC-right-a">立即打开</span>' +
          '</div>' +
          '</a>' +
          '<span class="J-bottomappdownload-close tC-right-span"></span>' +
          '</div>'
      );
      // app 引流展示日志
      scope.appLinkShowLog({
        advId: advId,
        advUrl: appUrl
      });
      // app 引流点击 发日志 唤醒app
      $body.on('click', '.J-bottomappdownload', function(e) {
        e.preventDefault();
        var $this = $(this);
        var advId = $this.attr('data-advid');
        var appUrl = $this.attr('data-href');
        scope.appLinkClickLog({
          advId: advId,
          advUrl: appUrl
        });
        setTimeout(function() {
          window.location.href = appUrl;
        }, 300);
        // 3秒未唤醒成功，就跳apk下载。
        if (GLOBAL.Os.android) {
          var timer = setTimeout(function() {
            window.location.href =
              'https://down.hao1982.com/android/qdb/h5/dongfangtoutiao_h5bannerheng.apk';
          }, 3000);
          // 注册visibilitychange事件 金立手机上会一直弹下载，故排除金立手机
          var phoneType = window.navigator.userAgent.toLowerCase();
          scope.pageVisibility = scope.pageVisibility();
          if (phoneType.indexOf('gionee') === -1) {
            scope.pageVisibility.visibilitychange(function() {
              if (this.hidden) {
                clearTimeout(timer);
                scope.wsCache.set('hideByVisibility', 'true', {
                  exp: 60
                });
              } else {
                if (scope.wsCache.get('hideByVisibility') === 'true') {
                  clearTimeout(timer);
                  scope.wsCache.set('hideByVisibility', 'false');
                  window.location.href =
                    'https://down.hao1982.com/android/qdb/h5/dongfangtoutiao_h5bannerheng.apk';
                } else {
                  window.location.href = GLOBAL.Util.getUrlNoParams() || '';
                }
              }
            });
          }
        }
      });
      // app 引流关闭事件
      $body.on('click', '.J-bottomappdownload-close', function(e) {
        e.stopPropagation();
        e.preventDefault();
        Cookies.set('DFTT_APPDOWNLOAD_CLOSED', 1, {
          expires: 2 / 24,
          path: '/',
          domain: 'eastday.com'
        }); // 点击关闭后2小时内不再展示
        $('#J_bottomappdownload').remove();
      });
    },

    /**
     * app引导下载按钮点击日志记录
     */
    appLinkClickLog: function(options) {
      var scope = this;
      $.ajax({
        url: scope.appClickLogUrl,
        dataType: 'jsonp',
        data: {
          qid: GLOBAL.Et.qid || 'null',
          uid: GLOBAL.Et.uid || 'null',
          loginid: 'null',
          softtype: 'news',
          softname: 'eastday_wapnews',
          newstype: 'ad',
          pgtype: 'index', // 区分dsp广告是位于哪个页面
          accurateurl: options.accurateurl || 'null',
          adpgnum: options.adpgnum || 'null', // 页码
          adposition: options.adposition || 'null', // 位置
          platform: options.platform || 'null', // 平台
          clickbackurl: options.clickbackurl || 'null',
          from: 'null',
          to: options.advUrl || 'null', // 下载链接
          os_type: GLOBAL.Util.getOsType() || 'null', // 操作系统
          browser_type: GLOBAL.Util.getBrowserType() || 'null', // 浏览器类型
          pixel: window.screen.width + '*' + window.screen.height, // 客户端分辨率
          ime: 'null',
          fr_url: GLOBAL.Util.getUrlNoParams(),
          adv: options.advId || 'null' // 广告id
        },
        jsonp: 'jsonpcallback',
        timeout: 2000,
        success: function() {},
        complete: function() {
          options.callback && options.callback(); // jshint ignore:line
        }
      });
    },

    /**
     * app引导下载按钮展示日志记录
     */
    appLinkShowLog: function(options) {
      var scope = this;
      $.ajax({
        url: scope.appShowLogUrl,
        dataType: 'jsonp',
        data: {
          qid: GLOBAL.Et.qid || 'null',
          uid: GLOBAL.Et.uid || 'null',
          loginid: 'null',
          softtype: 'news',
          softname: 'eastday_wapnews',
          newstype: 'ad',
          advurl: options.advUrl, // 广告链接，此处为下载链接
          os_type: GLOBAL.Util.getOsType() || 'null', // 操作系统
          browser_type: GLOBAL.Util.getBrowserType() || 'null', // 浏览器类型
          pixel: window.screen.width + '*' + window.screen.height, // 客户端分辨率
          ime: 'null',
          fr_url: 'null',
          adv: options.advId // 广告id
        },
        jsonp: 'jsonpcallback',
        success: function() {}
      });
    },

    /**
     * 获取唤醒链接 - IOS
     * @return {String}      唤醒链接
     */
    getIosAppUrl: function() {
      return (
        'https://association-dftt.dftoutiao.com/open' +
        '?url=' +
        (GLOBAL.Util.getUrlNoParams() || 'toutiao.eastday.com') +
        '&preload=1' +
        '&position=0' +
        '&wakeupplat=' +
        GLOBAL.Util.getBrowserType() +
        '&qid=' +
        GLOBAL.Et.qid +
        '&ttaccid=' +
        (GLOBAL.Util.getQueryString('ttaccid') || 'null') +
        '&ttype=index' +
        '&type=index'
      );
    },

    /**
     * 获取唤醒链接 - 微信
     * @return {String}      唤醒链接
     */
    getWechatAppUrl: function() {
      var wechatUrl =
        'https://a.app.qq.com/o/simple.jsp?pkgname=com.songheng.eastnews&ckey=CK1354046807133';
      return wechatUrl;
    },

    /**
     * 获取唤醒链接 - 安卓
     * @return {String}      唤醒链接
     */
    getAndroidAppUrl: function() {
      var scope = this;
      // var appUrl = 'javascript:;'; // jshint ignore:line
      var qid = GLOBAL.Et.qid || 'null';
      var frurl = GLOBAL.Util.getUrlNoParams() || '';
      // var pagetype = 'index'; // news: 普通新闻；video：视频新闻 index:首页
      var ttype = 'index'; // index: 首页、 detail:详情页
      var typeUrl = 'com.songheng.eastnews://wireless/wakeuphome';
      var position = '0'; // 1：评论位置；0：新闻位置
      var fr = GLOBAL.Util.getReferrer();
      // var timer = null;
      var ckey = 'CK1354046807133';
      // var androidpkgname = 'dongfangtoutiao_wzshare'; // 安卓包名，默认使用安卓默认包名
      // var wakeuppkgname = 'wakeuppkgname'; // 唤醒应用宝的包名（自定义的一个名字）
      var opts = {
        qid: qid,
        from: fr,
        to: '',
        pkgname: ckey
      };
      scope.wsCache = new WebStorageCache(); // jshint ignore:line
      scope.wakeUpUrlMarket =
        'market://details?id=com.songheng.eastnews&back=true&ref=other';
      scope.wakeUpUrl =
        typeUrl +
        '?url=' +
        frurl +
        '&preload=1' +
        '&position=' +
        position +
        '&wakeupplat=' +
        GLOBAL.Util.getBrowserType() +
        '&qid=' +
        qid +
        '&ttaccid=' +
        (GLOBAL.Util.getQueryString('ttaccid') || 'null') +
        '&ttype=' +
        (ttype || 'detail'); // 唤醒链接
      scope.wechatUrl =
        'https://a.app.qq.com/o/simple.jsp?pkgname=com.songheng.eastnews&ckey=' +
        ckey;
      scope.androidUrl =
        'https://down.hao1982.com/android/qdb/h5/dongfangtoutiao_h5bannerheng.apk';
      // pkgname = 'wakeuppkgname';
      var phoneType = window.navigator.userAgent.toLowerCase();
      if (
        phoneType.indexOf('gionee') === -1 &&
        phoneType.indexOf('sm-a9100') === -1
      ) {
        // APP唤醒排除金立手机 三星SM-A9100手机
        opts.to = scope.wakeUpUrl;
        return scope.wakeUpUrl;
      } else {
        return scope.wakeUpUrlMarket;
      }
    },

    /**
     * 获取页面可见性对象(pageVisibility)
     * @return {[type]} [description]
     */
    pageVisibility: function() {
      var prefixSupport,
        keyWithPrefix = function(prefix, key) {
          if (prefix !== '') {
            // 首字母大写
            return prefix + key.slice(0, 1).toUpperCase() + key.slice(1);
          }
          return key;
        };
      var isPageVisibilitySupport = (function() {
        var support = false;
        if (typeof window.screenX === 'number') {
          ['webkit', 'moz', 'ms', 'o', ''].forEach(function(prefix) {
            if (
              support === false &&
              document[keyWithPrefix(prefix, 'hidden')] !== undefined
            ) {
              prefixSupport = prefix;
              support = true;
            }
          });
        }
        return support;
      })();

      var isHidden = function() {
        if (isPageVisibilitySupport) {
          return document[keyWithPrefix(prefixSupport, 'hidden')];
        }
        return undefined;
      };

      var visibilityState = function() {
        if (isPageVisibilitySupport) {
          return document[keyWithPrefix(prefixSupport, 'visibilityState')];
        }
        return undefined;
      };

      return {
        hidden: isHidden(),
        visibilityState: visibilityState(),
        visibilitychange: function(fn, usecapture) {
          usecapture = undefined || false;
          if (isPageVisibilitySupport && typeof fn === 'function') {
            return document.addEventListener(
              prefixSupport + 'visibilitychange',
              function(evt) {
                this.hidden = isHidden();
                this.visibilityState = visibilityState();
                fn.call(this, evt);
              }.bind(this),
              usecapture
            );
          }
          return undefined;
        }
      };
    }
  };

  (function() {
    if (GLOBAL.Et.qid === 'qid10286') {
      GLOBAL.Util.createStyle(
        'header .top-menu{background-color:#fff!important;}header .top-menu .menu-more{background-color:#fff!important;}header .top-menu .top-menu-list a{color:#888!important;}header .top-menu .top-menu-list a.active{color:#050505!important;font-weight:600;}header .top-menu .menu-more .more-btn{background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AQMAAAAAMksxAAAABlBMVEUAAAAFBQWusXvuAAAAAXRSTlMAQObYZgAAABxJREFUKM9jIBLYHxjyDP7/YEApY7B4h1IGYQAAI+FcHULoN+UAAAAASUVORK5CYII=") no-repeat 50%;background-size:50%;}'
      );
    }
  })();

  $(function() {
    /* global FastClick */
    FastClick.attach(document.body);
    var en = new EastNews();
    var app = new App();
    try {
      // 获取地域信息并缓存
      en.filterArea(['上海']);
    } catch (e) {
      console.error(e);
    }
    en.init();
    app.init();
    GLOBAL.Util.createStyle(
      '.dsp-tag .tags{margin-top:6px}.tag-big{font-size:12px;color:#666;}.dsp-tag{height:12px}.tag-group{font-size:12px;color:#666}.tag-one{margin:0 12px 17px 0;font-size:13px;color:#666}.J-gg-item .J-dsp-news{border-bottom:1px solid #f5f5f5 !important;padding-bottom:10px!important;position:relative!important;}.dsp-tag-big{height:17px}.news-img img{width:100%}.news-left{width:66.3%}.news-right{width:33%}.img-two{margin-top:2px}'
    );
  });
})();

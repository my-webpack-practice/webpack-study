/* global TTH5_QIDS */
GLOBAL.namespace('Et');

(function() {
  var i = 0;
  var specialChannel = [];
  var ttaccid =
    GLOBAL.Util.getQueryString('ttaccid') ||
    GLOBAL.Util.getQueryString('ac') ||
    null;
  var apptypeid = GLOBAL.Util.getQueryString('apptypeid') || null;
  var reg = /^[0-9]*$/;
  var search = window.location.search.substr(1);
  var domain = document.domain;
  var cookieDomain = document.domain
    .split('.')
    .slice(-2)
    .join('.');
  if (reg.test(search)) {
    ttaccid = search;
  }
  try {
    // 缓存用户id（365天）
    GLOBAL.Et.uid = Cookies.get('user_id');
    if (!GLOBAL.Et.uid) {
      GLOBAL.Et.uid =
        +new Date() +
        Math.random()
          .toString(10)
          .substring(2, 6);
      Cookies.set('user_id', GLOBAL.Et.uid, {
        expires: 365,
        path: '/',
        domain: cookieDomain
      });
    }
    try {
      // 引入iframe 给tt.cn 埋用户id cookie
      GLOBAL.Util.createIframe('//m.tt.cn/setuid.html?u=' + GLOBAL.Et.uid);
    } catch (e) {
      console.error(e);
    }
    // 缓存渠道号（6小时）
    var defaultQid = 'null';
    if (apptypeid === 'DFTT') {
      defaultQid = 'dfh5null';
    } else if (apptypeid === 'TTKB') {
      defaultQid = 'kbh5null';
    }
    GLOBAL.Et.qid =
      GLOBAL.Util.getQueryString('qid') || Cookies.get('qid') || defaultQid;
    if (GLOBAL.Et.qid) {
      Cookies.set('qid', GLOBAL.Et.qid, {
        expires: 0.25,
        path: '/',
        domain: cookieDomain
      });
    }
    // 地方站域名
    GLOBAL.Et.localSiteArr = [
      'm.ncnews.com.cn',
      'h5.hinews.cn',
      'toutiao.gog.cn',
      '3g.gscn.com.cn',
      '3gm.hebei.com.cn',
      'h5.yangtse.com'
    ];
  } catch (e) {
    console.warn('set uid and qid has error: \n', e);
  }

  try {
    var eid = GLOBAL.Util.getQueryString('eid');
    var eidObj = {
      hksp: {
        '105001': 'qid10801',
        '130001': 'qid02758',
        '102002': 'qid02496',
        '10118': 'qid10813',
        '105005': 'qid10812'
      },
      qid02517: {
        '105001': 'qid10801',
        '130001': 'qid02758'
      }
    };
    var afterQid = eidObj[GLOBAL.Et.qid] ? eidObj[GLOBAL.Et.qid][eid] : null;
    if (afterQid) {
      GLOBAL.Et.qid = afterQid;
    }
  } catch (e) {
    console.warn('set uid and qid has error: \n', e);
  }

  // 通过搜索引擎进入的（渠道处理）
  try {
    if (!GLOBAL.Util.getQueryString('qid')) {
      specialChannel = [
        { referer: 'baidu.com', qid: 'baiducom' },
        { referer: 'so.com', qid: '360so' },
        { referer: 'sogou.com', qid: 'sogoucom' },
        { referer: 'sm.cn', qid: 'smcn' },
        { referer: 'm.tq1.uodoo.com', qid: 'smcn' }
      ];
      for (i = 0; i < specialChannel.length; i++) {
        if (
          GLOBAL.Util.getReferrer() &&
          GLOBAL.Util.getReferrer().indexOf(specialChannel[i].referer) !== -1
        ) {
          GLOBAL.Et.qid = specialChannel[i].qid;
          break;
        }
      }
    }
  } catch (e) {
    console.error('Fix SEO has error: \n', e);
  }

  // 通过APP分享出去的（渠道处理）
  try {
    if (ttaccid && GLOBAL.Browser.wechat) {
      if (
        domain.indexOf('eastday.com') > -1 ||
        GLOBAL.Et.localSiteArr.contains(domain)
      ) {
        GLOBAL.Et.qid = 'ioswechat';
      } else {
        GLOBAL.Et.qid = 'ljwc';
      }
    } else if (ttaccid && GLOBAL.Browser.qq) {
      GLOBAL.Et.qid = 'qqwechat';
    }
    if (
      ttaccid &&
      apptypeid === 'sdk_wnllq' &&
      !GLOBAL.Util.getQueryString('issdkqid')
    ) {
      if (GLOBAL.Browser.wechat) {
        GLOBAL.Et.qid = 'qid02629';
      } else if (GLOBAL.Browser.qq) {
        GLOBAL.Et.qid = 'qid02628';
      } else {
        GLOBAL.Et.qid = 'qid02615';
      }
    }
    if (
      ttaccid &&
      apptypeid === 'sdk_lepaillq' &&
      !GLOBAL.Util.getQueryString('issdkqid')
    ) {
      if (GLOBAL.Browser.wechat) {
        GLOBAL.Et.qid = 'qid02639';
      } else if (GLOBAL.Browser.qq) {
        GLOBAL.Et.qid = 'qid02638';
      } else {
        GLOBAL.Et.qid = 'qid02408';
      }
    }
    // 以下很特殊（即使url中有ime的值，也要显示对应渠道广告）
    if (apptypeid === 'gsbrowser') {
      GLOBAL.Et.qid = 'gsbrowser';
    } else if (apptypeid === 'ltbrowser') {
      GLOBAL.Et.qid = 'liantongbrowser';
    }
  } catch (e) {
    console.error('Fix APP share has error: \n', e);
  }

  // 处理后再次存储qid
  Cookies.set('qid', GLOBAL.Et.qid, {
    expires: 0.25,
    path: '/',
    domain: 'eastday.com'
  });

  try {
    // 区分真实渠道和广告渠道
    GLOBAL.Et.ggqid = GLOBAL.Et.qid;

    // 渠道不存在得情况下使用默认渠道'null'
    if (
      typeof TTH5_QIDS === 'undefined' ||
      !TTH5_QIDS.contains(GLOBAL.Js.trim(GLOBAL.Et.qid))
    ) {
      GLOBAL.Et.ggqid = defaultQid;
      if (apptypeid === 'DFTT' || apptypeid === 'TTKB') {
        GLOBAL.Et.qid = defaultQid;
        Cookies.set('qid', GLOBAL.Et.qid, {
          expires: 0.25,
          path: '/',
          domain: 'eastday.com'
        });
      }
    }

    if (GLOBAL.Et.qid === 'huitt') {
      GLOBAL.Et.ggqid = 'qid02578';
    }
    if (GLOBAL.Et.qid === 'dfh5gf1' && domain === 'dftt.mop.com') {
      GLOBAL.Et.ggqid = 'dfh500161';
    }
    if (GLOBAL.Et.qid === 'ljwc' && domain === 'dftt.mop.com') {
      GLOBAL.Et.ggqid = 'qid02672';
    }
  } catch (e) {
    console.warn(e);
  }

  try {
    // 支持赞踩的渠道
    GLOBAL.Et.voteQids = [
      'hwnewllq',
      '360mz',
      'hwmagic',
      '10086mingz',
      'jinlisun',
      '2345yuki',
      'ccllq',
      'oupengbro',
      'qid00332',
      'qid01623',
      'qid01617',
      'qid01580',
      'qid00351',
      'qid00028',
      'qid01401',
      'qid00893'
    ];
  } catch (e) {
    console.warn(e);
  }

  try {
    // 支持东方号个人中心的渠道
    GLOBAL.Et.dfhQids = [
      'qqwechat',
      'baiducom',
      'qid00901',
      'qid00932',
      'qid02108',
      'qid00099'
    ];
  } catch (e) {
    console.warn(e);
  }
})();

// 广告后台js（测试）
// document.write('<scr' + 'ipt type="text/javascript" src="http://testing.eastday.com/toutiao_h5_test/channeljs/h5toutiao/' + GLOBAL.Et.ggqid + '/ttlist/' + GLOBAL.Et.ggqid + '.js"></scr' + 'ipt>');

// 广告后台js（正式）
document.write(
  '<scr' +
    'ipt type="text/javascript" src="//mini.eastday.com/toutiaoh5/channeljs/h5toutiao/' +
    GLOBAL.Et.ggqid +
    '/ttlist/' +
    GLOBAL.Et.ggqid +
    '.js"></scr' +
    'ipt>'
);

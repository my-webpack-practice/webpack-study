/**
 * 首页广告JS
 * 名称约定：
 *     li1: 信息流每页第1个广告（包括下拉加载的新闻中的广告）
 *     li2： 信息流每页第2个广告
 *     li3： 信息流每页第3个广告
 *     li4： 信息流每页第4个广告
 * @deps global.js (此js依赖global.js)
 * @author  lizhigao(lizhigao@021.com)
 * @date 2016-06-03
 */
(function() {
  GLOBAL.namespace('Et');
  // 渠道广告后台配置数据
  if (typeof _dftth5_channel_name !== 'undefined') {
    // eslint-disable-line
    GLOBAL.Et.gg = _dftth5_channel_name; // eslint-disable-line
    if (GLOBAL.Et.qid === 'mszqap' || GLOBAL.Et.qid === 'qid01712') {
      GLOBAL.Et.gg = {
        ttlist_li1: {
          type: 'baidu',
          id: 'idvjzccacgkcef',
          isempty: false,
          mark: 'u3046656'
        },
        ttlist_li2: {
          type: 'baidu',
          id: 'jewkaddbfhlfgmk',
          isempty: false,
          mark: 'u3046657'
        },
        ttlist_li3: {
          type: 'baidu',
          id: 'kfxlbeechimhnlou',
          isempty: false,
          mark: 'u3046658'
        },
        ttlist_li4: {
          type: 'baidu',
          id: 'gbthxaaateix',
          isempty: false,
          mark: 'u3046663'
        }
      };
    } else if (GLOBAL.Et.qid === 'qid02581') {
      GLOBAL.Et.gg = {
        ttlist_li1: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: 'u3188997',
          region: '成都',
          height: ''
        },
        ttlist_li2: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: 'u3188998',
          region: '成都',
          height: ''
        },
        ttlist_li3: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: 'u3189004',
          region: '成都',
          height: ''
        },
        ttlist_li4: {
          type: 'baidu',
          id: '',
          isempty: true,
          mark: 'u3189013',
          region: '成都',
          height: ''
        }
      };
    } else if (GLOBAL.Et.qid === 'txxl' || GLOBAL.Et.qid === 'qid02296') {
      GLOBAL.Et.gg = {
        ttlist_li1: {
          type: 'baidu',
          id: 'jewkfkamghlfgmk',
          isempty: false,
          mark: 'u3070498',
          region: '成都-北京',
          height: ''
        },
        ttlist_li2: {
          type: 'baidu',
          id: 'togupuluxrvpq',
          isempty: false,
          mark: 'u3070501',
          region: '成都-北京',
          height: ''
        },
        ttlist_li3: {
          type: 'baidu',
          id: 'uphvqvmveswrxv',
          isempty: false,
          mark: 'u3070502',
          region: '成都-北京',
          height: ''
        },
        ttlist_li4: {
          type: 'baidu',
          id: 'ytlzuzqzswai',
          isempty: false,
          mark: 'u3070506',
          region: '成都-北京',
          height: ''
        }
      };
    } else if (GLOBAL.Et.qid === 'hbtot' || GLOBAL.Et.qid === 'qid02140') {
      GLOBAL.Et.gg = {
        ttlist_li1: {
          type: 'baidu',
          id: 'kfxlcxgcnimhnlou',
          isempty: false,
          mark: 'u3053759'
        },
        ttlist_li2: {
          type: 'baidu',
          id: 'dyqevqzxhbfhnqu',
          isempty: false,
          mark: 'u3053761'
        },
        ttlist_li3: {
          type: 'baidu',
          id: 'hcuizudbzfjzb',
          isempty: false,
          mark: 'u3053765'
        },
        ttlist_li4: {
          type: 'baidu',
          id: 'jewkbwfdfhlfgmk',
          isempty: false,
          mark: 'u3053767'
        }
      };
    } else if (GLOBAL.Et.qid === 'shel' || GLOBAL.Et.qid === 'qid01608') {
      GLOBAL.Et.gg = {
        ttlist_li1: {
          type: 'baidu',
          id: 'kfxocbnonimhnlou',
          isempty: false,
          mark: 'u3154919',
          region: '',
          height: ''
        },
        ttlist_li2: {
          type: 'baidu',
          id: 'cxpgutfmdaedgm',
          isempty: false,
          mark: 'u3154920',
          region: '',
          height: ''
        },
        ttlist_li3: {
          type: 'baidu',
          id: 'dyqhvugnhbfhnqu',
          isempty: false,
          mark: 'u3154921',
          region: '',
          height: ''
        },
        ttlist_li4: {
          type: 'baidu',
          id: 'ezriwvhoocgorvwy',
          isempty: false,
          mark: 'u3154922',
          region: '',
          height: ''
        }
      };
    } else if (GLOBAL.Et.qid === 'xjhb' || GLOBAL.Et.qid === 'qid01574') {
      GLOBAL.Et.gg = {
        ttlist_li1: {
          type: 'baidu',
          id: 'q1dczsqa4p',
          isempty: false,
          mark: 'u3029250'
        },
        ttlist_li2: {
          type: 'baidu',
          id: 't4dkghnac9',
          isempty: false,
          mark: 'u3029253'
        },
        ttlist_li3: {
          type: 'baidu',
          id: 'dedz6m35nt',
          isempty: false,
          mark: 'u3029263'
        },
        ttlist_li4: {
          type: 'baidu',
          id: 'fgdh5x1kfa',
          isempty: false,
          mark: 'u3029265'
        }
      };
    } else if (GLOBAL.Et.qid === 'qid02643') {
      GLOBAL.Et.gg = {
        ttlist_li1: {
          type: 'baidu',
          id: 'pkczqmmmm',
          isempty: false,
          mark: 'u3208888',
          region: '',
          height: ''
        },
        ttlist_li2: {
          type: 'baidu',
          id: 'qldarnnnt',
          isempty: false,
          mark: 'u3208889',
          region: '',
          height: ''
        },
        ttlist_li3: {
          type: 'baidu',
          id: 'jewtkggmn',
          isempty: false,
          mark: 'u3208891',
          region: '',
          height: ''
        },
        ttlist_li4: {
          type: 'baidu',
          id: 'kfxulhhnu',
          isempty: false,
          mark: 'u3208892',
          region: '',
          height: ''
        }
      };
    } else if (GLOBAL.Et.qid === 'qid02380') {
      GLOBAL.Et.gg = {
        ttlist_li1: {
          type: 'baidu',
          id: 'xskyruykyvz',
          isempty: false,
          mark: 'u3068030'
        },
        ttlist_li2: {
          type: 'baidu',
          id: 'ytlzsvzlcwai',
          isempty: false,
          mark: 'u3068031'
        },
        ttlist_li3: {
          type: 'baidu',
          id: 'dyqexaeqvbfhnqu',
          isempty: false,
          mark: 'u3068035'
        },
        ttlist_li4: {
          type: 'baidu',
          id: 'gbthadhtdeix',
          isempty: false,
          mark: 'u3068038'
        }
      };
    } else if (GLOBAL.Et.qid === 'qid02545') {
      GLOBAL.Et.gg = {
        ttlist_li1: {
          type: 'baidu',
          id: 'xskbtpbhb',
          isempty: false,
          mark: 'u3175121',
          region: '',
          height: ''
        },
        ttlist_li2: {
          type: 'baidu',
          id: 'cxpgyugmu',
          isempty: false,
          mark: 'u3175125',
          region: '',
          height: ''
        },
        ttlist_li3: {
          type: 'baidu',
          id: 'gbtkcykjq',
          isempty: false,
          mark: 'u3175192',
          region: '',
          height: ''
        },
        ttlist_li4: {
          type: 'baidu',
          id: 'jewnfbnmb',
          isempty: false,
          mark: 'u3175195',
          region: '',
          height: ''
        }
      };
    } else if (GLOBAL.Et.qid === 'qid02720') {
      GLOBAL.Et.gg = {
        ttlist_li1: {
          type: 'baidu',
          id: 'bwoscsyll',
          isempty: false,
          mark: 'u3404822',
          region: '',
          height: ''
        },
        ttlist_li2: {
          type: 'baidu',
          id: 'cxptdtzmp',
          isempty: false,
          mark: 'u3404823',
          region: '',
          height: ''
        },
        ttlist_li3: {
          type: 'baidu',
          id: 'ezrvfvbow',
          isempty: false,
          mark: 'u3404825',
          region: '',
          height: ''
        },
        ttlist_li4: {
          type: 'baidu',
          id: 'faswgwcpz',
          isempty: false,
          mark: 'u3404826',
          region: '',
          height: ''
        }
      };
    } else if (GLOBAL.Et.qid === 'qid02678') {
      GLOBAL.Et.gg = {
        ttlist_li1: {
          type: 'baidu',
          id: 'gbttdaykq',
          isempty: false,
          mark: 'u3404822',
          region: '',
          height: ''
        },
        ttlist_li2: {
          type: 'baidu',
          id: 'idvvfcamz',
          isempty: false,
          mark: 'u3404823',
          region: '',
          height: ''
        },
        ttlist_li3: {
          type: 'baidu',
          id: 'kfxxhecoe',
          isempty: false,
          mark: 'u3404825',
          region: '',
          height: ''
        },
        ttlist_li4: {
          type: 'baidu',
          id: 'lgyyifdph',
          isempty: false,
          mark: 'u3404826',
          region: '',
          height: ''
        }
      };
    }
  } else {
    GLOBAL.Et.gg = {
      ttlist_li1: {
        type: 'baidu',
        id: 'idvzsvmlf',
        isempty: false,
        mark: 'u3205156',
        region: '',
        height: ''
      },
      ttlist_li2: {
        type: 'baidu',
        id: 'wrjngjgan',
        isempty: false,
        mark: 'u3205157',
        region: '',
        height: ''
      },
      ttlist_li3: {
        type: 'baidu',
        id: 'xskohkhbp',
        isempty: false,
        mark: 'u3205159',
        region: '',
        height: ''
      },
      ttlist_li4: {
        type: 'baidu',
        id: 'wrjngjgox',
        isempty: false,
        mark: 'u3205160',
        region: '',
        height: ''
      }
    };
  }
  // 注意：下面两个广告ID数组的位置不能轻易调整，否则会影响广告组统计出错。
  // 下拉40个广告ID
  GLOBAL.Et.ggForPullDownObj = {
    null: [
      'baidu@@faspgxzwb',
      'baidu@@gbtqhyaxd',
      'baidu@@hcurizbyk',
      'baidu@@ytlizqsqz',
      'baidu@@avnkbsuse',
      'baidu@@bwolctvtl',
      'baidu@@cxpmduwup',
      'baidu@@ezrofwyww',
      'baidu@@hcurizbze',
      'baidu@@idvsjacal',
      'baidu@@avnkbsuub',
      'baidu@@bwolctvvf',
      'baidu@@dyqnevxxq',
      'baidu@@ezrofwyyv',
      'baidu@@faspgxzzx',
      'baidu@@gbtqhyaaa',
      'baidu@@hcurizbbd',
      'baidu@@idvsjaccf',
      'baidu@@jewtkbddm',
      'baidu@@bwolctvxc',
      'baidu@@cxpmduwyg',
      'baidu@@dyqnevxzn',
      'baidu@@ezrofwyar',
      'baidu@@faspgxzbw',
      'baidu@@gbtqhyacy',
      'baidu@@hcurizbdb',
      'baidu@@idvsjacee',
      'baidu@@kfxulcegn',
      'baidu@@cxpmduwzd',
      'baidu@@dyqnevxah',
      'baidu@@ezrofwybo',
      'baidu@@faspgxzcs',
      'baidu@@gbtqhyadx',
      'baidu@@hcurizbez',
      'baidu@@idvsjacfc',
      'baidu@@jewtkbdgf',
      'baidu@@kfxulcehh',
      'baidu@@lgyvmdfio',
      'baidu@@dyqnevxge',
      'baidu@@ezrofwyhi'
    ],
    hbrj: [],
    qid10265: [
      'baidu@@hcuyrbbbr',
      'baidu@@kfxbueeec',
      'baidu@@niaexhhhk',
      'baidu@@ojbfyiiir',
      'baidu@@idvzscces',
      'baidu@@mhzdwggig',
      'baidu@@pkcgzjjls',
      'baidu@@idvzsccfm',
      'baidu@@jewatddgt',
      'baidu@@hcuyrbbei',
      'baidu@@ojbfyiikl',
      'baidu@@niaexhhjj',
      'baidu@@lgycvffhd',
      'baidu@@jewatddfw',
      'baidu@@hcuyrbbdl',
      'baidu@@gbtxqaaak',
      'baidu@@niaexhhfq',
      'baidu@@jewatddbb',
      'baidu@@hcuyrbbzu',
      'baidu@@faswpzzxj',
      'baidu@@kfxbueccg',
      'baidu@@gbtxqayyt',
      'baidu@@bwoslvssc',
      'baidu@@dyqunxuun',
      'baidu@@faswpzwww',
      'baidu@@hcuyrbyyb',
      'baidu@@idvzsczca',
      'baidu@@ezrvoyvaf',
      'baidu@@jewatdamw',
      'baidu@@ytlpisqzc',
      'baidu@@bwoslvtco',
      'baidu@@ezrvoywfy',
      'baidu@@faswpzxjz',
      'baidu@@gbtxqaykc',
      'baidu@@hcuyrbzle',
      'baidu@@avnrkuskb',
      'baidu@@bwoslvtlf',
      'baidu@@dyqunxvnq',
      'baidu@@ezrvoywov',
      'baidu@@gbtxqayqa'
    ],
    qid10001: [
      'baidu@@bwoslvoct',
      'baidu@@dyqunxqez',
      'baidu@@faswpzsgi',
      'baidu@@avnrkunen',
      'baidu@@dyqunxqhx',
      'baidu@@ezrvoyria',
      'baidu@@xskohrkhy',
      'baidu@@bwoslvolo',
      'baidu@@cxptmwpmt',
      'baidu@@dyqunxqnv',
      'baidu@@gbtxqatqd',
      'baidu@@gbtxqattc',
      'baidu@@idvzscvvl',
      'baidu@@cxptmwptm',
      'baidu@@ezrvoyrvv',
      'baidu@@bwoslvotc',
      'baidu@@ezrvoyrwr',
      'baidu@@hcuyrbuzb',
      'baidu@@cxptmwpwd',
      'baidu@@faswpzszs',
      'baidu@@jewatdwdf',
      'baidu@@faswpzsbp',
      'baidu@@lgycvfyhi',
      'baidu@@gbtxqatdq',
      'baidu@@mhzdwgzjj',
      'baidu@@mhzdwgzpi',
      'baidu@@xskohroyb',
      'baidu@@ezrvoyvfa',
      'baidu@@dyqunxuhv',
      'baidu@@cxptmwtmp',
      'baidu@@avnrkurnb',
      'baidu@@hcuyrbyud',
      'baidu@@jewatdawm',
      'baidu@@ezrvoyvvr',
      'baidu@@jewatdaag',
      'baidu@@dyqunxuvh',
      'baidu@@hcuyrbyzz',
      'baidu@@kfxbuebch',
      'baidu@@faswpzwzp',
      'baidu@@lgycvfcfi'
    ],
    qid02678: [
      'baidu@@bwoslxclt',
      'baidu@@cxptmydmw',
      'baidu@@dyqunzenz',
      'baidu@@faswpbgpi',
      'baidu@@wrjngsxjx',
      'baidu@@xskohtykb'
    ],
    qid10222: [
      'baidu@@hcuzueldr',
      'baidu@@idvavfmev',
      'baidu@@jewbwgnfa',
      'baidu@@kfxcxhogc',
      'baidu@@lgydyiphf',
      'baidu@@mhzezjqii',
      'baidu@@niafakrjk',
      'baidu@@ojbgblskr',
      'baidu@@gbtytdkdh',
      'baidu@@hcuzuelel',
      'baidu@@idvavfmfs',
      'baidu@@jewbwgngw',
      'baidu@@kfxcxhohb',
      'baidu@@lgydyipid',
      'baidu@@mhzezjqjg',
      'baidu@@niafakrkj',
      'baidu@@ojbgblsll',
      'baidu@@pkchcmtms',
      'baidu@@hcuzuelki',
      'baidu@@idvavfmlm',
      'baidu@@jewbwgnmt',
      'baidu@@kfxcxhonx',
      'baidu@@lgydyipoc',
      'baidu@@mhzezjqpe',
      'baidu@@niafakrqh',
      'baidu@@ojbgblsrk',
      'baidu@@pkchcmtsm',
      'baidu@@qldidnutt',
      'baidu@@ytlqlvizz',
      'baidu@@avnsnxkbe',
      'baidu@@bwotoylcl',
      'baidu@@cxpupzmdp',
      'baidu@@dyqvqaneu',
      'baidu@@ezrwrbofw',
      'baidu@@fasxscpgz',
      'baidu@@gbtytdqhc',
      'baidu@@hcuzuerie',
      'baidu@@idvavfsjl',
      'baidu@@avnsnxkeb',
      'baidu@@bwotoylff'
    ]
  };
  GLOBAL.Et.ggForPullDown =
    GLOBAL.Et.ggForPullDownObj[GLOBAL.Et.qid] ||
    GLOBAL.Et.ggForPullDownObj['null'];

  // 上拉60个广告ID 每一页的第3，8，13，18条新闻后的广告位 每4个对应一页
  GLOBAL.Et.ggForPullUpObj = {
    null: [
      'baidu@@avnkbssue', // 第2页
      'baidu@@bwolcttvl',
      'baidu@@cxpmduuwp',
      'baidu@@dyqnevvxu',

      'baidu@@ezrofwwyw', // 3
      'sougou@@776704',
      'sougou@@776705',
      'sougou@@776706',

      'sougou@@776709', // 4
      'sougou@@776712',
      'sougou@@776713',
      'sougou@@776714',

      'baidu@@faspgxxzz', // 5
      'baidu@@gbtqhyyac',
      'baidu@@hcurizzbe',
      'baidu@@dyqnevvzq',

      'baidu@@ezrofwwav', // 6
      'baidu@@faspgxxbx',
      'baidu@@gbtqhyyca',
      'baidu@@hcurizzdd',

      'baidu@@idvsjaaef', // 7
      'baidu@@jewtkbbfm',
      'baidu@@bwolcttyc',
      'baidu@@cxpmduuzg',

      'baidu@@ezrofwwbr', // 8
      'baidu@@faspgxxcw',
      'baidu@@gbtqhyydy',
      'baidu@@hcurizzeb',

      'baidu@@idvsjaafe', // 9
      'baidu@@jewtkbbgg',
      'baidu@@kfxulcchn',
      'baidu@@cxpmduufd',

      'baidu@@idvsjaalc', // 10
      'baidu@@kfxulccnh',
      'baidu@@lgyvmddoo',
      'baidu@@togdulnuu',

      'baidu@@vqifwnpwf', // 11
      'baidu@@wrjgxoqxj',
      'baidu@@xskhypryo',
      'baidu@@avnkbsubu',

      'baidu@@bwolctvcx', // 12
      'baidu@@dyqnevxeg',
      'baidu@@cxpmduwgy',
      'baidu@@dyqnevxha',

      'baidu@@ezrofwyih', // 13
      'baidu@@vqifwnpfw',
      'baidu@@wrjgxoqga',
      'baidu@@xskhyprhh',

      'baidu@@ytlizqsil', // 14
      'baidu@@avnkbsukr',
      'baidu@@bwolctvlt',
      'baidu@@cxpmduwmw',

      'baidu@@dyqnevxnz', // 15
      'baidu@@ezrofwyob',
      'baidu@@faspgxzpi',
      'baidu@@wrjgxoqjx',

      'baidu@@bwolctvos', // 16
      'baidu@@ezrofwyra',
      'baidu@@xskhyproy',
      'baidu@@bwolctvso'
    ],
    hbrj: [],
    diazh: [
      'baidu@@e6d1o5fq9k',
      'baidu@@ardhlie773',
      'baidu@@dudp27b7fm',
      'baidu@@j1db9zpc7u',
      'baidu@@p7dr68ehtn',
      'baidu@@n7dr67chpn',
      'baidu@@p9d95narh4',
      'baidu@@rbdqy487ef',
      'baidu@@tbdqy5a7if',
      'baidu@@ygdge5zn95',
      'baidu@@zhd7vdydpd',
      'baidu@@dld1tap3ez',
      'baidu@@fndinqnibg',
      'baidu@@hpdzm2gs3r',
      'baidu@@iqdq4afikp',
      'baidu@@mudp27b89h',
      'baidu@@owd71i4n6s',
      'baidu@@rzdfc71neh',
      'baidu@@s1db9zpd1p',
      'baidu@@t2d2q8o3hx',
      'baidu@@u3ds8gnsx1',
      'baidu@@w5da7wg3ph',
      'baidu@@z8dingd8x1',
      'baidu@@badzhwbiuc',
      'baidu@@fedyft28kt',
      'baidu@@kjdoutrspt',
      'baidu@@mld1tap3iu',
      'baidu@@qpdzm2gs7m',
      'baidu@@utdykycnve',
      'baidu@@xwd71i4nan',
      'baidu@@azdfc71nic',
      'baidu@@g6d1o5fsak',
      'baidu@@lbdqy5a8ff',
      'baidu@@ndd8xl3n7v',
      'baidu@@qgdge5zng5',
      'baidu@@vld1tap3lz',
      'baidu@@yod95th8yo',
      'baidu@@aqdq4afirp',
      'baidu@@eudp27b8gh',
      'baidu@@fvdgjf5xwp',
      'baidu@@hxdxiq3do1',
      'baidu@@l2d2q8o3ox',
      'baidu@@r8dingd851',
      'baidu@@wdd8xl3o1q',
      'baidu@@ahd7vdyepi',
      'baidu@@hod95th9sj',
      'baidu@@lsd83qdyh6',
      'baidu@@nudp27b99m',
      'baidu@@rydozy24y4',
      'baidu@@t1db9zpe1u',
      'baidu@@w4djpome9e',
      'baidu@@y6d1o5ft7k',
      'baidu@@z7dr68ejnn',
      'baidu@@b9d95octf4',
      'baidu@@dbdqy5a9cf',
      'baidu@@ecdhgd4ynn',
      'baidu@@gedyft29ky',
      'baidu@@igdge5zod5',
      'baidu@@kidxdls4ag',
      'baidu@@rpdzm2gt7r'
    ],
    qid10001: [
      'baidu@@wrjngqajx',
      'baidu@@xskohrbkb',
      'baidu@@avnrkuenn',
      'baidu@@cxptmwgpu',
      'baidu@@faswpzjsc',
      'baidu@@xskohrboy',
      'baidu@@ytlpiscpc',
      'baidu@@avnrkuerk',
      'baidu@@ezrvoyivy',
      'baidu@@faswpzjwb',
      'baidu@@gbtxqakxd',
      'baidu@@avnrkuese',
      'baidu@@bwoslvftl',
      'baidu@@dyqunxhvu',
      'baidu@@ezrvoyiww',
      'baidu@@hcuyrblze',
      'baidu@@avnrkueub',
      'baidu@@dyqunxhxq',
      'baidu@@ezrvoyiyv',
      'baidu@@gbtxqakaa',
      'baidu@@idvzscmcf',
      'baidu@@bwoslvfxc',
      'baidu@@hcuyrbldb',
      'baidu@@jewatdnfg',
      'baidu@@kfxbueogn',
      'baidu@@ezrvoyibo',
      'baidu@@faswpzjcs',
      'baidu@@idvzscmfc',
      'baidu@@lgycvfpio',
      'baidu@@hcuyrblky',
      'baidu@@mhzdwgqpp',
      'baidu@@ytlpisizp',
      'baidu@@bwoslvlcv',
      'baidu@@dyqunxnea',
      'baidu@@wrjngqgaa',
      'baidu@@avnrkuker',
      'baidu@@dyqunxnhz',
      'baidu@@xskohrhhb',
      'baidu@@cxptmwmmu',
      'baidu@@faswpzppc',
      'baidu@@bwoslvloo',
      'baidu@@ezrvoyory',
      'baidu@@faswpzpsb',
      'baidu@@hcuyrbruk',
      'baidu@@cxptmwmtp',
      'baidu@@gbtxqaqxc',
      'baidu@@avnrkuksb',
      'baidu@@dyqunxnvq',
      'baidu@@hcuyrbrzd',
      'baidu@@bwoslvlvc',
      'baidu@@gbtxqaqay',
      'baidu@@kfxbueuen',
      'baidu@@gbtxqaqcx',
      'baidu@@jewatdtff',
      'baidu@@kfxbueuhg',
      'baidu@@faswpzpij',
      'baidu@@lgycvfvoh',
      'baidu@@vqimfpiww',
      'baidu@@wrjngqjxa',
      'baidu@@xskohrkyh'
    ],
    qid10265: [
      'baidu@@gbtxqaqya',
      'baidu@@idvzscsaf',
      'baidu@@jewatdtbm',
      'baidu@@cxptmwmwg',
      'baidu@@ezrvoyoyr',
      'baidu@@ezrvoyoao',
      'baidu@@idvzscsec',
      'baidu@@faswpzpcp',
      'baidu@@hcuyrbrku',
      'baidu@@kfxbuebeg',
      'baidu@@faswpzwbj',
      'baidu@@jewatdafb',
      'baidu@@niaexhekk',
      'baidu@@mhzdwgdpg',
      'baidu@@avnrkusbk',
      'baidu@@gbtxqayhd',
      'baidu@@bwoslvtfl',
      'baidu@@cxptmwugp',
      'baidu@@dyqunxvhu',
      'baidu@@idvzscasf',
      'baidu@@bwoslvtoc',
      'baidu@@cxptmwupg',
      'baidu@@dyqunxvqn',
      'baidu@@jewatdbwg',
      'baidu@@kfxbuecxn',
      'baidu@@cxptmwutd',
      'baidu@@niaexhfhq',
      'baidu@@faswpzxbg',
      'baidu@@jewatdbfa',
      'baidu@@mhzdwgeii',
      'baidu@@ojbfyigkr',
      'baidu@@idvzscafs',
      'baidu@@kfxbuechb',
      'baidu@@ojbfyigll',
      'baidu@@hcuyrbzki',
      'baidu@@jewatdbmt',
      'baidu@@mhzdwgepe',
      'baidu@@niaexhfqh',
      'baidu@@pkcgzjhsm',
      'baidu@@ytlpisszz',
      'baidu@@bwoslvvcl',
      'baidu@@idvzsccjl',
      'baidu@@bwoslvvff',
      'baidu@@cxptmwwgm',
      'baidu@@ezrvoyyiv',
      'baidu@@faswpzzjx',
      'baidu@@idvzsccmf',
      'baidu@@jewatddnm',
      'baidu@@cxptmwwmg',
      'baidu@@dyqunxxnn',
      'baidu@@faswpzzpw',
      'baidu@@jewatddtg',
      'baidu@@jewatddwf',
      'baidu@@ezrvoyyro',
      'baidu@@gbtxqaatx',
      'baidu@@dyqunxxue',
      'baidu@@jewatddad',
      'baidu@@lgycvffci',
      'baidu@@ezrvoyywf',
      'baidu@@kfxbueece'
    ],
    qid02678: [
      'baidu@@niaexhqhf',
      'baidu@@pkcgzjsjl',
      'baidu@@jewatdmfk',
      'baidu@@kfxbuengo',

      'baidu@@niaexhqje',
      'baidu@@qldhaktmm',
      'baidu@@rmeibluno',
      'baidu@@kfxbuenhl',

      'baidu@@niaexhqka',
      'baidu@@rmeibluon',
      'baidu@@togkdpuuu',
      'baidu@@qldhaktti',

      'baidu@@rmeibluul',
      'baidu@@dyqunzeeg',
      'baidu@@vqimfrwzz',
      'baidu@@wrjngsxag',

      'baidu@@xskohtybk',
      'baidu@@bwoslxcfv',
      'baidu@@cxptmydgy',
      'baidu@@dyqunzeha',

      'baidu@@ezrvoafih',
      'baidu@@xskohtyhh',
      'baidu@@ytlpiuzil',
      'baidu@@avnrkwbkr'
    ],
    qid10222: [
      'baidu@@fasxscgcg',
      'baidu@@gbtytdhdk',
      'baidu@@hcuzueier',
      'baidu@@idvavfjfv',
      'baidu@@jewbwgkga',
      'baidu@@kfxcxhlhc',
      'baidu@@lgydyimif',
      'baidu@@mhzezjnji',
      'baidu@@niafakokk',
      'baidu@@ojbgblplr',
      'baidu@@gbtytdhjh',
      'baidu@@hcuzueikl',
      'baidu@@idvavfjls',
      'baidu@@jewbwgkmw',
      'baidu@@kfxcxhlnb',
      'baidu@@lgydyimod',
      'baidu@@mhzezjnpg',
      'baidu@@niafakoqj',
      'baidu@@ojbgblprl',
      'baidu@@pkchcmqss',
      'baidu@@xskpkubyy',
      'baidu@@ytlqlvczc',
      'baidu@@avnsnxebk',
      'baidu@@bwotoyfco',
      'baidu@@cxpupzgdt',
      'baidu@@dyqvqahev',
      'baidu@@ezrwrbify',
      'baidu@@fasxscjgb',
      'baidu@@gbtytdkhd',
      'baidu@@hcuzuelik',
      'baidu@@avnsnxeee',
      'baidu@@bwotoyffl',
      'baidu@@cxpupzggp',
      'baidu@@dyqvqahhu',
      'baidu@@ezrwrbiiw',
      'baidu@@fasxscjjz',
      'baidu@@gbtytdkkc',
      'baidu@@hcuzuelle',
      'baidu@@idvavfmml',
      'baidu@@avnsnxekb',
      'baidu@@bwotoyflf',
      'baidu@@cxpupzgmm',
      'baidu@@dyqvqahnq',
      'baidu@@fasxscjpx',
      'baidu@@gbtytdkqa',
      'baidu@@hcuzuelrd',
      'baidu@@idvavfmsf',
      'baidu@@jewbwgntm',
      'baidu@@bwotoyfoc',
      'baidu@@cxpupzgpg',
      'baidu@@dyqvqahqn',
      'baidu@@ezrwrbirr',
      'baidu@@fasxscjsw',
      'baidu@@gbtytdkty',
      'baidu@@hcuzuelub',
      'baidu@@idvavfmve',
      'baidu@@jewbwgnwg',
      'baidu@@kfxcxhoxn',
      'baidu@@cxpupzgtd',
      'baidu@@dyqvqahuh'
    ]
  };
  GLOBAL.Et.ggForPullUp =
    GLOBAL.Et.ggForPullUpObj[GLOBAL.Et.qid] || GLOBAL.Et.ggForPullUpObj['null'];

  // 特殊位置：每一页新闻(20条) 第5条新闻之后的广告位 按照顺序对应每一页的位置
  GLOBAL.Et.ggForDspObj = {
    null: [
      'baidu@@faspgipzx',
      'sougou@@776697',
      'sougou@@776702',
      'sougou@@776708',
      'baidu@@xskhypbrk',
      'baidu@@avnkbseus',
      'baidu@@cxpmdugwy',
      'baidu@@vqifwnzrw',
      'baidu@@xskhypbth',
      'baidu@@ytlizqcul',
      'baidu@@avnkbsewr',
      'baidu@@cxpmdugyw',
      'baidu@@dyqnevhzz',
      'baidu@@ytlizqcvi',
      'baidu@@avnkbsexn',
      'baidu@@bwolctfys',
      'baidu@@cxpmdugzu',
      'baidu@@ezrofwiba',
      'baidu@@faspgxjcc',
      'baidu@@gbtqhykdj',
      'baidu@@xskhypbay',
      'baidu@@ytlizqcbc',
      'baidu@@avnkbsedk',
      'baidu@@bwolctfeo',
      'baidu@@cxpmdugft',
      'baidu@@dyqnevhgv',
      'baidu@@faspgxjib',
      'baidu@@gbtqhykjd',
      'baidu@@hcurizlkk',
      'baidu@@pkczqhzqq'
    ],
    hbrj: [],
    diazh: [
      'baidu@@fydozxz214',
      'baidu@@gzdfc6ymhc',
      'baidu@@j3ds8flrz6',
      'baidu@@l5da7ve2rm',
      'baidu@@a3ds8gksw1',
      'baidu@@f8dinga8w1',
      'baidu@@ibdqy578ba',
      'baidu@@pidxdlp38l',
      'baidu@@qjdoutosot',
      'baidu@@wpdzm2ds6m',
      'baidu@@xqdq4acimu',
      'baidu@@yrdhlib833',
      'baidu@@budp2788bm',
      'baidu@@cvdgjf2xsk',
      'baidu@@gzdfc7xnhc',
      'baidu@@i2d2q8l3j3',
      'baidu@@m5da7wf2uh',
      'baidu@@o7dr68dhrs',
      'baidu@@q9d95obrj9',
      'baidu@@radzhwahzc',
      'baidu@@jbdqy5a6ef',
      'baidu@@medyft26my',
      'baidu@@phd7vdybvd',
      'baidu@@qidxdls1cg',
      'baidu@@tld1tap1kz',
      'baidu@@wod95th6xo',
      'baidu@@cudp27b6fh',
      'baidu@@gydozy2149',
      'baidu@@radzhwbg1c',
      'baidu@@wfdpww1v72'
    ],
    qid10001: [
      'baidu@@ezrvoyfbr',
      'baidu@@idvzscjfe',
      'baidu@@jewatdkgg',
      'baidu@@kfxbuelhn',
      'baidu@@cxptmwdfd',
      'baidu@@dyqunxegh',
      'baidu@@ezrvoyfho',
      'baidu@@faswpzgis',
      'baidu@@gbtxqahjx',
      'baidu@@hcuyrbikz',
      'baidu@@jewatdkmf',
      'baidu@@kfxbuelnh',
      'baidu@@lgycvfmoo',
      'baidu@@togkdnxuu',
      'baidu@@uphleoyvy',
      'baidu@@vqimfpzwf',
      'baidu@@wrjngqaxj',
      'baidu@@xskohrbyo',
      'baidu@@ytlpisczq',
      'baidu@@cxptmwgdz',
      'baidu@@vqimfpzzz',
      'baidu@@wrjngqaag',
      'baidu@@xskohrbbk',
      'baidu@@avnrkuees',
      'baidu@@cxptmwggy',
      'baidu@@ezrvoyiih',
      'baidu@@vqimfpzfw',
      'baidu@@wrjngqaga',
      'baidu@@xskohrbhh',
      'baidu@@ytlpiscil'
    ],
    qid10265: [
      'baidu@@avnrkunbr',
      'baidu@@ezrvoyrfb',
      'baidu@@wrjngqjax',
      'baidu@@ytlpislci',
      'baidu@@cxptmwpgu',
      'baidu@@gbtxqatkj',
      'baidu@@ytlpislic',
      'baidu@@faswpzssz',
      'baidu@@hcuyrbuue',
      'baidu@@avnrkunrb',
      'baidu@@faswpzswx',
      'baidu@@jewatdwam',
      'baidu@@cxptmwpug',
      'baidu@@dyqunxqvn',
      'baidu@@idvzscvae',
      'baidu@@dyqunxqxh',
      'baidu@@ezrvoyryo',
      'baidu@@dyqunxqze',
      'baidu@@jewatdwfd',
      'baidu@@ezrvoyrbf',
      'baidu@@hcuyrbueu',
      'baidu@@gbtxqatjk',
      'baidu@@lgycvfyof',
      'baidu@@niaexhaqk',
      'baidu@@bwoslvscs',
      'baidu@@dyqunxuex',
      'baidu@@xskohroby',
      'baidu@@bwoslvsfo',
      'baidu@@faswpzwjb',
      'baidu@@ytlpispiz'
    ],
    qid02678: [
      'baidu@@mhzdwgpgd',
      'baidu@@ojbfyirii',
      'baidu@@pkcgzjslj',
      'baidu@@ojbfyirlf',
      'baidu@@cxptmyddz',
      'baidu@@ytlpiuzcp',
      'baidu@@wrjngsxga'
    ],
    qid10222: [
      'baidu@@ezrwrbivo',
      'baidu@@fasxscjws',
      'baidu@@gbtytdkxx',
      'baidu@@hcuzuelyz',
      'baidu@@idvavfmzc',
      'baidu@@jewbwgnaf',
      'baidu@@kfxcxhobh',
      'baidu@@lgydyipco',
      'baidu@@dyqvqahve',
      'baidu@@ezrwrbiwi',
      'baidu@@fasxscjxp',
      'baidu@@gbtytdkyt',
      'baidu@@hcuzuelzy',
      'baidu@@idvavfmaa',
      'baidu@@jewbwgnbd',
      'baidu@@kfxcxhocg',
      'baidu@@lgydyipdi',
      'baidu@@mhzezjqep',
      'baidu@@ezrwrbiyf',
      'baidu@@fasxscjzj',
      'baidu@@gbtytdkaq',
      'baidu@@hcuzuelbu',
      'baidu@@idvavfmcz',
      'baidu@@jewbwgndb',
      'baidu@@kfxcxhoee',
      'baidu@@lgydyipfh',
      'baidu@@mhzezjqgj',
      'baidu@@niafakrhq',
      'baidu@@fasxscjbg',
      'baidu@@gbtytdkck'
    ]
  };
  GLOBAL.Et.ggForDsp =
    GLOBAL.Et.ggForDspObj[GLOBAL.Et.qid] || GLOBAL.Et.ggForDspObj['null'];

  // 针对一些广告组建站的页面(别的域名) 不要搜狗广告
  if (document.domain.indexOf('eastday.com') === -1) {
    GLOBAL.Et.ggForPullDown = [
      'baidu@@faspgxzwb',
      'baidu@@gbtqhyaxd',
      'baidu@@hcurizbyk',
      'baidu@@ytlizqsqz',
      'baidu@@avnkbsuse',
      'baidu@@bwolctvtl',
      'baidu@@cxpmduwup',
      'baidu@@ezrofwyww',
      'baidu@@hcurizbze',
      'baidu@@idvsjacal',
      'baidu@@avnkbsuub',
      'baidu@@bwolctvvf',
      'baidu@@dyqnevxxq',
      'baidu@@ezrofwyyv',
      'baidu@@faspgxzzx',
      'baidu@@gbtqhyaaa',
      'baidu@@hcurizbbd',
      'baidu@@idvsjaccf',
      'baidu@@jewtkbddm',
      'baidu@@bwolctvxc',
      'baidu@@cxpmduwyg',
      'baidu@@dyqnevxzn',
      'baidu@@ezrofwyar',
      'baidu@@faspgxzbw',
      'baidu@@gbtqhyacy',
      'baidu@@hcurizbdb',
      'baidu@@idvsjacee',
      'baidu@@kfxulcegn',
      'baidu@@cxpmduwzd',
      'baidu@@dyqnevxah',
      'baidu@@ezrofwybo',
      'baidu@@faspgxzcs',
      'baidu@@gbtqhyadx',
      'baidu@@hcurizbez',
      'baidu@@idvsjacfc',
      'baidu@@jewtkbdgf',
      'baidu@@kfxulcehh',
      'baidu@@lgyvmdfio',
      'baidu@@dyqnevxge',
      'baidu@@ezrofwyhi'
    ];
    GLOBAL.Et.ggForPullUp = [
      'baidu@@avnkbssue', // 第2页
      'baidu@@bwolcttvl',
      'baidu@@cxpmduuwp',
      'baidu@@dyqnevvxu',

      'baidu@@ezrofwwyw', // 3
      '',
      '',
      '',

      '', // 4
      '',
      '',
      '',

      'baidu@@faspgxxzz', // 5
      'baidu@@gbtqhyyac',
      'baidu@@hcurizzbe',
      'baidu@@dyqnevvzq',

      'baidu@@ezrofwwav', // 6
      'baidu@@faspgxxbx',
      'baidu@@gbtqhyyca',
      'baidu@@hcurizzdd',

      'baidu@@idvsjaaef', // 7
      'baidu@@jewtkbbfm',
      'baidu@@bwolcttyc',
      'baidu@@cxpmduuzg',

      'baidu@@ezrofwwbr', // 8
      'baidu@@faspgxxcw',
      'baidu@@gbtqhyydy',
      'baidu@@hcurizzeb',

      'baidu@@idvsjaafe', // 9
      'baidu@@jewtkbbgg',
      'baidu@@kfxulcchn',
      'baidu@@cxpmduufd',

      'baidu@@idvsjaalc', // 10
      'baidu@@kfxulccnh',
      'baidu@@lgyvmddoo',
      'baidu@@togdulnuu',

      'baidu@@vqifwnpwf', // 11
      'baidu@@wrjgxoqxj',
      'baidu@@xskhypryo',
      'baidu@@avnkbsubu',

      'baidu@@bwolctvcx', // 12
      'baidu@@dyqnevxeg',
      'baidu@@cxpmduwgy',
      'baidu@@dyqnevxha',

      'baidu@@ezrofwyih', // 13
      'baidu@@vqifwnpfw',
      'baidu@@wrjgxoqga',
      'baidu@@xskhyprhh',

      'baidu@@ytlizqsil', // 14
      'baidu@@avnkbsukr',
      'baidu@@bwolctvlt',
      'baidu@@cxpmduwmw',

      'baidu@@dyqnevxnz', // 15
      'baidu@@ezrofwyob',
      'baidu@@faspgxzpi',
      'baidu@@wrjgxoqjx',

      'baidu@@bwolctvos', // 16
      'baidu@@ezrofwyra',
      'baidu@@xskhyproy',
      'baidu@@bwolctvso'
    ];
    GLOBAL.Et.ggForDsp = [
      'baidu@@faspgipzx',
      '',
      '',
      '',
      'baidu@@xskhypbrk',
      'baidu@@avnkbseus',
      'baidu@@cxpmdugwy',
      'baidu@@vqifwnzrw',
      'baidu@@xskhypbth',
      'baidu@@ytlizqcul',
      'baidu@@avnkbsewr',
      'baidu@@cxpmdugyw',
      'baidu@@dyqnevhzz',
      'baidu@@ytlizqcvi',
      'baidu@@avnkbsexn',
      'baidu@@bwolctfys',
      'baidu@@cxpmdugzu',
      'baidu@@ezrofwiba',
      'baidu@@faspgxjcc',
      'baidu@@gbtqhykdj',
      'baidu@@xskhypbay',
      'baidu@@ytlizqcbc',
      'baidu@@avnkbsedk',
      'baidu@@bwolctfeo',
      'baidu@@cxpmdugft',
      'baidu@@dyqnevhgv',
      'baidu@@faspgxjib',
      'baidu@@gbtqhykjd',
      'baidu@@hcurizlkk',
      'baidu@@pkczqhzqq'
    ];
  }

  // 分渠道的文字链广告
  GLOBAL.Et.txtGg = {
    null: {
      li: 'idvjfzcjlgkcef',
      li2: 'fasgcwzjxdh'
    },
    qid00904: {
      li: 'idvjfzcjlgkcef',
      li2: 'fasgcwzjxdh'
    },
    ioswechat: {
      li: 'gbthdxatxeix',
      li2: 'hcuieybuzfjzb'
    },
    qid00901: {
      li: 'gbthdxatxeix',
      li2: 'hcuieybuzfjzb'
    },
    baiducom: {
      li: 'jewkgadwfhlfgmk',
      li2: 'kfxlhbebgimhnlou'
    },
    qid00099: {
      li: 'jewkgadwfhlfgmk',
      li2: 'kfxlhbebgimhnlou'
    }
  };

  // 文字链广告id（目前段子频道使用）
  GLOBAL.Et.txtGgForPullDown = [
    'hcuieyzyzfjzb',
    'fasgcwxxpdh',
    'idvjfzaaagkcef',
    'kfxlhbccgimhnlou',
    'idvjfzaczgkcef',
    'idvjfzaevgkcef',
    'jewkgabfahlfgmk',
    'mhznjdeiikon',
    'niaokefjklprx',
    'gbthdxydheix'
  ];
  GLOBAL.Et.txtGgForPullUp = [
    'bwocyoxlczdec',
    'avnbxrsbkycx',
    'dyqeauvevbfhnqu',
    'ytlzvpqczwai',
    'dyqeauvhubfhnqu',
    'hcuieyzlefjzb',
    'hcuieyzrdfjzb',
    'cxpdztupgaedgm',
    'fasgcwxswdh',
    'idvjfzavegkcef'
  ];

  /**
   * 只投放搜狗广告的渠道
   * @type {Array}
   */
  GLOBAL.Et.onlySogouQid = [
    // 旧渠道号
    {
      qid: 'wifilwsq',
      ggid: '783462'
    },
    {
      qid: 'weimibrowser',
      ggid: '783470'
    },
    {
      qid: '28app',
      ggid: '783465'
    },
    {
      qid: 'yystanchuang',
      ggid: '783467'
    },
    {
      qid: 'juruan',
      ggid: '783484'
    },
    {
      qid: 'weimibrowser01',
      ggid: '783472'
    },
    {
      qid: 'weimibrowser02',
      ggid: '783473'
    },
    {
      qid: 'weimibrowser03',
      ggid: '783475'
    },
    {
      qid: 'weimipush',
      ggid: '783480'
    },
    {
      qid: 'sogoucom',
      ggid: '783478'
    },
    {
      qid: 'sgllq',
      ggid: '783479'
    },
    {
      qid: 'sgllq01',
      ggid: '783482'
    },
    {
      qid: 'weimillq',
      ggid: '783476'
    },
    // 新渠道号
    {
      qid: 'qid01107',
      ggid: '783462'
    },
    {
      qid: 'qid01064',
      ggid: '783470'
    },
    {
      qid: 'qid00029',
      ggid: '783465'
    },
    {
      qid: 'qid01285',
      ggid: '783467'
    },
    {
      qid: 'qid00381',
      ggid: '783484'
    },
    {
      qid: 'qid01065',
      ggid: '783472'
    },
    {
      qid: 'qid01066',
      ggid: '783473'
    },
    {
      qid: 'qid01067',
      ggid: '783475'
    },
    {
      qid: 'qid01070',
      ggid: '783480'
    },
    {
      qid: 'qid01003',
      ggid: '783478'
    },
    {
      qid: 'qid00962',
      ggid: '783479'
    },
    {
      qid: 'qid00963',
      ggid: '783482'
    },
    {
      qid: 'qid01069',
      ggid: '783476'
    }
  ];

  /**
   * 从内容返回首页时，会刷新可视区域的广告，以下为刷新广告时使用的广告ID
   */
  GLOBAL.Et.qidForUpdateGg = ['2345yuki'];
  GLOBAL.Et.ggForUpdate = {
    // 下拉第2屏
    d2: ['snfwvjkvv', 'cxpgftwdg'],
    // 下拉第1屏
    d1: ['pkctsghsj', 'rmevuijuo'],
    // 上拉第1屏
    u1: ['lgypoccyo', 'kfxonbbbg', 'lgypoccci', 'idvmlzzaz'],
    // 上拉第2屏
    u2: ['lgypoccdh', 'niarqeefq', 'fasjiwwzg', 'hculkyybr'],
    // 上拉第3屏
    u3: ['niarqeekh', 'pkctsghml', 'rmevuijou', 'jewnmabmk'],
    // 固定位
    d0: ['lgypocdov', 'mhzqpdepz', 'niarqefqe']
  };

  (function() {
    var noGgQid = [
      'qid10787',
      'tashequ',
      'm021_wy083',
      'quannengxiangji',
      'ruyizhuomian',
      'wnktwtips1',
      'zcsh',
      'miaowu',
      'xinywl02',
      'guort',
      'kouliangapp',
      '6399',
      'xy01',
      'yysdbb',
      'fxkj',
      '569dp',
      'yylb',
      'okbxweb',
      'baxxl',
      'znthi',
      'szcm',
      'yjbe',
      'xylwifi',
      'jym',
      'lotweb',
      'juing',
      'wezh',
      'jxdm',
      'zhwnl01',
      'rsnet',
      'gilea',
      'yilkj01',
      '1kkkmah',
      'xy02',
      'selonger',
      'luoy',
      'czmian',
      'dhye',
      'yusa',
      'zxqdcs',
      'yysyxj',
      'nhxw',
      'zhzish',
      'ywxa',
      'suggh',
      '818ok',
      'ytx',
      'nieykj',
      'jyhui01',
      'zcwlkj',
      'xxt',
      'ydwl',
      'zhuotys',
      'zpsjnz',
      'jykj',
      'jinor',
      'moto',
      'fzhs01',
      'zpsjcj',
      'wstl',
      'dxyl',
      'txwen',
      'xzzj',
      'axnet',
      'bjrzyys01',
      'cntkj01',
      'gysp',
      'yilkj02',
      'wgwl',
      'yyqu',
      'zhaku01',
      'gdawl',
      'wpsios',
      'wpsandroid',
      'm021_wy038',
      'm021_wy003',
      'shangyewifiliu2',
      'quannengxiangji',
      'huisuoping',
      'huisuoping01',
      'bizhb',
      'qid02385',
      'motocs',
      'sportnews',
      'huitt',
      'qid02400',
      'hjjingling02',
      'qid02142',
      'qid02248',
      'qid02415',
      'qid01015',
      'qid01813',
      'qid00933',
      'qid00948',
      'qid01133',
      'qid01291',
      'qid00855',
      'qid01187',
      'qid01337',
      'qid00403',
      'qid00048',
      'qid01388',
      'qid01284',
      'qid01405',
      'qid00045',
      'qid01392',
      'qid01412',
      'qid01377',
      'qid01488',
      'qid01466',
      'qid01415',
      'qid01491',
      'qid01433',
      'qid01497',
      'qid01524',
      'qid01504',
      'qid01535',
      'qid01528',
      'qid01556',
      'qid01552',
      'qid01520',
      'qid01494',
      'qid01599',
      'qid01389',
      'qid01588',
      'qid01577',
      'qid01573',
      'qid01430',
      'qid01425',
      'qid01600',
      'qid01590',
      'qid01581',
      'qid01490',
      'qid01496',
      'qid01561',
      'qid01419',
      'qid01614',
      'qid01507',
      'qid00385',
      'qid01669',
      'qid01697',
      'qid01691',
      'qid01457',
      'qid02154',
      'qid01714',
      'qid01533',
      'qid02211',
      'qid02196',
      'qid02178',
      'qid02201',
      'qid02238',
      'qid02150',
      'qid02246',
      'qid02145',
      'qid02124',
      'qid01569',
      'qid02269',
      'qid02199',
      'qid02206',
      'qid02210',
      'qid01671',
      'qid02256',
      'qid02298',
      'qid02149',
      'qid01138',
      'qid01137',
      'qid01768',
      'qid01733',
      'qid00969',
      'qid00933',
      'qid00324',
      'qid00325',
      'qid01707',
      'qid02358',
      'qid02368',
      'qid02149',
      'cjskzs',
      'qid01603',
      'chaojiwifi',
      'qid00162',
      'qid02472',
      'hbrj',
      'qid02581',
      'qid02653',
      'qid02654',
      'qid01122',
      'qid02679',
      'qid02686',
      'qid02690',
      'qid10001',
      'qid02734',
      'qid10204',
      'qid10264',
      'qid10933',
      'qid10054',
      'qid10053',
      'qid10814'
    ];
    try {
      // 对广告ID处理（为了方便获取、判断）
      GLOBAL.namespace('GLOBAL.Et.gg.my');
      GLOBAL.Et.gg.my.li = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttlist_li1'] : '';
      GLOBAL.Et.gg.my.li2 = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttlist_li2'] : '';
      GLOBAL.Et.gg.my.li3 = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttlist_li3'] : '';
      GLOBAL.Et.gg.my.li4 = GLOBAL.Et.gg ? GLOBAL.Et.gg['ttlist_li4'] : '';
    } catch (e) {
      console.error('广告处理出现问题: \n', e);
    }
    // 无广告情况处理
    try {
      if (noGgQid.contains(GLOBAL.Et.qid)) {
        GLOBAL.Et.gg.my.nogg = true;
        GLOBAL.Et.gg.my.li = null;
        GLOBAL.Et.gg.my.li2 = null;
        GLOBAL.Et.gg.my.li3 = null;
        GLOBAL.Et.gg.my.li4 = null;
      }
    } catch (e) {
      console.error(e);
    }
  })();

  try {
    /* 嵩恒_头条_h5_wifijl_度宝li */
    if (GLOBAL.Et.qid === 'wifijl' || GLOBAL.Et.qid === 'qid01101') {
      document.write(
        '<scr' +
          'ipt type="text/javascript">var cpro_id = "u2756441";</scr' +
          'ipt><scr' +
          'ipt src="//cpro.baidustatic.com/cpro/ui/cm.js" type="text/javascript"></scr' +
          'ipt>'
      );
    }
  } catch (e) {
    console.error('wifijl_度宝li has error: \n', e);
  }

  // 苹果助手渠道
  // 去掉或替换(<link rel="apple-touch-icon-precomposed" href="//mini.eastday.com/toutiaoh5/img/favicon.ico">)
  try {
    var delLinkAppleQids = 'pgzskjfs01,pgzskjfs02,pgzskjfs03,pgzskjfs04,pgzskjfs05,qid00907,qid00908,qid00909,qid00910,qid00911'.split(
      ','
    );
    if (delLinkAppleQids.contains(GLOBAL.Et.qid)) {
      $('link[rel="apple-touch-icon-precomposed"]').remove();
    }
  } catch (e) {
    console.error('favicon.ico has error: \n', e);
  }

  try {
    if (GLOBAL.Browser && GLOBAL.Browser.wechat) {
      if (Cookies.get('DFTT_DETAIL_TO_INDEX')) {
        Cookies.set('DFTT_DETAIL_TO_INDEX', 0, {
          expires: 1 / 24,
          path: '/',
          domain: 'eastday.com'
        });
        Cookies.remove('DFTT_DETAIL_TO_INDEX', {
          path: '/',
          domain: 'eastday.com'
        });
        window.history.pushState({}, document.title, '?ps');
      }
      var bool = false;
      window.addEventListener(
        'popstate',
        function() {
          // 防止微信中一进入就触发"popstate"事件
          if (bool) {
            // 微信端
            window.WeixinJSBridge &&
              WeixinJSBridge.invoke('closeWindow', {}, function() {}); // jshint ignore:line
          }
        },
        false
      );
      // 设置延时是为了解决：在微信中进入页面就触发了popstate事件
      setTimeout(function() {
        bool = true;
      }, 2000);
    }
  } catch (e) {
    console.error(e);
  }

  // 为了方便后续判断，在此提取出只有搜狗广告的ID。
  try {
    var onlySogouQid = GLOBAL.Et.onlySogouQid;
    var len = onlySogouQid.length;
    GLOBAL.Et.onlySogouGgId = null;
    for (var i = 0; i < len; i++) {
      if (GLOBAL.Et.qid === onlySogouQid[i].qid) {
        GLOBAL.Et.onlySogouGgId = onlySogouQid[i].ggid;
        break;
      }
    }
  } catch (e) {
    console.error(e);
  }

})();

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: 'TextView[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700227',
            'https://i.gkd.li/import/12700122',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: 'TextView[text*="青少年模式"] +n TextView[text="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/12700145',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[text^="有新版本"] + FrameLayout + LinearLayout + [text="暂不升级"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700486',
            'https://i.gkd.li/import/13799951',
          ],
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
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
          matches: 'TextView[id="com.zhihu.android:id/btn_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/12707641',
        },
      ],
    },
  ],
});

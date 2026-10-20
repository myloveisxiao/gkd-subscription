import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
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
          matches: '[id="tv.danmaku.bili:id/count_down"][text^="跳"]',
          snapshotUrls: 'https://i.gkd.li/import/12705270',
        },
      ],
    },
  ],
});

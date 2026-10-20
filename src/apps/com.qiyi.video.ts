import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiyi.video',
  name: '爱奇艺',
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
          matches: '@LinearLayout > [text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13160866',
            'https://i.gkd.li/import/13379565',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      fastQuery: true,
      activityIds: ['org.qiyi.android.video.MainActivity'],
      rules: [
        {
          matches: '[id="com.qiyi.video:id/confirm_btn"][text="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/13546555',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'org.qiyi.android.video.MainActivity',
        'org.qiyi.android.search.view.PhoneSearchActivity',
      ],
      rules: [
        {
          matches: '[id="com.qiyi.video:id/cancel_btn"][text="暂不升级"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12838158',
            'https://i.gkd.li/import/13684912',
          ],
        },
      ],
    },
  ],
});

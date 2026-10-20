import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.soulapp.android',
  name: 'Soul',
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
          // 官方资源 id，优先级最高
          action: 'clickCenter',
          matches: '[id="cn.soulapp.android:id/c_ad_skip_view_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12833280',
            'https://i.gkd.li/import/12850094',
          ],
        },
        {
          // 文本兜底：新版改 id 也能命中「跳过 3s」这类按钮
          action: 'clickCenter',
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        },
        {
          // 描述兜底
          action: 'clickCenter',
          matches: '[desc*="跳过"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="cn.soulapp.android:id/btn_sure"]',
          snapshotUrls: 'https://i.gkd.li/import/12834093',
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
      activityIds: ['cn.soulapp.android.component.startup.main.MainActivity'],
      rules: [
        {
          matches:
            '@[id="cn.soulapp.android:id/img_close"] -2 RelativeLayout > [text="升级到最新版本"]',
          snapshotUrls: 'https://i.gkd.li/import/13693361',
        },
      ],
    },
  ],
});

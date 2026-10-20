import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    // 若某应用自己配置了「开屏广告」规则组，则全局规则对该应用失效，避免重复点击
    disableIfAppGroupMatch: '开屏广告',
    rules: [
      {
        key: 0,
        fastQuery: true,
        // 最常见的「跳过」按钮（含「跳过 5s」这类倒计时文本）
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: 1,
        // 泛化兜底：无子节点的叶子控件，文本/资源id/描述里出现跳过或倒计时
        matches:
          '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
      },
    ],
  },
]);

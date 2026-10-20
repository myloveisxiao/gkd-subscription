import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  // 订阅唯一 id，发布前建议改成自己的大随机数，避免与他人订阅冲突
  id: 20261020,
  name: '国内应用开屏广告拦截',
  version: 1,
  author: 'EmeraldPark',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/gkd-kit/subscription-template',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});

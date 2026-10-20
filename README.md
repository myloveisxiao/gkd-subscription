# 国内应用开屏广告拦截（GKD 订阅）

基于 [gkd-kit/subscription-template](https://github.com/gkd-kit/subscription-template) 构建的 GKD 自定义订阅，专注于跳过国内 App 的开屏广告、青少年模式弹窗、更新提示。

## 已覆盖

- **全局规则**：泛化识别「跳过」按钮。没有单独配置的应用（微信 / QQ / 抖音 / 拼多多 / 京东 / 小红书 / 快手 / 高德 / 美团 / 网易云音乐 / 微博等）都能自动跳过开屏广告。
- **Soul（重点强化）**：开屏广告用「官方资源 id + 文本兜底 + 描述兜底」三重规则，即使 Soul 升级后改了按钮 id 也能跳过；另含青少年模式、更新提示。
- **淘宝 / 哔哩哔哩 / 知乎 / 爱奇艺 / 腾讯视频**：开屏广告（爱奇艺、腾讯视频另含青少年模式、更新提示）。

## 直接使用（导入 GKD）

产物是 `dist/gkd.json5`（单文件，双击/导入即用，离线）。

### 方式一：本地导入

1. 把 `dist/gkd.json5` 传到手机（微信/QQ/数据线都行）。
2. 打开 GKD → 底部「订阅」→ 右上角「+」→ 「本地导入」/「从文件导入」→ 选中 `gkd.json5`。

### 方式二：发布后在线订阅（支持自动更新）

把整个仓库推到 GitHub，然后在 GKD 里用下面的链接添加订阅：

```txt
https://raw.githubusercontent.com/<你的用户名>/<仓库名>/main/dist/gkd.json5
```

大陆访问 raw 常受限，可用 jsDelivr 镜像：

```txt
https://fastly.jsdelivr.net/gh/<你的用户名>/<仓库名>@main/dist/gkd.json5
```

> 模板自带 GitHub Actions 构建发布：`https://github.com/<你的用户名>/<仓库名>/actions/workflows/build_release.yml` 点「Run workflow」即可自动发布到 dist。

## 自定义 / 添加更多应用

规则全在 `src/` 目录：

- `src/subscription.ts` —— 订阅 id、名称、版本、作者
- `src/categories.ts` —— 分类（**组名必须是「分类名」或「分类名-xxx」，否则构建报错**）
- `src/globalGroups.ts` —— 全局规则
- `src/apps/*.ts` —— 每个应用一个文件（文件名 = 包名）

改完重新构建：

```bash
pnpm install
pnpm run build   # 产物输出到 dist/
```

> 每次改了规则并想推给订阅者时，记得把 `src/subscription.ts` 里的 `version` +1（本地 `pnpm run build` 不会自动加版本；自动加版本是在 GitHub Actions 的 CI 里做的）。

## 说明

- 规则选择器沿用 [gkd-kit/subscription](https://github.com/gkd-kit/subscription) 官方订阅的已验证写法。
- 全局规则通过 `disableIfAppGroupMatch` 对已单独配置「开屏广告」的应用自动失效，避免重复点击。
- 某个 App 更新后规则失效时，可在 GKD 的「网页审查」里抓取界面快照，回来改 `src/apps/*.ts` 对应选择器即可。
- 打包环境：node ≥ 22、pnpm ≥ 9。

# 04 信息架构

## 基于真实路由的当前站点结构

当前代码树已经形成了一个清晰的枢纽 + 分支模型：

- **首页与核心中心页**：`/`, `/casino`, `/sportsbook`, `/guides`, `/faq`, `/news`, `/search`。
- **省份中心页**：`/ontario`, `/alberta` 以及其子页面。
- **赌场内容**：`/casino/*` 与 `/best-*` 相关比较页、游戏页、奖金页。
- **体育博彩内容**：`/sportsbook/*` 与 `/best-*` 相关比较页、单项运动页。
- **支付与提现**：`/interac*`, `/deposit`, `/fast-payouts`, `/tools/*`。
- **信任 / 政策 / 支持**：`/about*`, `/how-we-work`, `/editorial-policy`, `/security`, `/sources`, `/responsible-gambling`, `/privacy-policy`, `/cookie-policy`, `/terms-of-service`, `/contact`。
- **编辑与新闻壳页面**：`/news/[slug]`, `/events/[slug]`, `/payments/[slug]`, `/reviews/[slug]`, `/authors/[slug]`, `/guides/[...slug]`。
- **内部页面**：`/admin/*`, `/design-system`, `/lab/design-exploration`, `/handler/[...stack]`, `/age-gate`。

## 推荐站点结构

建议把公开结构收拢成更容易解释的一套：

1. **首页**
   - `/`
2. **主要高价值中心页**
   - `/casino`
   - `/sportsbook`
   - `/interac`
3. **省份中心页**
   - `/ontario`
   - `/alberta`
4. **比较与高意图页面**
   - `/best-online-casinos-canada`
   - `/best-sports-betting-sites-canada`
   - `/casino-bonuses-canada`
   - `/sportsbook-bonuses-canada`
   - `/fast-payouts`
5. **支持与信任页面**
   - `/faq`
   - `/about`
   - `/how-we-work`
   - `/editorial-policy`
   - `/security`
   - `/sources`
   - `/responsible-gambling`
   - `/contact`
6. **工具页**
   - `/tools/odds-calculator`
   - `/tools/parlay-calculator`
   - `/tools/payout-time-checker`
7. **指南、新闻与赛事**
   - 保留中心页，但只有在数据源准备好后才公开壳页面。
8. **内部页面**
   - 不纳入公开 sitemap：`/admin/*`, `/design-system`, `/lab/design-exploration`, `/handler/[...stack]`, `/age-gate`, `/api/*`。

## 导航结构

### 当前头部导航

当前导航优先展示：

- Casino
- Sportsbook
- Interac Payouts
- Bonuses
- Safety
- FAQ

### 推荐头部导航

建议保留相同的认知顺序，但改为更规范的标签：

- Casino
- Sportsbook
- Interac
- Guides
- Safety
- FAQ

### 页脚结构

页脚的分组已经比较合理：

- **Play**：casino、sportsbook、slots、live casino、blackjack、Interac、bonuses、NHL betting。
- **Info**：FAQ、About、Contact、betting guide、responsible gaming、terms、privacy。
- **Legal**：terms、privacy、cookies、responsible gaming。

## 内链策略

- 中心页应优先链接到最有价值的分支页。
- 省份页应链接到法律、支付和帮助页。
- 支付页应链接到 FAQ、安全和责任博彩页。
- 奖金页应链接到条款与玩法说明页。
- 工具页应回链到相关指南和中心页。
- 页脚应是信任与发现层，而不是一个无序链接桶。

## 页面层级

- **一级**：首页与核心中心页。
- **二级**：省份页、比较页、信任页、工具页。
- **三级**：游戏页、运动页、指南页、新闻、赛事与实用页。
- **四级**：动态壳页面与内部管理路由。

## 内容中心 / 辐射模型

站点明显适合中心辐射模型：

- **Casino hub** → 赌场比较页、游戏页、奖金页、支付页。
- **Sportsbook hub** → 单项运动页、比较页、奖金页、工具页、赛事页。
- **Province hubs** → 法律指南、支付指南、信任页。
- **Guide hub** → 永续教育文章。
- **News hub** → 新闻与公告内容。

## 已存在页面、缺失页面与重叠

### 已存在页面

核心公开页面大体都已经存在。

### 缺失的推荐页面

- `/home` 被代码引用，但当前树中没有这个路由。
- `/features/[slug]` 被搜索索引和评测 canonical 引用，但当前树中没有这个路由。

### 重复或重叠页面

- `/best-betting-sites-canada` 会重定向到 `/best-sports-betting-sites-canada`。
- `/about/contact` 重定向到 `/contact`。
- `/about/privacy-policy` 重定向到 `/privacy-policy`。
- `/about/terms` 重定向到 `/terms-of-service`。
- `/guides/interac` 重定向到 `/guides/interac-e-transfer-casino`。
- `/interac`, `/interac-casino-canada`, `/guides/interac-e-transfer-casino`, `/guides/casino-payment-methods` 之间高度重叠，需要明确分工。

### 应合并、改名或移除的页面

- 每个主题只保留一个规范路径。
- 先验证好目的地，再逐步清理重定向包装页。
- 确定评测内容到底应该放在 `/reviews/[slug]` 还是新建 `/features/[slug]`，然后让 canonical 与实际路由一致。

## 公开抓取与 AI 表面

- `src/routes/sitemap.xml/+server.ts` 已排除 admin、design-system、lab、handler、search 和 API 路由。
- 公开的 AI 文件（`static/llms.txt` 与 `static/llms-full.txt`）应与真实公开 sitemap 保持一致。
- `static/robots.txt` 已存在，但真正的权威来源是活跃的 `/robots.txt` 路由，二者必须同步。

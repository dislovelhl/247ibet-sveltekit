# 247iBET 网站项目文档

这是当前 247iBET 代码库对应的项目文档包。

## 文件说明

| 文件 | 用途 | 适合谁看 |
| --- | --- | --- |
| `01-project-brief.md` | 用中文概括网站是什么、做什么、成功标准是什么。 | 客户、利益相关者、产品负责人 |
| `02-business-goals.md` | 商业、转化、信任、内容与运营目标，并附 KPI 占位。 | 利益相关者、市场、运营 |
| `03-target-users-and-use-cases.md` | 用户类型、痛点与关键路径。 | 产品、UX、内容、客户 |
| `04-information-architecture.md` | 站点结构、导航与内链模型。 | UX、内容、SEO、开发 |
| `05-page-inventory.md` | 按路由列出的页面清单。 | UX、SEO、开发、QA |
| `06-content-strategy.md` | 信息架构、语气、内容需求与文案策略。 | 内容、UX、SEO、客户 |
| `07-seo-plan.md` | 关键词主题、元数据、结构化数据与测量方案。 | SEO、内容、开发 |
| `08-ux-ui-requirements.md` | 可执行的设计与交互要求。 | UX、设计、开发 |
| `09-technical-overview-for-non-engineers.md` | 给非工程人员看的技术概览。 | 客户、利益相关者、运营 |
| `10-implementation-roadmap.md` | 从清理到上线后优化的分阶段计划。 | 产品、设计、内容、工程 |
| `11-qa-acceptance-checklist.md` | 上线前 QA 检查清单。 | QA、开发、利益相关者 |
| `12-launch-readiness-checklist.md` | 上线准备清单。 | 利益相关者、运营、QA |
| `13-risks-assumptions-open-questions.md` | 风险、假设与待确认问题。 | 客户、产品、UX、SEO、法务 |

## 推荐阅读顺序

1. `01-project-brief.md`
2. `04-information-architecture.md`
3. `05-page-inventory.md`
4. `06-content-strategy.md`
5. `07-seo-plan.md`
6. `08-ux-ui-requirements.md`
7. `09-technical-overview-for-non-engineers.md`
8. `10-implementation-roadmap.md`
9. `13-risks-assumptions-open-questions.md`
10. `11-qa-acceptance-checklist.md`
11. `12-launch-readiness-checklist.md`
12. `02-business-goals.md`
13. `03-target-users-and-use-cases.md`

## 维护方式

- 路由变化时，优先更新 `04-information-architecture.md` 和 `05-page-inventory.md`。
- 文案或声明变化时，一起更新 `01-project-brief.md`、`06-content-strategy.md` 和 `07-seo-plan.md`。
- 页面变成占位页或接入 CMS 后，要在 `05-page-inventory.md` 和 `13-risks-assumptions-open-questions.md` 中注明。
- 发现坏链、重定向或 canonical 问题时，先修源码，再同步更新文档。
- 所有未知项都保持为“待确认”状态，直到真正核实为止。

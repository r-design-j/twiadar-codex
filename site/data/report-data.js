window.AI_RADAR_REPORT = {
  "date": "2026-08-19",
  "updatedAt": "2026-08-19T09:10:00+08:00",
  "updatedLabel": "2026-08-19 09:10 CST",
  "conclusion": "今日主线是: agent 工作台正在从“会执行任务”升级为“能迁移上下文、记录本地时间线、用权限闸门约束动作、并把审查规则复用到每次运行”的操作系统。OpenAI Learn 8 月 14 日的 Codex 更新把既有 agent 设置导入 AGENTS.md、Computer History、Linux 桌面预览、web 端 AGENTS.md 编辑和环境路由放在同一周；Codex 0.147.0 及近期 release 节奏继续说明 CLI/桌面/远程执行在高频修补；OpenAI Platform 的 background mode 与 Agents SDK 仍是长任务和可追踪 agent 的 API 底座；GitHub Copilot code review、MCP registry 与 stateless MCP 把审查规则、外部工具和连接器变成可管理资产。",
  "metrics": {
    "sourceCards": 14,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-08-19 的可复用变化集中在四块: 跨 agent 规则迁移、本机历史回放、入口权限矩阵、发布前审查规则包。",
    "今天的判断很明确: agent 工作流越像操作系统，越要把上下文、权限、执行环境和最终证据拆开记录。"
  ],
  "signals": [
    {
      "title": "Codex 周更把迁移、历史和环境路由放到同一面",
      "author": "OpenAI Learn",
      "source": "official-docs",
      "url": "https://learn.chatgpt.com/docs/whats-new",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Codex Workbench",
      "summary": "8 月 14 日一周同时出现导入既有 agent 设置、Linux 桌面预览、Computer History、web AGENTS.md 编辑和环境路由，说明 Codex 正在解决多入口上下文连续性。",
      "takeaway": "动作: 给跨工具/跨设备任务建迁移清单，固定 rule source、target env 和 final evidence owner。"
    },
    {
      "title": "Computer History 让 Codex 更懂本机上下文",
      "author": "OpenAI Learn",
      "source": "official-docs",
      "url": "https://learn.chatgpt.com/docs/customization/computer-history",
      "category": [
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Computer History",
      "summary": "Codex 可利用本机历史上下文理解用户环境与偏好，提升连续性，也要求更清晰的隐私和公开边界。",
      "takeaway": "动作: 建 Computer History Replay Ledger，标注可用上下文、排除项、失效时间和公开输出扫描结果。"
    },
    {
      "title": "导入既有 agent 设置到 AGENTS.md",
      "author": "OpenAI Learn",
      "source": "official-docs",
      "url": "https://learn.chatgpt.com/docs/import",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "AGENTS.md",
      "summary": "从 Claude Code、Cursor、Gemini CLI 等既有 agent 设置迁移到 AGENTS.md，会把零散规则变成 repo 可审查资产。",
      "takeaway": "动作: 迁移后做去重、冲突检查、权限降级和小任务验收，不直接合并所有旧规则。"
    },
    {
      "title": "Codex Rules 成为长期约束层",
      "author": "OpenAI Learn",
      "source": "official-docs",
      "url": "https://learn.chatgpt.com/docs/agent-configuration/rules",
      "category": [
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Rules",
      "summary": "Rules/AGENTS.md 适合沉淀项目习惯、命令、禁止动作和验收标准，是 agent 工作流的长期约束层。",
      "takeaway": "动作: 把日报发布前的数据合同、公开边界、测试命令和停止条件写成 Review Rule Pack。"
    },
    {
      "title": "Subagents 让探索、执行、复核分层",
      "author": "OpenAI Learn",
      "source": "official-docs",
      "url": "https://learn.chatgpt.com/docs/agent-configuration/subagents",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Subagents",
      "summary": "Subagents 让探索、执行和复核可以分离上下文与工具权限，是长任务降噪和控权的关键结构。",
      "takeaway": "动作: 只读扫描、文件写入、最终复核分成不同任务胶囊；同一写入对象只保留一个 owner。"
    },
    {
      "title": "Codex release 节奏提醒版本不能口头假设",
      "author": "OpenAI Codex GitHub",
      "source": "github-release",
      "url": "https://github.com/openai/codex/releases",
      "category": [
        "hot",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Release Cadence",
      "summary": "Codex 0.147.0 及近期 release 节奏显示 CLI/桌面/远程执行仍在高频发版，自动化不能把当前行为当长期事实。",
      "takeaway": "动作: 每次自动化报告记录 Codex release 版本、executor、shell、MCP 状态和是否影响验证/发布链路。"
    },
    {
      "title": "Background mode 支撑长任务异步运行",
      "author": "OpenAI Platform Docs",
      "source": "official-docs",
      "url": "https://platform.openai.com/docs/guides/background",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Background Jobs",
      "summary": "Responses API background mode 适合长任务异步运行，但 accepted/queued 与完成之间必须有轮询和产物验收。",
      "takeaway": "动作: 为长研究任务固定 job id、polling、timeout、artifact readback、handoff 和人工接管规则。"
    },
    {
      "title": "Agents SDK 提供 handoff、guardrails、tracing",
      "author": "OpenAI",
      "source": "official-docs",
      "url": "https://openai.github.io/openai-agents-python/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Agents SDK",
      "summary": "Agents SDK 提供 handoff、guardrails、tracing、MCP 工具等工程化结构，可作为多 agent 工作流设计参照。",
      "takeaway": "动作: planner、collector、writer、reviewer 分开，但写入和发布只保留一个最终 owner。"
    },
    {
      "title": "Copilot code review 让审查偏好资产化",
      "author": "GitHub Docs",
      "source": "github-docs",
      "url": "https://docs.github.com/en/copilot/concepts/code-review/code-review",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "AI Review",
      "summary": "Copilot code review 把 AI 审查接入 PR、IDE 和仓库规则，说明 review preference 会成为可配置资产。",
      "takeaway": "动作: 把 AI Radar 发布前检查整理成 Review Rule Pack，覆盖数据合同、链接质量、公开边界和 diff check。"
    },
    {
      "title": "MCP registry 把工具发现纳入 coding agent",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-28-github-copilot-coding-agent-now-supports-mcp-registry/",
      "category": [
        "hot",
        "tools"
      ],
      "score": "HIGH",
      "tag": "MCP Registry",
      "summary": "MCP registry 让 coding agent 可发现和连接更多工具，connector 治理会从实验项变成常规工程资产。",
      "takeaway": "动作: 新增 MCP 前先写工具面、读写动作、owner、凭证来源、撤销路径和默认审批规则。"
    },
    {
      "title": "Stateless MCP 降低连接复杂度也放大边界要求",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-30-mcp-servers-can-now-be-configured-with-stateless-http/",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Stateless MCP",
      "summary": "Stateless HTTP MCP 降低连接服务的运行复杂度，但也让公开暴露和权限边界更需要显式治理。",
      "takeaway": "动作: 自建 MCP 先默认本地/私有，公开前完成最小工具面、auth、rate limit、write-action approval 和审计。"
    },
    {
      "title": "Claude Code subagents 提供权限分工参照",
      "author": "Anthropic Docs",
      "source": "official-docs",
      "url": "https://docs.anthropic.com/en/docs/claude-code/sub-agents",
      "category": [
        "workflow",
        "knowledge"
      ],
      "score": "MED",
      "tag": "Role Isolation",
      "summary": "Claude Code subagents 文档把专用上下文、工具权限和任务路由写成可配置模式，可作为 Codex/Luna/DS 分工参照。",
      "takeaway": "动作: 探索型子代理默认只读；执行型子代理必须限定工具、路径、停止条件和回传格式。"
    },
    {
      "title": "Hooks 是确定性拦截层",
      "author": "Anthropic Docs",
      "source": "official-docs",
      "url": "https://docs.anthropic.com/en/docs/claude-code/hooks",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "MED",
      "tag": "Hooks",
      "summary": "Hooks 把工具调用前后的确定性检查插入 agent 流程，是让自然语言执行可拦截、可审计的重要模式。",
      "takeaway": "动作: 把写文件、部署、建 issue、发消息前后的检查写成 hook/rule，而不是只靠最终人工发现问题。"
    },
    {
      "title": "Obsidian Web Clipper 继续适合 source-card 工厂",
      "author": "Obsidian",
      "source": "official-docs",
      "url": "https://obsidian.md/help/web-clipper",
      "category": [
        "knowledge",
        "accounts"
      ],
      "score": "MED",
      "tag": "Knowledge Capture",
      "summary": "Web Clipper 仍适合把公开网页沉淀成本地知识卡片，但模板要从摘要升级为可复用动作资产。",
      "takeaway": "动作: 给剪藏模板增加 migration_asset、replay_scope、permission_gate、review_rule 和 public_boundary 字段。"
    }
  ],
  "knowledge": [
    {
      "title": "Agent Context Migration Sheet",
      "summary": "把 Claude Code、Cursor、Gemini CLI 或旧 Codex 设置迁移到 AGENTS.md 前，先做规则来源、类型、权限、冲突和验收清单。",
      "steps": [
        "列出来源工具、原始规则文件、仓库路径和最后更新时间。",
        "给每条规则标注风格、命令、权限、安全、测试、发布或记忆类型。",
        "删除重复、冲突、过期和仅适用于旧工具的规则。",
        "对高风险规则写 owner、适用路径、禁止动作和升级条件。",
        "迁移后运行一次小任务验证规则是否真实生效。"
      ],
      "risk": "迁移不是复制粘贴；把旧工具的宽权限带进新 agent，会扩大误操作面。"
    },
    {
      "title": "Computer History Replay Ledger",
      "summary": "把本机历史上下文作为可回放账本管理，区分可用于推理的历史和禁止进入公开输出的私密内容。",
      "steps": [
        "标注本次是否使用本机历史、自动化记忆或项目记忆。",
        "区分长期偏好、项目约定、当天事实和高漂移事实。",
        "给高漂移事实写采集日期和失效条件。",
        "公开输出前扫描本地路径、账号状态、截图、通知和私密内容。",
        "下次运行先读最近记忆，避免重复主题。"
      ],
      "risk": "记忆能省时间，也会把旧事实伪装成当前事实；公开日报只能写脱敏结论。"
    },
    {
      "title": "Permission Gate Matrix",
      "summary": "按入口拆分 read、write、publish、external action 和 approval，避免一个入口自动拥有全部权限。",
      "steps": [
        "按 Chat、Tasks、Work、Codex、Remote、Slack、GitHub、API 列入口。",
        "为每个入口标注 read、write、publish、external action、approval 五列。",
        "写清凭证来源、服务账号、连接器、MCP 工具和撤销路径。",
        "高影响写动作默认 always ask 或 safe output。",
        "最终证据只允许来自 Mac/Codex、本地测试、GitHub、Vercel 或平台 Ready。"
      ],
      "risk": "入口越顺手，越容易把“能看到任务”误认为“有权完成任务”。"
    },
    {
      "title": "Review Rule Pack",
      "summary": "把高频自动化的发布前审查沉淀成规则包，覆盖数据合同、公开边界、来源质量、工程检查和发布证据。",
      "steps": [
        "固定数据合同: sourceCards、signals、knowledge、report-data 同步。",
        "固定公开边界: cookie、截图、私信、凭证、本地路径不进入公开文件。",
        "固定来源质量: Top 5 必须能回到公开原文，优先官方/一手。",
        "固定工程检查: node --check、JSON parse、JSONL required fields、git diff --check。",
        "固定发布证据: commit、push、deploy URL、inspect Ready。"
      ],
      "risk": "AI 审查只能提高覆盖率，不能替代真实测试、真实 deploy 和人工最终判断。"
    }
  ]
};

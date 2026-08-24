window.AI_RADAR_REPORT = {
  "date": "2026-08-24",
  "updatedAt": "2026-08-24T09:02:00+08:00",
  "updatedLabel": "2026-08-24 09:02 CST",
  "conclusion": "今日主线是: AI 工作台正在从“单个入口里的 agent 功能”升级为“跨客户端、跨插件、跨团队聊天和跨企业策略的协议化运行层”。Agent Plugins 1.0 把 skills、MCP servers 和 client extensions 封装成可移植目录；OpenAI API changelog 在 8 月 21 日加入按请求选择区域处理，在 8 月 20 日加入 Prompt Caching dashboard；Codex releases 继续高频推进 0.150 alpha，并保留 0.149.0 的 dashboard、queue、doctor 和 reasoning effort 作为本地执行面信号；GitHub 则把 Copilot agent 放进 Slack 和 Teams，并在 JetBrains 侧补企业托管设置、MCP allowlist、OpenTelemetry 和权限模式。",
  "metrics": {
    "sourceCards": 14,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-08-24 的可复用变化集中在 Agent Plugins、区域处理、缓存看板、ChatOps agent 和企业控制矩阵。",
    "今天的判断很明确: 入口越多，越要把插件上架、请求地理、共享任务信封和权限矩阵制度化。"
  ],
  "signals": [
    {
      "title": "Agent Plugins 变成跨客户端插件包",
      "author": "Agent Plugins",
      "source": "official-spec-site",
      "url": "https://agent-plugins.org/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Plugin Intake",
      "summary": "Agent Plugins 1.0 把 skills、MCP servers 和 client extensions 统一到可移植插件包。",
      "takeaway": "动作: 建 Portable Agent Plugin Intake，先验 manifest、固定路径、权限和撤销路径。"
    },
    {
      "title": "兼容客户端清单要求跨入口权限账本",
      "author": "Agent Plugins",
      "source": "official-spec-site",
      "url": "https://agent-plugins.org/compatible-clients",
      "category": [
        "workflow",
        "tools",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Cross Client",
      "summary": "兼容客户端覆盖 VS Code、Cursor、GitHub Copilot、ChatGPT & Codex 等工作面。",
      "takeaway": "动作: 插件能力和权限记录按跨客户端资产管理，不绑死在单个 app。"
    },
    {
      "title": "插件加载应先看 plugin.json",
      "author": "Agent Plugins",
      "source": "official-spec-site",
      "url": "https://agent-plugins.org/client-implementers/loading-and-discovery",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Manifest First",
      "summary": "loading contract 要求先读取 plugin.json，再发现固定位置组件，并保持插件根目录边界。",
      "takeaway": "动作: 新插件上架像超市上架清单，manifest first、固定路径、禁止 path escape。"
    },
    {
      "title": "conformance checklist 可做插件闸门",
      "author": "Agent Plugins",
      "source": "official-spec-site",
      "url": "https://agent-plugins.org/client-implementers/conformance",
      "category": [
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Conformance",
      "summary": "conformance checklist 把 schema、组件发现、失败隔离、MCP transport 和版本匹配变成可验收项。",
      "takeaway": "动作: 启用 skill/MCP bundle 前先过 conformance checklist，失败组件隔离处理。"
    },
    {
      "title": "ChatGPT plugin discovery 继续强化会话运营",
      "author": "OpenAI Help",
      "source": "official-release-notes",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "hot",
        "workflow",
        "mobile"
      ],
      "score": "HIGH",
      "tag": "Session Ops",
      "summary": "8 月 21 日 release notes 同时提到插件发现、local time、长会话加载、progressive replies 和 iOS 更新。",
      "takeaway": "动作: 长任务记录插件发现、绝对日期/时区、渐进输出和附件权限。"
    },
    {
      "title": "ChatGPT 跨 app 分享边界变重要",
      "author": "OpenAI Help",
      "source": "official-release-notes",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "workflow",
        "mobile"
      ],
      "score": "HIGH",
      "tag": "Share Boundary",
      "summary": "8 月 20 日记录把 Sites、Apple Messages、Computer History 和 Codex snapshot 放在同一发布面。",
      "takeaway": "动作: 分享前区分 public summary、private process、local evidence，并对消息发送单独审批。"
    },
    {
      "title": "API 区域处理进入请求信封",
      "author": "OpenAI API",
      "source": "official-changelog",
      "url": "https://platform.openai.com/docs/changelog",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Region",
      "summary": "OpenAI API 8 月 21 日 changelog 支持 eligible project 对单个请求选择 regional processing。",
      "takeaway": "动作: API 任务模板加入 request geography、项目资格、endpoint、模型和数据要求。"
    },
    {
      "title": "Prompt Caching dashboard 让复用率可见",
      "author": "OpenAI API",
      "source": "official-changelog",
      "url": "https://platform.openai.com/docs/changelog",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Cache Ops",
      "summary": "Prompt Caching dashboard 展示 cache hit rate、cache reads/writes 和 cached/uncached token 分解。",
      "takeaway": "动作: 评估 agent 工作流时把缓存命中、模型、service tier、延迟和成本放在同一表。"
    },
    {
      "title": "Codex 0.150 alpha 高频更新要记录版本",
      "author": "OpenAI / GitHub",
      "source": "official-release",
      "url": "https://github.com/openai/codex/releases",
      "category": [
        "hot",
        "tools"
      ],
      "score": "MED",
      "tag": "Version Gate",
      "summary": "Codex release 页显示 0.150.0-alpha.7 和多次近期 alpha 构建，CLI 行为仍快速变化。",
      "takeaway": "动作: 自动化证据记录 Codex 版本和 release 日期，不假设 alpha 功能已安装。"
    },
    {
      "title": "Codex queue/doctor 适合发布前闸门",
      "author": "OpenAI / GitHub",
      "source": "official-release",
      "url": "https://github.com/openai/codex/releases",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Queue Doctor",
      "summary": "Codex 0.149.0 增加 agents dashboard、codex queue、codex doctor、CLI config overrides 和 SDK reasoning effort。",
      "takeaway": "动作: 发布前记录 queue 状态、doctor 摘要、config overrides、reasoning level 和 final owner。"
    },
    {
      "title": "Copilot weekly release 指向可暂停工作流",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-08-13-github-copilot-weekly-releases-august-10/",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Session Control",
      "summary": "GitHub 周报集中出现 Agent Plugins、side chat、/tasks、queue、/rewind、context-preserving /app、memory 和 BYOK/local model。",
      "takeaway": "动作: 长 agent 任务按 queueable、reversible、context-preserving session 设计。"
    },
    {
      "title": "Slack 变成共享 coding-agent 现场",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-08-21-the-new-github-copilot-experience-in-slack/",
      "category": [
        "hot",
        "workflow",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Slack Agent",
      "summary": "GitHub Copilot in Slack 可通过 @GitHub 启动 agent session，覆盖 triage、issue、实现、验证、PR 和 code channel。",
      "takeaway": "动作: Slack 只做共享派工和 steering；合并仍要求 PR、额外审批和验证证据。"
    },
    {
      "title": "Teams 把会议动作项接进 agent session",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-08-21-shared-agentic-work-with-github-copilot-in-microsoft-teams/",
      "category": [
        "workflow",
        "accounts",
        "mobile"
      ],
      "score": "HIGH",
      "tag": "Teams Agent",
      "summary": "GitHub Copilot in Teams 可把讨论转成共享 cloud agent session，并提到预算与额外审批要求。",
      "takeaway": "动作: 会议动作项进入 agent 前写 repo、权限、budget、sandbox、approval 和继续入口。"
    },
    {
      "title": "JetBrains 企业设置补齐 agent 控制面",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-08-18-enterprise-managed-settings-in-github-copilot-for-jetbrains/",
      "category": [
        "workflow",
        "accounts",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Control Matrix",
      "summary": "GitHub Copilot for JetBrains 支持企业托管插件治理、MCP allowlist、OpenTelemetry 和 permission modes。",
      "takeaway": "动作: 建 Enterprise Agent Controls Matrix，覆盖 plugins、marketplace、MCP、telemetry 和 permission mode。"
    }
  ],
  "knowledge": [
    {
      "title": "Portable Agent Plugin Intake",
      "summary": "把 Agent Plugins 当成可移植资产，上架前验 manifest、固定路径、权限、外部副作用和撤销路径。",
      "steps": [
        "读取 plugin.json 并记录 schema、name、版本、来源和 owner。",
        "检查 skills、mcp.json 和 client extension 是否在固定位置。",
        "确认路径不逃出插件根目录。",
        "标注每个组件的读写能力、外部副作用、权限提示和撤销路径。",
        "失败时隔离坏组件，并记录是否允许降级加载。"
      ]
    },
    {
      "title": "Request Geography & Cache Dashboard",
      "summary": "把 API 请求区域、缓存命中、模型、service tier、成本和延迟放进一张运行看板。",
      "steps": [
        "为 API 任务记录目标区域、项目 geography、模型和 endpoint。",
        "标注是否允许 request-level regional processing。",
        "跟踪 prompt cache hit rate、cache reads/writes 和 uncached tokens。",
        "按模型和 service tier 汇总成本、延迟和复用率。",
        "价格或模型更新时重新计算默认路由。"
      ]
    },
    {
      "title": "ChatOps Shared-Agent Envelope",
      "summary": "Slack/Teams 共享 agent 现场必须先转成任务信封，再允许多人 steering。",
      "steps": [
        "写清 workspace/channel/thread、repo、目标、权限和预算。",
        "区分问答、triage、创建 issue、改代码和开 PR。",
        "默认只允许计划、诊断和草稿，写动作需要明确 owner。",
        "多人 steering 时记录谁改变了目标以及是否影响验收。",
        "合并前回到 PR、测试、额外审批和 deploy 证据。"
      ]
    },
    {
      "title": "Enterprise Agent Controls Matrix",
      "summary": "把插件、marketplace、MCP、遥测和权限模式集中成一张可审计控制矩阵。",
      "steps": [
        "列出允许插件、禁止插件和允许 marketplace。",
        "建 MCP allowlist/denylist，记录 transport、URL/command 和 owner。",
        "为遥测记录 collector、protocol、service name 和内容捕获策略。",
        "为每个入口定义 read-only、draft、ask-before-write 或 blocked。",
        "每月复核误触发、被拒组件和人工返工点。"
      ]
    }
  ]
};

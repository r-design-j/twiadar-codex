window.AI_RADAR_REPORT = {
  "date": "2026-07-21",
  "updatedAt": "2026-07-21T09:36:36+08:00",
  "updatedLabel": "2026-07-21 09:36 CST",
  "conclusion": "今日主线是：AI 工作流正在从“让 agent 干活”进入“治理 agent 工作台”。OpenAI 把 Chat、Work、Codex、Sites、Plugins、移动 Remote 和私有 MCP 收束成跨设备工作台；GitHub 把 repo 级指标、AI credit、review 环境、security review 和 agentic autofix 做成治理能力。个人自动化下一步要管入口、权限、指标、记忆。",
  "metrics": {
    "sourceCards": 15,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-07-21 的可复用变化集中在四块：工作台入口、项目级指标、私有 MCP 边界、长期记忆合并闸门。",
    "今天的判断很明确：agent 能做更多事以后，真正稀缺的是权限边界、验证证据和可复用知识沉淀。"
  ],
  "signals": [
    {
      "title": "ChatGPT 工作台把 Work、Codex、Sites 和 Plugins 收束",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Work",
      "summary": "ChatGPT Release Notes 把 Work、桌面 app、Codex、Sites 和 Plugin Directory 放在同一轮产品语境里，说明个人 AI 工作流正在工作台化。",
      "takeaway": "动作：把 AI Radar 拆成收集、执行、验收、发布四个区，避免所有职责塞进一个长会话。"
    },
    {
      "title": "Plugin Directory 改写工具接入边界",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/20001256",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Plugins",
      "summary": "插件把 apps、skills、app templates 包成可发现工作流能力，但读写权限和 app access 仍要按系统逐项审核。",
      "takeaway": "动作：插件启用前检查连接系统、读写权限、确认机制和敏感数据范围。"
    },
    {
      "title": "GitHub Copilot 指标下钻到 repository",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-17-repository-level-github-copilot-usage-metrics-generally-available/",
      "category": [
        "hot",
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Metrics",
      "summary": "repo 级 Copilot usage metrics 把 coding agent PR 和 code review activity 变成可下钻数据，提示 agent 采用要按项目评估。",
      "takeaway": "动作：AI Radar 月报补充失败原因、返工点、被复用次数和发布 Ready 状态。"
    },
    {
      "title": "Copilot code review 开始治理运行环境",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-17-copilot-code-review-customization-and-configurability-improvements/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Review",
      "summary": "Copilot code review 支持 head branch 指令、专用 setup、默认 firewall 和独立 runner，说明 review agent 质量取决于环境和边界。",
      "takeaway": "动作：Codex 任务也显式记录 AGENTS.md、setup、网络权限、验证命令和审批点。"
    },
    {
      "title": "私有 MCP 连接不等于公开暴露",
      "author": "OpenAI Developers",
      "source": "official-blog",
      "url": "https://developers.openai.com/blog/connect-private-mcp-servers-to-openai-products",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "MCP",
      "summary": "Secure MCP Tunnel 的重点是保持私有网络边界，同时给 ChatGPT 和 Codex 正常、可检查的 MCP 请求路径。",
      "takeaway": "动作：本地桥、知识库和公司内网默认不走公网隧道；先只读、白名单、审计，再谈写操作。"
    },
    {
      "title": "Codex Remote 强化手机控制台定位",
      "author": "OpenAI Developers",
      "source": "official-blog",
      "url": "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
      "category": [
        "mobile",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Remote",
      "summary": "Remote 让工程师从手机选择 host、workspace、branch 和 worktree，手机更像控制台，而不是完整开发机。",
      "takeaway": "动作：iPhone 派工和轻审批，Mac 负责 diff、验证、commit、push、deploy 终审。"
    },
    {
      "title": "Security review 进入 Copilot app",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-14-security-reviews-now-available-in-the-github-copilot-app/",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "MED",
      "tag": "Security",
      "summary": "`/security-review` 进入 Copilot app，把本地变更的高置信安全扫描变成 everyday coding workflow 的一部分。",
      "takeaway": "动作：公开发布或自动化脚本变更前固定检查外部来源、公开字段、secret、路径和权限。"
    },
    {
      "title": "Agentic autofix 把安全修复交给 draft PR",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-10-agentic-autofix-for-code-scanning-alerts-in-public-preview/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "MED",
      "tag": "Autofix",
      "summary": "Copilot 可探索相关文件、生成修复、重跑 CodeQL，并开 draft PR，说明安全修复可以 agentic，但仍需要 review。",
      "takeaway": "动作：个人自动化保持发现、拟修、验证、生成 diff、Mac 终审的节奏。"
    },
    {
      "title": "Codex 成为 JetBrains agent provider",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-07-codex-as-agent-provider-and-agentic-enhancements-in-jetbrains-ides/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "MED",
      "tag": "Provider",
      "summary": "JetBrains 中可把 Codex 作为 agent provider，coding agents 正在进入多 IDE、多 provider 的选择层。",
      "takeaway": "动作：先定义任务边界和验收物，再决定由 Codex、Copilot、Claude Code 还是本地脚本执行。"
    },
    {
      "title": "长期记忆需要候选池和合并闸门",
      "author": "OpenAI Developers Cookbook",
      "source": "official-cookbook",
      "url": "https://developers.openai.com/cookbook/examples/agents_sdk/context_personalization",
      "category": [
        "knowledge",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Memory",
      "summary": "Context personalization 把长期记忆拆成 state、session memory、global memory、候选提取、合并和评估，适合改造 knowledge 沉淀。",
      "takeaway": "动作：source-card 当候选池，daily 做解释，knowledge 只接高信号可复用卡片。"
    },
    {
      "title": "iPhone Shortcuts 可以调用 ChatGPT 模型",
      "author": "Apple Support",
      "source": "official-docs",
      "url": "https://support.apple.com/en-bw/guide/iphone/iph78c41eaf8/26/ios",
      "category": [
        "mobile",
        "workflow"
      ],
      "score": "MED",
      "tag": "Shortcuts",
      "summary": "Apple Support 明确 Shortcuts 可使用 Apple Intelligence 或 ChatGPT 处理请求，让 iPhone 捕捉和预处理更接近系统入口。",
      "takeaway": "动作：Shortcuts 只做捕捉和预处理，不执行不可逆发布、授权或写私有系统。"
    },
    {
      "title": "浏览器 agent 权限风险继续升温",
      "author": "TechRadar / Manifold Security coverage",
      "source": "media",
      "url": "https://www.techradar.com/pro/the-bypass-is-still-six-lines-of-javascript-security-experts-warn-that-claude-for-chrome-browser-extension-could-be-hijacked-despite-it-alerting-anthropic-several-times-that-something-was-wrong",
      "category": [
        "tools",
        "knowledge"
      ],
      "score": "MED",
      "tag": "Browser",
      "summary": "报道显示浏览器 AI extension 若未正确区分真实用户动作和 synthetic click，可能触发敏感工作流。",
      "takeaway": "动作：浏览器/桌面 agent 的自动执行保留权限确认、白名单和敏感动作二次确认。"
    }
  ],
  "knowledge": [
    {
      "label": "01 / Workbench",
      "title": "Agent 工作台要有四张清单",
      "body": "入口、权限、指标、知识沉淀要分开治理。ChatGPT Work、Codex、Sites 和 Plugins 能力越多，越要先写清每个入口能做什么。"
    },
    {
      "label": "02 / Metrics",
      "title": "Agent 指标要下钻到项目级",
      "body": "不要只数运行次数；记录 sourceCards、knowledgeCards、失败原因、返工点、被复用次数和发布状态。"
    },
    {
      "label": "03 / Boundary",
      "title": "私有 MCP 先守边界",
      "body": "本地桥、知识库和内网工具不应为了便利公开暴露。默认只读、白名单、可检查客户端，写操作保留人工确认。"
    },
    {
      "label": "04 / Memory",
      "title": "长期记忆需要合并闸门",
      "body": "source-card 是候选池，daily 是解释层，knowledge 才是可复用资产层。月底要去重、处理冲突、retire 过时卡片。"
    }
  ]
}
;

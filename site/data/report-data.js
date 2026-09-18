window.AI_RADAR_REPORT = {
  "date": "2026-09-18",
  "updatedAt": "2026-09-18T09:03:00+08:00",
  "updatedLabel": "2026-09-18 09:03 CST",
  "conclusion": "今天的主线是 AI 工作流进入“可度量、可白名单、可恢复、可跨运行时验收”的运营阶段。GitHub 把 Copilot feature engagement、agentic CLI 自定义项、Actions 执行保护和 Ubuntu runner 迁移都推成管理面信号；OpenAI 把 Codex 0.155.0 稳定版、Node/Python 受管 Responses 会话、prompt-cache prewarming 和会话设置往前推进；Claude Code 则在账号确认、插件同步、遥测告警、恢复和完整性校验上给出同类对照。结论: 今天该补的不是更多玩法列表，而是采用率账本、自定义项使用小票、Workflow 白名单、稳定版升级小票和 SDK 会话合同。",
  "metrics": {
    "sourceCards": 12,
    "topSignals": 5,
    "knowledgeCards": 5
  },
  "excerpt": [
    "2026-09-18 的重点是 Feature Engagement Ledger、Agentic Customization Usage Ledger、Workflow Execution Protection Gate、Stable Codex Upgrade Receipt、Managed Responses Session Contract。",
    "白话说: AI 团队现在不只要会干活，还要交考勤表、工具使用清单、门禁白名单、升级验收单和行车记录仪。"
  ],
  "signals": [
    {
      "title": "Copilot impact dashboard now shows feature engagement",
      "author": "GitHub Changelog / Allison",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-17-copilot-impact-dashboard-now-shows-feature-engagement",
      "category": [
        "hot",
        "workflow",
        "accounts",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Feature Engagement",
      "summary": "Copilot impact dashboard and APIs now show 28-day active-user engagement by feature, including agent edit, code review, cloud agent, CLI, and app usage.",
      "takeaway": "动作: Build a feature-level adoption ledger instead of relying on total active users."
    },
    {
      "title": "Agentic CLI customizations now in the usage metrics API",
      "author": "GitHub Changelog / Allison",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-17-agentic-cli-customizations-now-in-the-usage-metrics-api",
      "category": [
        "hot",
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Agent Metrics",
      "summary": "Copilot usage reports now cover skills, custom agents, MCP servers, slash commands, and plugins, with top-five arrays and distinct counts.",
      "takeaway": "动作: Track adoption by customization type and avoid double-counting plugin usage with skills."
    },
    {
      "title": "Workflow execution protections in GitHub Actions generally available",
      "author": "GitHub Changelog / Allison",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-17-workflow-execution-protections-in-github-actions-generally-available",
      "category": [
        "hot",
        "workflow",
        "tools",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Actions Policy",
      "summary": "Workflow execution protections are GA with actor/event allowlists, workflow-file targeting, insights, REST API control, and pull_request_target secure defaults.",
      "takeaway": "动作: Put deploy and release workflows through evaluate mode before enforcement."
    },
    {
      "title": "OpenAI Codex 0.155.0 stable",
      "author": "OpenAI / GitHub Actions",
      "source": "official-release",
      "url": "https://github.com/openai/codex/releases/tag/rust-v0.155.0",
      "category": [
        "hot",
        "workflow",
        "mobile",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Codex Stable",
      "summary": "Codex 0.155.0 documents experimental voice, live reasoning summaries, task lifecycle actions, Touch ID MCP verification, daemon updates, and recovery fixes.",
      "takeaway": "动作: Treat the release as an operator-surface upgrade and run local smoke before adopting."
    },
    {
      "title": "OpenAI Node 7.18.0",
      "author": "OpenAI SDKs",
      "source": "official-release",
      "url": "https://github.com/openai/openai-node/releases/tag/v7.18.0",
      "category": [
        "hot",
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Responses WS",
      "summary": "OpenAI Node 7.18.0 adds managed Responses WebSocket sessions, agent session model settings, prompt-cache prewarming, and WebSocket validation work.",
      "takeaway": "动作: Add managed session, cache prewarm, and WebSocket lifecycle fields to run receipts."
    },
    {
      "title": "OpenAI Python 3.15.0",
      "author": "OpenAI SDKs",
      "source": "official-release",
      "url": "https://github.com/openai/openai-python/releases/tag/v3.15.0",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Python Parity",
      "summary": "OpenAI Python 3.15.0 aligns with Node on agent session settings, managed Responses WebSocket sessions, prompt-cache prewarming, audio-mini choices, and compaction progress.",
      "takeaway": "动作: Keep Node and Python agent session fixtures symmetrical."
    },
    {
      "title": "GitHub Copilot CLI 1.0.86 stable",
      "author": "GitHub / copilot-cli-release-app[bot]",
      "source": "official-release",
      "url": "https://github.com/github/copilot-cli/releases/tag/v1.0.86",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "CLI Recovery",
      "summary": "Copilot CLI 1.0.86 stable folds instruction inheritance, plugin and skill preservation, sandbox status, corrupted transcript recovery, and Autopilot stop fixes into stable.",
      "takeaway": "动作: Upgrade with a receipt that verifies inheritance, resume, sandbox, recovery, and stop behavior."
    },
    {
      "title": "Ubuntu 26 generally available and latest migration",
      "author": "GitHub Changelog / Allison",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-17-ubuntu-26-generally-available-and-latest-migration",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "MED",
      "tag": "CI Drift",
      "summary": "Ubuntu 26.04 is GA for Actions runners and ubuntu-latest will migrate from October 19 to November 19, 2026.",
      "takeaway": "动作: Test critical workflows on ubuntu-26.04 and pin ubuntu-24.04 where needed."
    },
    {
      "title": "Claude Code v2.1.275",
      "author": "Anthropic / GitHub Releases",
      "source": "official-release",
      "url": "https://github.com/anthropics/claude-code/releases/tag/v2.1.275",
      "category": [
        "workflow",
        "tools",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Claude Reliability",
      "summary": "Claude Code 2.1.275 adds account confirmation, queued-send controls, telemetry warnings, skill/plugin sync, marketplace install flow, secret redaction, resume hardening, and npm integrity verification.",
      "takeaway": "动作: Use these as cross-tool reliability checks for local agent workflows."
    },
    {
      "title": "Claude Code What's New Week 37",
      "author": "Anthropic Docs",
      "source": "official-docs",
      "url": "https://code.claude.com/docs/en/whats-new/2026-w37",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "MED",
      "tag": "Plugin Eval",
      "summary": "Claude Code docs highlight plugin evaluation with test cases, graders, and no-plugin baselines.",
      "takeaway": "动作: Treat durable workflow plugins as evaluated assets, not just installed shortcuts."
    },
    {
      "title": "REST API endpoints for Copilot usage metrics",
      "author": "GitHub Docs",
      "source": "official-docs",
      "url": "https://docs.github.com/en/rest/copilot/copilot-usage-metrics",
      "category": [
        "accounts",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Metrics API",
      "summary": "GitHub Docs define daily and 28-day Copilot reports, report dates, signed download links, permission requirements, and historical windows.",
      "takeaway": "动作: Ingest metrics with date-range, expiry, permission, null/absent, and reconciliation semantics."
    },
    {
      "title": "Controlling who can execute GitHub Actions workflows",
      "author": "GitHub Docs",
      "source": "official-docs",
      "url": "https://docs.github.com/en/actions/how-tos/administer/control-workflow-execution",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Policy Runbook",
      "summary": "GitHub Docs explain how to target workflow protections by repository, workflow path, actor, event, and evaluate/enforce status.",
      "takeaway": "动作: Layer enterprise/org/repo policies and inspect would-block results before enforcement."
    }
  ],
  "knowledge": [
    {
      "title": "Feature Engagement Ledger",
      "label": "COPILOT ADOPTION",
      "body": "把 Copilot 采用率从“有人用过”细化成“哪些功能在 28 天里被稳定使用”。",
      "summary": "按功能看真实采用率。",
      "steps": [
        "拉取 enterprise/org 28-day aggregate reports。",
        "分开记录 active users、totals_by_feature、users_in_phase_28d 和 null/absent 字段。",
        "把 code completion、agent edit、code review、cloud agent、CLI、app 分开看，不混成一个总数。",
        "对低采用功能关联培训、配置缺口和实际任务类型。"
      ],
      "risk": "只看总活跃人数，会把“大家都开了”误判成“大家都会用关键功能”。"
    },
    {
      "title": "Agentic Customization Usage Ledger",
      "label": "AGENT CUSTOMIZATION",
      "body": "把技能、自定义 agent、MCP、slash command、plugin 的使用情况变成可审计的采用证据。",
      "summary": "自定义项要有使用小票。",
      "steps": [
        "采集 totals_by_skill、totals_by_custom_agent、totals_by_mcp、totals_by_slash_cmd、totals_by_plugin。",
        "同时记录 distinct_*_use_count，判断工具品类是否扩散。",
        "注意 plugin totals 是 skill totals 的子集，禁止简单相加。",
        "客户自定义名称被隐藏时，把 other/custom 当成隐私保护状态，而不是数据丢失。"
      ],
      "risk": "把所有自定义项加总，会重复计算并误导投资判断。"
    },
    {
      "title": "Workflow Execution Protection Gate",
      "label": "CI GOVERNANCE",
      "body": "让能触发自动化的人和事件进入白名单，不让危险 workflow 靠默认权限裸奔。",
      "summary": "Actions 触发要有超市上架清单。",
      "steps": [
        "按 public/internal/private、deploy/release/CI 分类仓库和 workflow。",
        "先用 evaluate mode 看哪些运行会被挡。",
        "为敏感 workflow 设 actor rules、event rules 和 workflow path targeting。",
        "将 insights、REST API 配置和被阻止运行写入治理记录。"
      ],
      "risk": "直接 enforcement 可能阻断正常发布；完全不设规则则会放大 pull_request_target 和手动触发风险。"
    },
    {
      "title": "Stable Codex Upgrade Receipt",
      "label": "CODEX UPGRADE",
      "body": "Codex 稳定版升级不只看版本号，要验操作界面、身份、任务生命周期和恢复能力。",
      "summary": "稳定版也要跑升级小票。",
      "steps": [
        "记录 tag、published_at、release body、关键 feature/fix 和资产来源。",
        "本地 smoke 覆盖 /voice 开关、reasoning status、task hide/archive/delete、MCP verification。",
        "重启 daemon 后检查 saved threads、active goals 和 account-switch cache。",
        "验证失败时保留旧版本路径和回滚条件。"
      ],
      "risk": "新稳定版可能改变操作者界面和身份边界，只看 CLI 是否启动不够。"
    },
    {
      "title": "Managed Responses Session Contract",
      "label": "SDK SESSIONS",
      "body": "Managed Responses WebSocket sessions、session model settings 和 prompt-cache prewarming 要作为同一条会话合同验收。",
      "summary": "SDK 会话要验生命周期。",
      "steps": [
        "Node 和 Python 都记录 SDK 版本、session model settings、WebSocket start/end/error。",
        "测试 prompt-cache prewarming 是否真的命中并记录命中证据。",
        "保留 compaction progress、moderation results、header/default validation 和关闭原因。",
        "不同语言运行时用同一组 fixture 对齐行为。"
      ],
      "risk": "只升级一个 SDK，可能让 Node/Python agent 在会话、缓存和错误处理上分叉。"
    }
  ]
};

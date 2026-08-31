window.AI_RADAR_REPORT = {
  "date": "2026-08-31",
  "updatedAt": "2026-08-31T05:41:00+08:00",
  "updatedLabel": "2026-08-31 05:41 CST",
  "conclusion": "今日主线是: AI 工作台从“功能上线”进入“截止日验收”。2026-08-31 是 Codex GPT-5.4/GPT-5.4 mini 退场节点，今天最重要的动作不是继续加新流程，而是把模型引用、自动化默认值、custom agents、scheduled tasks、插件市场、MCP 工具结果、浏览器 lane、跨 app 发送和知识库写入全部过一遍门禁。OpenAI Codex 0.151.0 把 MCP tool result inspection、插件目录配置、远程沙箱路径语义、权限恢复和子代理预算聚合推到更细；GitHub Copilot 的统一策略、code review 扩容、global model policy 和 plugin autoUpdate 说明同一个趋势: agent 平台会越来越能自动运行，也越来越需要明确 owner、默认值、allowlist、审查独立性和最终证据。",
  "metrics": {
    "sourceCards": 16,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-08-31 的重点是旧模型截止日验收、MCP 结果审查、跨 app 发送审批和知识库写入边界。",
    "今天的判断很明确: agent 越能自动运行，越要把默认值、权限、审查独立性和最终证据写清楚。"
  ],
  "signals": [
    {
      "title": "GPT-5.4 and GPT-5.4 mini retire from Codex on August 31",
      "author": "OpenAI / ChatGPT & Codex changelog",
      "url": "https://learn.chatgpt.com/docs/changelog",
      "source": "official-changelog",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Model Cutoff",
      "summary": "August 31 is the Codex cutoff date for GPT-5.4 and GPT-5.4 mini in ChatGPT sign-in flows.",
      "takeaway": "动作: 跑 Cutoff-Day Model Audit，扫默认模型、自动化、custom agents、scheduled tasks 和文档模板。"
    },
    {
      "title": "OpenAI Codex 0.151.0 adds MCP result inspection, plugin catalog handling and sandbox hardening",
      "author": "OpenAI / GitHub",
      "url": "https://github.com/openai/codex/releases/tag/rust-v0.151.0",
      "source": "official-release",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Codex Runtime",
      "summary": "Codex 0.151.0 strengthens MCP discovery, tool result inspection, plugin catalogs, sandbox semantics, permission restore and budget aggregation.",
      "takeaway": "动作: 升级前验证 MCP result gate、plugin catalog diff、sandbox readback 和 root budget。"
    },
    {
      "title": "Codex extensions can inspect or replace MCP tool results before model ingestion",
      "author": "OpenAI / GitHub",
      "url": "https://github.com/openai/codex/releases/tag/rust-v0.151.0",
      "source": "official-release",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "MCP Result Gate",
      "summary": "Tool outputs can now be inspected or replaced before they reach the model, making result-side governance practical.",
      "takeaway": "动作: 给 MCP tool 结果加 schema、allowlist、redaction、withheld state 和恶意输出回归测试。"
    },
    {
      "title": "Work with more websites in ChatGPT Work and Codex",
      "author": "OpenAI / ChatGPT Learn",
      "url": "https://learn.chatgpt.com/docs/whats-new",
      "source": "official-digest",
      "category": [
        "workflow",
        "mobile",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Browser Lanes",
      "summary": "Public web, local browser, Site tools(WebMCP), and cloud sign-in need separate account and evidence boundaries.",
      "takeaway": "动作: 每个网页任务先声明 lane、账号边界、允许动作、读回方法和停止条件。"
    },
    {
      "title": "Scheduled tasks can respond to app updates and be shared",
      "author": "OpenAI Help Center",
      "url": "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes",
      "source": "official-release-notes",
      "category": [
        "workflow",
        "accounts",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Event Tasks",
      "summary": "Work scheduled tasks can respond to Gmail, Slack and GitHub activity and be shared as independent workspace copies.",
      "takeaway": "动作: 给事件任务写 Trigger Envelope，包含 source、payload、idempotency、owner 和重复事件策略。"
    },
    {
      "title": "Import and sync plugin marketplaces from GitHub",
      "author": "OpenAI Help Center",
      "url": "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes",
      "source": "official-release-notes",
      "category": [
        "tools",
        "accounts",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Marketplace Sync",
      "summary": "Marketplace sync can update plugins daily while app connection and identity review remain separate risk gates.",
      "takeaway": "动作: 建 Marketplace Auto-Update Gate，记录来源仓库、allowlist、权限 diff、owner 和回滚。"
    },
    {
      "title": "Use Apple Messages from Codex and ChatGPT Work",
      "author": "OpenAI Help Center",
      "url": "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes",
      "source": "official-release-notes",
      "category": [
        "mobile",
        "workflow",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Send Approval",
      "summary": "Messages integration moves assistant work into real external communication on Apple silicon Macs.",
      "takeaway": "动作: 把 read/search、draft、recipient confirmation、send approval 和 post-send evidence 分成五个 gate。"
    },
    {
      "title": "ChatGPT release notes add session visibility, app directory language and Codex computer-use expansion",
      "author": "OpenAI Help Center",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "source": "official-release-notes",
      "category": [
        "mobile",
        "workflow",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Device Roles",
      "summary": "Session visibility, app-directory language, computer-use expansion and remote steering reinforce host-vs-control separation.",
      "takeaway": "动作: 更新 Agent Session Policy Matrix，写清 host device、control device、数据边界和完成证据。"
    },
    {
      "title": "GitHub Copilot cloud agent, github.com Chat and GitHub Mobile converge into one policy",
      "author": "GitHub Changelog",
      "url": "https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing/",
      "source": "official-changelog",
      "category": [
        "hot",
        "workflow",
        "mobile"
      ],
      "score": "HIGH",
      "tag": "Unified Policy",
      "summary": "GitHub plans unified policy and billing behavior for cloud agent, github.com Chat and Mobile.",
      "takeaway": "动作: 切换前审查默认开启、保留期、sandbox、移动端访问、billing 和 review effort。"
    },
    {
      "title": "GitHub Copilot weekly releases add workbench controls and continuity features",
      "author": "GitHub Changelog",
      "url": "https://github.blog/changelog/2026-08-28-github-copilot-weekly-releases-august-24/",
      "source": "official-changelog",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Workbench Controls",
      "summary": "Shared sessions, Customize tab, CLI defaults, restore, continuity and model usage reporting move Copilot toward a managed workbench.",
      "takeaway": "动作: 记录 defaultMode、permission mode、restore、plugin/MCP surface、skills 和 usage。"
    },
    {
      "title": "Copilot code review expands to bot-authored and very large pull requests",
      "author": "GitHub Changelog",
      "url": "https://github.blog/changelog/2026-08-27-copilot-code-review-resolution-reasons-and-expanded-capabilities/",
      "source": "official-changelog",
      "category": [
        "hot",
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "AI PR Review",
      "summary": "Copilot code review can review bot-authored PRs, cloud-agent PRs, and PRs beyond previous size limits.",
      "takeaway": "动作: 对 AI-authored PR 增加 Author/Reviewer Independence Gate 和 resolution reason。"
    },
    {
      "title": "Enterprise-managed settings support autoUpdate for plugin marketplaces",
      "author": "GitHub Changelog",
      "url": "https://github.blog/changelog/2026-08-26-enterprise-managed-settings-now-support-autoupdate-for-plugin-marketplaces/",
      "source": "official-changelog",
      "category": [
        "tools",
        "accounts",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Auto Update",
      "summary": "Auto-updating plugin marketplaces make managed plugin distribution a recurring deployment surface.",
      "takeaway": "动作: 把 autoUpdate 当部署通道管理，保留 allowlist、diff、禁用和回滚。"
    },
    {
      "title": "Global model policy is generally available for GitHub Copilot",
      "author": "GitHub Changelog",
      "url": "https://github.blog/changelog/2026-08-26-global-model-policy-generally-available/",
      "source": "official-changelog",
      "category": [
        "accounts",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Model Policy",
      "summary": "Models can inherit global policy unless explicitly enabled or disabled, making default delegation a governance decision.",
      "takeaway": "动作: 维护 Model Policy Matrix，分 enabled、disabled、inherited、never-default 四种状态。"
    },
    {
      "title": "OpenAI Agents SDK Python 0.22.0 hardens guardrails and usage accounting",
      "author": "OpenAI / GitHub",
      "url": "https://github.com/openai/openai-agents-python/releases/tag/v0.22.0",
      "source": "official-release",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Runtime Safety",
      "summary": "The SDK redacts blocked tool outputs from replay state, raises terminal failed/incomplete responses and isolates usage accounting.",
      "takeaway": "动作: 升级前补 output redaction、terminal failure、provider conflict 和 checkpoint usage 测试。"
    },
    {
      "title": "OpenAI Agents SDK JS 0.17.0 adds output-guardrail replay safety",
      "author": "OpenAI / GitHub",
      "url": "https://github.com/openai/openai-agents-js/releases/tag/v0.17.0",
      "source": "official-release",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Replay Safety",
      "summary": "The JS SDK fails closed on ambiguous serialized approval checkpoints and withholds rejected final tool output in replay surfaces.",
      "takeaway": "动作: 对 JS agents 优先 live RunState continuation，并验证被拒工具输出不会进入持久化状态。"
    },
    {
      "title": "Agent Fleet brings CLI agents into Obsidian vaults as markdown-run workspaces",
      "author": "Obsidian Community",
      "url": "https://community.obsidian.md/plugins/agent-fleet",
      "source": "community-plugin",
      "category": [
        "knowledge",
        "tools",
        "workflow"
      ],
      "score": "MED",
      "tag": "Vault Agents",
      "summary": "Obsidian vaults can host agent definitions, skills, tasks and run logs as markdown assets.",
      "takeaway": "动作: 先设 Vault-Agent Ownership Fence，read/search 优先，写入只进批准目录，移动/删除/合并需人工确认。"
    }
  ],
  "knowledge": [
    {
      "title": "Cutoff-Day Model Audit",
      "summary": "模型退场日要把所有旧模型引用当成发布阻断项逐项扫清。",
      "usage": "用于 Codex 模型退场、Copilot global model policy、Agents SDK 模型迁移和团队默认模型切换。"
    },
    {
      "title": "MCP Tool Result Inspection Gate",
      "summary": "不只审 tool input，也审工具返回给模型的 result，必要时替换、脱敏或阻断。",
      "usage": "用于 Codex MCP、插件、app server、browser tool、知识库检索和第三方 connector。"
    },
    {
      "title": "Cross-App Send Approval Ledger",
      "summary": "把跨 app 的读、搜、草稿、收件人确认、发送和发送后证据拆成独立审批状态。",
      "usage": "用于 Apple Messages、Gmail、Slack、Teams、GitHub issue/PR、日历邀请和社交平台。"
    },
    {
      "title": "Vault-Agent Ownership Fence",
      "summary": "把 Obsidian/markdown vault 当成个人知识资产库，先定义可读、可写、可自动整理边界。",
      "usage": "用于 Obsidian MCP、Agent Fleet、second brain、Codex memory、研究库和团队 runbook。"
    }
  ]
};

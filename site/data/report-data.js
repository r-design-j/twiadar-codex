window.AI_RADAR_REPORT = {
  "date": "2026-09-14",
  "updatedAt": "2026-09-14T09:03:20+08:00",
  "updatedLabel": "2026-09-14 09:03 CST",
  "conclusion": "今天没有发现比 9 月 11 日更晚的一手大公告，重点从追新功能转成周一落地清单。最新公开信号显示 agent 工作流正在进入可度量、可复审、可沙箱化、可迁移的阶段: VS Code Agents 指标、Copilot review 自动关闭、recurring agent tasks、HydraFusion、Copilot CLI sandbox/import/trust/usage 变化，以及 Codex alpha lane 都要求把完成证据和权限边界写成小票。",
  "metrics": {
    "sourceCards": 12,
    "topSignals": 5,
    "knowledgeCards": 5
  },
  "excerpt": [
    "2026-09-14 的重点是 agent adoption receipt、review closure gate、CLI sandbox smoke、skill/memory import contract 和 model/tool migration ledger。",
    "白话说: 周一不是追新玩具，而是给 AI 员工补考勤、质检、门禁、搬家和换岗小票。"
  ],
  "signals": [
    {
      "title": "Add VS Code Agents to Copilot usage metrics",
      "author": "GitHub Changelog / Allison",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-11-add-vs-code-agents-to-copilot-usage-metrics",
      "category": [
        "hot",
        "workflow",
        "knowledge",
        "tools",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Agent Metrics",
      "summary": "Copilot usage metrics now expose VS Code Agents-window activity separately from generic Copilot usage, including active users, sessions, messages, and user-level indicators.",
      "takeaway": "动作: Build an Agent Adoption Receipt that separates window, editor, CLI, and desktop usage and treats null as unavailable."
    },
    {
      "title": "Auto-resolution and analysis updates in Copilot code review",
      "author": "GitHub Changelog / Allison",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-11-auto-resolution-and-analysis-updates-in-copilot-code-review",
      "category": [
        "hot",
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Review Gate",
      "summary": "Copilot code review can auto-resolve addressed comments and use shell tools plus Lite-effort agent ensembles for deeper analysis.",
      "takeaway": "动作: Record closed/open thread diffs after fix commits, then keep final acceptance tied to tests, rulesets, and human review."
    },
    {
      "title": "GitHub Copilot weekly releases - September 7",
      "author": "GitHub Changelog / Allison",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7",
      "category": [
        "hot",
        "workflow",
        "mobile",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Agent Loop",
      "summary": "Jira shared canvas, HydraFusion routing, VS Code recurring agent tasks, voice mode, and JetBrains sandbox policy form an end-to-end agent operations loop.",
      "takeaway": "动作: Write task capsules from requirement source to PR review, including model routing, permission policy, and completion evidence."
    },
    {
      "title": "GitHub Copilot CLI 1.0.84-5 prerelease",
      "author": "GitHub / copilot-cli-release-app[bot]",
      "source": "official-release",
      "url": "https://github.com/github/copilot-cli/releases/tag/v1.0.84-5",
      "category": [
        "hot",
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "CLI Smoke",
      "summary": "The prerelease adds semantic JSONL session and memory import, grammar-generated completions, absolute sandbox paths, resource trust details, per-model usage, and subagent preference fixes.",
      "takeaway": "动作: Update smoke tests for import, parsing, sandbox denials, trust metadata, usage breakdowns, and explicit subagent preference inheritance."
    },
    {
      "title": "Rethinking skills and prompts for GPT-6 Astra",
      "author": "OpenAI Developers / Nisan Stiennon",
      "source": "official-blog",
      "url": "https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra",
      "category": [
        "hot",
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Skill Slimming",
      "summary": "Frontier agents benefit from leaner prompts and skills centered on boundaries, validation, context, and high-signal examples rather than encyclopedic instructions.",
      "takeaway": "动作: Run a skill slimming audit that removes duplicate background while preserving safety boundaries, validation commands, and examples."
    },
    {
      "title": "Refreshed repository pull requests page in public preview",
      "author": "GitHub Changelog / Allison",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-10-refreshed-repository-pull-requests-page-in-public-preview",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "MED",
      "tag": "PR Queue",
      "summary": "The refreshed PR page adds stronger filtering, compact view, status counts, and unread indicators that can help triage agent-generated pull requests.",
      "takeaway": "动作: Use it as a human queue, but keep final acceptance tied to diff, tests, rulesets, review state, and merge policy."
    },
    {
      "title": "AI Scan for pull request APIs in public preview",
      "author": "GitHub Changelog / Allison",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-10-ai-scan-for-pull-request-apis-in-public-preview",
      "category": [
        "workflow",
        "knowledge",
        "tools",
        "accounts"
      ],
      "score": "MED",
      "tag": "PR Security",
      "summary": "AI Scan pull request enablement can be managed with REST APIs at organization and repository levels, making security gates scriptable.",
      "takeaway": "动作: Add org/repo AI Scan policy checks to agent PR setup receipts and record fallback behavior when unavailable."
    },
    {
      "title": "Control GitHub Actions cache access with cache-mode",
      "author": "GitHub Changelog / Allison",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-10-control-github-actions-cache-access-with-cache-mode",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "MED",
      "tag": "CI Cache",
      "summary": "cache-mode applies least-privilege access to GitHub Actions cache at workflow or job level, reducing supply-chain risk in automated PR flows.",
      "takeaway": "动作: Classify jobs as read, write, write-only, or none and require annotation for low-trust write access."
    },
    {
      "title": "MAI-Code-1-Flash deprecated",
      "author": "GitHub Changelog / Allison",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-10-mai-code-1-flash-deprecated",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "MED",
      "tag": "Model Migration",
      "summary": "MAI-Code-1-Flash deprecation across Copilot surfaces highlights the need for explicit model migration ledgers in agent workflows.",
      "takeaway": "动作: Scan configs and instructions for deprecated model names, choose alternatives, and run representative regression tasks."
    },
    {
      "title": "GitHub Copilot CLI 1.0.84-4 prerelease",
      "author": "GitHub / copilot-cli-release-app[bot]",
      "source": "official-release",
      "url": "https://github.com/github/copilot-cli/releases/tag/v1.0.84-4",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "CLI Migration",
      "summary": "The prerelease splits plugin, MCP, skill, instruction, and LSP commands and changes JSON output shape, which can break old automation scripts.",
      "takeaway": "动作: Update scripts that expect cross-kind plugin output or a top-level .plugins object."
    },
    {
      "title": "OpenAI Codex 0.155.0-alpha.3.10 prerelease",
      "author": "OpenAI / GitHub Actions",
      "source": "official-release",
      "url": "https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3.10",
      "category": [
        "workflow",
        "mobile",
        "tools"
      ],
      "score": "MED",
      "tag": "Codex Alpha",
      "summary": "Codex 0.155 alpha releases continued on September 11, showing active experimentation even though public release body details are minimal.",
      "takeaway": "动作: Keep alpha builds in an isolated lane and require behavior, permission, and rollback verification before default adoption."
    },
    {
      "title": "Xcode 27 runner image now runs on macOS 27",
      "author": "GitHub Changelog / Allison",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-10-xcode-27-runner-image-now-runs-on-macos-27",
      "category": [
        "mobile",
        "workflow",
        "tools"
      ],
      "score": "MED",
      "tag": "Apple CI",
      "summary": "The Xcode 27 runner image on macOS 27 opens a new public-preview CI lane for Apple platform validation.",
      "takeaway": "动作: Add it to an isolated Apple-lane matrix before requiring it for agent-generated iOS or macOS changes."
    }
  ],
  "knowledge": [
    {
      "title": "Agent Adoption Receipt v2",
      "label": "AGENT OPS",
      "body": "把 agent 采纳度按入口、权限、时间窗口和字段状态拆账。",
      "summary": "agent 使用量要按入口和口径拆开。",
      "steps": [
        "分开记录 VS Code Agents window、editor Agent Mode、CLI、ChatGPT Work、Codex desktop。",
        "对每个入口标注 active users、sessions、messages、user-level indicator、1-day/28-day window。",
        "把 optional/null、policy disabled、permission missing、zero usage 四种状态分开。"
      ],
      "risk": "指标口径混算会把 adoption、engagement 和 availability 混成一个错结论。"
    },
    {
      "title": "Review Closure Gate v2",
      "label": "PR REVIEW",
      "body": "自动关闭评论后，用复审闸门确认工具判断已处理和团队接受完成之间的差距。",
      "summary": "评论关掉后仍要看复审证据。",
      "steps": [
        "fix commit 前保存 open Copilot comments、文件行、严重级别和建议动作。",
        "fix commit 后读取 auto-resolved、still-open、newly-created 三类 thread。",
        "记录 shell tools、测试、ruleset、reviewer acceptance 和 Lite ensemble 误报。"
      ],
      "risk": "自动关闭可以降低噪音，也可能让团队忽略未被工具识别的边界问题。"
    },
    {
      "title": "CLI Sandbox Smoke Matrix",
      "label": "CLI UPGRADE",
      "body": "针对 CLI sandbox、MCP、plugins、skills 和 resource trust 做最小烟测矩阵。",
      "summary": "CLI 升级要先跑沙箱和命令形状小测。",
      "steps": [
        "固定 CLI 版本、release 链接、OS、shell、工作目录和 sandbox policy。",
        "覆盖 read-only write denial、network denial、absolute path display、EPERM/EACCES escalation hint。",
        "覆盖 plugin、mcp、skill、instruction、lsp 列表命令及 JSON shape。"
      ],
      "risk": "CLI 帮助文字和 JSON shape 变化会让旧脚本静默读错。"
    },
    {
      "title": "Skill/Memory Import Contract",
      "label": "CONTEXT MIGRATION",
      "body": "semantic JSONL session/memory import 需要来源、范围、隐私和回滚契约。",
      "summary": "搬记忆前先给箱子贴标签。",
      "steps": [
        "标注导入来源、生成日期、授权范围、是否含私有路径/凭证/截图/账号状态。",
        "导入前做 dry-run 或小样本验证，确认不会污染当前项目记忆。",
        "导入后检查检索命中、重复条目、过期事实和可删除路径。"
      ],
      "risk": "记忆迁移一旦混入私有状态，会在后续自动化里被误当事实。"
    },
    {
      "title": "Model/Tool Migration Ledger",
      "label": "TOOL GOVERNANCE",
      "body": "对模型弃用、预览模型、CLI 命令迁移和工具命名变化建立台账。",
      "summary": "模型换岗和工具改名都要留迁移账。",
      "steps": [
        "记录 deprecated model、suggested alternative、影响入口和截止日期。",
        "扫描配置、脚本、AGENTS.md、CI 和自动化中是否引用旧模型或旧命令。",
        "用代表任务做新旧结果对比，保存质量、成本和失败差异。"
      ],
      "risk": "只替换名称不做回归，会把模型能力差异伪装成配置成功。"
    }
  ]
};

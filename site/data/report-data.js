window.AI_RADAR_REPORT = {
  "date": "2026-08-22",
  "updatedAt": "2026-08-22T14:24:00+08:00",
  "updatedLabel": "2026-08-22 14:24 CST",
  "conclusion": "今日主线是: AI 工作台正在从“单个 agent 能完成任务”升级为“跨聊天、跨手机、跨 IDE、跨 Slack/Teams、跨插件和跨会话的运营系统”。OpenAI 8 月 21 日的 ChatGPT 记录把 plugin 发现、时间感知、长会话稳定性、progressive interactive replies 和移动端细节优化放在一起；8 月 20 日的记录把 Codex、Sites、Messages、Share Snapshot、Pinned Chat 同步和 Computer History 放入同一批发布；Codex CLI 0.149.0 则补上 agents dashboard、queue、doctor、设置账户切换和 SDK reasoning effort。GitHub 与 Slack/Microsoft 侧同时把 agent 放进团队聊天、agent panel、Teams bot 和 workflow 入口。",
  "metrics": {
    "sourceCards": 14,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-08-22 的可复用变化集中在插件发现、状态分享、队列诊断、ChatOps agent 入口。",
    "今天的判断很明确: 工具越多、入口越多，越要把权限、公开边界和最终证据制度化。"
  ],
  "signals": [
    {
      "title": "ChatGPT plugin 发现需要工具账本",
      "author": "OpenAI Help",
      "source": "official-release-notes",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Plugin Ledger",
      "summary": "8 月 21 日 ChatGPT release notes 把 plugin 发现、时间感知、长会话稳定性和移动端优化放在同一批。",
      "takeaway": "动作: 建 Plugin Discovery Ledger，记录发现、安装、授权、调用、撤销和是否保留。"
    },
    {
      "title": "ChatGPT 时间感知要求写绝对日期",
      "author": "OpenAI Help",
      "source": "official-release-notes",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "workflow",
        "mobile"
      ],
      "score": "HIGH",
      "tag": "Time Aware",
      "summary": "时间感知增强让日程、截止日期和相对时间任务更自然，但发布材料不能只写今天、昨天。",
      "takeaway": "动作: 自动化报告统一写绝对日期，并在任务入口记录时区。"
    },
    {
      "title": "Codex/Sites/Messages 同批强化状态边界",
      "author": "OpenAI Help",
      "source": "official-release-notes",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "hot",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "State Boundary",
      "summary": "8 月 20 日记录把 Codex、Sites、Messages、Share Snapshot、Pinned Chat sync 和 Computer History 同批发布。",
      "takeaway": "动作: 把内容分成公开摘要、私有过程和本地证据三层，分享前先过边界扫描。"
    },
    {
      "title": "Sites 让公开输出边界变成必填项",
      "author": "OpenAI Help",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Public Site",
      "summary": "Sites 把 ChatGPT 产物变成可公开访问页面，要求发布前明确哪些材料能公开展示。",
      "takeaway": "动作: 公开站点只放公开来源、总结和知识卡片，本地过程证据不进入站点。"
    },
    {
      "title": "Codex 0.149.0 补上 dashboard、queue 和 doctor",
      "author": "OpenAI / GitHub",
      "source": "official-release",
      "url": "https://github.com/openai/codex/releases",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Queue Doctor",
      "summary": "Codex 0.149.0 增加 agents dashboard、queue、doctor、account setup 和 SDK reasoning effort。",
      "takeaway": "动作: 发布前固定 queue 状态、doctor 检查、reasoning 档位和最终写入 owner。"
    },
    {
      "title": "Codex 高频 alpha 提醒本机能力要复核",
      "author": "OpenAI / GitHub",
      "source": "official-release",
      "url": "https://github.com/openai/codex/releases",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "MED",
      "tag": "Release Cadence",
      "summary": "Codex release 页显示 CLI 仍保持高频 alpha/beta 节奏，功能面快速变化。",
      "takeaway": "动作: 日报引用版本和采集日期；自动化不要假设 alpha 功能已安装或稳定。"
    },
    {
      "title": "Agents SDK 适合作为多 agent 工程参照",
      "author": "OpenAI Agents SDK",
      "source": "official-docs",
      "url": "https://openai.github.io/openai-agents-python/",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Agent Runtime",
      "summary": "Agents SDK 的 handoffs、guardrails、tracing、sessions 和 results/state 是多 agent 工程化参照。",
      "takeaway": "动作: planner、collector、writer、reviewer 可以拆，但最终验收由一个主 owner 收口。"
    },
    {
      "title": "GitHub agent panel 和聊天入口推动 ChatOps",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-08-13-github-copilot-weekly-releases-august-10/",
      "category": [
        "hot",
        "workflow",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "ChatOps",
      "summary": "GitHub 8 月 10 周报集中展示 agent panel、Slack workspace agents 和 Teams bot。",
      "takeaway": "动作: 团队聊天只做入口、状态和低风险审批；最终证据回到 PR、diff、test 和 deploy。"
    },
    {
      "title": "Copilot agents 生命周期可作外部参照",
      "author": "GitHub Docs",
      "source": "official-docs",
      "url": "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/getting-started-with-copilot-agents",
      "category": [
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Task Lifecycle",
      "summary": "GitHub Docs 把 Copilot agents 的启动、分配、审查和结果回收流程文档化。",
      "takeaway": "动作: 每个 agent 任务记录入口、权限、目标、产物、review 状态和是否接受。"
    },
    {
      "title": "GitHub Copilot in Slack 降低派工成本",
      "author": "GitHub Docs",
      "source": "official-docs",
      "url": "https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack",
      "category": [
        "workflow",
        "accounts",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Slack Agent",
      "summary": "GitHub Copilot in Slack 把 coding agent 放进团队聊天工具，派工更顺手，权限边界也更重要。",
      "takeaway": "动作: 写 workspace、channel、bot、触发词、默认只读/草稿和升级路径。"
    },
    {
      "title": "Slack AI apps and agents 需要 admin 治理",
      "author": "Slack Help",
      "source": "official-help",
      "url": "https://slack.com/help/articles/4402284269587-Slack-AI-apps-and-agents",
      "category": [
        "workflow",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Admin Boundary",
      "summary": "Slack 将 AI apps and agents 纳入 workspace 使用和管理边界，团队聊天里的 agent 需要权限和安全设置治理。",
      "takeaway": "动作: 启用前记录 app 来源、权限、频道范围、审计位置和撤销方式。"
    },
    {
      "title": "Microsoft Agent Framework 提供服务化检查框架",
      "author": "Microsoft Learn",
      "source": "official-docs",
      "url": "https://learn.microsoft.com/en-us/agent-framework/",
      "category": [
        "tools",
        "knowledge"
      ],
      "score": "MED",
      "tag": "Agent Framework",
      "summary": "Microsoft Agent Framework 把 agent 开发、编排、评测和部署放进统一工程框架。",
      "takeaway": "动作: 脚本升级为 agent 服务前补齐评测、状态、权限、日志和部署回滚。"
    },
    {
      "title": "Copilot Harness 指向 agent 评测与交付闭环",
      "author": "Microsoft Learn",
      "source": "official-docs",
      "url": "https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-harness/overview",
      "category": [
        "tools",
        "knowledge"
      ],
      "score": "MED",
      "tag": "Harness",
      "summary": "Copilot Harness 代表 agent 应用从开发走向可测试、可评估、可发布的工具链。",
      "takeaway": "动作: 复杂 agent 工作流不要只看 prompt，要补样例、评测、日志和回滚。"
    },
    {
      "title": "Web Clipper 继续承担公开来源回灌",
      "author": "Obsidian Docs",
      "source": "official-docs",
      "url": "https://obsidian.md/help/web-clipper",
      "category": [
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Knowledge Capture",
      "summary": "Web Clipper 适合把公开来源沉淀成本地知识库，但今天应记录 workflow asset 而不是只剪新闻摘要。",
      "takeaway": "动作: 剪藏模板增加 plugin_ledger、share_boundary、queue_doctor、chatops_lane 和采集日期。"
    }
  ],
  "knowledge": [
    {
      "title": "Plugin Discovery Ledger",
      "summary": "把插件从临时工具变成可盘点资产，记录发现、安装、授权、调用、撤销和保留状态。",
      "reuse": "用于 ChatGPT plugins、MCP、skills、browser/GitHub/Sites 等能力发现和授权前检查。"
    },
    {
      "title": "Shareable State Boundary",
      "summary": "把内容分成公开摘要、私有过程和本地证据三层，避免分享功能误带现场记录。",
      "reuse": "用于 Share Snapshot、Pinned Chat、Computer History、Sites、日报公开发布和项目交接。"
    },
    {
      "title": "Queue & Doctor Runbook",
      "summary": "把 Codex queue/dashboard/doctor 当成发布前闸门，但完成仍以文件、测试、GitHub 和部署为证据。",
      "reuse": "用于每日自动化、长任务队列、多人/多 agent 写入冲突和失败复盘。"
    },
    {
      "title": "ChatOps Agent Lane",
      "summary": "Slack/Teams agent 入口只做调度、状态和低风险审批，最终验收回到 repo、PR、测试和部署。",
      "reuse": "用于团队群聊触发 agent、审批路由、状态广播和误触发治理。"
    }
  ]
};

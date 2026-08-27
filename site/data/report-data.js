window.AI_RADAR_REPORT = {
  "date": "2026-08-27",
  "updatedAt": "2026-08-27T09:06:50+08:00",
  "updatedLabel": "2026-08-27 09:06 CST",
  "conclusion": "今日主线是: AI 工作台正在从“能执行任务”升级为“可治理、可串联、可审计的代理系统”。Codex release 把任务 @mention、终端任务控制和 Interrupt hooks 推到前台；GitHub 的 global model policy 说明模型启用不再只是个人选择，而是默认策略和例外治理；OpenAI Admin plugin、Enterprise/Edu 控制、WebMCP、Programmatic Tool Calling 和 Runme/WebMCP 复用流程，说明插件、站点工具、工具编排和团队管理都需要明确的权限、证据和回滚；Hugging Face 事故则把高能力代理的网络、凭证、监控和停止权限变成硬边界。",
  "metrics": {
    "sourceCards": 14,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-08-27 的重点是把 Codex 任务互引、模型默认策略、Admin plugin、WebMCP 和安全 containment 沉淀成治理资产。",
    "今天的判断很明确: 代理越能跨任务、跨工具、跨账号真实执行，越要先定义权限、默认值、停止条件和 readback 证据。"
  ],
  "signals": [
    {
      "title": "Codex CLI release adds task @mentions and terminal task control",
      "author": "OpenAI / GitHub",
      "url": "https://github.com/openai/codex/releases",
      "source": "official-release",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Task Graph",
      "summary": "Codex can reference other tasks with @mentions and manage tasks from the terminal, so multi-agent work needs explicit dependency and state tracking.",
      "takeaway": "动作: 为长任务维护 Task Link Ledger，避免任务互相引用后责任和验收边界变糊。"
    },
    {
      "title": "Codex CLI release adds Interrupt hooks",
      "author": "OpenAI / GitHub",
      "url": "https://github.com/openai/codex/releases",
      "source": "official-release",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Interrupt Hooks",
      "summary": "Interrupt is becoming a first-class lifecycle hook, useful for pausing long tasks without losing state or leaving partial side effects unexplained.",
      "takeaway": "动作: 给高风险长任务补 Interrupt Handler Contract，记录中断后该保存什么、清理什么、如何恢复。"
    },
    {
      "title": "Global model policy generally available for GitHub Copilot",
      "author": "GitHub Changelog",
      "url": "https://github.blog/changelog/2026-08-26-global-model-policy-generally-available",
      "source": "official-changelog",
      "category": [
        "hot",
        "accounts",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Model Policy",
      "summary": "Copilot model access is shifting from per-model manual toggles to a global default policy with explicit exceptions.",
      "takeaway": "动作: 把模型可用性写成 Model Policy Matrix，不要让新 GA 模型靠默认值悄悄进入生产工作流。"
    },
    {
      "title": "GitHub documentation explains default availability of Copilot models",
      "author": "GitHub Docs",
      "url": "https://docs.github.com/en/copilot/concepts/models/default-availability",
      "source": "official-docs",
      "category": [
        "workflow",
        "knowledge",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Default Availability",
      "summary": "The default model policy has scope limits, so compliance-sensitive workflows need class-level rules rather than a single enable switch.",
      "takeaway": "动作: 把模型分成 inherited、enabled、disabled、never-default 四类，并把自动化路由绑定到这张表。"
    },
    {
      "title": "Admin plugin for ChatGPT Work and Codex",
      "author": "OpenAI",
      "url": "https://openai.com/index/introducing-admin-plugin/",
      "source": "official-announcement",
      "category": [
        "hot",
        "accounts",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Admin Loop",
      "summary": "Admin work is moving into conversational tools, but role permissions and action confirmation remain the hard boundary.",
      "takeaway": "动作: 管理类自动化必须保留 read insight -> proposed action -> authorized write -> readback 的四段证据链。"
    },
    {
      "title": "Enterprise and Edu release notes add plugin controls, Remote GA, usage limits, and skills beta",
      "author": "OpenAI Help Center",
      "url": "https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes",
      "source": "official-release-notes",
      "category": [
        "workflow",
        "accounts",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Enterprise Controls",
      "summary": "ChatGPT Enterprise is aligning plugins, skills, Remote, usage and analytics under admin control instead of leaving each feature as a standalone toggle.",
      "takeaway": "动作: 给每个技能/插件补 owner、可安装角色、运行权限、额度上限和复核日期。"
    },
    {
      "title": "Automating repetitive work at OpenAI with Codex",
      "author": "Jeremy Lewi / OpenAI Developers",
      "url": "https://developers.openai.com/blog/automating-repetitive-work-at-openai-with-codex",
      "source": "official-developer-blog",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Reusable Workflow",
      "summary": "Repeated work should become versioned workflow assets that Codex can run and reviewers can inspect, not buried conversation history.",
      "takeaway": "动作: 把高频流程改成 notebook/runbook: 目标、前置条件、命令、预期输出、验收和回滚。"
    },
    {
      "title": "WebMCP Challenge invites agent-ready web apps",
      "author": "OpenAI",
      "url": "https://openai.com/webmcp-challenge/",
      "source": "official-program",
      "category": [
        "hot",
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "WebMCP",
      "summary": "Agent-ready websites should expose structured tools, not force agents to infer intent from buttons and pixels.",
      "takeaway": "动作: 为站点写 Agent Tool Surface Spec，先定义可调用动作和权限，再让代理操作页面。"
    },
    {
      "title": "Programmatic Tool Calling in the OpenAI Agents SDK",
      "author": "OpenAI / GitHub",
      "url": "https://github.com/openai/openai-agents-python/releases",
      "source": "official-release",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Tool Program",
      "summary": "Tool orchestration is moving from one JSON call per turn toward bounded programs that can branch, loop and combine tool outputs.",
      "takeaway": "动作: 用 Programmatic Tool Calling 前先固定可调用工具、循环预算、结构化输出和审计日志。"
    },
    {
      "title": "ChatGPT and Codex weekly digest: Work with more websites",
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
      "summary": "Website work now has multiple lanes: local browser tab, site tools, and cloud sign-in. Each has a different evidence and permission boundary.",
      "takeaway": "动作: 每个网页任务先声明 browser lane，再按对应证据环验收。"
    },
    {
      "title": "ChatGPT and Codex weekly digest: Apple Messages and shared Codex snapshots",
      "author": "OpenAI / ChatGPT Learn",
      "url": "https://learn.chatgpt.com/docs/whats-new",
      "source": "official-digest",
      "category": [
        "mobile",
        "workflow",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Share Gate",
      "summary": "Mac and iOS can coordinate Codex work more smoothly, but send/share actions need recipient, audience and sensitive-content review before execution.",
      "takeaway": "动作: 对 Messages 和 shared snapshots 使用 Share/Send Gate，只批准本次发送或分享。"
    },
    {
      "title": "The Hugging Face incident and the road ahead",
      "author": "OpenAI",
      "url": "https://openai.com/index/hugging-face-incident-and-the-road-ahead/",
      "source": "official-security-report",
      "category": [
        "hot",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Containment",
      "summary": "The incident is a sharp reminder that capable agents need containment, monitoring and stop authority before they get network or credential access.",
      "takeaway": "动作: 高能力代理任务先做 Capability Containment Review，尤其检查出网、凭证、共享基础设施和停止权限。"
    },
    {
      "title": "Business release notes: event-triggered scheduled tasks can be shared",
      "author": "OpenAI Help Center",
      "url": "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes",
      "source": "official-release-notes",
      "category": [
        "workflow",
        "accounts",
        "mobile"
      ],
      "score": "HIGH",
      "tag": "Shared Trigger",
      "summary": "Event-triggered tasks are no longer only personal cron jobs; they can become workspace assets with connector and filter governance.",
      "takeaway": "动作: 共享事件任务前补 trigger、filter、connector access、owner、artifact 和重复事件策略。"
    },
    {
      "title": "OpenAI Developers resources highlight Codex, WebMCP, Daybreak, and platform harnesses",
      "author": "OpenAI Developers",
      "url": "https://developers.openai.com/",
      "source": "official-developer-index",
      "category": [
        "knowledge",
        "tools"
      ],
      "score": "MED",
      "tag": "Playbook Index",
      "summary": "The useful material is increasingly a set of runnable playbooks, not isolated blog posts; index them by reusable asset type.",
      "takeaway": "动作: 给 Codex/WebMCP/Daybreak/review rules 建 Developer Playbook Index，每周只更新可执行条目。"
    }
  ],
  "knowledge": [
    {
      "title": "Task Link Ledger",
      "summary": "多 Codex 任务互相 @mention 或由终端创建/消息时，要记录 task id、依赖、owner、状态、允许动作和最终证据。",
      "usage": "用于长会话、并行子任务、跨线程派工和任务接力，防止“某个任务说过”变成不可追溯的完成依据。"
    },
    {
      "title": "Model Policy Matrix",
      "summary": "把模型分成默认继承、显式启用、显式禁用和永不默认四类，并记录 rollout date、owner 和审批轨迹。",
      "usage": "用于 Copilot、Codex、Agents SDK 或任何多模型工作台，避免新模型靠默认策略进入高风险流程。"
    },
    {
      "title": "Agent Tool Surface Spec",
      "summary": "给 WebMCP 或站点工具定义 action、input schema、权限、dry-run、result schema、错误码和审计字段。",
      "usage": "用于把网页从“让代理猜按钮”升级为“给代理调用工具”，尤其适合内部后台和可重复流程。"
    },
    {
      "title": "Capability Containment Review",
      "summary": "高能力代理拿到网络、凭证或共享基础设施前，先审查 egress、credential scope、monitoring triggers、stop authority 和 incident owner。",
      "usage": "用于 cyber eval、browser/computer use、CI/CD 写入、云资源管理和任何可能越权的代理任务。"
    }
  ]
};

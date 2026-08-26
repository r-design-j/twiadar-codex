window.AI_RADAR_REPORT = {
  "date": "2026-08-26",
  "updatedAt": "2026-08-26T09:19:00+08:00",
  "updatedLabel": "2026-08-26 09:19 CST",
  "conclusion": "今日主线是: AI 工作台正在从“定时任务和多入口控制”进入“事件触发、登录态浏览器、模型/API 退役和规则审计同台治理”的阶段。OpenAI 在 8 月 25 日把 Work scheduled tasks 扩展到 webhook 触发，并让 Work 可以通过浏览器与已登录网站交互；8 月 26 日同时是 Assistants API sunset 与 ChatGPT o3 retirement 的明确日期；Codex 侧还存在 GPT-5.4 8 月 31 日退役、`codex mcp-server` 旧命令废弃和 CLI 0.149.1 版本锚点。GitHub 8 月 25 日的 Customize tab、Rule insights 和 path-based push-rule exceptions 则说明 agent 配置、规则效果和路径作用域正在产品化。",
  "metrics": {
    "sourceCards": 14,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-08-26 的可复用变化集中在事件触发、登录态浏览器证据环、模型/API 退役和规则洞察台账。",
    "今天的判断很明确: 自动化入口越会真实办事，越要把触发、身份、模型、API、规则和发布证据拆开治理。"
  ],
  "signals": [
    {
      "title": "Work webhook-based scheduled tasks",
      "author": "OpenAI / ChatGPT Learn",
      "source": "official-changelog",
      "url": "https://learn.chatgpt.com/docs/changelog",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Event Trigger",
      "summary": "Work 的 scheduled tasks 可由外部 HTTP POST webhook 触发，意味着日报、监控和交付流程从定时提醒扩展到事件驱动执行。",
      "takeaway": "动作: 为每个 webhook task 写 Event Trigger Envelope: 触发源、payload schema、幂等键、读写边界、失败回退和最终证据。"
    },
    {
      "title": "Work can complete tasks by interacting with websites you are logged in to",
      "author": "OpenAI / ChatGPT Learn",
      "source": "official-changelog",
      "url": "https://learn.chatgpt.com/docs/changelog",
      "category": [
        "hot",
        "workflow",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Browser Evidence",
      "summary": "ChatGPT Work 可通过浏览器与已登录网站交互，极大提高执行面能力，也把登录态、按钮动作和提交表单风险推到前台。",
      "takeaway": "动作: 把登录态浏览器任务拆成 observe、declare、act、readback、accept/stop 五步，并默认禁止高风险提交。"
    },
    {
      "title": "Scheduled tasks get deep research and connectors in Work",
      "author": "OpenAI Help Center",
      "source": "official-release-notes",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Scheduled Research",
      "summary": "8 月 25 日 release notes 把 scheduled tasks、deep research 和 connectors 组合起来，说明自动化不再只是轻提醒，而是可读上下文的定期研究任务。",
      "takeaway": "动作: 把每日任务分成 trigger、research scope、connector permissions、artifact contract、publish evidence 五段。"
    },
    {
      "title": "OpenAI Assistants API sunset on August 26, 2026",
      "author": "OpenAI API Docs",
      "source": "official-docs",
      "url": "https://platform.openai.com/docs/guides/migrate-to-responses",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Responses Migration",
      "summary": "Assistants API sunset 到达明确日期，所有仍依赖 assistant/thread/run 语义的工具都要迁移到 Responses API。",
      "takeaway": "动作: 建立 Responses Migration Checklist: endpoint、tool calls、state、files、streaming、evals、rollback 逐项验收。"
    },
    {
      "title": "OpenAI o3 reaches ChatGPT retirement date",
      "author": "OpenAI Help Center",
      "source": "official-release-notes",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "hot",
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Model Sunset",
      "summary": "ChatGPT release notes 标注 o3 在 2026-08-26 退役，模型名不再是稳定长期依赖。",
      "takeaway": "动作: 为自动化保留 Model Retirement Gate: 模型名、fallback、能力差异、验收样例和下线日期。"
    },
    {
      "title": "Codex GPT-5.4 retirement warning for August 31",
      "author": "OpenAI / ChatGPT Learn",
      "source": "official-changelog",
      "url": "https://learn.chatgpt.com/docs/changelog",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Codex Routing",
      "summary": "Codex changelog 标注 GPT-5.4 将于 8 月 31 日从 Codex 退役，coding agent 路由必须把模型可用期写进任务信封。",
      "takeaway": "动作: 所有 Codex 任务胶囊记录 model、reasoning effort、fallback 和到期日，避免长流程突然失效。"
    },
    {
      "title": "Codex mcp-server command deprecated",
      "author": "OpenAI / ChatGPT Learn",
      "source": "official-changelog",
      "url": "https://learn.chatgpt.com/docs/changelog",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "MCP Migration",
      "summary": "8 月 24 日 changelog 标记旧 codex mcp-server 命令 deprecated，推荐 Codex app server 或 Claude Code plugin。",
      "takeaway": "动作: 继续维护 Codex MCP Migration Card，记录旧入口、替代入口、客户端依赖、验证任务和回滚路径。"
    },
    {
      "title": "Codex CLI v0.149.1 release",
      "author": "OpenAI / GitHub",
      "source": "official-release",
      "url": "https://github.com/openai/codex/releases",
      "category": [
        "tools"
      ],
      "score": "HIGH",
      "tag": "Version Gate",
      "summary": "Codex CLI release 页提供稳定版本锚点，能把本机执行证据和线上 changelog 对齐。",
      "takeaway": "动作: 发布自动化记录采集日、release 页、本机版本和是否使用 alpha，避免把观察信号当成本地事实。"
    },
    {
      "title": "API changelog: prompt caching and regional processing",
      "author": "OpenAI API Docs",
      "source": "official-changelog",
      "url": "https://platform.openai.com/docs/changelog",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Ops Visibility",
      "summary": "API changelog 继续强化 cache dashboard、regional processing 等运行面能力，说明 agent 成本和合规位置都要可观察。",
      "takeaway": "动作: 把 cache hit、service tier、region、model、latency 和 cost 写进运行看板，而不是只看最终输出。"
    },
    {
      "title": "GitHub Copilot Customize tab generally available",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-08-25-copilot-customize-tab-is-now-generally-available/",
      "category": [
        "workflow",
        "accounts",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Control Inventory",
      "summary": "Customize tab 把 coding guidelines、custom instructions、rulesets、MCP servers 等集中到可管理界面，说明 agent 配置正在产品化。",
      "takeaway": "动作: 维护 Agent Control Inventory: rules、instructions、MCP、skills、hooks、owners、last_reviewed。"
    },
    {
      "title": "GitHub Rule insights generally available",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-08-25-rule-insights-are-now-generally-available/",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Rule Insights",
      "summary": "Rule insights 让组织看到 ruleset 如何拦截或影响开发流程，可用于衡量自动化规则是否过严或漏拦。",
      "takeaway": "动作: 为日报发布规则记录触发次数、误拦、漏拦、人工 override 和修正规则日期。"
    },
    {
      "title": "GitHub push rules allow path-based exceptions",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-08-25-push-rules-now-support-path-based-exceptions/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Path Guardrails",
      "summary": "Push rules 支持路径例外，说明规则治理需要路径级作用域，而不是全仓一刀切。",
      "takeaway": "动作: AI Radar 可把 public data、local receipts、automation memory 分不同路径策略，公开目录禁止私有证据。"
    },
    {
      "title": "GitHub Copilot in Slack starts shared agent sessions",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-08-21-the-new-github-copilot-experience-in-slack/",
      "category": [
        "workflow",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "ChatOps Agent",
      "summary": "Slack 中启动 Copilot agent session 把群聊变成共享 coding-agent 现场，适合派工但不等于交付验收。",
      "takeaway": "动作: Slack/聊天入口只做任务信封和 steering；合并、发布、回滚仍回到 PR、本地测试和部署证据。"
    },
    {
      "title": "Shared agentic work with GitHub Copilot in Microsoft Teams",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-08-21-shared-agentic-work-with-github-copilot-in-microsoft-teams/",
      "category": [
        "workflow",
        "mobile",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Meeting Agent",
      "summary": "Teams 可把会议动作项转成 Copilot cloud agent session，并显式带出 AI credits、cloud sandbox budget 和审批。",
      "takeaway": "动作: 会议动作进入 agent 前先写 repo、权限、预算、sandbox、approval 和继续入口。"
    }
  ],
  "knowledge": [
    {
      "title": "Event Trigger Envelope",
      "summary": "webhook scheduled tasks 要记录触发源、payload schema、幂等键、读写边界、失败回退和最终证据。",
      "usage": "用于把 cron 类自动化升级为事件触发自动化，避免误触发、重放和重复发布。"
    },
    {
      "title": "Authenticated Browser Evidence Loop",
      "summary": "登录态浏览器任务按观察前态、声明动作、执行动作、回传新状态、验收或失败停止五步运行。",
      "usage": "用于 Work/browser、Computer Use 或任何会触碰已登录网页的只读/草稿流程。"
    },
    {
      "title": "Model/API Retirement Gate",
      "summary": "为模型和 API 记录退役日期、fallback、能力差异、验收样例、迁移验证和 rollback。",
      "usage": "用于 o3、GPT-5.4、Assistants API 等生命周期明确变化的自动化依赖。"
    },
    {
      "title": "Rule Insights Ledger",
      "summary": "规则要记录作用路径、命中、拦截、误拦、漏拦、override 和修订日期。",
      "usage": "用于维护 source-card、report-data 同步、公开边界和 push-rule 类守门规则。"
    }
  ]
};

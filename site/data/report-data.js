window.AI_RADAR_REPORT = {
  "date": "2026-07-23",
  "updatedAt": "2026-07-23T09:29:09+08:00",
  "updatedLabel": "2026-07-23 09:29 CST",
  "conclusion": "今日主线是：agent 工作流正在从“模型能力展示”进入“生产运行系统”。OpenAI Presence 把企业 agent 拆成岗位、权限、政策、批准动作、模拟评测、升级人工和 Codex 改进循环；GitHub Copilot 的 impact dashboard、AI credit 可见性、模型选择和 app 使用指标，说明行业正在给 agent 建成熟度、成本和采纳深度仪表盘。",
  "metrics": {
    "sourceCards": 14,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-07-23 的可复用变化集中在四块：岗位卡、持续评测、成熟度指标、程序化工具链。",
    "今天的判断很明确：agent 越进入生产，越要先管权限、评测、成本和人工接管。"
  ],
  "signals": [
    {
      "title": "OpenAI Presence 把 agent 推向生产岗位",
      "author": "OpenAI",
      "source": "official-product",
      "url": "https://openai.com/index/introducing-openai-presence/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Presence",
      "summary": "Presence 面向企业语音和聊天 agent，把岗位、知识、系统权限、政策、guardrails、模拟、grader、人工升级和上线后改进放在同一产品里。",
      "takeaway": "动作：每个自动化任务先写 job card，再给 Codex 或其他 agent 执行。"
    },
    {
      "title": "Codex 成为生产 agent 改进循环的一环",
      "author": "OpenAI",
      "source": "official-product",
      "url": "https://openai.com/index/introducing-openai-presence/",
      "category": [
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Improve",
      "summary": "Presence 用生产会话、升级记录和质量信号发现缺口，Codex 调查并提出可测试、可批准的更新。",
      "takeaway": "动作：把失败原因和用户接管点作为下一轮自动化改进输入。"
    },
    {
      "title": "新闻机构案例展示公共资料工作流",
      "author": "OpenAI",
      "source": "official-company",
      "url": "https://openai.com/index/how-news-organizations-are-using-ai/",
      "category": [
        "knowledge",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Newsrooms",
      "summary": "新闻机构把 AI 用于 overnight scan、公开文件搜索、会议转录评分、风格校验、知识库查询、Slack 决策入口和 MCP 数据连接。",
      "takeaway": "动作：AI Radar 从摘要升级为公开线索评分和可复用动作沉淀。"
    },
    {
      "title": "GPT-5.6 强调工具密集工作流效率",
      "author": "OpenAI",
      "source": "official-release",
      "url": "https://openai.com/index/gpt-5-6/",
      "category": [
        "hot",
        "tools"
      ],
      "score": "HIGH",
      "tag": "GPT-5.6",
      "summary": "GPT-5.6 强调更少 token、更少工具往返、Programmatic Tool Calling 和 multi-agent ultra-style 并行。",
      "takeaway": "动作：重复流程先做小型程序化工具链，再让模型处理关键证据。"
    },
    {
      "title": "模型选择变成任务路由问题",
      "author": "OpenAI Developers",
      "source": "official-docs",
      "url": "https://developers.openai.com/api/docs/guides/latest-model",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Routing",
      "summary": "OpenAI model guidance 建议按 Sol、Terra、Luna、reasoning effort、cache 成本和 PTC 适配不同工作负载。",
      "takeaway": "动作：高风险终审用强模型和人工，批量抽取用更便宜的可控路径。"
    },
    {
      "title": "ChatGPT Desktop 收束 Chat / Work / Codex",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Desktop",
      "summary": "桌面端更新提供 ChatGPT 和 Codex 全局切换，Chat / Work / Projects / Recents 更统一，Work 支持跨设备继续。",
      "takeaway": "动作：按入口分配任务，避免一个长会话承担问答、执行、发布和复盘。"
    },
    {
      "title": "Codex Mobile 明确手机监督角色",
      "author": "OpenAI",
      "source": "official-product",
      "url": "https://openai.com/index/work-with-codex-from-anywhere/",
      "category": [
        "mobile",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Mobile",
      "summary": "Codex mobile remote control 让手机查看 host 上的线程、审批、截图、terminal、diff、test results 和上下文。",
      "takeaway": "动作：iPhone 捕捉和派工，Mac 做 diff、测试、commit、push、deploy 终审。"
    },
    {
      "title": "Copilot impact dashboard 指标升级",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-22-new-copilot-usage-metrics-impact-dashboard/",
      "category": [
        "hot",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Metrics",
      "summary": "GitHub 把 Copilot 采纳分成 Code-first、Agent-first、Multi-agent/Copilot app、Passive，并展示吞吐、速度和趋势。",
      "takeaway": "动作：AI Radar 月报增加任务成熟度，而不仅是 source card 数量。"
    },
    {
      "title": "Gemini 3.6 Flash 进入 Copilot",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-21-gemini-3-6-flash-is-now-available-in-github-copilot/",
      "category": [
        "tools"
      ],
      "score": "MED",
      "tag": "Models",
      "summary": "Copilot 把 Gemini 3.6 Flash 推向 VS Code、CLI、cloud agent、Copilot app、JetBrains、Xcode 等入口。",
      "takeaway": "动作：把模型看成路由层，按成本、延迟、质量和风险选默认档。"
    },
    {
      "title": "AI credit 用量对个人可见",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-20-copilot-users-can-now-see-ai-credits-used-per-billing-cycle/",
      "category": [
        "workflow",
        "knowledge"
      ],
      "score": "MED",
      "tag": "Cost",
      "summary": "Copilot Business / Enterprise 用户即使没有个人预算，也能看到本 billing cycle 实际 AI credit 使用量。",
      "takeaway": "动作：记录失败重跑和复用价值，避免只看运行次数。"
    },
    {
      "title": "Copilot app 指标进入 API",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-17-github-copilot-app-now-available-in-the-usage-metrics-api/",
      "category": [
        "knowledge",
        "tools"
      ],
      "score": "MED",
      "tag": "Telemetry",
      "summary": "Usage metrics API 单独报告 Copilot app 的 active users、session、request、prompt 和 token 指标。",
      "takeaway": "动作：把 Codex app、mobile、browser、CLI 和自动化分开记录。"
    },
    {
      "title": "Shortcuts 仍是 iPhone 低风险自动化底座",
      "author": "Apple Support",
      "source": "official-docs",
      "url": "https://support.apple.com/guide/shortcuts/welcome/ios",
      "category": [
        "mobile",
        "workflow"
      ],
      "score": "MED",
      "tag": "Shortcuts",
      "summary": "iPhone Shortcuts 适合捕捉、提醒、格式化和结构化交接，与 Codex mobile 的监督角色互补。",
      "takeaway": "动作：Shortcuts 做 intake，不做不可逆公开发布。"
    }
  ],
  "knowledge": [
    {
      "label": "01 / Job Card",
      "title": "Agent 上生产前先写岗位卡",
      "body": "定义目标、可读资料、允许动作、需批准动作、人工接管条件和验收命令，再让 agent 执行。"
    },
    {
      "label": "02 / Maturity",
      "title": "Agent 成熟度按阶段衡量",
      "body": "从 Chat、Code-first、Agent-first 到 Multi-agent，每个阶段的复盘指标不同，不能只数使用次数。"
    },
    {
      "label": "03 / PTC",
      "title": "工具密集流程先过滤中间噪声",
      "body": "Programmatic Tool Calling 适合让程序处理重复中间结果，只把关键证据、异常和决策点交给模型。"
    },
    {
      "label": "04 / Lead Scoring",
      "title": "知识工作要做线索评分",
      "body": "公开来源扫描后先结构化证据、打分、人工判断，再把可复用动作沉淀为知识卡片。"
    }
  ]
};

window.AI_RADAR_REPORT = {
  "date": "2026-07-22",
  "updatedAt": "2026-07-22T09:43:14+08:00",
  "updatedLabel": "2026-07-22 09:43 CST",
  "conclusion": "今日主线是：Codex 正在从“会写代码的 agent”变成“可提交、可评审、可遥控、可被控制台管理的工作流系统”。Build Week 进入评审期，Codex Micro 把 agent 状态搬到桌面，GitHub Copilot 的浏览器、移动派工、repo 概览、预算和指标能力提供横向参照。个人工作流下一步要管入口、状态、快捷动作、预算和终审。",
  "metrics": {
    "sourceCards": 14,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-07-22 的可复用变化集中在四块：评审标准、agent 控制台、移动派工、预算护栏。",
    "今天的判断很明确：agent 越能动手，越需要状态面板、白名单、session 上限和 Mac 终审。"
  ],
  "signals": [
    {
      "title": "Build Week 进入评审期",
      "author": "OpenAI / Devpost",
      "source": "official-event",
      "url": "https://openai.devpost.com/details/dates",
      "category": [
        "hot",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Build Week",
      "summary": "OpenAI Build Week 在 7 月 21 日 PDT 截止提交，7 月 22 日 PDT 开始评审，Codex 项目从活动期进入可运行产物审查期。",
      "takeaway": "动作：把 AI Radar 每日发布也按可复查项目验收: 文件、数据、验证命令、commit、deployment Ready。"
    },
    {
      "title": "Build Week 提交标准可复用",
      "author": "OpenAI / Devpost",
      "source": "official-event",
      "url": "https://openai.devpost.com/?ref_medium=discover",
      "category": [
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Submit",
      "summary": "Build Week 要求 working project、demo、repo、README、运行说明和 Codex/GPT-5.6 使用说明，适合迁移成个人自动化验收标准。",
      "takeaway": "动作：每个公开自动化产物都留下可运行入口、验证命令和 agent 决策点。"
    },
    {
      "title": "Codex Micro 暴露多 agent 控制台需求",
      "author": "The Verge",
      "source": "media",
      "url": "https://www.theverge.com/ai-artificial-intelligence/965901/openai-hardware-codex-micro-launch",
      "category": [
        "hot",
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Hardware",
      "summary": "Codex Micro 把 Codex thread 状态、接受/拒绝、语音输入、reasoning 调节和常用动作做成物理控制面板。",
      "takeaway": "动作：先定义状态和风险，再决定哪些动作能进入快捷键白名单。"
    },
    {
      "title": "ChatGPT 工作台持续收束",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Workspace",
      "summary": "ChatGPT、Codex、Sites、Plugins、桌面和移动入口继续放在同一产品轨道里，个人 AI 工作台正在平台化。",
      "takeaway": "动作：把采集、执行、验收、发布拆成不同入口和权限，不让一个长会话承担全部职责。"
    },
    {
      "title": "插件仍要逐项审权限",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/20001256",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Plugins",
      "summary": "Plugin Directory 让 apps、skills 和 templates 更易发现，但外部系统连接仍要检查读写范围和确认机制。",
      "takeaway": "动作：AI Radar 默认不接 Feishu、邮箱、私有知识库；当前任务明确授权后再接。"
    },
    {
      "title": "手机端开始派工给 cloud agent",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-21-github-mobile-fix-pull-request-comments-with-copilot-cloud-agent/",
      "category": [
        "mobile",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Mobile",
      "summary": "GitHub Mobile 支持把 PR 评论交给 Copilot cloud agent 处理，手机端越来越像派工和轻审批入口。",
      "takeaway": "动作：iPhone 负责捕捉和派工，Mac 负责 diff、测试、commit、push、deploy 终审。"
    },
    {
      "title": "repo overview 是 onboarding 入口",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-09-ask-copilot-for-a-repository-overview/",
      "category": [
        "knowledge",
        "tools"
      ],
      "score": "MED",
      "tag": "Overview",
      "summary": "Copilot 可为首次探索的 repository 生成高层概览，降低理解成本，但不能替代 README、测试和代码阅读。",
      "takeaway": "动作：新仓库先要 overview，再用目录、测试和真实代码校验。"
    },
    {
      "title": "浏览器 agent 进入 VS Code GA",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-01-browser-tools-for-github-copilot-in-vs-code-are-generally-available/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Browser",
      "summary": "Copilot agent 能在 VS Code 里打开和操作浏览器，读页面和 console，并反馈验证结果。",
      "takeaway": "动作：浏览器 agent 做探索和辅助验收；正式发布仍保留 node check、JSON parse 和部署 Ready。"
    },
    {
      "title": "session 级 AI credit 上限出现",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-01-set-ai-credit-session-limits-in-copilot-cli-and-sdk/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "MED",
      "tag": "Limits",
      "summary": "Copilot CLI 和 SDK 支持 AI credit session limit，agent 执行开始具备单次任务成本护栏。",
      "takeaway": "动作：长任务设置上限，记录失败重跑和卡点，避免无限消耗。"
    },
    {
      "title": "AI credit pool 进入预算治理",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-20-ai-credit-pools-for-cost-centers-in-the-billing-ui/",
      "category": [
        "workflow",
        "knowledge"
      ],
      "score": "MED",
      "tag": "Budget",
      "summary": "AI credit pool 让组织把 AI 使用额度和 cost center 对齐，agent 使用开始进入预算和归因管理。",
      "takeaway": "动作：AI Radar 月报增加失败重跑、返工点、部署失败和复用次数。"
    },
    {
      "title": "repo 级 agent 指标继续重要",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-17-repository-level-github-copilot-usage-metrics-generally-available/",
      "category": [
        "workflow",
        "knowledge"
      ],
      "score": "MED",
      "tag": "Metrics",
      "summary": "Copilot usage metrics 下钻到 repository-level activity，包括 coding agent PR 和 code review activity。",
      "takeaway": "动作：继续记录 sourceCards、topSignals、knowledgeCards，并补失败原因和 Ready 状态。"
    },
    {
      "title": "长期记忆需要候选池",
      "author": "OpenAI Developers Cookbook",
      "source": "official-cookbook",
      "url": "https://developers.openai.com/cookbook/examples/agents_sdk/context_personalization",
      "category": [
        "knowledge",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Memory",
      "summary": "Context personalization 把长期记忆拆成 state、session memory、global memory、候选提取、合并和评估。",
      "takeaway": "动作：source-card 是候选池，daily 是解释层，knowledge 只收可复用操作链路。"
    }
  ],
  "knowledge": [
    {
      "label": "01 / Console",
      "title": "Agent 控制台先管状态",
      "body": "多条 agent thread 并行后，先显示 queued、running、needs-input、error、done，再决定哪些动作可以快捷触发。"
    },
    {
      "label": "02 / Submission",
      "title": "提交标准就是验收标准",
      "body": "Build Week 的 working project、demo、repo、README、运行说明和 Codex 使用说明，可迁移成个人自动化交付清单。"
    },
    {
      "label": "03 / Mobile",
      "title": "手机派工，Mac 终审",
      "body": "iPhone 适合捕捉、派工、补上下文和低风险审批；diff、测试、commit、push、deploy 留给 Mac。"
    },
    {
      "label": "04 / Budget",
      "title": "Agent 成本要有护栏",
      "body": "长任务、批量修复和自动采集应设置 session 上限，记录失败重跑和卡点，只把有效结果入库。"
    }
  ]
}
;

window.AI_RADAR_REPORT = {
  "date": "2026-07-15",
  "updatedAt": "2026-07-15T09:19:31+08:00",
  "updatedLabel": "2026-07-15 09:19 CST",
  "conclusion": "今日主线是：AI 工作流正在从“会聊天的模型”升级成“有工作台、有派工表、有验收口的个人操作系统”。ChatGPT Work 负责收纳，Codex 负责执行，iPhone 负责派工，Mac 负责终审。",
  "metrics": {
    "sourceCards": 11,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-07-15 的可复用变化集中在四块：ChatGPT Work 工作台、Web Search 可追溯采集、iPhone/Mac/Codex 分工、coding-agent 本地指标。",
    "今天的安全结论很明确：公开 AI Radar 只展示公开来源；私有 connector、cookie、私信、截图、本地敏感路径不进入网站数据。"
  ],
  "signals": [
    {
      "title": "ChatGPT Work 把 AI 入口升级成工作台",
      "author": "OpenAI",
      "source": "official",
      "url": "https://openai.com/index/chatgpt-for-your-most-ambitious-work/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Work",
      "summary": "OpenAI 把 ChatGPT、Codex、Projects、Connectors、Record、Study、Deep Research 放在同一套工作叙事里，意味着 AI 工作流要按任务区分入口。",
      "takeaway": "动作：把个人 AI 工作台拆成收集、执行、验收、沉淀四个区；不要把所有事塞进聊天窗口。"
    },
    {
      "title": "Build Week 适合做一周官方更新路线图",
      "author": "OpenAI",
      "source": "official",
      "url": "https://openai.com/build-week/",
      "category": [
        "hot",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Build Week",
      "summary": "OpenAI 用 Build Week 集中串联近期产品变化，适合 AI Radar 每天拆一条能改工作流的更新，而不是追热点噪音。",
      "takeaway": "动作：把本周官方更新拆成每日跟进清单，只沉淀能变成操作链路的内容。"
    },
    {
      "title": "Codex/ChatGPT desktop changelog 是可用性核验入口",
      "author": "OpenAI Learn",
      "source": "official-changelog",
      "url": "https://learn.chatgpt.com/docs/changelog",
      "category": [
        "hot",
        "workflow",
        "mobile",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Desktop",
      "summary": "Codex、ChatGPT desktop、Work、模型入口和移动端能力的可用性集中在 changelog，适合发布前回查。",
      "takeaway": "动作：所有操作说明都写清入口：mobile 控制、desktop 验收、CLI 执行、API 自动化。"
    },
    {
      "title": "Web Search 结果要从“搜到”变成“可追溯”",
      "author": "OpenAI Developers",
      "source": "official-docs",
      "url": "https://developers.openai.com/api/docs/guides/tools-web-search",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Search",
      "summary": "Responses API 的 Web Search guide 强调正式工具、筛选、来源控制和结构化输出；AI Radar 应保留 query、来源类型和原文链接。",
      "takeaway": "动作：source-card 增加 query/evidenceType 候选字段；搜索阶段只产候选池，不自动发布。"
    },
    {
      "title": "API changelog 是工具迁移的基准表",
      "author": "OpenAI Developers",
      "source": "official-docs",
      "url": "https://developers.openai.com/api/docs/changelog",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "API",
      "summary": "Responses、tools、模型和迁移时间点要以 API changelog 为准，避免按社区转述误改自动化。",
      "takeaway": "动作：每次改 AI Radar 采集/工具链前先查 changelog，并把影响列成待办。"
    },
    {
      "title": "Codex 计划边界影响自动化成本解释",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan",
      "category": [
        "accounts",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Codex",
      "summary": "Codex 的计划、可用范围和额度会影响自动化为什么能跑、为什么失败、是否值得拆任务。",
      "takeaway": "动作：继续记录 sourceCards、验证命令、部署状态；后续加成本/额度复盘。"
    },
    {
      "title": "Connectors 只能服务判断，不能污染公开站点",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/11487775-connectors-in-chatgpt",
      "category": [
        "knowledge",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Connectors",
      "summary": "Connectors 能接外部资料，但公开 AI Radar 必须只展示公开来源，不能把私有连接内容写入 site/data。",
      "takeaway": "动作：公开网站字段只允许公开 URL、公开作者、公开来源和总结后的学习卡。"
    },
    {
      "title": "Remote MCP 提醒工具接入要先讲权限边界",
      "author": "OpenAI Developers",
      "source": "official-docs",
      "url": "https://developers.openai.com/api/docs/mcp",
      "category": [
        "tools",
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "MCP",
      "summary": "Remote MCP 让工具接入更方便，也提高了白名单、审计、只读优先和显式授权的重要性。",
      "takeaway": "动作：本地桥和 MCP 坚持白名单；任何公网 tunnel 继续先单独确认。"
    },
    {
      "title": "Claude Code hooks 可借鉴为 Codex 阶段闸门",
      "author": "Anthropic",
      "source": "official-docs",
      "url": "https://code.claude.com/docs/en/hooks-guide",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "MED",
      "tag": "Hooks",
      "summary": "hooks/权限/自动化边界的思路可借鉴到 Codex：只读采集、写文件、commit、push、deploy 分阶段。",
      "takeaway": "动作：给 AI Radar 的发布阶段补一张验证证据清单，避免只读采集和公开发布混在一起。"
    },
    {
      "title": "Coding-agent 价值要用采用指标复盘",
      "author": "Microsoft researchers / arXiv",
      "source": "paper",
      "url": "https://arxiv.org/abs/2607.01418",
      "category": [
        "knowledge",
        "workflow"
      ],
      "score": "MED",
      "tag": "Adoption",
      "summary": "CLI coding agent 采用研究把价值从主观感觉转为可观察指标，如采用、留存、PR 合并和影响扩散。",
      "takeaway": "动作：月底复盘不只看跑了几次，还看哪些知识卡被复用、哪些自动化失败或返工。"
    },
    {
      "title": "Agentic misalignment 提醒越能干越要先写边界",
      "author": "arXiv",
      "source": "paper",
      "url": "https://arxiv.org/abs/2607.03968",
      "category": [
        "knowledge",
        "workflow"
      ],
      "score": "MED",
      "tag": "Safety",
      "summary": "论文提醒 agent 在目标和权限模糊时可能出现越界行为，适合转化为个人自动化硬边界。",
      "takeaway": "动作：继续禁止公开互动和私有数据写入；发布阶段必须保留 Git、JSON、Vercel 证据。"
    }
  ],
  "knowledge": [
    {
      "label": "01 / Workbench",
      "title": "AI 工作台要分四个区",
      "body": "把个人 AI 工作流拆成收集、执行、验收、沉淀。iPhone 捕捉，ChatGPT Project 收上下文，Codex 产出文件，Mac 验收，knowledge 只留可复用动作。"
    },
    {
      "label": "02 / Search",
      "title": "Web Search 结果要可追溯",
      "body": "搜索摘要不是证据。每张 source-card 应保留 query、作者、URL、来源类型、为什么可信和能做什么；无原文证据的转载直接丢弃。"
    },
    {
      "label": "03 / Mobile",
      "title": "手机派工，Mac 终审",
      "body": "iPhone 负责创建任务、补上下文、看状态和轻审批；复杂 diff、部署、公开发布和跨文件复核回到 Mac。"
    },
    {
      "label": "04 / Metrics",
      "title": "Agent 采用要有本地指标",
      "body": "不要只记录“跑完了”。记录 sourceCards、Top signals、knowledgeCards、验证命令、部署状态、失败原因和是否被实际复用。"
    }
  ]
}
;

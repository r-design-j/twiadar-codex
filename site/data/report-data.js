window.AI_RADAR_REPORT = {
  "date": "2026-08-05",
  "updatedAt": "2026-08-05T09:07:01+08:00",
  "updatedLabel": "2026-08-05 09:07 CST",
  "conclusion": "今日主线是：AI 工作台正在从“统一入口”进一步进入“可审计执行”。Chat、Work、Codex、Voice、iPhone Remote、Responses API、Computer Use 和 GitHub Agentic Workflows 都在指向同一件事：每一步都要有职责、权限、状态回传和验收证据。",
  "metrics": {
    "sourceCards": 13,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-08-05 的可复用变化集中在四块：入口职责矩阵、UI 自动化证据环、Agentic Workflow 上架单、凭证与外联兜底。",
    "今天的判断很明确：agent 越能跨设备和跨工具执行，越要把意图、工具、证据和公开边界写成资产。"
  ],
  "signals": [
    {
      "title": "Work/Codex/Voice 入口职责更清晰",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Entry Matrix",
      "summary": "OpenAI 最新帮助文档把 Chat、Work、Codex、Voice 的职责、同步、本地文件和 Remote 边界拆得更明确。",
      "takeaway": "动作：每个任务先写入口职责，避免把判断、执行、审批和验收混进同一入口。"
    },
    {
      "title": "Codex plans 与 workspace controls 成为启动前检查",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/11369540-icodex-in-chatgpt",
      "category": [
        "accounts",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Codex Controls",
      "summary": "Codex 覆盖 ChatGPT plans、桌面、CLI、IDE、web/cloud、plugins 和 workspace 权限，默认模型和插件可用性会影响执行。",
      "takeaway": "动作：启动前检查 plan、workspace、plugin、model、local/cloud 和 Remote 控制。"
    },
    {
      "title": "Responses API 是自建 agent 的状态主干",
      "author": "OpenAI Developers",
      "source": "official-docs",
      "url": "https://platform.openai.com/docs/guides/agents",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Agent Stack",
      "summary": "Agents 文档把 Responses、conversation state、background、WebSocket、multi-agent、guardrails 和 approvals 串成 agent 栈。",
      "takeaway": "动作：自建 agent 先设计状态、审批、工具输出和恢复机制，再加多 agent。"
    },
    {
      "title": "Computer Use 要求动作后回传 UI 状态",
      "author": "OpenAI Developers",
      "source": "official-docs",
      "url": "https://platform.openai.com/docs/guides/tools-computer-use",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "UI Evidence",
      "summary": "Computer Use 文档强调每批动作后捕获并回传最新 UI 状态，截图质量和坐标映射会影响准确度。",
      "takeaway": "动作：UI 自动化固定为观察、动作、截图/DOM回传、复核、失败停止五步。"
    },
    {
      "title": "Codex 安全落到 sandbox、approval 与日志",
      "author": "OpenAI",
      "source": "official-security",
      "url": "https://openai.com/index/running-codex-safely/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Safety Rails",
      "summary": "OpenAI 把 Codex 生产安全拆成 sandbox、approvals、network policies、credentials、managed configs 和 agent-native logs。",
      "takeaway": "动作：本地/云端 agent 默认限定写入、网络、凭证和审批门，并保留日志证据。"
    },
    {
      "title": "Codex CLI 是跨工具互通锚点",
      "author": "OpenAI GitHub",
      "source": "official-github",
      "url": "https://github.com/openai/codex",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "CLI Anchor",
      "summary": "Codex CLI 承载本地 coding agent、ChatGPT 登录、配置、approval mode、IDE/desktop 互通和 resume。",
      "takeaway": "动作：维护 install、login、version、approval、trusted project、config、resume、plugin 状态清单。"
    },
    {
      "title": "Agentic Workflows 把自然语言自动化仓库化",
      "author": "GitHub Docs",
      "source": "official-docs",
      "url": "https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Workflow Asset",
      "summary": "GitHub 用 markdown、frontmatter、lockfile 和 safe outputs 把自然语言自动化变成可 review 的仓库资产。",
      "takeaway": "动作：把日报、CI 巡检、发布复核先写成 workflow 草案，人工触发验证。"
    },
    {
      "title": "Agentic Workflow engine 选择进入治理层",
      "author": "GitHub Agentic Workflows",
      "source": "official-docs",
      "url": "https://github.github.com/gh-aw/reference/engines/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Engine Policy",
      "summary": "Agentic Workflows 支持 copilot、claude、codex、gemini 等 engine，并声明工具、web-search 和 allowlist 差异。",
      "takeaway": "动作：按任务风险选择 engine 和工具白名单，不让多个 engine 并发写同一面。"
    },
    {
      "title": "领域理解比职业编码身份更决定 agent 成功",
      "author": "Anthropic Research",
      "source": "research",
      "url": "https://www.anthropic.com/research/claude-code-expertise?level=0",
      "category": [
        "knowledge",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Expertise",
      "summary": "Claude Code 研究显示用户多做规划决策、agent 多做执行决策；成功更依赖用户对领域问题的掌握。",
      "takeaway": "动作：给 agent 的输入优先补目标、约束、验收、反例和业务判断。"
    },
    {
      "title": "审批疲劳提示必须靠环境兜底",
      "author": "Anthropic Engineering",
      "source": "engineering-blog",
      "url": "https://www.anthropic.com/engineering/how-we-contain-claude",
      "category": [
        "knowledge",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Containment",
      "summary": "Anthropic 指出用户会高频批准权限提示，真正限制 blast radius 的是 sandbox、VM 和 egress controls。",
      "takeaway": "动作：把审批当最后一道门，优先用文件、网络、凭证和外联边界兜底。"
    },
    {
      "title": "攻击者也在使用 coding agents",
      "author": "Axios / Cisco Talos",
      "source": "public-news",
      "url": "https://www.axios.com/2026/08/04/exclusive-hackers-ai-chat-logs-reveal-evolving-tactics",
      "category": [
        "hot",
        "knowledge",
        "workflow"
      ],
      "score": "MEDIUM",
      "tag": "Threat Signal",
      "summary": "公开报道显示攻击者使用 Claude Code、Codex、Cursor、Gemini 等工具加速漏洞利用和攻击开发。",
      "takeaway": "动作：只沉淀防御启发，关注日志、凭证隔离、外联控制和公开 artifact 风险。"
    },
    {
      "title": "企业 coding agent 组合进入度量期",
      "author": "Business Insider",
      "source": "public-news",
      "url": "https://www.businessinsider.com/disney-microsoft-github-copilot-openai-codex-ai-tools-claude-cursor-2026-7",
      "category": [
        "accounts",
        "workflow"
      ],
      "score": "MEDIUM",
      "tag": "Tool Metrics",
      "summary": "公开报道显示企业正在按开发速度、使用率、成本、满意度和 dashboard 重配 coding agent 工具。",
      "takeaway": "动作：个人自动化也记录 sourceCards、验证、commit、deploy、失败原因和拍板项。"
    }
  ],
  "knowledge": [
    {
      "label": "01 / Entry",
      "title": "入口职责矩阵",
      "body": "Chat 做判断，Work 做长任务交付，Codex 做代码和本地执行，Voice 做桌面协调，iPhone Remote 做状态和审批。"
    },
    {
      "label": "02 / UI",
      "title": "UI 自动化证据环",
      "body": "Computer Use/浏览器自动化要有观察、动作、截图或 DOM 回传、结果复核和失败停止，不能只记录已点击。"
    },
    {
      "label": "03 / Workflow",
      "title": "Agentic Workflow 上架单",
      "body": "重复自然语言自动化进入仓库前，写清触发、权限、engine、network、safe outputs、lockfile 和回滚方式。"
    },
    {
      "label": "04 / Security",
      "title": "凭证与外联兜底",
      "body": "agent 安全不能只靠审批或模型拒绝；敏感路径、凭证、网络外联和日志必须由环境强约束。"
    }
  ]
};

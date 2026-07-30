window.AI_RADAR_REPORT = {
  "date": "2026-07-30",
  "updatedAt": "2026-07-30T09:06:38+08:00",
  "updatedLabel": "2026-07-30 09:06 CST",
  "conclusion": "今日主线是：agent 工作流正在从“能被远程启动和并行执行”进入“可被身份、工具、评审、指标和改进闭环治理”的阶段。Sign in with ChatGPT 降低插件接入摩擦，Presence 把生产 agent 拆成岗位、权限、评估、升级和 Codex 改进闭环，GitHub code review skills/MCP GA 与模型默认启用策略则提醒我们把评审上下文、模型权限和指标都资产化。",
  "metrics": {
    "sourceCards": 13,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-07-30 的可复用变化集中在四块：Agent 生产闭环、插件身份最小披露清单、Review Skills + 只读 MCP、模型默认启用审计表。",
    "今天的判断很明确：入口越统一，治理越要拆细；登录、工具、模型、评审和发布都需要独立证据。"
  ],
  "signals": [
    {
      "title": "Sign in with ChatGPT 开始进入插件和合作站点",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/6825453-release-notes",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Identity Gate",
      "summary": "OpenAI 7 月 29 日 Release Notes 显示 Sign in with ChatGPT beta 从 Airtable、GitLab、HubSpot、Notion、Supabase、Vercel 等入口开始。",
      "takeaway": "动作：为插件接入写身份最小披露清单，单独复核共享字段、读写范围、公开动作和撤销路径。"
    },
    {
      "title": "OpenAI Presence 把 agent 生产闭环产品化",
      "author": "OpenAI",
      "source": "official-product",
      "url": "https://openai.com/index/introducing-openai-presence/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Production Agent",
      "summary": "Presence 面向 voice/chat agent，把岗位定义、权限、模拟、评估、升级、上线后信号和 Codex 改进建议放在同一条链路。",
      "takeaway": "动作：把日报、客服、研究和 review agent 都按岗位、权限、评估、线上信号、改进、批准发布来管理。"
    },
    {
      "title": "GitHub code review skills/MCP GA",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Review Context",
      "summary": "GitHub code review 现在可调用 agent skills 和只读 MCP 上下文，并在评论中显示 skills/MCP attribution。",
      "takeaway": "动作：把评审规则写成可版本化 SKILL.md 或规则卡，MCP 保持只读，评论标明依据来源。"
    },
    {
      "title": "GitHub 模型默认启用策略进入倒计时",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-29-default-model-enablement-for-copilot-business-and-enterprise/",
      "category": [
        "hot",
        "accounts",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Model Policy",
      "summary": "Copilot Business/Enterprise 的 GA 模型将按组织默认策略继承启用状态，8 月 26 日生效，显式选择和部分排除模型保留。",
      "takeaway": "动作：建立模型默认启用审计表，区分默认继承、显式启用、显式禁用和例外排除。"
    },
    {
      "title": "Copilot app usage metrics 进入标准报表",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-28-github-copilot-app-usage-metrics-now-expand-across-report-rollups/",
      "category": [
        "workflow",
        "accounts",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Agent Metrics",
      "summary": "Copilot app activity 被纳入 enterprise/user/org rollups，包含 session、request、prompt、token、code activity 和 lines changed 等字段。",
      "takeaway": "动作：AI Radar 也记录 sourceCards、signals、knowledge、验证命令、commit、deployment 和失败边界。"
    },
    {
      "title": "Agents SDK 把工具执行边界讲清楚",
      "author": "OpenAI Agents SDK Docs",
      "source": "official-docs",
      "url": "https://openai.github.io/openai-agents-js/guides/tools/",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Tool Boundary",
      "summary": "SDK 区分 hosted tools、computer use、shell、apply_patch、sandbox filesystem、skills 和 memory，执行发生在应用或沙箱环境。",
      "takeaway": "动作：把安全写进执行环境、审批、文件权限和工具实现，不只依赖 prompt。"
    },
    {
      "title": "AI 正在推动跨岗位任务流动",
      "author": "OpenAI",
      "source": "official-research",
      "url": "https://openai.com/index/how-ai-is-expanding-what-people-do-at-work/",
      "category": [
        "knowledge",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Task Crossover",
      "summary": "OpenAI 研究显示 43.5% 的 occupation-specific AI 消息涉及本职业之外任务，营销、工程、金融计算和技术排障尤其会跨岗位流动。",
      "takeaway": "动作：用户负责业务目标和验收，Codex 负责跨岗位可验证执行件。"
    },
    {
      "title": "ChatGPT/Codex 进入科研协作和执行链路",
      "author": "OpenAI",
      "source": "official-release",
      "url": "https://openai.com/index/chatgpt-for-academic-researchers/",
      "category": [
        "knowledge",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Research Workflow",
      "summary": "OpenAI 为研究者提供 ChatGPT Work、Codex、frontier models、skills 和 connectors，覆盖假设、文献、代码、数据和发表材料。",
      "takeaway": "动作：把研究工作拆成假设、文献、代码、数据、复现和发表材料，让 Codex 负责可复现执行件。"
    },
    {
      "title": "Disney 重新组合 AI coding tools",
      "author": "Business Insider / James Faris",
      "source": "media-report",
      "url": "https://www.businessinsider.com/disney-microsoft-github-copilot-openai-codex-ai-tools-claude-cursor-2026-7",
      "category": [
        "hot",
        "accounts",
        "tools"
      ],
      "score": "MEDIUM",
      "tag": "Tool Portfolio",
      "summary": "Business Insider 报道 Disney 美国将放弃 GitHub Copilot 等工具、准备采用 OpenAI Codex，并保留 Claude Enterprise 和 Cursor。",
      "takeaway": "动作：用采用率、清理成本、PR 质量、测试通过率和 dashboard 数据评估 coding agent 组合。"
    },
    {
      "title": "Codex 作为 JetBrains IDE agent provider",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-07-codex-as-agent-provider-and-agentic-enhancements-in-jetbrains-ides/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "IDE Provider",
      "summary": "GitHub Copilot for JetBrains 支持 Codex 作为 public preview agent provider，IDE 内多 agent provider 工作流继续正常化。",
      "takeaway": "动作：为 IDE、CLI、desktop、mobile 入口维护同一套任务边界和验证清单。"
    },
    {
      "title": "Codex mobile 仍应是控制面",
      "author": "AI Catchup / Zac Smith",
      "source": "public-analysis",
      "url": "https://aicatchup.com/news/codex-chatgpt-mobile-preview",
      "category": [
        "mobile",
        "workflow"
      ],
      "score": "MEDIUM",
      "tag": "Mobile Remote",
      "summary": "公开长文整理 Codex mobile 两个月后的状态：手机看状态、审 diff/test、批准动作，真正执行仍在 Mac/Windows/remote host。",
      "takeaway": "动作：手机只做审批、状态和轻量转向；长提示、复杂 diff、权限和发布回到 host/Mac。"
    },
    {
      "title": "领域知识继续放大 agent 成功率",
      "author": "Anthropic Research",
      "source": "research",
      "url": "https://www.anthropic.com/research/claude-code-expertise",
      "category": [
        "knowledge",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Expertise Loop",
      "summary": "Anthropic 对 Claude Code session 的研究显示人负责规划、agent 负责执行，领域知识比纯 coding proficiency 更能放大产出。",
      "takeaway": "动作：提示词写业务目标、领域约束、验收证据和停止条件，让 agent 在边界内找路线。"
    }
  ],
  "knowledge": [
    {
      "label": "01 / Production",
      "title": "Agent 生产闭环",
      "body": "生产 agent 不是 prompt，而是岗位、权限、模拟、评估、线上信号、改进建议和批准发布的闭环。"
    },
    {
      "label": "02 / Identity",
      "title": "插件身份最小披露清单",
      "body": "Sign in with ChatGPT 降低账号接入摩擦，但每个插件仍要审查共享字段、读写范围、公开动作和撤销路径。"
    },
    {
      "label": "03 / Review",
      "title": "Review Skills + 只读 MCP",
      "body": "评审规则应版本化，外部上下文应只读接入，评论需要标明 skill 或 MCP 来源，方便追责和迭代。"
    },
    {
      "label": "04 / Models",
      "title": "模型默认启用审计表",
      "body": "新 GA 模型进入生产前，要区分默认继承、显式启用、显式禁用和例外排除，并跑代表任务。"
    }
  ]
};

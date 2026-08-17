window.AI_RADAR_REPORT = {
  "date": "2026-08-17",
  "updatedAt": "2026-08-17T09:14:00+08:00",
  "updatedLabel": "2026-08-17 09:14 CST",
  "conclusion": "今日主线是: agent 工作流正在从单点工具试用进入“可管理工作台”阶段。Workspace Agents 把 schedule、Slack、API trigger、apps、skills 和模型档位合到可复用任务里；Developer mode 与 MCP apps 把 search/fetch 扩展到 write/modify，但要求管理员、RBAC、action control 和发布审查；GitHub 第三方 coding agents 则把 Codex/Claude/Copilot 放进 issue-to-PR 与 Mobile/VS Code 工作面。对个人工作流来说，今天最该沉淀的是 agent job envelope、MCP app 上架清单、memory 过期账本和跨平台 agent 对照表。",
  "metrics": {
    "sourceCards": 14,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-08-17 的可复用变化集中在四块: Workspace Agents 工作台、MCP app 写动作治理、跨平台 coding agent 委派、agent memory 过期复核。",
    "今天的判断很明确: agent 越像团队成员，越要给它工作单、权限表、审计记录和最终验收口。"
  ],
  "signals": [
    {
      "title": "Workspace Agents 进入可排程工作台",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Workspace Agents",
      "summary": "Workspace Agents 支持模板/Builder、模型与推理档位、apps、skills、schedule、Slack 和 API trigger，适合承载重复业务流程。",
      "takeaway": "动作: 每个 agent run 都写 job envelope，并由 Mac/Codex 或平台证据收口，不把 202 Accepted 当完成。"
    },
    {
      "title": "MCP apps 从读取走向动作",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/12584461-developer-mode-and-full-mcp-connectors-in-chatgpt",
      "category": [
        "hot",
        "workflow",
        "accounts",
        "tools"
      ],
      "score": "HIGH",
      "tag": "MCP Apps",
      "summary": "Developer mode 让组织测试并发布自定义 MCP apps，包括 write/modify actions、RBAC、action control 和发布审查。",
      "takeaway": "动作: 自建 MCP 上线前建立草稿测试、动作白名单、写动作确认、RBAC 和回滚路径。"
    },
    {
      "title": "Company Knowledge 要过插件和权限双门",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/12628342/",
      "category": [
        "knowledge",
        "workflow",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Company Knowledge",
      "summary": "Company knowledge 依赖已启用、已连接、支持 search/fetch 的 app-powered plugins，并保留源系统权限。",
      "takeaway": "动作: 对每个知识源记录 plugin、app、OAuth、search/fetch、RBAC、桌面/移动端支持情况。"
    },
    {
      "title": "Codex CLI 仍是本地执行基线",
      "author": "OpenAI",
      "source": "github-project",
      "url": "https://github.com/openai/codex",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Codex CLI",
      "summary": "openai/codex 仓库汇总终端、IDE、桌面 app 和 cloud Codex 的入口差异，CLI 是本地文件和 Git evidence 的核心。",
      "takeaway": "动作: 手机/云端可以派工，最终仍由本地 repo 的 diff、test、commit、push、deploy 证明完成。"
    },
    {
      "title": "Codex 安全重点是沙箱+审批+遥测",
      "author": "OpenAI",
      "source": "official-blog",
      "url": "https://openai.com/index/running-codex-safely/",
      "category": [
        "workflow",
        "tools",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Codex Safety",
      "summary": "OpenAI 公开用 sandboxing、approvals、network policy、identity、secure credential storage 和 telemetry 管理 Codex。",
      "takeaway": "动作: 把自动化动作分为沙箱内、需审批、禁止三档，并保留命令证据与停止原因。"
    },
    {
      "title": "Agents SDK TS 适合生产级 agent runtime",
      "author": "OpenAI Agents SDK",
      "source": "official-docs",
      "url": "https://openai.github.io/openai-agents-js/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Agents SDK",
      "summary": "TypeScript SDK 提供 agent loop、sandbox execution、handoffs、guardrails、MCP、sessions、human-in-the-loop 和 tracing。",
      "takeaway": "动作: 需要工具、handoff、隔离工作区和人工审批时使用 SDK；简单问答不引入重 runtime。"
    },
    {
      "title": "Tool Guardrails 比首尾检查更贴近风险",
      "author": "OpenAI Agents SDK",
      "source": "official-docs",
      "url": "https://openai.github.io/openai-agents-js/guides/guardrails/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Guardrails",
      "summary": "Tool guardrails 能包住每次 function-tool 调用，在执行前后验证或阻断，高影响动作比全局 output guardrail 更需要它。",
      "takeaway": "动作: 给发消息、写文件、创建任务、部署工具加 pre/post guardrails 和人工确认。"
    },
    {
      "title": "Tracing 是长任务回放账本",
      "author": "OpenAI Agents SDK",
      "source": "official-docs",
      "url": "https://openai.github.io/openai-agents-js/guides/tracing/",
      "category": [
        "workflow",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Tracing",
      "summary": "SDK 默认追踪 run、agent span、generation、tool call、guardrail 和 handoff，可用于排查与复盘。",
      "takeaway": "动作: 长任务保存 trace id、关键 span、handoff 与失败点，月底按返工率复盘。"
    },
    {
      "title": "GitHub 第三方 coding agents 标准化",
      "author": "GitHub Docs",
      "source": "github-docs",
      "url": "https://docs.github.com/en/copilot/concepts/agents/about-third-party-coding-agents",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Third-party Agents",
      "summary": "GitHub 允许 Codex、Claude 与 Copilot cloud agent 并行，从 Agents tab、Issues、PR、Mobile、VS Code 入口处理任务。",
      "takeaway": "动作: 委派前记录 agent、模型、入口、权限、成本池、安全扫描和 review owner。"
    },
    {
      "title": "GitHub OpenAI Codex 不等于本地 Codex",
      "author": "GitHub Docs",
      "source": "github-docs",
      "url": "https://docs.github.com/en/copilot/concepts/agents/openai-codex",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "GitHub Codex",
      "summary": "GitHub 的 OpenAI Codex coding agent、VS Code Codex extension 和 Copilot 登录/模型边界属于 GitHub 工作面。",
      "takeaway": "动作: 每次注明实际运行环境: GitHub agent、VS Code extension、Codex CLI、Desktop 或 cloud Codex。"
    },
    {
      "title": "Agent 管理开始有审计视角",
      "author": "GitHub Docs",
      "source": "github-docs",
      "url": "https://docs.github.com/en/copilot/concepts/agents/enterprise-management",
      "category": [
        "workflow",
        "accounts",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Agent Audit",
      "summary": "GitHub 企业管理文档强调 agent sessions、audit events、agentic activity filters 和 audit log streaming。",
      "takeaway": "动作: 个人自动化也记录 run 状态、失败原因、commit、deployment 和采纳情况。"
    },
    {
      "title": "Repository Memory 需要过期机制",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-03-04-copilot-memory-now-on-by-default-for-pro-and-pro-users-in-public-preview/",
      "category": [
        "knowledge",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Agent Memory",
      "summary": "Copilot Memory 跨 coding agent、code review 和 CLI 复用仓库事实，并强调 28 天过期和当前代码校验。",
      "takeaway": "动作: 把记忆写成日期化、范围化、可删除的卡片；新闻、价格、版本每次复核。"
    },
    {
      "title": "Claude Code memory 可作分层参照",
      "author": "Anthropic Docs",
      "source": "official-docs",
      "url": "https://docs.anthropic.com/en/docs/claude-code/memory",
      "category": [
        "knowledge",
        "workflow",
        "tools"
      ],
      "score": "MEDIUM",
      "tag": "Memory Rules",
      "summary": "Claude Code 的 CLAUDE.md、路径规则和 memory 管理说明了 agent 规则分层的另一个成熟形态。",
      "takeaway": "动作: 根规则写稳定原则，路径规则写局部约束，自动记忆只保留稳定偏好和事实。"
    },
    {
      "title": "Web Clipper 可做 source-card 工厂",
      "author": "Obsidian",
      "source": "official-docs",
      "url": "https://obsidian.md/help/web-clipper",
      "category": [
        "knowledge",
        "workflow",
        "mobile"
      ],
      "score": "MEDIUM",
      "tag": "Source Cards",
      "summary": "Obsidian Web Clipper 适合将公开网页转成本地卡片，为日报和知识库提供可回溯原文。",
      "takeaway": "动作: 剪藏模板固定 URL、作者、采集日期、证据等级、takeaway 和不可公开字段检查。"
    }
  ],
  "knowledge": [
    {
      "title": "Agent Job Envelope",
      "summary": "每个重复 agent run 都要带完整工作单，而不是只带一句自然语言指令。",
      "steps": [
        "写清触发入口: Chat、Schedule、Slack、API、GitHub issue 或 Remote。",
        "写清模型/推理档位、工具、apps、skills 和可用连接器。",
        "写清允许读取、允许写入、禁止动作和写动作审批。",
        "写清交付物、回传格式和无法回传的字段。",
        "写清验证命令、最终证据和停止条件。",
        "结束后记录 commit、deployment、trace/run 状态和待拍板事项。"
      ],
      "risk": "API 返回 accepted 或 agent 已启动不是完成证据；必须有可核验产物和验收链。"
    },
    {
      "title": "MCP App 上架清单",
      "summary": "自定义 MCP app 从 search/fetch 走向 write/modify 后，必须像内部应用一样审核。",
      "steps": [
        "先在 developer mode 里草稿测试，不直接发布到 workspace。",
        "列出所有工具、读动作、写动作和高影响动作。",
        "配置 RBAC、app access、action control 和 connector constraints。",
        "写动作默认 always ask，风险动作保留人工确认或禁止。",
        "记录 OAuth、service account、owner 和撤销路径。",
        "发布后定期 refresh actions 并审查 diff。"
      ],
      "risk": "连接成功只证明技术可达，不证明工具安全、权限合理或适合全员使用。"
    },
    {
      "title": "Agent Memory 过期账本",
      "summary": "把长期偏好、仓库事实、项目约定和当天判断分层，并为高漂移记忆设过期复核。",
      "steps": [
        "长期偏好和稳定项目约定可进入记忆。",
        "仓库事实必须能回到当前代码、文档或配置。",
        "新闻、价格、版本、发布状态只做日期化记录。",
        "每条记忆标注来源、日期、适用范围和失效条件。",
        "冲突时以当前仓库和公开来源为准。",
        "每月删除或降级过期事实。"
      ],
      "risk": "记忆能减少重复解释，也会把旧事实伪装成当前事实。"
    },
    {
      "title": "跨平台 Agent 对照表",
      "summary": "同名或同类 agent 在 ChatGPT、Codex、GitHub、VS Code、CLI、Mobile 中不是同一个执行环境。",
      "steps": [
        "记录实际入口和宿主: ChatGPT、Codex CLI、Desktop、GitHub、VS Code、Mobile。",
        "记录模型、账号、权限、成本池和 sandbox。",
        "记录能否读仓库、能否写文件、能否开 PR、能否部署。",
        "记录安全扫描、人工 review、审计日志和最终证据。",
        "同一任务只让一个写通道负责，其他通道只读复核。",
        "最终由 Mac/Codex 或平台 PR/Ready 证据收口。"
      ],
      "risk": "把不同平台的 agent 混同，会导致权限、计费、审计和完成证据全部失真。"
    }
  ]
};

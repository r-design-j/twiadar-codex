window.AI_RADAR_REPORT = {
  "date": "2026-07-31",
  "updatedAt": "2026-07-31T09:08:00+08:00",
  "updatedLabel": "2026-07-31 09:08 CST",
  "conclusion": "今日主线是：coding agent 正在从“会写代码的助手”升级成“有规则、有上下文、有权限边界、有跨设备控制面的工程系统”。Codex Code Review rules 把团队判断写进 AGENTS.md，Remote 把 iPhone 明确为控制面，Secure MCP Tunnel 则给私有工具接入提供 outbound-only、显式目的地、可检查客户端的边界模型。",
  "metrics": {
    "sourceCards": 13,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-07-31 的可复用变化集中在四块：Repository Rules 评审资产、手机控制面协议、私有工具窄通道、Agentic Workflow 仓库化。",
    "今天的判断很明确：入口越多，越需要把规则、权限、证据和换车边界写成资产。"
  ],
  "signals": [
    {
      "title": "Codex review rules 把 AGENTS.md 变成评审资产",
      "author": "OpenAI Developers",
      "source": "official-developer-blog",
      "url": "https://developers.openai.com/blog/custom-code-review-rules-for-codex",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Review Rules",
      "summary": "Codex Code Review 可以读取 scoped AGENTS.md 规则，发现仓库特有的不变量、兼容性风险和数据边界问题，并在 finding 中引用规则。",
      "takeaway": "动作：给本仓库补 2-3 条高后果规则，覆盖 sourceCards/metrics、JSON/JS 同步和公开路径扫描。"
    },
    {
      "title": "iPhone 被明确定位为 Codex 工程控制面",
      "author": "OpenAI Developers / Thomas Ricouard",
      "source": "official-developer-blog",
      "url": "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
      "category": [
        "hot",
        "mobile",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Mobile Control",
      "summary": "Remote 支持从手机选择 host、repo、worktree，处理 Queue/Steer、审批、diff/test review 和长会话状态管理。",
      "takeaway": "动作：手机只做派工、转向、卡点和最窄权限审批；复杂 diff、发布和密钥终审回到 Mac。"
    },
    {
      "title": "Secure MCP Tunnel 给私有工具接入定边界",
      "author": "OpenAI Developers / Denys Kurylenko",
      "source": "official-developer-blog",
      "url": "https://developers.openai.com/blog/connect-private-mcp-servers-to-openai-products",
      "category": [
        "hot",
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Private MCP",
      "summary": "客户环境内的 tunnel client 主动发起 outbound HTTPS，私有 MCP 地址仍留在内部网络，OpenAI 产品通过标准 MCP 请求路径使用它。",
      "takeaway": "动作：私有工具只通过白名单目标、方法、超时、响应大小和日志接入，禁止泛化为公网隧道。"
    },
    {
      "title": "ChatGPT 桌面端把 Chat/Work/Codex 放进统一工作台",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/6825453-release-notes",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Unified App",
      "summary": "7 月桌面端更新让 Chat、Work、Codex 更容易切换，Recents 和 Projects 更统一，同时 Codex workflows/history 保持独立。",
      "takeaway": "动作：按任务类型分派入口：聊天问答、成品交付、代码执行分开，不把所有长任务塞进一个会话。"
    },
    {
      "title": "Enterprise 管理侧开始纳入 Codex analytics",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes",
      "category": [
        "accounts",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Admin Analytics",
      "summary": "Enterprise/Edu 管理员可创建 workspace-scoped Admin keys，并查看更长时间的 credit 与 Codex analytics 历史。",
      "takeaway": "动作：个人自动化也记录 sourceCards、signals、knowledge、commit、deployment、验证命令和失败边界。"
    },
    {
      "title": "Codex anywhere 把 Remote SSH、Hooks、tokens 合到一条治理线",
      "author": "OpenAI",
      "source": "official-product",
      "url": "https://openai.com/index/work-with-codex-from-anywhere/",
      "category": [
        "mobile",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Remote Governance",
      "summary": "OpenAI 官方说明 Codex mobile、Remote SSH、Hooks、programmatic access tokens 和本地环境合规支持正在组合成远程协作能力。",
      "takeaway": "动作：远程工作流同时设计 host、relay、hooks、approval 和 token 边界，不能只加入口。"
    },
    {
      "title": "OpenAI Developers 成为 Codex 能力总索引",
      "author": "OpenAI Developers",
      "source": "official-docs",
      "url": "https://developers.openai.com/",
      "category": [
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Docs Index",
      "summary": "Developers 首页集中展示 Codex、Work、Plugins、Workspace Agents、Secure MCP Tunnel、AGENTS.md、permissions 和 Codex SDK 等入口。",
      "takeaway": "动作：涉及 OpenAI 能力时，先用 Developers docs 与 Help Center 双源交叉确认当前可用性。"
    },
    {
      "title": "GitHub Agentic Workflows 把自然语言自动化仓库化",
      "author": "GitHub Docs",
      "source": "official-docs",
      "url": "https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/about-github-agentic-workflows",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Workflow as Code",
      "summary": "GitHub 用 Markdown 定义 agentic workflow，再编译成 hardened GitHub Actions workflow，包含权限、网络、工具和 safe outputs。",
      "takeaway": "动作：把每日仓库巡检、日报生成和状态 issue 摘要写成可版本化 workflow，先手动触发。"
    },
    {
      "title": "Agentic Workflows 支持多 engine 路由",
      "author": "GitHub Agentic Workflows",
      "source": "official-docs",
      "url": "https://github.github.com/gh-aw/reference/engines/",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Engine Routing",
      "summary": "GitHub Agentic Workflows 支持 Copilot、Claude Code、OpenAI Codex、Gemini、OpenCode 等 engine，并定义各自认证 secret。",
      "takeaway": "动作：多 agent 路由要把 engine、secret、版本、timeout 和 harness 写进 workflow，而不是临时口头选择。"
    },
    {
      "title": "Claude Cowork web/mobile 与 memory 更新提供同行参照",
      "author": "Anthropic Help Center",
      "source": "official-help",
      "url": "https://support.claude.com/en/articles/12138966-release-notes",
      "category": [
        "mobile",
        "knowledge",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Cross-device Memory",
      "summary": "Claude Cowork 扩展到 web/mobile，memory 从每日摘要转为单条分类 entries，同行也在补跨设备长任务和可管理记忆。",
      "takeaway": "动作：把 Codex/ChatGPT memory 分成事实、规则、偏好、过期信息和运行证据。"
    },
    {
      "title": "Claude Code Review trigger/cost 设计可借鉴",
      "author": "Claude Help Center",
      "source": "official-help",
      "url": "https://support.claude.com/en/articles/14233555-set-up-code-review-for-claude-code",
      "category": [
        "tools",
        "workflow",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Review Trigger",
      "summary": "Claude Code Review 支持 PR 创建后一次、每次 push、手动三种 trigger，并显示平均 review 成本。",
      "takeaway": "动作：AI review 初期用手动触发；规则稳定、误报低、成本可接受后，再提高自动触发频率。"
    },
    {
      "title": "Codex CLI 审批模式仍是本地安全底座",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/11096431",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Approval Modes",
      "summary": "Codex CLI 文档明确 suggest、auto edit、full auto 三种模式，以及本地执行、沙箱和网络边界。",
      "takeaway": "动作：按任务风险选择模式；full auto 仍需验证命令、diff review、公开路径扫描和发布前终审。"
    }
  ],
  "knowledge": [
    {
      "label": "01 / Review",
      "title": "Repository Rules 评审资产",
      "body": "把团队反复解释的非显然规则写入 AGENTS.md，让 Codex review 能按规则发现问题并引用来源。"
    },
    {
      "label": "02 / Mobile",
      "title": "手机控制面协议",
      "body": "iPhone 负责环境选择、派工、Queue/Steer、审批和状态管理；复杂 diff、发布和权限终审留在 Mac。"
    },
    {
      "label": "03 / Boundary",
      "title": "私有工具窄通道",
      "body": "私有 MCP 和内部 API 只通过 customer-run client 与白名单目标接入，不暴露公网，不泛化成网络桥。"
    },
    {
      "label": "04 / Workflow",
      "title": "Agentic Workflow 仓库化",
      "body": "重复自然语言自动化应进入仓库，声明触发、权限、网络、工具和 safe outputs，再编译成 hardened workflow。"
    }
  ]
};

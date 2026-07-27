window.AI_RADAR_REPORT = {
  "date": "2026-07-27",
  "updatedAt": "2026-07-27T09:07:41+08:00",
  "updatedLabel": "2026-07-27 09:07 CST",
  "conclusion": "今日主线是：agent 工作流正在从“会执行任务”升级到“可界定岗位、可监控长链路、可迁移上下文、可计量成本”的生产体系。OpenAI Presence 给出岗位、权限、政策和 Codex-powered 改进循环；长任务安全复盘提醒要看完整轨迹；Codex 和 GitHub 更新则把语音、手机、多文件夹、AGENTS.md 规则、MCP conformance、采用度和成本治理补齐。",
  "metrics": {
    "sourceCards": 14,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-07-27 的可复用变化集中在四块：任务岗位卡、长任务轨迹审查、AGENTS.md 规则库、移动控制面分级。",
    "今天的判断很明确：入口越多，越要把权限、验证、预算和停止条件写清楚。"
  ],
  "signals": [
    {
      "title": "OpenAI Presence 把 agent 产品化为岗位系统",
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
      "summary": "Presence 将企业 agent 部署拆成具体岗位、知识范围、系统权限、政策、批准动作、升级人工、评估和 Codex-powered 改进循环。",
      "takeaway": "动作：为 AI Radar 等自动化补岗位卡，写清可读、可写、可做、需审批和停止条件。"
    },
    {
      "title": "长时程模型安全要看完整轨迹",
      "author": "OpenAI",
      "source": "official-safety",
      "url": "https://openai.com/index/safety-alignment-long-horizon-models/",
      "category": [
        "hot",
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Trajectory",
      "summary": "OpenAI 复盘长任务模型中的新型失败，强调单步审批不足以覆盖长链路目标漂移和绕过限制。",
      "takeaway": "动作：长会话增加 trajectory review，检查目标漂移、绕过限制、异常写入和外部访问。"
    },
    {
      "title": "Hugging Face 事件凸显 eval sandbox 边界",
      "author": "OpenAI",
      "source": "official-security",
      "url": "https://openai.com/index/hugging-face-model-evaluation-security-incident/",
      "category": [
        "hot",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Eval Security",
      "summary": "OpenAI 披露模型评估中的安全事件，指出高级模型可跨评估环境和真实系统链式利用漏洞。",
      "takeaway": "动作：把评估环境按生产邻近系统管理，监控包代理、凭据、外联和跨系统影响。"
    },
    {
      "title": "Voice 和多文件夹项目进入 Codex 桌面",
      "author": "ChatGPT Learn",
      "source": "official-changelog",
      "url": "https://learn.chatgpt.com/docs/changelog",
      "category": [
        "hot",
        "workflow",
        "mobile"
      ],
      "score": "HIGH",
      "tag": "Voice",
      "summary": "ChatGPT Voice 可在 Chat、Work、Codex 中协调任务，本地项目支持多个相关文件夹，并用 primary folder 处理 Git 和 AGENTS.md 发现。",
      "takeaway": "动作：语音只做启动/检查/转向；多文件夹项目必须确认 primary folder 和规则来源。"
    },
    {
      "title": "Codex Code Review 可读取 AGENTS.md 规则",
      "author": "OpenAI Developers",
      "source": "official-developer-blog",
      "url": "https://developers.openai.com/blog/custom-code-review-rules-for-codex",
      "category": [
        "hot",
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Review Rules",
      "summary": "Codex Code Review 可以应用 scoped AGENTS.md rules 并在 finding 中引用，把团队历史上下文变成 reviewer 记忆。",
      "takeaway": "动作：把兼容字段、隐私日志、公开边界和迁移窗口写成短规则。"
    },
    {
      "title": "手机 Remote 被定义为工程控制面",
      "author": "OpenAI Developers",
      "source": "official-developer-blog",
      "url": "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
      "category": [
        "mobile",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Remote",
      "summary": "OpenAI Developers 将手机 Remote 定义为选择 host、workspace、branch/worktree、排队提示、审批和 review 的控制面。",
      "takeaway": "动作：iPhone 负责收集和派工，Mac 负责 diff-heavy review、验证、commit 和公开发布。"
    },
    {
      "title": "Codex CLI 0.145.0 稳定 multi-agent V2",
      "author": "ChatGPT Learn",
      "source": "official-changelog",
      "url": "https://learn.chatgpt.com/docs/changelog",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Multi-agent",
      "summary": "Codex CLI 0.145.0 稳定了可配置 sub-agent 模型、reasoning、并发和导航，同时改进审批和安全处理。",
      "takeaway": "动作：只给可分离轨道开 subagents，并写清合并证据、模型档位和并发上限。"
    },
    {
      "title": "GitHub MCP Server 支持下一版 stateless spec",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-23-github-mcp-server-supports-the-next-mcp-specification/",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "MCP",
      "summary": "GitHub MCP Server 已支持下一版 stateless core，并强调官方 conformance tests 能帮助验证 agent 工具链。",
      "takeaway": "动作：私有 MCP 验收加入协议一致性、认证、日志、secret scanning 和 elicitation 检查。"
    },
    {
      "title": "GitHub Copilot 引入 Claude Opus 5",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-24-claude-opus-5-is-now-available-in-github-copilot/",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Model Routing",
      "summary": "Claude Opus 5 进入 Copilot 的 IDE、CLI、cloud agent、mobile 等入口，强化多模型编码 agent 的任务路由问题。",
      "takeaway": "动作：把任务分为 cheap scan、deep reasoning、security review、publish review，而不是默认同一模型。"
    },
    {
      "title": "Copilot impact dashboard 按采用阶段衡量",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-22-new-copilot-usage-metrics-impact-dashboard/",
      "category": [
        "knowledge",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Metrics",
      "summary": "Copilot impact dashboard 按 Code-first、Agent-first、Multi-agent/Copilot app 和 Passive 展示采用深度、吞吐和下一步。",
      "takeaway": "动作：AI Radar 指标改看 source-card、daily、knowledge、memory、Ready 和复用的阶段推进。"
    },
    {
      "title": "仓库级 agent metrics 让影响可定位",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-17-repository-level-github-copilot-usage-metrics-generally-available/",
      "category": [
        "knowledge",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Repo Metrics",
      "summary": "Copilot usage metrics REST API 支持按仓库查看 coding agent PR 和 code review 活动。",
      "takeaway": "动作：自动化复盘按文件族和仓库记录变更、验证、发布和复用，不只记录运行次数。"
    },
    {
      "title": "AI credit pools 把 agent 成本拉进治理",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-20-ai-credit-pools-for-cost-centers-in-the-billing-ui/",
      "category": [
        "tools",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Cost",
      "summary": "GitHub 可在 billing UI 管理 cost center 的 AI credit pool，并设置额度用尽后的策略。",
      "takeaway": "动作：重型自动化要写模型档位、最大重试、部署尝试次数和超限停机条件。"
    }
  ],
  "knowledge": [
    {
      "label": "01 / Job Card",
      "title": "任务岗位卡",
      "body": "每个 agent 自动化先定义岗位、目标、资料范围、可写路径、动作边界、验证命令、预算和停止条件。"
    },
    {
      "label": "02 / Trajectory Review",
      "title": "长任务轨迹审查",
      "body": "长会话不能只看单步命令，要检查连续动作是否在绕过限制、扩大权限或偏离原目标。"
    },
    {
      "label": "03 / AGENTS Rules",
      "title": "AGENTS.md 规则库",
      "body": "把兼容性、隐私、公开边界和历史事故写成短规则，让 Codex review 能引用并执行。"
    },
    {
      "label": "04 / Mobile Control Plane",
      "title": "移动控制面分级",
      "body": "iPhone 和语音负责收集、派工、补上下文和看状态；Mac 负责复杂验证和公开发布终审。"
    }
  ]
};

window.AI_RADAR_REPORT = {
  "date": "2026-08-06",
  "updatedAt": "2026-08-06T09:12:10+08:00",
  "updatedLabel": "2026-08-06 09:12 CST",
  "conclusion": "今日主线是：AI 工作台正在从“可审计执行”继续升级为“可排程、可委派、可回收的自动化管线”。Scheduled Tasks、Work、Codex、Remote、Agents SDK Codex tool、GitHub Agentic Workflows 和 Obsidian second brain 都在指向同一件事：自动化必须带触发、权限、预算、状态回传、验收证据和写回阀。",
  "metrics": {
    "sourceCards": 16,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-08-06 的可复用变化集中在四块：自动化三层分工、Codex tool 封装清单、Agentic Workflow 安全门、Second-brain 写回阀。",
    "今天的判断很明确：agent 入口越多，越要把触发、上下文、权限、预算、状态回传和失败停止写成固定资产。"
  ],
  "signals": [
    {
      "title": "Scheduled Tasks 与 Codex automations 分层",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Task Layer",
      "summary": "Scheduled Tasks 支持一次性、循环和监控任务，并明确 active task limits、通知、app 权限和 Codex automations 差异。",
      "takeaway": "动作：提醒和轻量监控用 Tasks，本地仓库执行、测试和发布用 Codex automation。"
    },
    {
      "title": "Work/Codex/Voice/Remote 入口边界更新",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex",
      "category": [
        "hot",
        "workflow",
        "mobile"
      ],
      "score": "HIGH",
      "tag": "Entry Map",
      "summary": "Work 负责长任务交付，Codex 负责软件开发和本地执行，Voice 协调桌面任务，Remote 在移动端查看和审批。",
      "takeaway": "动作：任务第一行声明入口、读写边界和成功证据。"
    },
    {
      "title": "手机成为 Work/Codex 控制面",
      "author": "OpenAI",
      "source": "official-product",
      "url": "https://chatgpt.com/remote/",
      "category": [
        "mobile",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Remote",
      "summary": "ChatGPT Remote 让手机查看进度、补充输入、批准动作和调整方向，同时桌面继续保留文件、插件和代码上下文。",
      "takeaway": "动作：iPhone 负责看状态和审批，最终验收回到 Mac/Codex 的 diff、测试和部署。"
    },
    {
      "title": "Codex mobile 强化跨设备 live state",
      "author": "OpenAI",
      "source": "official-product",
      "url": "https://openai.com/index/work-with-codex-from-anywhere/",
      "category": [
        "mobile",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Codex Mobile",
      "summary": "Codex mobile 可从手机查看 active threads、approvals、plugins、project context、screenshots、terminal output、diffs 和 test results。",
      "takeaway": "动作：移动端只传公开目标和审批，文件、凭证和权限留在运行 Codex 的机器。"
    },
    {
      "title": "Codex 计划与 Record & Replay 需要权限清单",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan",
      "category": [
        "accounts",
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Codex Controls",
      "summary": "Codex 文档覆盖 CLI、IDE、desktop、cloud、Computer Use、Record & Replay、workspace controls 和 Remote 权限。",
      "takeaway": "动作：录制稳定流程前先排除密钥和敏感数据，记录 workspace 权限和撤销路径。"
    },
    {
      "title": "Agents SDK 将 Codex 包成 tool",
      "author": "OpenAI Agents SDK",
      "source": "official-docs",
      "url": "https://openai.github.io/openai-agents-js/guides/tools/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Codex Tool",
      "summary": "experimental codexTool() 可把 workspace-scoped shell、文件编辑、MCP、thread reuse、streaming 和 output schema 接入 agent 应用。",
      "takeaway": "动作：自建 agent 调 Codex 时必须绑定 workingDirectory、sandboxMode、threadId、日志和输出结构。"
    },
    {
      "title": "Agents SDK 主栈继续收敛",
      "author": "OpenAI Agents SDK",
      "source": "official-docs",
      "url": "https://openai.github.io/openai-agents-python/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Agent Stack",
      "summary": "Agents SDK 以 agents、tools/handoffs、guardrails、tracing、evals 和 fine-tuning 构成轻量生产栈。",
      "takeaway": "动作：先定 agent、tool、handoff、guardrail、trace，再扩多 agent。"
    },
    {
      "title": "MCP 成为 agent 工具连接标准",
      "author": "OpenAI Agents SDK",
      "source": "official-docs",
      "url": "https://openai.github.io/openai-agents-js/guides/mcp/",
      "category": [
        "tools",
        "knowledge",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "MCP",
      "summary": "SDK 支持 hosted MCP、Streamable HTTP MCP 和 stdio MCP，工具与上下文连接正在标准化。",
      "takeaway": "动作：私有工具优先走本地或受控 MCP；远程 MCP 先过权限和数据边界检查。"
    },
    {
      "title": "GitHub Agentic Workflows 把自然语言自动化放进 Actions",
      "author": "GitHub / Microsoft",
      "source": "official-docs",
      "url": "https://github.github.com/gh-aw/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Safe Outputs",
      "summary": "gh-aw 用 Markdown 编写仓库自动化，在 GitHub Actions 中运行 coding agents，并提供 read-only token、safe outputs、sandbox、network firewall 和 cost controls。",
      "takeaway": "动作：日报发布复核、CI 巡检和 docs 同步先写 workflow 草案，compile 后人工 review。"
    },
    {
      "title": "Agentic Workflow engine 选择进入预算治理",
      "author": "GitHub Agentic Workflows",
      "source": "official-docs",
      "url": "https://github.github.com/gh-aw/reference/engines/",
      "category": [
        "workflow",
        "tools",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Engine Policy",
      "summary": "Copilot、Claude、Codex、Gemini 等 engine 对 web-search、tool allowlist、turn limits、timeouts 和 BYOK 支持不同。",
      "takeaway": "动作：按任务风险、预算、账号和工具白名单选 engine，不并发写同一对象。"
    },
    {
      "title": "Meta Muse Code 加剧 coding agent 成本竞争",
      "author": "Business Insider / Meta AI",
      "source": "public-news",
      "url": "https://www.businessinsider.com/meta-muse-coding-agent-race-openai-codex-anthropic-claude-2026-8",
      "category": [
        "hot",
        "accounts",
        "tools"
      ],
      "score": "MEDIUM",
      "tag": "Agent Cost",
      "summary": "Meta 进入 coding agent 竞争，Muse Code / Muse Spark 主打低价 token、agentic coding、computer use 和长上下文。",
      "takeaway": "动作：比较 coding agents 时固定任务、测试、日志、成本和隐私条款，不只看单价。"
    },
    {
      "title": "Obsidian second brain 变成 agent 工作台",
      "author": "Obsidian Community / GitHub",
      "source": "community-plugin",
      "url": "https://community.obsidian.md/plugins/agent-console",
      "category": [
        "knowledge",
        "workflow",
        "tools"
      ],
      "score": "MEDIUM",
      "tag": "Second Brain",
      "summary": "Agent Console、obsidian-second-brain、second-brain-mcp 等工具把 vault 接给 Codex、Claude、Gemini、MCP 和 scheduled agents。",
      "takeaway": "动作：知识库默认只读；写回必须有备份、diff、限定 notes、审批和回滚。"
    }
  ],
  "knowledge": [
    {
      "label": "01 / Tasks",
      "title": "自动化三层分工",
      "body": "ChatGPT Tasks 做提醒和轻量监控，Work 做长任务交付，Codex automation 做本地仓库执行和发布。"
    },
    {
      "label": "02 / Codex",
      "title": "Codex tool 封装清单",
      "body": "自建 agent 调 Codex 时，必须显式封装工作目录、沙箱、认证、线程复用、日志、输出结构和用量。"
    },
    {
      "label": "03 / GitHub",
      "title": "Agentic Workflow 安全门",
      "body": "自然语言仓库自动化默认只读，写操作只能通过 safe outputs、scoped write job 和人工可审查策略落地。"
    },
    {
      "label": "04 / Memory",
      "title": "Second-brain 写回阀",
      "body": "Obsidian/second-brain agent 可以读链接和写回决策，但写入 vault 前必须有备份、diff、审批和回滚。"
    }
  ]
};

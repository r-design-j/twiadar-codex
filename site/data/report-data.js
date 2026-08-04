window.AI_RADAR_REPORT = {
  "date": "2026-08-04",
  "updatedAt": "2026-08-04T09:02:36+08:00",
  "updatedLabel": "2026-08-04 09:02 CST",
  "conclusion": "今日主线是：AI 工作台正在从“多个入口分别提效”升级为“一个可治理的跨设备执行系统”。ChatGPT Work、桌面端 Chat/Work/Codex、Sites、Plugin Directory、Codex Remote GA 与 Record & Replay 把入口合并；Apple MLX 本地 agent 和多 Mac 推理把私有验证通道补齐。",
  "metrics": {
    "sourceCards": 13,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-08-04 的可复用变化集中在四块：四入口分工、本地 agent lane、双 agent 审查门、插件上架清单。",
    "今天的判断很明确：入口越统一，越要把读写权限、执行位置、验收证据和公开边界写成资产。"
  ],
  "signals": [
    {
      "title": "ChatGPT Work 把长任务放进统一工作台",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Work Surface",
      "summary": "ChatGPT Work 可研究、分析、跨连接应用和文件工作，并产出文档、表格、演示、报告和 Sites。",
      "takeaway": "动作：把 Chat 用于判断，Work 用于长任务交付，Codex 用于代码执行，Sites/Vercel 用于公开展示。"
    },
    {
      "title": "桌面端把 Chat/Work/Codex 收进一个应用",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Desktop Hub",
      "summary": "新桌面端统一 Chat、Work 和 Codex，并让 Codex 保持独立开发视图，支持 diffs、PR review、browser/computer use 等能力。",
      "takeaway": "动作：桌面端作为最终质检台；发布前在 Mac/Codex 上看 diff、测试和部署状态。"
    },
    {
      "title": "Codex Remote GA 强化手机派单台",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "hot",
        "mobile",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Remote GA",
      "summary": "Codex Remote 已面向所有 ChatGPT plans GA，手机可连接 Mac/Windows host、查看进度和批准动作。",
      "takeaway": "动作：iPhone 只负责派工、审批、状态和转向；diff 终审、密钥、发布和公开扫描回 Mac。"
    },
    {
      "title": "Apple MLX 给私有验证补本地 agent lane",
      "author": "Apple Developer",
      "source": "official-video",
      "url": "https://developer.apple.com/videos/play/wwdc2026/232/",
      "category": [
        "hot",
        "mobile",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Local Agent",
      "summary": "WWDC26 演示本地 agent loop、MLX-LM Server、OpenAI-compatible endpoint、OpenCode/Xcode 集成和 SwiftUI 构建修复。",
      "takeaway": "动作：私有代码先走本地读写、构建、复现和证据输出，再决定是否进入云端 agent。"
    },
    {
      "title": "多 Mac MLX 让本地 agent 可扩容",
      "author": "Apple Developer",
      "source": "official-video",
      "url": "https://developer.apple.com/videos/play/wwdc2026/233/",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Local Cluster",
      "summary": "MLX/JACCL/RDMA 可把推理和训练扩展到多台 Mac，缓解本地模型大小、吞吐和上下文处理压力。",
      "takeaway": "动作：先建立单机本地验证命令；稳定后再评估 Mac mini runner 或多 Mac 推理。"
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
      "summary": "Codex CLI 承载本地 coding agent、ChatGPT 登录、配置、approval mode、release binary、IDE/app 互通和 resume。",
      "takeaway": "动作：维护 install、login、version、approval、trusted project、config、resume、plugin 状态清单。"
    },
    {
      "title": "codex-plugin-cc 给跨 agent 审查做样本",
      "author": "OpenAI GitHub",
      "source": "official-github",
      "url": "https://github.com/openai/codex-plugin-cc",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Dual Review",
      "summary": "插件让 Claude Code 用户通过本地 Codex 调用 review、adversarial review、rescue、transfer 和 background jobs。",
      "takeaway": "动作：重要 PR 用主 agent 实现、Codex 只读审查或对抗审查，最后人工合并。"
    },
    {
      "title": "Plugin Directory 需要上架清单",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/20001256-plugins-in-codex/",
      "category": [
        "accounts",
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Plugin Governance",
      "summary": "插件可包含 skills、apps 和 app templates，并受计划、workspace、角色、地区和 app 权限限制。",
      "takeaway": "动作：安装前记录能力、账号连接、读写动作、角色范围、低风险测试和撤销路径。"
    },
    {
      "title": "Sites 把公开交付纳入 agent 工作流",
      "author": "OpenAI",
      "source": "official-product",
      "url": "https://openai.com/index/codex-for-every-role-tool-workflow/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Sites Delivery",
      "summary": "Codex/Sites 把报告、仪表盘、项目板和轻量工具变成可分享网页，适合从 Markdown 扩展到公开数据产品。",
      "takeaway": "动作：公开站点必须有数据契约、URL、隐私扫描、部署状态和失败回退。"
    },
    {
      "title": "GitHub Agentic Workflows 固化自然语言自动化",
      "author": "GitHub Docs",
      "source": "official-docs",
      "url": "https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/about-github-agentic-workflows",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Workflow as Code",
      "summary": "Markdown/frontmatter 可声明触发、权限、网络和 safe outputs，再编译成 hardened Actions。",
      "takeaway": "动作：把日报巡检、CI 调查和发布状态报告写成仓库 workflow 草案，先手动触发。"
    },
    {
      "title": "Disney 工具切换提示企业采用进入度量期",
      "author": "Business Insider",
      "source": "public-news",
      "url": "https://www.businessinsider.com/disney-microsoft-github-copilot-openai-codex-ai-tools-claude-cursor-2026-7",
      "category": [
        "accounts",
        "workflow"
      ],
      "score": "MEDIUM",
      "tag": "Enterprise Signal",
      "summary": "报道显示大型企业开始按使用率、开发速度、成本和满意度重配 AI coding 工具组合。",
      "takeaway": "动作：个人自动化也记录完成率、验证失败、部署状态、预算和人工拍板项。"
    },
    {
      "title": "Atlas 退场提醒浏览器边界治理",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "knowledge",
        "tools"
      ],
      "score": "MEDIUM",
      "tag": "Browser Boundary",
      "summary": "Atlas 将于 2026-08-09 停止工作，浏览器型 agent 能力转向 ChatGPT/Codex 桌面体验。",
      "takeaway": "动作：浏览器自动化只记录公开链接和总结，不记录 cookie、书签、历史记录、截图或登录态。"
    }
  ],
  "knowledge": [
    {
      "label": "01 / Surface",
      "title": "四入口分工表",
      "body": "Chat 做判断，Work 做长任务，Codex 做代码和本地执行，Sites/Vercel 做公开交付；每类入口分别写成功标准和权限。"
    },
    {
      "label": "02 / Local",
      "title": "本地 agent lane",
      "body": "私有代码、离线验证和高频构建先走本地模型/本地 agent，输出构建和复现证据后再决定是否上云。"
    },
    {
      "label": "03 / Review",
      "title": "双 agent 审查门",
      "body": "主 agent 规划/实现，第二 agent 只读审查或对抗审查，最后由人类看 diff/test/deploy 后合并。"
    },
    {
      "label": "04 / Plugin",
      "title": "插件上架清单",
      "body": "安装插件前记录包含能力、外部账号、读写动作、角色范围、低风险测试和撤销路径。"
    }
  ]
};

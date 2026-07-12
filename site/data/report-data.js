window.AI_RADAR_REPORT = {
  "date": "2026-07-12",
  "updatedAt": "2026-07-12T09:00:00+08:00",
  "updatedLabel": "2026-07-12 09:00 CST",
  "conclusion": "今日主线是：GPT-5.6 把 Codex/GPT 工作流从“单个最强模型”推进到“按任务路由模型、工具、subagents 和审批边界”的阶段，iPhone 继续负责控制，Mac 负责验收。",
  "metrics": {
    "sourceCards": 12,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-07-12 的核心变化不是只多了一个新模型，而是 Sol/Terra/Luna、Programmatic Tool Calling、Multi-agent beta、Codex desktop 和 Remote 共同构成了新的工作流分层。",
    "今天新增的可复用资产集中在四块：模型路由白名单、PTC 工具流水线、ChatGPT desktop 验收台、更强 agent 的硬边界。"
  ],
  "signals": [
    {
      "title": "GPT-5.6 把模型选择变成工作流路由问题",
      "author": "OpenAI",
      "source": "official",
      "url": "https://openai.com/index/gpt-5-6/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "GPT-5.6",
      "summary": "Sol、Terra、Luna 同时进入 GA，覆盖高难任务、日常任务和高频低成本任务；Codex、ChatGPT Work、API 都被放进同一套模型家族里。",
      "takeaway": "动作：给 AI Radar 加一条路由规则：难题用 Sol/max，常规自动化用 Terra，批量摘要用 Luna。"
    },
    {
      "title": "ChatGPT / Work / Codex 的 GPT-5.6 可用范围并不相同",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/20001354",
      "category": [
        "hot",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Access",
      "summary": "标准 ChatGPT 对话、ChatGPT Work、Codex 和 API 的模型选择入口不同，尤其是 Codex/Work 更强调 Sol、Terra、Luna 与 effort 的组合。",
      "takeaway": "动作：写操作说明时不要只说“切 GPT-5.6”，要写清在哪个产品里点哪里、选哪个层级。"
    },
    {
      "title": "Programmatic Tool Calling 适合“工具流水线”，不适合所有判断",
      "author": "OpenAI Developers",
      "source": "official-docs",
      "url": "https://developers.openai.com/api/docs/guides/tools-programmatic-tool-calling",
      "category": [
        "tools",
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "PTC",
      "summary": "PTC 让模型写并运行受限 JavaScript 来协调工具、过滤中间结果、减少模型往返；但需要边界、schema、重试和停止条件。",
      "takeaway": "动作：把 source-card 去重、排序、字段校验交给 PTC；把“是否值得沉淀”留给模型判断。"
    },
    {
      "title": "Responses API Multi-agent beta 让 subagents 成为一等能力",
      "author": "OpenAI Developers",
      "source": "official-docs",
      "url": "https://developers.openai.com/api/docs/guides/tools-multi-agent",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Multi-agent",
      "summary": "GPT-5.6 可在一次 Responses 请求里并行派 subagents，再由 root agent 汇总，适合代码库探索、文档和实现类任务。",
      "takeaway": "动作：只拆天然并行的角色：采集、核验、实验、发布；不要为了“看起来高级”拆。"
    },
    {
      "title": "Codex 进入 ChatGPT 桌面端，Mac 变成统一验收台",
      "author": "OpenAI Learn",
      "source": "official-changelog",
      "url": "https://learn.chatgpt.com/docs/changelog",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Desktop",
      "summary": "Codex 加入 ChatGPT desktop app，支持直接编辑 Markdown/代码、侧栏看 PR review、一个项目跨多个 repo。",
      "takeaway": "动作：Mac 上把 ChatGPT desktop 当控制室，日报、PR、代码和部署验证在同一入口收口。"
    },
    {
      "title": "Codex CLI 0.144 的 writes 模式把只读和写入分层",
      "author": "OpenAI Learn",
      "source": "official-changelog",
      "url": "https://learn.chatgpt.com/docs/changelog",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Approval",
      "summary": "CLI 新增 declared read-only 放行、写入再确认的 approval mode，并在 Ultra 高并发时提示用量可能快速上涨。",
      "takeaway": "动作：采集类自动化默认只读；进入写文件、commit、deploy 前再显式进入写入阶段。"
    },
    {
      "title": "GPT-5.6 System Card 提醒更强 agent 更需要硬边界",
      "author": "OpenAI Deployment Safety",
      "source": "official-safety",
      "url": "https://deploymentsafety.openai.com/gpt-5-6",
      "category": [
        "knowledge",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Safety",
      "summary": "系统卡强调更强 cyber/bio 能力、更强 safeguards，也指出 agentic coding 任务中存在越过用户意图的风险。",
      "takeaway": "动作：给 Codex 任务写清停止条件、可写范围、审批点和最终 diff 复核，尤其别让安全类任务自动放权。"
    },
    {
      "title": "iPhone 的定位是 Codex 控制台，不是小号 IDE",
      "author": "Thomas Ricouard / OpenAI Developers",
      "source": "official-blog",
      "url": "https://learn.chatgpt.com/blog/mastering-codex-remote-for-engineering",
      "category": [
        "mobile",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Remote",
      "summary": "Remote 文章把手机定义成 control plane：选 host、workspace、worktree，决定 queue/steer，做审批和轻复核。",
      "takeaway": "动作：iPhone 负责派活、转向、审批和整理队列；Mac 负责深度 review、提交和发布。"
    },
    {
      "title": "Secure MCP Tunnel 给私有工具一个“不公开也可用”的路径",
      "author": "Denys Kurylenko / OpenAI Developers",
      "source": "official-blog",
      "url": "https://learn.chatgpt.com/blog/connect-private-mcp-servers-to-openai-products",
      "category": [
        "tools",
        "knowledge",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "MCP",
      "summary": "OpenAI 的私有 MCP 方案强调 outbound-only、显式目的地、客户侧可审计客户端，不把私有服务直接暴露到公网。",
      "takeaway": "动作：本地桥和 MCP 只走白名单与出站连接思路；任何公网 tunnel 都先单独拍板。"
    },
    {
      "title": "GitHub Copilot 也接入 GPT-5.6，模型路由要跨工具迁移",
      "author": "GitHub Changelog",
      "source": "platform-changelog",
      "url": "https://github.blog/changelog/2026-07-09-openais-gpt-5-6-sol-terra-and-luna-are-now-available-in-github-copilot/",
      "category": [
        "tools",
        "accounts"
      ],
      "score": "MED",
      "tag": "Copilot",
      "summary": "GPT-5.6 出现在 GitHub Copilot，说明 Sol/Terra/Luna 的选择不只发生在 OpenAI 产品内。",
      "takeaway": "动作：沉淀一张“模型选择白名单”，按任务难度、成本、工具权限、验收要求来选，而不是按产品名选。"
    },
    {
      "title": "CLI coding agent 采用率研究把“省时间”变成可测指标",
      "author": "Microsoft researchers / arXiv",
      "source": "paper",
      "url": "https://arxiv.org/abs/2607.01418",
      "category": [
        "knowledge",
        "workflow"
      ],
      "score": "MED",
      "tag": "Adoption",
      "summary": "研究用 Microsoft 早期 2026 rollout 观察 CLI coding agents 的采用、留存和合并 PR 增长，同时提醒 PR 数只是价值代理指标。",
      "takeaway": "动作：评估 Codex 不只看跑了多少任务，还看留存、合并质量、返工、成本和同伴可见使用。"
    },
    {
      "title": "GPT-5.6 原始图片尺寸和 computer use 改进利好视觉验收",
      "author": "OpenAI Developers",
      "source": "official-docs",
      "url": "https://developers.openai.com/api/docs/guides/latest-model",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "MED",
      "tag": "Visual QA",
      "summary": "模型 guidance 提到原始图像 detail、computer use、frontend design 改进，适合把设计/站点检查做成可复核流程。",
      "takeaway": "动作：需要看 UI 时保留原图细节，让 agent 先观察截图，再给出像素/布局级验收建议。"
    }
  ],
  "knowledge": [
    {
      "label": "01 / Routing",
      "title": "模型选择是一张工作流白名单",
      "body": "不要笼统说“用最强模型”。把任务分成高难推理、日常自动化、高频摘要和人工终审四类，再选择 Sol、Terra、Luna、max、pro 或 ultra。"
    },
    {
      "label": "02 / PTC",
      "title": "PTC 只接管有边界的工具流水线",
      "body": "Programmatic Tool Calling 适合去重、排序、字段校验、批量工具调用等确定性阶段；是否值得沉淀、是否要发布仍交回模型和人复核。"
    },
    {
      "label": "03 / Desktop",
      "title": "ChatGPT 桌面端是 Mac 验收台",
      "body": "Codex 进入 ChatGPT desktop 后，Mac 可以统一承担查看 diff、编辑 Markdown、读 PR feedback、跑验证和发布前复核。"
    },
    {
      "label": "04 / Boundary",
      "title": "更强 agent 更需要硬边界",
      "body": "模型越会用工具，越要写清目标、可写范围、审批点、停止条件和最终验收物；只读采集与写入发布必须分阶段。"
    }
  ]
}
;

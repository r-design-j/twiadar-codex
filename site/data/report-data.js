window.AI_RADAR_REPORT = {
  "date": "2026-08-12",
  "updatedAt": "2026-08-12T09:33:43+08:00",
  "updatedLabel": "2026-08-12 09:33 CST",
  "conclusion": "今日主线是：高能力 agent 已经进入模型路由、上下文缓存、记忆范围、本地/云端执行和成本停止条件共同治理的阶段。GPT-5.6 guidance、API pricing、Models、Codex changelog、Copilot app、BYOK、Memory 和 usage governance 共同说明：下一步不是单纯追更强模型，而是给每个任务留下路由小票，说明为什么选这个模型、是否允许 sidecar/PTC/缓存/记忆、预算怎么停、最终用什么证据验收。",
  "metrics": {
    "sourceCards": 14,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-08-12 的可复用变化集中在四块：路由小票、缓存成本四分账、记忆范围闸、BYOK 数据边界单。",
    "今天的判断很明确：agent 工作台越强，越要把模型、缓存、记忆、预算和最终验收从隐性习惯变成显性记录。"
  ],
  "signals": [
    {
      "title": "GPT-5.6 guidance 把模型路由工程化",
      "author": "OpenAI API docs",
      "source": "official-docs",
      "url": "https://developers.openai.com/api/docs/guides/latest-model",
      "category": [
        "hot",
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Model Routing",
      "summary": "官方指南把 Sol/Terra/Luna、Programmatic Tool Calling、Multi-agent beta、explicit prompt caching、persisted reasoning、max effort 和 pro mode 放进迁移路线。",
      "takeaway": "动作：为每类任务写模型路由表，记录模型、effort、PTC、多 agent、缓存和停止条件。"
    },
    {
      "title": "API pricing 让缓存成本显性化",
      "author": "OpenAI",
      "source": "official-pricing",
      "url": "https://openai.com/api/pricing/",
      "category": [
        "hot",
        "workflow",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Cost Control",
      "summary": "Sol/Terra/Luna 的输入、缓存输入和输出价格公开化；GPT-5.6 cache writes 按 uncached input 的 1.25 倍计费。",
      "takeaway": "动作：长任务成本拆成 uncached input、cache write、cache read 和 output 四类记录。"
    },
    {
      "title": "Models 页明确 Sol/Terra/Luna 的适用面",
      "author": "OpenAI API docs",
      "source": "official-docs",
      "url": "https://developers.openai.com/api/docs/models",
      "category": [
        "hot",
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Model Catalog",
      "summary": "模型目录列出 GPT-5.6 Sol/Terra/Luna 的模型 ID、上下文窗口、最大输出、工具能力、价格和定位。",
      "takeaway": "动作：高质量判断、高吞吐筛选和低成本格式检查分配到不同模型与 effort。"
    },
    {
      "title": "GPT-5.6 发布页连接 Chat、Codex 和 API",
      "author": "OpenAI",
      "source": "official-product-release",
      "url": "https://openai.com/index/gpt-5-6/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Surface Scope",
      "summary": "发布页说明 GPT-5.6 family 覆盖 ChatGPT、Codex 和 API，并强调 prompt caching、PTC 和 multi-agent。",
      "takeaway": "动作：迁移时按 Chat、Work、Codex、API 分表验证，不把一个入口体验外推到全部。"
    },
    {
      "title": "ChatGPT Release Notes 继续提示入口边界",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "mobile",
        "workflow",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Voice Projects",
      "summary": "Release notes 区分 ChatGPT、Voice、Projects 和模型表面变化，适合判断移动/语音入口与最终执行面的关系。",
      "takeaway": "动作：Voice/Projects 做输入和转向，最终仍由 Mac/Codex 的本地证据收口。"
    },
    {
      "title": "Codex changelog 仍是本地自动化边界源",
      "author": "OpenAI Codex team",
      "source": "official-changelog",
      "url": "https://developers.openai.com/codex/changelog",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Codex CLI",
      "summary": "Codex CLI 的插件、长会话分段、自动审批、MCP 支持和 secret redaction 是本地 agent 自动化的关键执行边界。",
      "takeaway": "动作：写 approval 白名单、插件来源、MCP 范围、secret redaction 和长会话分段证据。"
    },
    {
      "title": "ChatGPT & Codex changelog 适合做高权限入口判断",
      "author": "OpenAI / ChatGPT & Codex",
      "source": "official-changelog",
      "url": "https://learn.chatgpt.com/docs/changelog",
      "category": [
        "workflow",
        "accounts",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Access Surface",
      "summary": "该 changelog 汇总 ChatGPT、Codex、Daybreak、workspace/API organization、项目和产品表面边界。",
      "takeaway": "动作：高权限 agent 任务记录批准身份、组织、项目、模型、产品表面、scope、reviewer 和日志。"
    },
    {
      "title": "Codex CLI Help 明确本地执行面",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/11096431",
      "category": [
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Local Agent",
      "summary": "Help Center 对 Codex CLI 的本地读写、命令执行、approval modes 和 multimodal 输入做了入门边界说明。",
      "takeaway": "动作：任何写入、命令和外部动作都走 sandbox、approval 和 diff 验收。"
    },
    {
      "title": "Codex meetups 显示实践开始社区化",
      "author": "OpenAI Developers",
      "source": "official-community",
      "url": "https://developers.openai.com/community/meetups",
      "category": [
        "knowledge",
        "accounts"
      ],
      "score": "MED",
      "tag": "Community",
      "summary": "OpenAI Developers 列出 Codex community meetups，说明 Codex 实践正在从工具文档进入社区方法沉淀。",
      "takeaway": "动作：社区案例只在有公开链接、可复现链路和边界说明时进入日报。"
    },
    {
      "title": "Copilot app 把 agent 工作台对象化",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-06-17-github-copilot-app-generally-available/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Agent Desktop",
      "summary": "Copilot app 把 issue/prompt、worktree、branch、terminal、browser、PR、cloud automation 和 MCP 组织成桌面 agent 工作台。",
      "takeaway": "动作：个人 Codex 工作流绑定到文件、命令、运行检查、PR 或发布出口这些可验收对象。"
    },
    {
      "title": "Copilot app available to all 显示入口下沉",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-07-github-copilot-app-available-to-all/",
      "category": [
        "workflow",
        "tools",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Access",
      "summary": "Copilot app 扩展到所有 Copilot plan，并保留 BYOK 路径，显示 agent desktop 的入口正在下沉。",
      "takeaway": "动作：区分入口可用性、组织策略、模型供应商和真实写入权限。"
    },
    {
      "title": "Copilot BYOK 把模型选择变成数据边界选择",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-06-23-github-copilot-app-support-for-byok/",
      "category": [
        "workflow",
        "tools",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "BYOK",
      "summary": "Copilot app 支持 OpenAI、Azure OpenAI、Anthropic、LM Studio、Ollama 和 OpenAI-compatible endpoint，key 存本地 OS keychain。",
      "takeaway": "动作：BYOK 前写清数据发往哪里、谁计费、谁保留日志、key 存储和如何停用。"
    },
    {
      "title": "Copilot Memory 强调删除、范围和 CLI 控制",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-05-26-copilot-memory-has-more-controls-for-deletion-scope-and-the-copilot-cli/",
      "category": [
        "knowledge",
        "workflow",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Memory Scope",
      "summary": "Copilot Memory 增加删除指引、仓库级关闭、CLI `/memory` 控制，并在写入时区分用户级偏好和仓库级事实。",
      "takeaway": "动作：个人 Codex 记忆区分用户偏好、仓库事实、临时判断和过期内容。"
    },
    {
      "title": "Copilot changelog 提供治理型更新雷达",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/label/copilot/",
      "category": [
        "workflow",
        "tools",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "Governance",
      "summary": "Copilot changelog 汇总 usage metrics、AI credit pools、managed settings、MCP、agent controls、BYOK 和 Memory 等治理型更新。",
      "takeaway": "动作：每周复盘成本、权限、记忆、模型供应商、组织策略和采用阶段，而不是只看新功能。"
    }
  ],
  "knowledge": [
    {
      "label": "Routing",
      "title": "路由小票",
      "body": "每个 agent 任务启动前记录模型、effort、多 agent、PTC、缓存、记忆、预算和最终验收证据。"
    },
    {
      "label": "Cache",
      "title": "缓存成本四分账",
      "body": "长会话成本至少拆成 uncached input、cache write、cache read、output，而不是只看总 token。"
    },
    {
      "label": "Memory",
      "title": "记忆范围闸",
      "body": "用户偏好、仓库事实、项目约定和临时任务判断必须分层存放，并支持删除、关闭、审计和过期。"
    },
    {
      "label": "BYOK",
      "title": "BYOK 数据边界单",
      "body": "自带模型 key 先回答数据发往哪里、谁计费、谁保留日志、key 存哪里、如何停用，再谈模型能力。"
    }
  ]
};

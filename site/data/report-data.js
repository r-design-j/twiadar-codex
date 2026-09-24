window.AI_RADAR_REPORT = {
  "date": "2026-09-25",
  "updatedAt": "2026-09-25T09:00:00+08:00",
  "updatedLabel": "2026-09-25 09:00 CST",
  "conclusion": "今天的主线是“agent 进入可约束、可观测、可复查阶段”：GitHub Copilot app 把本地沙箱和 OpenTelemetry 放到企业管理面，Copilot code review 把个人与企业默认 effort 变成可配置项，Actions Node 20 退役把 CI 运行时迁移推到硬截止；Codex stable、Copilot CLI 和 OpenAI SDK 同步补齐 GPT-6 Sol/Luna、外部存储、工具调用与文档边界；OpenAI 的 LED display 实作则给出一条 Voice + Mac + Codex + local device 的真实协作链路。",
  "metrics": {
    "sourceCards": 12,
    "topSignals": 5,
    "knowledgeCards": 5
  },
  "excerpt": [
    "2026-09-25 的重点是 Local Agent Sandbox Receipt、Agent Telemetry Boundary、Review Effort Policy Ladder、Node 24 Actions Migration Gate、Voice-to-Device Codex Loop。",
    "白话说: AI 工具不只是更会干活了，现在开始像正规施工队一样，有围挡、有监控、有审稿标准、有设备迁移表，还有能把语音指令落到真实硬件的小工作流。"
  ],
  "signals": [
    {
      "title": "Local sandboxing in the GitHub Copilot app",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app",
      "category": [
        "hot",
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Local Sandbox",
      "summary": "Copilot app public preview adds per-project local sandbox policy for filesystem, network and credentials, with enterprise settings able to tighten the effective policy.",
      "takeaway": "动作: Before local agent sessions, record requested sandbox policy, enterprise overrides, session scope and whether the OS can enforce it."
    },
    {
      "title": "OpenTelemetry in the GitHub Copilot app",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app",
      "category": [
        "hot",
        "workflow",
        "accounts",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Agent Telemetry",
      "summary": "Enterprise-managed OTel lets organizations trace Copilot agent sessions, model calls and tool use in existing monitoring systems while prompt/response content stays excluded by default.",
      "takeaway": "动作: Treat telemetry as an observability contract: endpoint, labels, content-capture setting and retention must be explicit."
    },
    {
      "title": "More ways to request and configure Copilot code reviews",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-23-copilot-code-review-more-ways-to-request-and-configure-reviews",
      "category": [
        "hot",
        "workflow",
        "accounts",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Review Policy",
      "summary": "Copilot code review now has a dedicated personal settings page, automatic review controls for PR states and pushes, and enterprise-level default review effort inheritance.",
      "takeaway": "动作: Separate personal defaults, enterprise defaults, org/repo overrides and one-off manual review effort in review receipts."
    },
    {
      "title": "Node 20 is no longer available in GitHub Actions",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-09-23-node-20-is-no-longer-available-in-github-actions",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "CI Runtime",
      "summary": "GitHub Actions runners now use Node 24 for JavaScript actions, the temporary insecure Node opt-out is gone, and old macOS or ARM32 self-hosted runners are outside support.",
      "takeaway": "动作: Scan JavaScript actions for runs.using=node20 and verify self-hosted runner OS/architecture before the next release train."
    },
    {
      "title": "OpenAI Codex 0.156.1 stable",
      "author": "OpenAI / GitHub Releases",
      "source": "official-release",
      "url": "https://github.com/openai/codex/releases/tag/rust-v0.156.1",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Codex Model Picker",
      "summary": "Codex stable adds GPT-6 Sol and GPT-6 Luna to the model picker and updates the rate-limit switch prompt to recommend Luna.",
      "takeaway": "动作: Update Codex model routing receipts so Sol/Luna selection is recorded with task shape, cost intent and fallback behavior."
    },
    {
      "title": "Copilot CLI 1.0.89-1 prerelease",
      "author": "GitHub Copilot CLI Releases",
      "source": "official-release",
      "url": "https://github.com/github/copilot-cli/releases/tag/v1.0.89-1",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "MED",
      "tag": "CLI Queue Hygiene",
      "summary": "The prerelease adds GPT-6 Sol/Luna to the picker, fixes line-range handling in view tools, and keeps queued prompts queued when recalling a pending message.",
      "takeaway": "动作: In CLI agent receipts, distinguish pending-message recall from queued prompt execution and verify file view ranges."
    },
    {
      "title": "OpenAI Node 7.23.0",
      "author": "OpenAI SDKs",
      "source": "official-release",
      "url": "https://github.com/openai/openai-node/releases/tag/v7.23.0",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "SDK Storage",
      "summary": "Node SDK adds GCP external storage support, GPT-Rosalind research model identifiers, and documentation for exact Chat Completions seed bounds.",
      "takeaway": "动作: Treat SDK upgrades as data-plane changes: storage provider, model allowlist and deterministic seed tests all need readback."
    },
    {
      "title": "OpenAI Python 3.19.2 / 3.19.1",
      "author": "OpenAI SDKs",
      "source": "official-release",
      "url": "https://github.com/openai/openai-python/releases/tag/v3.19.2",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Python Tooling",
      "summary": "Python SDK fixes fallback file extraction, single-pass tool iterables and case-insensitive header merging while clarifying web-search location, Realtime modalities and fine-tuning bounds.",
      "takeaway": "动作: Add fixtures for one-shot tool iterables, fallback file extraction and approximate web-search location defaults before bumping runtime dependencies."
    },
    {
      "title": "GPT-6 Sol and GPT-6 Luna in the OpenAI API changelog",
      "author": "OpenAI API Changelog",
      "source": "official-docs",
      "url": "https://developers.openai.com/api/docs/changelog",
      "category": [
        "hot",
        "workflow",
        "tools",
        "accounts"
      ],
      "score": "HIGH",
      "tag": "API Model Cost",
      "summary": "OpenAI documents GPT-6 Sol and Luna availability for Responses and Chat Completions, including standard token pricing and long-context pricing caveats.",
      "takeaway": "动作: Keep API model routing tied to price tier, context length and cache assumptions, not just model labels seen in a picker."
    },
    {
      "title": "Agents API managed Codex harness",
      "author": "OpenAI API Docs",
      "source": "official-docs",
      "url": "https://developers.openai.com/api/docs/guides/agents-api/overview",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Managed Harness",
      "summary": "The Agents API gives applications durable sessions, managed Codex orchestration, context compaction, recovery, sandboxes, MCP connections and subagent delegation.",
      "takeaway": "动作: Design hosted agents with session, environment, events and billing receipts before adding autonomous write tools."
    },
    {
      "title": "Bringing my LED display to life with GPT-Live-1 and Codex",
      "author": "OpenAI Developers",
      "source": "official-blog",
      "url": "https://developers.openai.com/blog/bringing-my-led-display-to-life",
      "category": [
        "mobile",
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "MED",
      "tag": "Voice Device Loop",
      "summary": "The project combines Voice in ChatGPT desktop, Codex-built rendering skills, a Mac renderer, local network DDP frames and later GPT-Live-1 delegation to update a physical LED wall.",
      "takeaway": "动作: Prototype voice-to-device workflows by splitting human feedback, local renderer, device controller and model delegation into separate receipts."
    },
    {
      "title": "Claude Code 2.1.281",
      "author": "Anthropic / GitHub Releases",
      "source": "official-release",
      "url": "https://github.com/anthropics/claude-code/releases/tag/v2.1.281",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "MED",
      "tag": "Agent Resilience Comparator",
      "summary": "Claude Code 2.1.281 is a dense comparator for agent reliability: gateway policies, Bedrock guardrails, MCP validation, resume repair, stream recovery, dangerous rm prompts and setting propagation.",
      "takeaway": "动作: Use it as a cross-agent checklist for resume integrity, prompt-cache preservation, sandbox trust and dangerous-command handling."
    }
  ],
  "knowledge": [
    {
      "title": "Local Agent Sandbox Receipt",
      "label": "SANDBOX OPS",
      "body": "把本地 agent 的文件、网络和凭证权限记录成可回读的小票，而不是只写“开了沙箱”。",
      "summary": "先围施工区，再开工。",
      "steps": [
        "记录项目级默认、会话级开关、企业托管设置和实际生效策略。",
        "把 additional read/write、read-only、denied folders、outbound internet、local network 和 credentials 分开。",
        "确认当前 OS 能执行该策略；不能执行时应失败停止。",
        "沙箱变更只声明影响新会话、重启会话或当前会话，不混写。"
      ],
      "risk": "请求的策略和实际生效策略可能不同；企业设置和 OS 能力会让结果更严格或直接失败。"
    },
    {
      "title": "Agent Telemetry Boundary",
      "label": "OBSERVABILITY",
      "body": "给 agent 监控建立边界：看流程、工具和模型调用，但内容采集要单独审批。",
      "summary": "装监控，不等于直播工位。",
      "steps": [
        "记录 OTel endpoint、resource attributes、owner、环境和启用范围。",
        "默认不采集 prompt/response 内容；如要采集，另走审批和保留策略。",
        "把 model request、tool use、session flow 和错误调查分成不同 trace 视角。",
        "公开报告只写观测能力和方法，不写监控端点或敏感 span 内容。"
      ],
      "risk": "可观测性如果没有内容边界，会从排障工具变成隐私和合规风险。"
    },
    {
      "title": "Review Effort Policy Ladder",
      "label": "CODE REVIEW",
      "body": "Copilot review effort 要按个人、企业、组织、仓库和单次请求分层记录。",
      "summary": "审稿标准要看谁定的。",
      "steps": [
        "记录个人 automatic review、draft PR、新 push 和默认 effort。",
        "记录企业默认 effort 以及组织/仓库覆盖关系。",
        "手动请求 review 时保存当次选择，避免误以为等于默认值。",
        "比较效果时同时记录 Lite/Balanced、PR 类型和触发来源。"
      ],
      "risk": "review effort 混在一起，会让代码审查质量、成本和责任边界都难以复盘。"
    },
    {
      "title": "Node 24 Actions Migration Gate",
      "label": "CI MIGRATION",
      "body": "JavaScript Actions 迁移到 Node 24 是运行时硬门槛，要做仓库和 runner 两侧扫描。",
      "summary": "流水线换发动机。",
      "steps": [
        "扫描 action.yml/action.yaml 中 runs.using=node20 的自研 action。",
        "升级到 node24 后发布新 tag，并让下游 workflow 引用新版本。",
        "盘点 self-hosted runner 的 macOS 和架构，老 macOS 与 ARM32 需要替换。",
        "删除依赖临时 opt-out 的流程，并跑一次真实 workflow smoke。"
      ],
      "risk": "只升级官方 action 不够；自研 action 和自托管 runner 才是最容易被漏掉的断点。"
    },
    {
      "title": "Voice-to-Device Codex Loop",
      "label": "MOBILE WORKFLOW",
      "body": "把语音、Codex、本地渲染器和实体设备拆成可调试链路。",
      "summary": "对着墙说话，也要有分工。",
      "steps": [
        "先定义人类反馈入口：Voice、桌面 ChatGPT 或移动端指令。",
        "让 Codex 负责 renderer、skill 和集成代码，但由人反馈真实显示效果。",
        "本地 Mac/设备 controller 只接收明确帧或命令，避免模型直接碰设备权限。",
        "记录每次迭代的目标、视觉问题、代码变更和设备读回。"
      ],
      "risk": "实体设备反馈不能靠日志替代；看得清、听得懂、能恢复才算可用。"
    }
  ]
};

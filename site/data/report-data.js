window.AI_RADAR_REPORT = {
  "date": "2026-08-10",
  "updatedAt": "2026-08-10T09:36:42+08:00",
  "updatedLabel": "2026-08-10 09:36 CST",
  "conclusion": "今日主线是：AI 工作台正在从“多入口统一”进入“插件目录 + 多模态控制 + 权限治理 + 可复用技能”的阶段。Codex CLI 0.147.0、Voice in Work/Codex、Chat/Work/Codex 桌面入口、Atlas 退场、Plugins 权限继承、Record & Replay、Agents SDK v0.19.4、GitHub MCP stateless、AGENTS.md review 和 worktrees 共同说明：下一步重点不是多开 agent，而是把入口、权限、浏览器状态、技能录制、协议验收和发布证据做成固定清单。",
  "metrics": {
    "sourceCards": 15,
    "topSignals": 5,
    "knowledgeCards": 4
  },
  "excerpt": [
    "2026-08-10 的可复用变化集中在四块：Voice 控制面验收环、浏览器状态分层迁移、插件权限上架单、可回放 skill 录制门。",
    "今天的判断很明确：Voice、Remote、Work、Codex、Sites、Plugins 都只是入口和能力包；完成仍要看文件、测试、diff、push、deploy 和 Ready 证据。"
  ],
  "signals": [
    {
      "title": "Codex CLI 0.147.0 加入插件目录和长会话分段",
      "author": "OpenAI Codex team",
      "source": "official-changelog",
      "url": "https://developers.openai.com/codex/changelog",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Codex Plugins",
      "summary": "2026-08-07 官方更新加入可移植 Agent Plugins，可搜索本地、个人、工作区和远程目录，并支持持久化会话分段。",
      "takeaway": "动作：先在低风险仓库试跑插件目录；长任务按目标、执行、验证、复盘分段。"
    },
    {
      "title": "Voice 进入 Work/Codex 桌面控制面",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "hot",
        "workflow",
        "mobile"
      ],
      "score": "HIGH",
      "tag": "Voice Control",
      "summary": "7 月 23 日 release notes 说明 ChatGPT Voice 可在桌面端 Work 和 Codex 中启动、打断和协调任务。",
      "takeaway": "动作：Voice 只做控制面；最终仍用 Mac/Codex 的文件、测试、diff 和发布证据收口。"
    },
    {
      "title": "Chat、Work、Codex 入口边界被明确",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/20001275",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Entry Boundary",
      "summary": "Work 负责长任务和成品交付，Codex 负责软件开发和技术执行，Codex 不作为 web/mobile selectable experience。",
      "takeaway": "动作：任务记录中固定写入口、设备、读写边界、成功证据和停止条件。"
    },
    {
      "title": "Atlas 退场强化浏览器状态分层",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "category": [
        "hot",
        "mobile",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Browser Migration",
      "summary": "Atlas 已计划在 2026-08-09 停止工作，迁移涉及书签、标签页、历史、cookies/passwords 和 ChatGPT conversation history。",
      "takeaway": "动作：公开日报只写公开链接和总结，浏览器截图、cookie、书签和登录态只做本地验收。"
    },
    {
      "title": "插件变成 workflow 容器而非权限本身",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/20001256-plugins-in-chatgpt-and-codex",
      "category": [
        "accounts",
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Plugin Policy",
      "summary": "Plugins 可包含 skills、apps 和 app templates，但 app-backed 能力仍继承 workspace 与源系统权限。",
      "takeaway": "动作：启用插件前写权限上架单，默认只读，写动作保留确认门。"
    },
    {
      "title": "Sites 发布要区分草稿、预览和公开 URL",
      "author": "OpenAI Help Center",
      "source": "official-help",
      "url": "https://help.openai.com/en/articles/20001339",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Sites Publish",
      "summary": "Sites 可把 Work/Codex 产物变成公开网站，但 public publish 和 workspace policy 必须单独验收。",
      "takeaway": "动作：把 local_validated、github_pushed、vercel_ready、public_alias_readback 分开记录。"
    },
    {
      "title": "Record & Replay 把演示流程变成 skill",
      "author": "OpenAI Codex Learn",
      "source": "official-docs",
      "url": "https://learn.chatgpt.com/docs/extend/record-and-replay",
      "category": [
        "workflow",
        "tools",
        "knowledge"
      ],
      "score": "HIGH",
      "tag": "Replay Skill",
      "summary": "Record & Replay 可把一次人工演示转成 Codex skill，适合重复、低风险、可回滚流程。",
      "takeaway": "动作：录制前排除凭证、私密页面、不可逆提交和外部写动作；生成 skill 后审查再烟测。"
    },
    {
      "title": "Codex Browser 只读采集需要证据环",
      "author": "OpenAI Codex Learn",
      "source": "official-docs",
      "url": "https://learn.chatgpt.com/docs/browser?surface=app",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Browser Evidence",
      "summary": "Codex browser 支持网页和前端工作，但浏览器状态和过程证据不应进入公开材料。",
      "takeaway": "动作：观察前态、声明动作、执行、回传新状态、验收；遇到登录/验证码立即停。"
    },
    {
      "title": "Agents SDK Codex tool 需要沙箱和结构化输出",
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
      "summary": "Codex tool 可让上层 agent 调用 Codex SDK 执行 workspace-scoped 任务。",
      "takeaway": "动作：绑定 workingDirectory、sandboxMode、threadId 策略、stream logs 和严格 outputSchema。"
    },
    {
      "title": "Agents SDK v0.19.4 修复长流程可靠性问题",
      "author": "OpenAI Agents SDK maintainers",
      "source": "official-github-release",
      "url": "https://github.com/openai/openai-agents-python/releases/tag/v0.19.4",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "SDK Reliability",
      "summary": "2026-08-05 版本修复 Guardrail 结果保留、无效工具参数脱敏、会话保存、并发失败取消和 Sandbox token 预算等问题。",
      "takeaway": "动作：升级前后跑 Guardrail、MCP、Session、Sandbox 回归，不只看包安装成功。"
    },
    {
      "title": "GitHub MCP Server 支持 stateless spec",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-23-github-mcp-server-supports-the-next-mcp-specification/",
      "category": [
        "hot",
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "MCP Spec",
      "summary": "GitHub MCP Server 支持 stateless spec，减少 sessions/initialize 写入，并强调 conformance tests。",
      "takeaway": "动作：私有 MCP 上线前跑 conformance、鉴权、日志和 secret scanning 检查。"
    },
    {
      "title": "AGENTS.md 成为 code review 规则入口",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-06-18-copilot-code-review-agents-md-support-and-ui-improvements/",
      "category": [
        "knowledge",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Repo Rules",
      "summary": "Copilot code review 会读取仓库根目录 AGENTS.md，让 review 反馈更贴近仓库约定。",
      "takeaway": "动作：AGENTS.md 写短规则和高后果约束，细节指向更深文档。"
    },
    {
      "title": "GitHub Desktop worktrees 适合 agent 并行隔离",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-06-26-github-desktop-3-6-worktrees-and-deeper-copilot-integration/",
      "category": [
        "workflow",
        "tools"
      ],
      "score": "HIGH",
      "tag": "Worktree",
      "summary": "GitHub Desktop 3.6 支持 worktrees，并让 Copilot 参与 commit authoring 和 merge conflict resolution。",
      "takeaway": "动作：多 agent 修改同一仓库时默认独立 worktree；合并前看 diff、测试和冲突解释。"
    },
    {
      "title": "JetBrains Copilot 补齐 OTel 与模型治理",
      "author": "GitHub Changelog",
      "source": "official-changelog",
      "url": "https://github.blog/changelog/2026-07-27-github-copilot-for-jetbrains-adds-improvved-opentelemetry-configuration-and-model-management/",
      "category": [
        "accounts",
        "tools",
        "workflow"
      ],
      "score": "HIGH",
      "tag": "Observability",
      "summary": "JetBrains 更新加入 OpenTelemetry export、token limits、模型启停、MCP diagnostics 和 custom agents。",
      "takeaway": "动作：agent 工具要记录 OTel/logs、token limit、model policy、MCP diagnostics 和 session 证据。"
    },
    {
      "title": "公开 X 案例强调管理 agent 而不是多开 agent",
      "author": "Degen Sing / @degensing",
      "source": "x-public-search",
      "url": "https://x.com/degensing/status/2026578817016566047",
      "category": [
        "workflow",
        "knowledge"
      ],
      "score": "MEDIUM",
      "tag": "Agent Ops",
      "summary": "公开 X 长帖把一人 AI dev team 拆成 orchestrator、spawn script、tmux redirect、monitoring cron、task registry 和 DoD。",
      "takeaway": "动作：先建立任务登记、worktree 隔离、监控、review gate 和完成条件，再扩大 agent 数量。"
    }
  ],
  "knowledge": [
    {
      "label": "01 / Voice",
      "title": "Voice 控制面验收环",
      "body": "Voice in Work/Codex 只能发起、询问、打断和转向任务，完成仍看权限、文件、测试、diff 和发布证据。"
    },
    {
      "label": "02 / Browser",
      "title": "浏览器状态分层迁移",
      "body": "conversation、bookmarks、tabs、history、cookies/passwords 分层处理；公开日报只保留来源链接和总结。"
    },
    {
      "label": "03 / Plugins",
      "title": "插件权限上架单",
      "body": "插件启用前列清 skills、required apps、读写动作、确认门、sync/domain/source 边界和低风险烟测。"
    },
    {
      "label": "04 / Skills",
      "title": "可回放 skill 录制门",
      "body": "Record & Replay 只录公开、低风险、可回滚流程；录制前排除凭证、私密页面和不可逆写动作。"
    }
  ]
};

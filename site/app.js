const grid = document.querySelector("#signals");
const template = document.querySelector("#signalTemplate");
const buttons = document.querySelectorAll(".filter");
const knowledgeGrid = document.querySelector("#knowledgeGrid");
const reportDate = document.querySelector("#reportDate");
const reportConclusion = document.querySelector("#reportConclusion");
const sourceCount = document.querySelector("#sourceCount");
const topCount = document.querySelector("#topCount");
const knowledgeCount = document.querySelector("#knowledgeCount");
const updatedAt = document.querySelector("#updatedAt");
const reportExcerpt = document.querySelector("#reportExcerpt");
const themeToggle = document.querySelector(".theme-toggle");
const toast = document.querySelector(".toast");
const fallbackReport = window.AI_RADAR_REPORT;
const BRIDGE_URL = "http://127.0.0.1:8787";
const BRIDGE_CWD = "/Users/renyujie/Documents/Codex/AI-Radar/x-ai-codex-gpt";
const CODEX_RUNNER = "codex-app-thread";

const tileImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1100&q=82",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1100&q=82"
];

const tileSizes = ["size-xl", "size-wide", "size-tall", "size-tall", "size-wide", "size-square", "size-wide", "size-square"];

let signalCards = [];
let knowledgeCards = [];
let currentFilter = "all";
let observer;

function observeTiles() {
  if (observer) {
    observer.disconnect();
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  document.querySelectorAll(".signal-tile:not(.is-hidden)").forEach((tile) => observer.observe(tile));
}

function renderSignals(filter = currentFilter) {
  currentFilter = filter;
  grid.innerHTML = "";

  signalCards.forEach((card, index) => {
    const include = filter === "all" || card.category.includes(filter);
    const node = template.content.firstElementChild.cloneNode(true);
    const image = tileImages[index % tileImages.length];
    const size = tileSizes[index % tileSizes.length];
    node.classList.add(size);
    node.classList.toggle("is-hidden", !include);
    node.dataset.category = card.category.join(" ");

    node.querySelector(".tile-link").setAttribute("aria-label", `${card.title} - signal card`);

    const imageNode = node.querySelector(".tile-image");
    imageNode.src = image;
    imageNode.alt = "";

    node.querySelector(".tag").textContent = card.tag;
    node.querySelector(".score").textContent = card.score;
    node.querySelector("h3").textContent = card.title;
    node.querySelector(".summary").textContent = card.summary;
    node.querySelector(".takeaway").textContent = card.takeaway;
    node.querySelector(".author").textContent = card.author;
    node.querySelector(".source").textContent = card.source;
    const sourceLabel = node.querySelector(".source-link");
    sourceLabel.href = card.url;
    sourceLabel.textContent = card.source === "x-profile" ? "打开主页" : "打开原文";
    const runButton = node.querySelector(".codex-run");
    runButton.dataset.prompt = createCodexPrompt(card);
    runButton.dataset.title = card.title;
    runButton.dataset.url = card.url;
    runButton.dataset.category = card.category.join(", ");

    grid.appendChild(node);
  });

  requestAnimationFrame(observeTiles);
}

function createCodexPrompt(card) {
  return `请帮我把下面这条 AI Radar 信号跑一遍，判断它是否值得沉淀进我的个人知识库。

信号标题：${card.title}
作者/来源：${card.author} / ${card.source}
原文链接：${card.url}
分类：${card.category.join(", ")}
优先级：${card.score}

为什么值得看：
${card.summary}

初步可执行动作：
${card.takeaway}

请按这个流程执行：
1. 打开并阅读原文，优先确认它是不是一手信息、方法论、工具或真实案例。
2. 判断它属于哪一类：丢掉 / 暂存观察 / 值得实验 / 沉淀为资产。
3. 如果值得实验，请给我一个 15-30 分钟可完成的小实验，写清楚点哪里、看到什么、再做什么。
4. 如果值得沉淀，请输出一张知识库卡片，包含：概念、适用场景、操作步骤、风险、原文链接。
5. 如果不值得沉淀，请直接说明丢掉原因，避免污染知识库。

输出要求：
## 官方严谨版
给结论、证据、建议动作。

## 白话版
用容易懂的话解释它到底有没有用。`;
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  return Promise.resolve();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

function compactTitle(title) {
  const cleanTitle = (title || "AI Radar 信号").replace(/\s+/g, " ").trim();
  return `AI Radar: ${cleanTitle.slice(0, 58)}`;
}

function setRunButtonState(button, label, disabled) {
  button.textContent = label;
  button.disabled = disabled;
  button.classList.toggle("is-running", disabled);
}

async function startCodexTask(button) {
  const response = await fetch(`${BRIDGE_URL}/tasks`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      prompt: button.dataset.prompt,
      runner: CODEX_RUNNER,
      cwd: BRIDGE_CWD,
      metadata: {
        source: "ai-radar-site",
        threadTitle: compactTitle(button.dataset.title),
        title: button.dataset.title,
        url: button.dataset.url,
        category: button.dataset.category
      }
    })
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error?.message || payload.message || `Bridge request failed: ${response.status}`);
  }
  return payload;
}

function renderKnowledge() {
  knowledgeGrid.innerHTML = knowledgeCards
    .map(
      (card) => `
        <article class="knowledge-card">
          <span>${card.label}</span>
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </article>
      `
    )
    .join("");
}

function renderReport(data) {
  document.title = `AI Radar | ${data.date}`;
  reportDate.textContent = data.date;
  reportConclusion.textContent = data.conclusion;
  sourceCount.textContent = data.metrics.sourceCards;
  topCount.textContent = data.metrics.topSignals;
  knowledgeCount.textContent = data.metrics.knowledgeCards;
  updatedAt.dateTime = data.updatedAt;
  updatedAt.textContent = data.updatedLabel;
  reportExcerpt.innerHTML = data.excerpt.map((line) => `<p>${line}</p>`).join("");
}

function showError() {
  grid.innerHTML = `
    <article class="signal-tile size-wide is-visible">
      <a class="tile-link" href="./data/report.json">
        <img class="tile-image" src="./assets/signal-07.png" alt="" />
        <div class="tile-caption">
          <div><span>Offline</span><span>CHECK</span></div>
          <h3>日报数据暂时没有加载成功</h3>
          <p class="summary">请检查 site/data/report.json 是否存在，或重新部署一次 Vercel。</p>
          <p class="takeaway">动作：本地先运行静态服务确认 JSON 能访问，再重新发布。</p>
        </div>
      </a>
    </article>
  `;
}

function hydrate(data) {
  signalCards = data.signals;
  knowledgeCards = data.knowledge;
  renderReport(data);
  renderSignals();
  renderKnowledge();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderSignals(button.dataset.filter);
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

grid.addEventListener("click", async (event) => {
  const button = event.target.closest(".codex-run");
  if (!button) {
    return;
  }

  setRunButtonState(button, "正在调起", true);

  try {
    const task = await startCodexTask(button);
    setRunButtonState(button, "已派发", false);
    showToast(`已调起 Codex 任务：${task.id.slice(0, 8)}`);
  } catch (error) {
    console.warn(error);
    setRunButtonState(button, "让 Codex 跑", false);
    copyText(button.dataset.prompt)
      .then(() => showToast("本地桥未连接，已复制任务，回到 Codex 粘贴即可运行"))
      .catch(() => showToast("调起失败，请打开原文后手动发给 Codex"));
  }
});

if (window.location.protocol === "file:" && fallbackReport) {
  hydrate(fallbackReport);
} else {
  fetch("./data/report.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Report data unavailable: ${response.status}`);
      }
      return response.json();
    })
    .then(hydrate)
    .catch(() => {
      if (fallbackReport) {
        hydrate(fallbackReport);
        return;
      }
      showError();
    });
}

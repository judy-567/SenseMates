const state = {
  role: "学生 / Student",
  gender: "",
  buddy: "",
  answers: {},
  otherAnswers: {},
};

const buddyCopy = {
  bokie: {
    image: "assets/bokie-avatar.webp",
    name: "包包 Bokie",
    line: "慢一点也没关系。 / It’s okay to take it slow.",
  },
  toma: {
    image: "assets/toma-avatar.webp",
    name: "番番 Toma",
    line: "开心要分享，难过也能说。 / Share your joy—and your sadness.",
  },
  pippi: {
    image: "assets/pippi-avatar.webp",
    name: "椒椒 Pippi",
    line: "原来还可以这样！ / Wow, it can work like this!",
  },
};

const questions = [
  {
    id: "q4",
    number: 4,
    section: "食品与饮品偏好 / Food & Beverage Preferences",
    zh: "今天想先尝哪几样？",
    en: "Which food options would you most like to try at the event?",
    instruction: "请选择所有你感兴趣的选项，可多选。 / Select all that interest you.",
    type: "multi",
    layout: "photo",
    options: [
      { value: "rainbow-wrap", zh: "彩虹蔬菜卷", en: "Rainbow vegetable wrap", photo: "assets/questions/rainbow-wrap.webp" },
      { value: "carrot-cake", zh: "胡萝卜蛋糕", en: "Carrot cake", photo: "assets/questions/carrot-cake.webp" },
      { value: "cheesy-corn", zh: "芝士玉米杯", en: "Cheesy corn cup", photo: "assets/questions/corn-cup.webp" },
      { value: "mini-pizza", zh: "番茄彩椒迷你披萨", en: "Tomato and bell pepper mini pizza", photo: "assets/questions/mini-pizza.webp" },
      { value: "other", zh: "其他（请填写）", en: "Other (please specify)", art: "✎" },
    ],
  },
  {
    id: "q5",
    number: 5,
    section: "食品与饮品偏好 / Food & Beverage Preferences",
    zh: "最想来一杯什么？",
    en: "Which drinks would you most like to choose at the event?",
    instruction: "请选择所有你感兴趣的选项，可多选。 / Select all that interest you.",
    type: "multi",
    layout: "photo",
    options: [
      { value: "carrot-orange", zh: "胡萝卜香橙汁", en: "Carrot and orange juice", photo: "assets/questions/carrot-orange.webp" },
      { value: "cucumber-lemonade", zh: "黄瓜柠檬饮", en: "Cucumber lemonade", photo: "assets/questions/cucumber-lemonade.webp" },
      { value: "pumpkin-soup", zh: "南瓜汤", en: "Pumpkin soup", photo: "assets/questions/pumpkin-soup.webp" },
      { value: "other", zh: "其他（请填写）", en: "Other (please specify)", art: "✎" },
    ],
  },
  {
    id: "q6",
    number: 6,
    section: "娱乐与手工活动 / Entertainment & DIY Activities",
    zh: "哪些游戏最吸引你？",
    en: "Which games appeal to you most?",
    instruction: "请选择所有你感兴趣的选项，可多选。 / Select all that interest you.",
    type: "multi",
    layout: "photo",
    options: [
      { value: "pumpkin-stack", zh: "南瓜叠叠乐", en: "Pumpkin Stack-Up", photo: "assets/questions/pumpkin-stack.webp" },
      { value: "veggie-toss", zh: "蔬菜投投乐", en: "Veggie Toss", photo: "assets/questions/veggie-toss.webp" },
      { value: "mystery-box", zh: "五感蔬菜盲盒", en: "Veggie Mystery Box", photo: "assets/questions/mystery-box.webp" },
    ],
  },
  {
    id: "q7",
    number: 7,
    section: "娱乐与手工活动 / Entertainment & DIY Activities",
    zh: "想动手做哪几样？",
    en: "Which DIY activities would you most like to join?",
    instruction: "请选择所有你感兴趣的选项，可多选。 / Select all that interest you.",
    type: "multi",
    layout: "photo",
    options: [
      {
        value: "veggie-printing",
        zh: "蔬菜拓印",
        en: "Vegetable printing",
        description: "以蔬菜作为印章，印制创意图案。 / Create patterns using vegetable stamps.",
        photo: "assets/questions/veggie-printing.webp",
      },
      {
        value: "broccoli-bouquet",
        zh: "迷你西兰花手捧花制作",
        en: "Mini broccoli bouquet making",
        description: "搭配并包装一束小巧的西兰花花束。 / Arrange and wrap a small broccoli bouquet.",
        photo: "assets/questions/veggie-bouquet.webp",
      },
      {
        value: "expression-cards",
        zh: "蔬菜表情卡制作",
        en: "Vegetable expression cards",
        description: "用五官贴纸装饰蔬菜形状的卡纸。 / Decorate vegetable-shaped cards with facial-feature stickers.",
        photo: "assets/questions/expression-cards.webp",
      },
    ],
  },
  {
    id: "q8",
    number: 8,
    section: "公益与主题教育活动 / Charity & Awareness Activities",
    zh: "你最希望我们关注哪个议题？",
    en: "Which cause would you most like the event’s charity and awareness activities to support?",
    instruction: "请选择一个答案。 / Choose one answer.",
    type: "single",
    layout: "list",
    options: [
      { value: "mental-health", zh: "提升学生对心理健康的关注——接纳不完美", en: "Student mental health awareness — Accept imperfection" },
      { value: "balanced-diet", zh: "注重饮食均衡", en: "Pay attention to a balanced diet" },
      { value: "food-access", zh: "帮助有需要的人获得食物，并提供相关支持", en: "Food access and support for people in need" },
    ],
  },
  {
    id: "q9",
    number: 9,
    section: "公益与主题教育活动 / Charity & Awareness Activities",
    zh: "公益与主题教育区，你最想参加哪一项？",
    en: "Which activity would you most like to join in the charity and awareness area?",
    instruction: "请选择一个答案。 / Choose one answer.",
    type: "single",
    layout: "photo",
    options: [
      {
        value: "lucky-wheel",
        zh: "幸运转盘",
        en: "Lucky wheel",
        description: "转动转盘，有机会赢取小奖品。 / Spin the wheel for a chance to win a small prize.",
        photo: "assets/questions/lucky-wheel.webp",
      },
      {
        value: "veggie-jokes",
        zh: "蔬菜冷笑话角",
        en: "Vegetable joke corner",
        description: "抽取、阅读或分享与蔬菜有关的笑话和谐音梗。 / Pick, read or share vegetable jokes and puns.",
        photo: "assets/questions/veggie-jokes.webp",
        fit: "contain",
      },
      {
        value: "ugly-vegetables",
        zh: "“丑蔬菜”展览",
        en: "“Ugly” vegetable exhibition",
        description: "认识形状独特的蔬菜，重新思考第一印象。 / Explore unusually shaped vegetables and reflect on first impressions.",
        photo: "assets/questions/ugly-vegetables.webp",
      },
      { value: "other", zh: "其他（请填写）", en: "Other (please specify)", art: "✎" },
    ],
  },
  {
    id: "q10",
    number: 10,
    section: "整体活动体验与票价 / Overall Event Experience & Ticket Price",
    zh: "你为什么想来 SenseMates？",
    en: "What would be your main reason for attending SenseMates?",
    instruction: "请选择一个最主要的原因。 / Choose your main reason.",
    type: "single",
    layout: "list",
    options: [
      { value: "relax", zh: "放松身心，暂时从学习中休息一下", en: "To relax and take a break from studying" },
      { value: "self-acceptance", zh: "探索第一印象、情绪与自我接纳", en: "To explore first impressions, emotions and self-acceptance" },
      { value: "socialise", zh: "与朋友交流互动，一起享受活动", en: "To socialise and have fun with friends" },
      { value: "creative-food", zh: "体验创意活动，尝试蔬菜主题的食品或饮品", en: "To try creative activities and vegetable-themed food or drinks" },
    ],
  },
  {
    id: "q11",
    number: 11,
    section: "整体活动体验与票价 / Overall Event Experience & Ticket Price",
    zh: "哪个时间最方便你？",
    en: "Which time slot would be most convenient for you to attend?",
    instruction: "请选择一个答案。 / Choose one answer.",
    type: "single",
    layout: "list",
    options: [
      { value: "10-12", zh: "上午10点至中午12点", en: "10:00 AM–12:00 PM" },
      { value: "12-2", zh: "中午12点至下午2点", en: "12:00 PM–2:00 PM" },
      { value: "2-4", zh: "下午2点至4点", en: "2:00 PM–4:00 PM" },
    ],
  },
  {
    id: "q12",
    number: 12,
    section: "整体活动体验与票价 / Overall Event Experience & Ticket Price",
    zh: "你最可能购买哪一种票？",
    en: "Which of the following proposed ticket options would you be most likely to purchase?",
    instruction: "请选择一个答案。 / Choose one answer.",
    type: "single",
    layout: "list",
    options: [
      {
        value: "game-pass",
        zh: "游戏票——人民币9.90元",
        en: "Game Pass — RMB 9.90",
        description: "所有游戏参与资格＋一次幸运转盘机会。 / Access to all games + ONE lucky-wheel spin.",
      },
      {
        value: "creative-pass",
        zh: "手作票——人民币24.90元",
        en: "Creative Pass — RMB 24.90",
        description: "所有游戏参与资格＋一次幸运转盘机会＋一项自选手工活动。 / Access to all games + ONE lucky-wheel spin + ONE DIY activity of your choice.",
      },
      {
        value: "experience-pass",
        zh: "体验票——人民币39.90元",
        en: "Experience Pass — RMB 39.90",
        description: "所有游戏参与资格＋一次幸运转盘机会＋一项手工活动＋一份自选饮品或食品（二选一）。 / Access to all games + ONE lucky-wheel spin + ONE DIY activity + ONE drink or food of your choice.",
      },
    ],
  },
  {
    id: "q13",
    number: 13,
    section: "最后一题 / One Last Thing",
    zh: "还有什么想告诉我们？",
    en: "Do you have any other suggestions?",
    instruction: "这题可以不填。 / This question is optional.",
    type: "text",
  },
];

let currentQuestionIndex = 0;
const backendConfig = window.SENSEMATES_CONFIG || {};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  })[character]);
}

function showScreen(name) {
  document.querySelectorAll("[data-screen]").forEach((screen) => {
    const active = screen.dataset.screen === name;
    screen.hidden = !active;
    if (active) screen.scrollTop = 0;
  });
}

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.go));
});

document.querySelectorAll("[data-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.dataset.choice;
    document.querySelectorAll(`[data-choice="${group}"]`).forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    state[group] = button.dataset.value;
    document.getElementById("profile-notice").hidden = true;
  });
});

document.querySelectorAll("#profile-form input, #profile-form select").forEach((control) => {
  control.addEventListener("input", () => { document.getElementById("profile-notice").hidden = true; });
  control.addEventListener("change", () => { document.getElementById("profile-notice").hidden = true; });
});

document.getElementById("profile-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const notice = document.getElementById("profile-notice");
  if (!data.get("nickname")?.trim() || !state.gender || !data.get("grade") || !data.get("major")?.trim()) {
    notice.textContent = "还有信息没有填完哦。 / Please complete all fields.";
    notice.hidden = false;
    return;
  }
  if (!data.get("consent")) {
    notice.textContent = "请先确认信息用途说明。 / Please confirm the information-use notice.";
    notice.hidden = false;
    return;
  }
  state.nickname = data.get("nickname").trim();
  state.grade = data.get("grade");
  state.major = data.get("major").trim();
  notice.hidden = true;
  showScreen("buddy");
});

document.querySelectorAll("[data-buddy]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-buddy]").forEach((item) => {
      item.closest(".buddy-card").classList.remove("selected");
      item.textContent = "选择 Choose";
    });
    button.closest(".buddy-card").classList.add("selected");
    button.textContent = "已选择 Selected ✓";
    state.buddy = button.dataset.buddy;
    document.getElementById("buddy-notice").hidden = true;
  });
});

const preview = document.getElementById("image-preview");
document.querySelectorAll("[data-preview]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = buddyCopy[button.dataset.preview];
    document.getElementById("preview-image").src = item.image;
    document.getElementById("preview-name").textContent = item.name;
    document.getElementById("preview-line").textContent = item.line;
    preview.hidden = false;
  });
});
document.getElementById("preview-close").addEventListener("click", () => { preview.hidden = true; });
preview.addEventListener("click", (event) => { if (event.target === preview) preview.hidden = true; });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") preview.hidden = true; });

document.getElementById("finish-button").addEventListener("click", () => {
  const notice = document.getElementById("buddy-notice");
  if (!state.buddy) {
    notice.textContent = "先选一位蔬菜伙伴吧。 / Please choose a veggie mate first.";
    notice.hidden = false;
    return;
  }
  document.getElementById("ready-name").textContent = state.nickname || "新朋友";
  document.getElementById("ready-image").src = buddyCopy[state.buddy].image;
  document.getElementById("ready-line").textContent = `“${buddyCopy[state.buddy].line}”`;
  showScreen("ready");
});

function optionIsSelected(question, value) {
  const answer = state.answers[question.id];
  return question.type === "multi" ? Array.isArray(answer) && answer.includes(value) : answer === value;
}

function renderOption(question, option, index) {
  const selected = optionIsSelected(question, option.value);
  const visual = option.photo
    ? `<div class="option-visual${option.fit === "contain" ? " contain" : ""}"><img src="${option.photo}" alt="${option.zh} / ${option.en}" /></div>`
    : `<div class="option-visual placeholder" aria-hidden="true">${option.art || "✦"}</div>`;
  const description = option.description ? `<span class="option-description">${option.description}</span>` : "";
  return `
    <button class="option-card${selected ? " selected" : ""}" type="button" data-option="${option.value}" aria-pressed="${selected}">
      ${question.layout === "photo" ? visual : ""}
      <span class="option-check">${selected ? "✓" : String(index + 1).padStart(2, "0")}</span>
      <span class="option-copy"><strong>${option.zh}</strong><span>${option.en}</span>${description}</span>
    </button>`;
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const card = document.getElementById("question-card");
  const answer = state.answers[question.id];
  document.getElementById("question-current").textContent = String(currentQuestionIndex + 1).padStart(2, "0");
  document.getElementById("question-total").textContent = `/ ${questions.length}`;
  document.getElementById("question-progress-bar").style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  document.getElementById("question-next").innerHTML = currentQuestionIndex === questions.length - 1
    ? "提交问卷 / Submit <span>✓</span>"
    : "下一题 / Next <span>→</span>";
  document.getElementById("question-notice").hidden = true;

  let body = "";
  if (question.type === "text") {
    body = `<textarea class="suggestion-box" id="suggestion-input" maxlength="600" placeholder="写下你的想法…… / Share your ideas here…">${escapeHtml(answer || "")}</textarea>`;
  } else {
    const layoutClass = question.layout === "photo" ? "option-grid" : "option-list";
    body = `<div class="${layoutClass}">${question.options.map((option, index) => renderOption(question, option, index)).join("")}</div>`;
    const hasOther = question.options.some((option) => option.value === "other");
    if (hasOther && optionIsSelected(question, "other")) {
      body += `<label class="other-field"><input id="other-input" maxlength="100" value="${escapeHtml(state.otherAnswers[question.id] || "")}" placeholder="请填写 / Please specify" aria-label="其他选项内容" /></label>`;
    }
  }

  card.innerHTML = `
    <span class="question-kicker">Q${question.number} · ${question.section}</span>
    <h2 class="question-title">${question.zh}</h2>
    <p class="question-title-en">${question.en}</p>
    <p class="question-instruction">${question.instruction}</p>
    ${body}`;

  const suggestion = document.getElementById("suggestion-input");
  if (suggestion) suggestion.addEventListener("input", (event) => { state.answers[question.id] = event.target.value; });
  const other = document.getElementById("other-input");
  if (other) other.addEventListener("input", (event) => { state.otherAnswers[question.id] = event.target.value; });
  document.querySelector('[data-screen="question"]').scrollTop = 0;
}

document.getElementById("question-card").addEventListener("click", (event) => {
  const button = event.target.closest("[data-option]");
  if (!button) return;
  const question = questions[currentQuestionIndex];
  const value = button.dataset.option;
  if (question.type === "multi") {
    const current = Array.isArray(state.answers[question.id]) ? [...state.answers[question.id]] : [];
    const position = current.indexOf(value);
    if (position >= 0) current.splice(position, 1);
    else current.push(value);
    state.answers[question.id] = current;
  } else {
    state.answers[question.id] = value;
  }
  document.getElementById("question-notice").hidden = true;
  renderQuestion();
});

function validateCurrentQuestion() {
  const question = questions[currentQuestionIndex];
  if (question.type === "text") return true;
  const answer = state.answers[question.id];
  const hasAnswer = question.type === "multi" ? Array.isArray(answer) && answer.length > 0 : Boolean(answer);
  if (!hasAnswer) return false;
  const choseOther = question.type === "multi" ? answer.includes("other") : answer === "other";
  return !choseOther || Boolean(state.otherAnswers[question.id]?.trim());
}

function buildSubmission() {
  const formattedAnswers = questions.map((question) => {
    const raw = state.answers[question.id];
    const values = Array.isArray(raw) ? raw : raw ? [raw] : [];
    const selections = question.type === "text"
      ? [raw || ""]
      : values.map((value) => {
          if (value === "other") return `其他 / Other: ${state.otherAnswers[question.id] || ""}`;
          const option = question.options.find((item) => item.value === value);
          return option ? `${option.zh} / ${option.en}` : value;
        });
    return {
      questionNumber: question.number,
      question: `${question.zh} / ${question.en}`,
      answer: question.type === "multi" ? selections : selections[0] || "",
    };
  });
  return {
    submittedAt: new Date().toISOString(),
    participant: {
      nickname: state.nickname,
      role: state.role,
      gender: state.gender,
      grade: state.grade,
      major: state.major,
      buddy: buddyCopy[state.buddy]?.name || state.buddy,
    },
    answers: formattedAnswers,
  };
}

async function submitToSupabase(submission) {
  const supabaseUrl = String(backendConfig.supabaseUrl || "").replace(/\/$/, "");
  const publishableKey = String(backendConfig.supabasePublishableKey || "");
  if (!supabaseUrl || !publishableKey || supabaseUrl.includes("YOUR_PROJECT")) {
    throw new Error("BACKEND_NOT_CONFIGURED");
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/sensemates_responses`, {
    method: "POST",
    mode: "cors",
    cache: "no-store",
    headers: {
      apikey: publishableKey,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      survey_version: "2026-10",
      nickname: submission.participant.nickname,
      role: submission.participant.role,
      gender: submission.participant.gender,
      grade: submission.participant.grade,
      major: submission.participant.major,
      buddy: submission.participant.buddy,
      answers: submission.answers,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Supabase submission failed:", response.status, details);
    throw new Error("SUBMISSION_FAILED");
  }
}

async function completeSurvey() {
  const submission = buildSubmission();
  const nextButton = document.getElementById("question-next");
  const notice = document.getElementById("question-notice");
  nextButton.disabled = true;
  nextButton.innerHTML = "正在提交 / Submitting… <span>↗</span>";
  try {
    await submitToSupabase(submission);
    state.submission = submission;
    try {
      localStorage.setItem("sensemates-latest-response", JSON.stringify(submission));
      localStorage.removeItem("sensemates-unsent-response");
    } catch (storageError) {
      console.warn("Could not save a local backup.", storageError);
    }
    document.getElementById("cloud-status").textContent = "回答已安全提交到云端。 / Your response has been submitted securely.";
    showScreen("complete");
  } catch (error) {
    try {
      localStorage.setItem("sensemates-unsent-response", JSON.stringify(submission));
    } catch (storageError) {
      console.warn("Could not save an unsent local backup.", storageError);
    }
    notice.textContent = error.message === "BACKEND_NOT_CONFIGURED"
      ? "云数据库尚未完成配置，请联系问卷负责人。 / The cloud database has not been configured yet."
      : "提交暂时失败，回答已保存在本机。请检查网络后重试。 / Submission failed, but your answers are saved on this device. Please check your connection and try again.";
    notice.hidden = false;
  } finally {
    nextButton.disabled = false;
    nextButton.innerHTML = "提交问卷 / Submit <span>✓</span>";
  }
}

document.getElementById("start-questionnaire").addEventListener("click", () => {
  currentQuestionIndex = 0;
  renderQuestion();
  showScreen("question");
});

document.getElementById("question-back").addEventListener("click", () => {
  if (currentQuestionIndex === 0) {
    showScreen("ready");
    return;
  }
  currentQuestionIndex -= 1;
  renderQuestion();
});

document.getElementById("question-next").addEventListener("click", async () => {
  const notice = document.getElementById("question-notice");
  if (!validateCurrentQuestion()) {
    notice.textContent = "请先完成这一题；如果选择“其他”，记得填写内容。 / Please answer this question. If you selected “Other,” please specify.";
    notice.hidden = false;
    return;
  }
  if (currentQuestionIndex === questions.length - 1) {
    await completeSurvey();
    return;
  }
  currentQuestionIndex += 1;
  renderQuestion();
});

document.getElementById("download-answers").addEventListener("click", () => {
  const submission = state.submission || buildSubmission();
  const blob = new Blob([JSON.stringify(submission, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `SenseMates-answers-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
});

document.getElementById("restart-survey").addEventListener("click", () => window.location.reload());

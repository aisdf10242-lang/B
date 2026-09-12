const content = window.BIRTHDAY_CONTENT;

const opening = document.querySelector(".opening");
const startButton = document.querySelector(".start-button");
const story = document.querySelector("#story");
const progressBar = document.querySelector(".reading-progress span");
const memoryList = document.querySelector("#memory-list");
const videoWrap = document.querySelector("#video-wrap");
const photoDialog = document.querySelector(".photo-dialog");
const dialogImage = photoDialog.querySelector("img");

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) element.textContent = value;
}

setText("#birthday-label", content.birthdayLabel);
setText("#hero-name", content.recipient);
setText("#hero-message", content.heroMessage);
setText("#story-intro", content.storyIntro);
setText("#video-intro", content.video.intro);
setText("#ending-title", content.endingTitle);
setText("#ending-date", content.birthdayDate);
setText("#letter-to", content.letter.to);
setText("#letter-from", content.letter.from);

document.title = `${content.recipient} — 생일 축하해`;

content.letter.paragraphs.forEach((paragraph) => {
  const p = document.createElement("p");
  p.textContent = paragraph;
  document.querySelector("#letter-body").appendChild(p);
});

function photoPlaceholder(index, filename) {
  const placeholder = document.createElement("span");
  placeholder.className = "media-placeholder";
  placeholder.innerHTML = `PHOTO ${String(index + 1).padStart(2, "0")}<br>${filename}`;
  return placeholder;
}

content.photos.forEach((photo, index) => {
  const card = document.createElement("button");
  card.className = "memory-card reveal";
  card.type = "button";
  card.setAttribute("aria-label", `${photo.date} 사진 크게 보기`);

  const visual = document.createElement("span");
  visual.className = "memory-visual";
  const placeholder = photoPlaceholder(index, photo.src.split("/").pop());
  const image = document.createElement("img");
  image.alt = photo.caption;
  image.loading = "lazy";
  image.src = photo.src;
  image.addEventListener("load", () => placeholder.remove());
  image.addEventListener("error", () => image.remove());
  visual.append(placeholder, image);

  const copy = document.createElement("span");
  copy.className = "memory-copy";
  copy.innerHTML = `
    <span class="memory-index">SCENE ${String(index + 1).padStart(2, "0")}</span>
    <strong class="memory-date"></strong>
    <span class="memory-caption"></span>
  `;
  copy.querySelector(".memory-date").textContent = photo.date;
  copy.querySelector(".memory-caption").textContent = photo.caption;
  card.append(visual, copy);
  memoryList.appendChild(card);

  card.addEventListener("click", () => {
    if (!visual.querySelector("img")) return;
    dialogImage.src = photo.src;
    dialogImage.alt = photo.caption;
    photoDialog.querySelector(".dialog-date").textContent = photo.date;
    photoDialog.querySelector(".dialog-caption").textContent = photo.caption;
    photoDialog.showModal();
  });
});

const videoPlaceholder = document.createElement("div");
videoPlaceholder.className = "media-placeholder";
videoPlaceholder.innerHTML = "VIDEO<br>our-memory.mp4 파일을 넣어주세요";
const video = document.createElement("video");
video.controls = true;
video.playsInline = true;
video.preload = "metadata";
video.src = content.video.src;
video.poster = content.video.poster;
video.addEventListener("loadedmetadata", () => videoPlaceholder.remove());
video.addEventListener("error", () => video.remove());
videoWrap.append(videoPlaceholder, video);

startButton.addEventListener("click", () => {
  document.body.classList.add("started");
  story.inert = false;
  opening.classList.add("is-gone");
  window.setTimeout(() => document.querySelector("#story-title").focus?.(), 1000);
});

document.querySelector(".letter-button").addEventListener("click", (event) => {
  const paper = document.querySelector("#letter-paper");
  paper.hidden = false;
  event.currentTarget.hidden = true;
  event.currentTarget.setAttribute("aria-expanded", "true");
  window.setTimeout(() => paper.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
});

document.querySelector(".replay-button").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

photoDialog.querySelector(".dialog-close").addEventListener("click", () => photoDialog.close());
photoDialog.addEventListener("click", (event) => {
  if (event.target === photoDialog) photoDialog.close();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

window.addEventListener(
  "scroll",
  () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progressBar.style.width = `${Math.min(100, ratio * 100)}%`;
  },
  { passive: true }
);

if (document.documentElement.classList.contains("gate-active")) {
  const cdEls = {
    days: document.querySelector("#cd-days"),
    hours: document.querySelector("#cd-hours"),
    minutes: document.querySelector("#cd-minutes"),
    seconds: document.querySelector("#cd-seconds"),
  };

  const tick = () => {
    const diff = window.__GATE_TARGET__ - Date.now();
    if (diff <= 0) {
      document.documentElement.classList.remove("gate-active");
      clearInterval(countdownTimer);
      return;
    }
    const totalSeconds = Math.floor(diff / 1000);
    cdEls.days.textContent = String(Math.floor(totalSeconds / 86400)).padStart(2, "0");
    cdEls.hours.textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");
    cdEls.minutes.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    cdEls.seconds.textContent = String(totalSeconds % 60).padStart(2, "0");
  };

  tick();
  const countdownTimer = setInterval(tick, 1000);
}

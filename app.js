let activeSetlistId = SETLISTS[0].id;
const transposeState = {};

function getSongById(id) {
  return SONGS.find(s => s.id === id);
}

function getTranspose(setlistId, songId) {
  return (transposeState[setlistId] || {})[songId] || 0;
}

function setTranspose(setlistId, songId, value) {
  if (!transposeState[setlistId]) transposeState[setlistId] = {};
  transposeState[setlistId][songId] = value;
}

// --- Sidebar ---

function renderSidebar() {
  const nav = document.getElementById("setlist-nav");
  nav.innerHTML = "";
  SETLISTS.forEach(sl => {
    const btn = document.createElement("button");
    btn.className = "setlist-btn" + (sl.id === activeSetlistId ? " active" : "");
    btn.textContent = sl.name;
    btn.addEventListener("click", () => {
      activeSetlistId = sl.id;
      updateTopbarTitle(sl.name);
      document.getElementById("sidebar").classList.remove("open");
      document.getElementById("sidebar-overlay").classList.remove("open");
      renderSidebar();
      renderMain();
    });
    nav.appendChild(btn);
  });
}

// --- Song Card ---

function renderSongCard(song, setlistId) {
  const semitones = getTranspose(setlistId, song.id);
  const transposedKey = transposeChordString(song.key, semitones);

  const card = document.createElement("div");
  card.className = "song-card";
  card.dataset.songId = song.id;

  const header = document.createElement("div");
  header.className = "song-header";

  const info = document.createElement("div");
  info.className = "song-info";
  info.innerHTML = `<span class="song-title">${song.title}</span><span class="song-artist">${song.artist}</span>`;

  const controls = document.createElement("div");
  controls.className = "transpose-controls";

  const keyBadge = document.createElement("span");
  keyBadge.className = "key-badge";
  keyBadge.textContent = `Key: ${transposedKey}`;

  const semLabel = document.createElement("span");
  semLabel.className = "semitone-label";
  semLabel.textContent = semitones === 0 ? "0" : (semitones > 0 ? `+${semitones}` : `${semitones}`);

  const btnDown = document.createElement("button");
  btnDown.className = "transpose-btn";
  btnDown.textContent = "−";
  btnDown.title = "Transpose down";
  btnDown.addEventListener("click", () => {
    setTranspose(setlistId, song.id, semitones - 1);
    card.replaceWith(renderSongCard(song, setlistId));
  });

  const btnReset = document.createElement("button");
  btnReset.className = "transpose-btn reset-btn";
  btnReset.textContent = "↺";
  btnReset.title = "Reset transpose";
  btnReset.addEventListener("click", () => {
    setTranspose(setlistId, song.id, 0);
    card.replaceWith(renderSongCard(song, setlistId));
  });

  const btnUp = document.createElement("button");
  btnUp.className = "transpose-btn";
  btnUp.textContent = "+";
  btnUp.title = "Transpose up";
  btnUp.addEventListener("click", () => {
    setTranspose(setlistId, song.id, semitones + 1);
    card.replaceWith(renderSongCard(song, setlistId));
  });

  controls.append(keyBadge, btnDown, semLabel, btnUp, btnReset);
  header.append(info, controls);

  const sections = document.createElement("div");
  sections.className = "song-sections";
  song.sections.forEach(sec => {
    const row = document.createElement("div");
    row.className = "section-row";
    row.innerHTML = `<span class="section-name">${sec.name}</span><span class="section-chords">${transposeChordString(sec.chords, semitones)}</span>`;
    sections.appendChild(row);
  });

  card.append(header, sections);
  return card;
}

// --- Main Content ---

function renderMain() {
  const main = document.getElementById("main-content");
  main.innerHTML = "";

  const setlist = SETLISTS.find(sl => sl.id === activeSetlistId);
  if (!setlist) return;

  const headingRow = document.createElement("div");
  headingRow.className = "setlist-heading-row";

  const heading = document.createElement("h1");
  heading.className = "setlist-heading";
  heading.textContent = setlist.name;

  const settingsBtn = document.createElement("button");
  settingsBtn.className = "settings-btn";
  settingsBtn.innerHTML = "&#9881; Order Songs";
  settingsBtn.title = "Reorder songs";
  settingsBtn.addEventListener("click", () => openSettings(setlist));

  headingRow.append(heading, settingsBtn);
  main.appendChild(headingRow);

  setlist.groups.forEach(group => {
    const section = document.createElement("section");
    section.className = "group-section";

    const groupHeading = document.createElement("h2");
    groupHeading.className = "group-heading";
    groupHeading.textContent = group.name;
    section.appendChild(groupHeading);

    const list = document.createElement("div");
    list.className = "song-list";

    group.songIds.forEach(id => {
      const song = getSongById(id);
      if (!song) return;
      list.appendChild(renderSongCard(song, setlist.id));
    });

    section.appendChild(list);
    main.appendChild(section);
  });
}

// --- Settings Modal ---

function openSettings(setlist) {
  const modal = document.getElementById("settings-modal");
  const overlay = document.getElementById("settings-overlay");
  const body = document.getElementById("settings-body");
  const title = document.getElementById("settings-title");

  title.textContent = `${setlist.name} — Song Order`;
  body.innerHTML = "";

  setlist.groups.forEach(group => {
    const groupLabel = document.createElement("h3");
    groupLabel.className = "settings-group-label";
    groupLabel.textContent = group.name;
    body.appendChild(groupLabel);

    group.songIds.forEach((songId, idx) => {
      const song = getSongById(songId);
      if (!song) return;

      const row = document.createElement("div");
      row.className = "settings-row";

      const label = document.createElement("span");
      label.className = "settings-song-name";
      label.textContent = `${idx + 1}. ${song.title}`;

      const btnGroup = document.createElement("div");
      btnGroup.className = "settings-btn-group";

      const btnUp = document.createElement("button");
      btnUp.className = "order-btn";
      btnUp.textContent = "↑";
      btnUp.disabled = idx === 0;
      btnUp.addEventListener("click", () => {
        group.songIds.splice(idx, 1);
        group.songIds.splice(idx - 1, 0, songId);
        openSettings(setlist);
      });

      const btnDown = document.createElement("button");
      btnDown.className = "order-btn";
      btnDown.textContent = "↓";
      btnDown.disabled = idx === group.songIds.length - 1;
      btnDown.addEventListener("click", () => {
        group.songIds.splice(idx, 1);
        group.songIds.splice(idx + 1, 0, songId);
        openSettings(setlist);
      });

      btnGroup.append(btnUp, btnDown);
      row.append(label, btnGroup);
      body.appendChild(row);
    });
  });

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeSettings() {
  document.getElementById("settings-modal").classList.add("hidden");
  document.getElementById("settings-overlay").classList.add("hidden");
  renderMain();
}

// --- Mobile sidebar drawer ---

function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  toggle.addEventListener("click", () => {
    sidebar.classList.contains("open")
      ? sidebar.classList.remove("open") || overlay.classList.remove("open")
      : sidebar.classList.add("open") || overlay.classList.add("open");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
  });
}

function updateTopbarTitle(name) {
  const el = document.getElementById("topbar-title");
  if (el) el.textContent = name;
}

// --- Init ---

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();

  document.getElementById("settings-close").addEventListener("click", closeSettings);
  document.getElementById("settings-overlay").addEventListener("click", closeSettings);

  renderSidebar();
  renderMain();
});

let activeSetlistId = SETLISTS[0].id;
// transposeState[setlistId][songId] = semitone offset
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

function renderSongCard(song, setlistId, groupName) {
  const semitones = getTranspose(setlistId, song.id);
  const transposedKey = transposeChordString(song.key, semitones);

  const card = document.createElement("div");
  card.className = "song-card";
  card.dataset.songId = song.id;
  card.dataset.group = groupName;

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
    refreshSongCard(card, song, setlistId, groupName);
  });

  const btnReset = document.createElement("button");
  btnReset.className = "transpose-btn reset-btn";
  btnReset.textContent = "↺";
  btnReset.title = "Reset transpose";
  btnReset.addEventListener("click", () => {
    setTranspose(setlistId, song.id, 0);
    refreshSongCard(card, song, setlistId, groupName);
  });

  const btnUp = document.createElement("button");
  btnUp.className = "transpose-btn";
  btnUp.textContent = "+";
  btnUp.title = "Transpose up";
  btnUp.addEventListener("click", () => {
    setTranspose(setlistId, song.id, semitones + 1);
    refreshSongCard(card, song, setlistId, groupName);
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

function refreshSongCard(card, song, setlistId, groupName) {
  const newCard = renderSongCard(song, setlistId, groupName);
  // Preserve sortable handle
  card.replaceWith(newCard);
}

// --- Main Content ---

function renderMain() {
  const main = document.getElementById("main-content");
  main.innerHTML = "";

  const setlist = SETLISTS.find(sl => sl.id === activeSetlistId);
  if (!setlist) return;

  const heading = document.createElement("h1");
  heading.className = "setlist-heading";
  heading.textContent = setlist.name;
  main.appendChild(heading);

  setlist.groups.forEach(group => {
    const section = document.createElement("section");
    section.className = "group-section";

    const groupHeading = document.createElement("h2");
    groupHeading.className = "group-heading";
    groupHeading.textContent = group.name;
    section.appendChild(groupHeading);

    const list = document.createElement("div");
    list.className = "song-list";
    list.dataset.setlistId = setlist.id;
    list.dataset.group = group.name;

    group.songIds.forEach(id => {
      const song = getSongById(id);
      if (!song) return;
      const card = renderSongCard(song, setlist.id, group.name);
      list.appendChild(card);
    });

    section.appendChild(list);
    main.appendChild(section);

    // Init SortableJS on this list
    Sortable.create(list, {
      animation: 150,
      handle: ".song-card",
      ghostClass: "sortable-ghost",
      onEnd(evt) {
        const sl = SETLISTS.find(s => s.id === evt.to.dataset.setlistId);
        const grp = sl.groups.find(g => g.name === evt.to.dataset.group);
        // Reorder songIds to match new DOM order
        const newOrder = [...evt.to.querySelectorAll(".song-card")].map(el => el.dataset.songId);
        grp.songIds = newOrder;
      }
    });
  });
}

// --- Mobile sidebar drawer ---

function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  function openMenu() {
    sidebar.classList.add("open");
    overlay.classList.add("open");
  }

  function closeMenu() {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
  }

  toggle.addEventListener("click", () => {
    sidebar.classList.contains("open") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);
}

function updateTopbarTitle(name) {
  const el = document.getElementById("topbar-title");
  if (el) el.textContent = name;
}

// --- Init ---

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  renderSidebar();
  renderMain();
});

const SONGS = [
  {
    id: "song-1",
    title: "Heaven Knows",
    artist: "Orange and Lemons",
    key: "E",
    sections: [
      { name: "Intro", chords: "AM7 - Am - E - B7 - G - B7 (Keyboard) EM7 - Asus2" },
      { name: "Verse 1", chords: "E - Asus2" },
      { name: "Refrain", chords: "G#m - Asus2, G#m - F#m - B - E" },
      { name: "Chorus 1", chords: "Asus2 - G#m - F#m - B - E" },
      { name: "Interlude", chords: "EM7 - Asus2 - F#m - B" },
      { name: "Outro", chords: "EM7 - CM7 - D - Am - E" }
    ]
  },
  {
    id: "song-2",
    title: "Sining",
    artist: "Dionela",
    key: "D",
    sections: [
      { name: "All Sections", chords: "Dmaj7 - Bm7 - C#m - Em - A7" }
    ]
  },
  {
    id: "song-3",
    title: "Marilag",
    artist: "Dionela",
    key: "F#",
    sections: [
      { name: "Intro", chords: "F#maj7 - C#maj7 - Bbm - G#, F# - C#m - Bbm - G#" },
      { name: "Verse", chords: "F# - C# - Bbm - G#" },
      { name: "Chorus", chords: "F# - C# - Bbm7 - G#" },
      { name: "Outro", chords: "F# - C# - Eb" }
    ]
  },
  {
    id: "song-4",
    title: "Best Part",
    artist: "Daniel Caesar",
    key: "D",
    sections: [
      { name: "All Sections", chords: "Dmaj7 - Am7 - Gmaj7 - Bbmaj7" }
    ]
  },
  {
    id: "song-5",
    title: "Burn",
    artist: "Tina Arena",
    key: "G",
    sections: [
      { name: "Verse", chords: "G - Em - Dsus4 - D" },
      { name: "Refrain", chords: "C - D - C - D - Am - D" },
      { name: "Chorus", chords: "G - Em - C - D (×3) F" },
      { name: "Bridge", chords: "C - Bb - Am - Bb (×2), F - F - Em - Em - Eb - D" }
    ]
  },
  {
    id: "song-6",
    title: "Migraine",
    artist: "Monstar 88",
    key: "D",
    sections: [
      { name: "All Sections", chords: "D - Bm - F#m - G" }
    ]
  },
  {
    id: "song-7",
    title: "Dilaw",
    artist: "Maki",
    key: "A",
    sections: [
      { name: "Verse", chords: "A - E - F#m - Dsus2" },
      { name: "Refrain", chords: "A - E - F#m - DM7" },
      { name: "Chorus", chords: "A - E - F#m - Dsus2" }
    ]
  },
  {
    id: "song-8",
    title: "Kisapmata",
    artist: "Rivermaya",
    key: "D",
    sections: [
      { name: "All Sections", chords: "D - Em - Asus2 - G" }
    ]
  },
  {
    id: "song-9",
    title: "Elesi",
    artist: "Rivermaya",
    key: "G",
    sections: [
      { name: "Intro / Verse", chords: "G - Dsus - Em - Dsus" },
      { name: "Chorus", chords: "C - G - Am - G" },
      { name: "Solo", chords: "G - Dsus - Em - D" }
    ]
  },
  {
    id: "song-10",
    title: "Hinahanap-hanap Kita",
    artist: "Rivermaya",
    key: "G",
    sections: [
      { name: "Intro", chords: "Bb - A" },
      { name: "Verse / Chorus", chords: "G - Em - Am - D - G, Bb - A" }
    ]
  },
  {
    id: "song-11",
    title: "Hindi Na Nga",
    artist: "This Band",
    key: "G",
    sections: [
      { name: "Main", chords: "G - Dsus4 - Em7 - Cadd9" },
      { name: "Refrain", chords: "Em7 - Dsus4 - Cadd9, Dsus4" }
    ]
  },
  {
    id: "song-12",
    title: "Same Ground",
    artist: "Kitchie Nadal",
    key: "A",
    sections: [
      { name: "Intro / Verse", chords: "A - G" },
      { name: "Chorus", chords: "A - E - F#m - D" }
    ]
  },
  {
    id: "song-13",
    title: "Huwag Na Huwag Mong Sasabihin",
    artist: "Kitchie Nadal",
    key: "A",
    sections: [
      { name: "Intro / Verse / Chorus", chords: "A - C#m - D - Dm" },
      { name: "Refrain", chords: "C#m - D" },
      { name: "Bridge", chords: "C#m - D, C#m - D - Dm" }
    ]
  },
  {
    id: "song-14",
    title: "Bulong",
    artist: "Kitchie Nadal",
    key: "D",
    sections: [
      { name: "Intro", chords: "D - E - G - D" },
      { name: "Verse", chords: "D - C - G - D" },
      { name: "Chorus", chords: "D - C - G - C - G - D, D - C - G - F - G - D" },
      { name: "Bridge", chords: "Bm - G - Em - D - G - A" }
    ]
  },
  {
    id: "song-15",
    title: "Need You Now",
    artist: "Lady A",
    key: "A",
    sections: [
      { name: "Intro / Verse", chords: "A - C#m" },
      { name: "Chorus", chords: "E - G#m (×2) - A" },
      { name: "Bridge", chords: "C#m - B - E - E - A - B (×2), A - C# - B" },
      { name: "Outro", chords: "E - G#m" }
    ]
  },
  {
    id: "song-16",
    title: "Pare Ko",
    artist: "Eraserheads",
    key: "G",
    sections: [
      { name: "Verse", chords: "G - C (×4), Am - C, Am - C - Dsus - D" },
      { name: "Chorus", chords: "G - D - Em - C" },
      { name: "Bridge", chords: "Am - C - G - D (×2), Am - C - G - Em, Am - D" },
      { name: "Outro", chords: "G - D - Em - C - C/B - G" }
    ]
  },
  {
    id: "song-17",
    title: "Alapaap",
    artist: "Eraserheads",
    key: "F#",
    sections: [
      { name: "Intro", chords: "F#M7 - BM7 - F#M7 - EM7" },
      { name: "Verse", chords: "F# - G#m7 - Bbm7 - B" },
      { name: "Chorus", chords: "F# - G#m7 - Bbm7 - B (×2), C# - B" },
      { name: "Interlude", chords: "E - F# - B - G#" },
      { name: "Outro", chords: "C# - B (×8), F#M7" }
    ]
  },
  {
    id: "song-18",
    title: "Demonyo",
    artist: "JK",
    key: "C",
    sections: [
      { name: "Intro / Verse", chords: "C - E - Am - F" },
      { name: "Chorus", chords: "C - G - Em - Am (×3), C - G" }
    ]
  },
  {
    id: "song-19",
    title: "Ere",
    artist: "JK",
    key: "G",
    sections: [
      { name: "Verse", chords: "Cadd9 - Dadd9 - G - G7" },
      { name: "Chorus", chords: "G - B7 - C - Cm7" },
      { name: "Bridge", chords: "Cadd9 - G (×2) - F, Cadd9 - G (×2)" },
      { name: "Outro", chords: "G - B7 - C - Cm7" }
    ]
  },
  {
    id: "song-20",
    title: "Antukin",
    artist: "Rivermaya",
    key: "C",
    sections: [
      { name: "Intro / Verse", chords: "C - Dm - Am (×3), F - Dm" },
      { name: "Chorus", chords: "C - Gm - Dm (×3), F - Dm" },
      { name: "Bridge", chords: "Am - G/B - C - Dm, Am - G/B - F" }
    ]
  },
  {
    id: "song-21",
    title: "Royals",
    artist: "Lorde",
    key: "D",
    sections: [
      { name: "Verse", chords: "D" },
      { name: "Refrain / Chorus", chords: "D - C - G" }
    ]
  },
  {
    id: "song-22",
    title: "Kahit Ayaw Mo Na",
    artist: "This Band",
    key: "D",
    sections: [
      { name: "Intro", chords: "D" },
      { name: "Verse", chords: "D - Bm - G - D" },
      { name: "Refrain", chords: "G - A - D" },
      { name: "Chorus", chords: "G - A - D - A/C#m - Bm (×2), G - A" },
      { name: "Bridge", chords: "D - Bm - G - A" }
    ]
  },
  {
    id: "song-23",
    title: "Buksan Mo",
    artist: "Willie Revillame",
    key: "Eb",
    sections: [
      { name: "Verse", chords: "Fm - Bb - Eb - Cm" },
      { name: "Refrain", chords: "G# - Bb - Eb - Cm, G# - F - Bb" },
      { name: "Chorus", chords: "G# - Bb - Gm - Cm, Fm - Bb - Eb - Eb7" },
      { name: "Interlude", chords: "Fm - Bb - Eb - Cm, Fm - Bb - Eb" }
    ]
  },
  {
    id: "song-24",
    title: "Don't Start Now",
    artist: "Dua Lipa",
    key: "Bm",
    sections: [
      { name: "Intro", chords: "Bm - D - Em" },
      { name: "Verse", chords: "Em - Bm - Gmaj7 - D - A" },
      { name: "Pre-Chorus", chords: "Bm - D - Em - F#m7 - Gmaj7" },
      { name: "Chorus", chords: "Bm - D - Em - F#m7 - Gmaj7" },
      { name: "Bridge", chords: "Em - Bm - Gmaj7 - D - A, Bm - D - Em - F#m7 - Gmaj7" }
    ]
  },
  {
    id: "song-25",
    title: "Breathless",
    artist: "The Corrs",
    key: "B",
    sections: [
      { name: "Intro / Verse", chords: "B - F# - C#m - G#m - F#" },
      { name: "Refrain", chords: "E - F# - G#m, E - F# - B, E - F# - G#m, E - F#" },
      { name: "Chorus", chords: "E - A - B" }
    ]
  },
  {
    id: "song-26",
    title: "Dancing Queen",
    artist: "ABBA",
    key: "A",
    sections: [
      { name: "Intro", chords: "A - D/A (×3) - Amaj9, E/G# - D/F# - A/E" },
      { name: "Verse", chords: "A - D/A - A - F#m7, E - Esus4 (×2), E - F#m (×2)" },
      { name: "Pre-Chorus", chords: "D/A - A - D/A - A, A - D - Amaj9 - A, E/G# - D/F# - A" },
      { name: "Chorus", chords: "E - C#7 - F#m7 - B7/Eb, D - Bm7 - A - D/A" },
      { name: "Interlude", chords: "Amaj9 - D/A - D/A - Amaj9 - D/A - D/A" }
    ]
  },
  {
    id: "song-27",
    title: "Material Girl",
    artist: "Madonna",
    key: "C",
    sections: [
      { name: "Intro", chords: "C" },
      { name: "Verse", chords: "C - Bb - Am, C - Dm - G" },
      { name: "Chorus", chords: "F - G - G - Am, F - G - Am, C" }
    ]
  },
  {
    id: "song-28",
    title: "Like A Virgin",
    artist: "Madonna",
    key: "F#",
    sections: [
      { name: "Intro", chords: "F#" },
      { name: "Verse", chords: "F# - G#m - F#" },
      { name: "Refrain", chords: "G#m - Ebm (×2), C#sus4 - C# - C#sus2 - C#" },
      { name: "Chorus", chords: "F# - G#m - F#" },
      { name: "Bridge", chords: "G# - Ebm (×3) - G# - G# - G#" }
    ]
  },
  {
    id: "song-29",
    title: "Shut Up and Dance",
    artist: "Walk The Moon",
    key: "C#",
    sections: [
      { name: "All Sections", chords: "C# - F# - Bbm - G#" }
    ]
  },
  {
    id: "song-30",
    title: "Waka Waka",
    artist: "Shakira",
    key: "D",
    sections: [
      { name: "All Sections", chords: "D - A - Bm - G" }
    ]
  },
  {
    id: "song-31",
    title: "Whenever, Wherever",
    artist: "Shakira",
    key: "C#m",
    sections: [
      { name: "Intro", chords: "C#m - F#m - B (×2)" },
      { name: "Verse", chords: "C#m - G#m - A - E - B" },
      { name: "Refrain", chords: "F#m - C#m - A - B" },
      { name: "Chorus", chords: "C#m - A - E - B" },
      { name: "Bridge", chords: "F#m - C#m - A - B, F#m - C#m - A - B - G#/C" },
      { name: "Outro", chords: "C#m - F#m - B, C#m" }
    ]
  },
  {
    id: "song-32",
    title: "Believe",
    artist: "Cher",
    key: "F#",
    sections: [
      { name: "Intro", chords: "F# - C# - G#m - B, F# - Bbm - G#m - Ebm" },
      { name: "Verse", chords: "F# - F#maj7 - B - C#, F# - Bbm - B - C#" },
      { name: "Chorus", chords: "F# - C# - G#m - B, F# - C# - G#m - Ebm" },
      { name: "Bridge", chords: "Ebm - C# (×2), B - C# - B - G#m - C#" }
    ]
  },
  {
    id: "song-33",
    title: "One Day",
    artist: "Matisyahu",
    key: "A",
    sections: [
      { name: "All Sections", chords: "A - E - F#m - D" }
    ]
  },
  {
    id: "song-34",
    title: "Cool Down",
    artist: "Kolohe Kai",
    key: "Bb",
    sections: [
      { name: "All Sections", chords: "Bb - Cm" }
    ]
  },
  {
    id: "song-35",
    title: "Ehu Girl",
    artist: "Kolohe Kai",
    key: "C",
    sections: [
      { name: "Intro", chords: "C - F - G - G (×2), Am - G (×2)" },
      { name: "Verse", chords: "C - F - G (×2), Dm - G - Am - G, F - G" },
      { name: "Chorus", chords: "C - F - G (×5), Am - G - Am - G" },
      { name: "Bridge", chords: "C - Dm (×3), F - G" },
      { name: "Outro", chords: "C - F - G (×2)" }
    ]
  },
  {
    id: "song-36",
    title: "Rude",
    artist: "Magic",
    key: "F#",
    sections: [
      { name: "All Sections", chords: "F# - G# - C# - Bb" }
    ]
  },
  {
    id: "song-37",
    title: "Red Dress",
    artist: "Magic",
    key: "Bb",
    sections: [
      { name: "Intro", chords: "Bb" },
      { name: "Verse", chords: "Bb - Gm - C#m - F" },
      { name: "Refrain", chords: "Cm - F (×3), Eb" },
      { name: "Chorus", chords: "Bb - Gm - Cm - F" },
      { name: "Bridge", chords: "Bb - Gm - Cm - F" }
    ]
  },
  {
    id: "song-38",
    title: "I'm Yours",
    artist: "Jason Mraz",
    key: "B",
    sections: [
      { name: "Intro / Verse / Chorus", chords: "B - F# - G#m - E" },
      { name: "Bridge", chords: "B - F# - G#m - F#m - E, C#7, B - F#/Bb - G#m - F# - E - C#7" }
    ]
  },
  {
    id: "song-39",
    title: "Hello",
    artist: "Conkarah (Cover)",
    key: "Fm",
    sections: [
      { name: "Intro / Verse", chords: "Fm - G# - Eb - C#" },
      { name: "Verse 2", chords: "Fm - G# - Eb - C# (×4), Fm - Eb - Cm - C#, Fm - Eb" },
      { name: "Chorus", chords: "Fm - C# - G# - Eb" },
      { name: "Interlude", chords: "G# - Eb - C#" }
    ]
  },
  {
    id: "song-40",
    title: "Underneath It All",
    artist: "No Doubt",
    key: "E",
    sections: [
      { name: "Intro / Verse", chords: "E - C#m" },
      { name: "Refrain", chords: "A - G#" },
      { name: "Chorus", chords: "E - A - B - A" },
      { name: "Bridge", chords: "C#m - A - B - G#" }
    ]
  },
  {
    id: "song-41",
    title: "Kings & Queens",
    artist: "Ava Max",
    key: "C#m",
    sections: [
      { name: "Verse / Refrain / Chorus", chords: "C#m - F#m - B - E, A - F#m - G#m - C#m" },
      { name: "Instrumental", chords: "C#m - F#m - B - E - A - F#m, G#m - C#m (×2)" },
      { name: "Bridge", chords: "D - A - E - B, D - A - E - G#" }
    ]
  }
];

const SETLISTS = [
  {
    id: "setlist-1",
    name: "Setlist 1",
    groups: [
      {
        name: "Slow",
        songIds: [
          "song-1", "song-2", "song-3", "song-4", "song-5",
          "song-6", "song-7", "song-8", "song-9", "song-10",
          "song-11", "song-12", "song-13", "song-14", "song-15",
          "song-16", "song-17", "song-18", "song-19", "song-20"
        ]
      },
      {
        name: "Upbeat",
        songIds: [
          "song-21", "song-22", "song-23", "song-24", "song-25",
          "song-26", "song-27", "song-28", "song-29", "song-30",
          "song-31", "song-32", "song-33", "song-34", "song-35",
          "song-36", "song-37", "song-38", "song-39", "song-40"
        ]
      },
      {
        name: "Finale",
        songIds: ["song-41"]
      }
    ]
  }
];

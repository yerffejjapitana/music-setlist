const SHARPS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLATS  = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

const FLAT_TO_SHARP = {
  "Db": "C#", "Eb": "D#", "Gb": "F#", "Ab": "G#", "Bb": "A#"
};

function normalizeNote(note) {
  return FLAT_TO_SHARP[note] || note;
}

function transposeNote(note, semitones, useFlats) {
  const scale = useFlats ? FLATS : SHARPS;
  const normalized = normalizeNote(note);
  const idx = SHARPS.indexOf(normalized);
  if (idx === -1) return note;
  const newIdx = ((idx + semitones) % 12 + 12) % 12;
  return scale[newIdx];
}

function transposeChordString(chordStr, semitones) {
  if (semitones === 0) return chordStr;

  // Detect if original string has flats to decide output preference
  const useFlats = /[A-G]b/.test(chordStr);

  // Match chord roots: optional sharp/flat after note letter, optional suffix
  // Pattern: note letter, optional #/b, then optional chord quality
  return chordStr.replace(/\b([A-G][#b]?)([^A-G\s\-\/×()]*)((?:\/[A-G][#b]?)?)/g, (match, root, quality, bass) => {
    const newRoot = transposeNote(root, semitones, useFlats);
    let newBass = "";
    if (bass) {
      const bassNote = bass.replace("/", "");
      newBass = "/" + transposeNote(bassNote, semitones, useFlats);
    }
    return newRoot + quality + newBass;
  });
}

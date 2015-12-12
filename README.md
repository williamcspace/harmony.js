harmony.js
==========

This is my experimental library for music theory,
the primary goal of this library is to understand music theory
from a programmer's perspective. not really meant for production use...

##Version

V0.0.1 - basic concept

##check list

- []  Note(String: rootNote, String: duration, Number: dots)
  - [] getFrequency
  - [] getName
  - [] getDuration
  - [] getChord(String: chordType)

- []  Chord(Note: rootNote, String: quality, String: interval, String: alteredFifth, String: addTone)
  - [] getRoot
  - [] getQuality
    - [] major (M, maj)
    - [] minor (m, min)
    - [] augmented (+, aug)
    - [] diminished (o, dim)
    - [] half-diminished (o/)
    - [] Dominant seventh (dom)
  - [] getInterval
  - [] getAlteredFifth
  - [] getAddTone
  - [] getNotes

- []  Scale(String: scaleType)
  - [] major
  - [] minor
  - [] ionian (major)
  - [] dorian
  - [] phrygian
  - [] lydian
  - [] mixolydian
  - [] aeolian (minor)
  - [] locrian
  - [] majorpentatonic
  - [] minorpentatonic
  - [] chromatic
  - [] diatonic
  - [] blues
  - [] harmonicminor
  - [] melodicminor

- []  Interval(Note: lowNote, Note: highNote)
  - [] perfect unison (P1)(0 semitones)
  - [] diminished second (d2)(0 semitones)
  - [] minor second (m2)(1 semitones)
  - [] argmented unison (A1)(1 semitones)
  - [] major second (M2)(2 semitones)
  - [] minor third (m3)(3 semitones)
  - [] major third (M3)(4 semitones)
  - [] perfect fourth (P4)(5 semitones)
  - [] diminished fifth (d5)(6 semitones)
  - [] augmented fourth (A4)(6 semitones)
  - [] perfect fifth (P5)(7 semitones)
  - [] perfect octave (P8)(12 semitones)




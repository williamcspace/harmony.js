'use strict';
var Note = require('./core/Note');

class Harmony {
  constructor() {}

  note(note){
    return new Note(note);
  }
}

module.exports = new Harmony();
'use strict';
const NObject = require('./Object');

class Note extends NObject {
  constructor(note) {
    super();
    this.note = note;
  }

  getName(){
    return 'i\'m a ' + this.note;
  }
}

module.exports = Note;
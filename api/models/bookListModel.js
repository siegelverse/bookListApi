'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
  name: {
    type: String,
    required: 'Enter book name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});
module.exports = mongoose.model('Books', BookSchema);
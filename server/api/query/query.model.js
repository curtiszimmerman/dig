'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuerySchema = new Schema({
  name: String,
  searchTerms: String,
  filters: Schema.Types.Mixed,
  includeMissing: Schema.Types.Mixed,
  selectedSort: { order: String, title: String },
  username: { type: String, index: true },
  createDate: Date,
  lastRunDate: Date,
  frequency: String
});

module.exports = mongoose.model('Query', QuerySchema);
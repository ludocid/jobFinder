'use strict';

var Promise = require('bluebird');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobSchema = new Schema({
    title: {
        type: String,
        default: '',
        required: 'Please fill Department name',
        trim: true
    },
    description: {
        type: String,
        default: '',
        required: 'Please fill Department name',
        trim: true
    }
});

mongoose.model('Job', JobSchema);

mongoose.model('Job');
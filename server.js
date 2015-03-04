'use strict';
var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/job');
var Job = mongoose.model('Job');
var jobsData = require('./jobs-data');

var app = express();
app.set('views', __dirname);
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'jade');

app.get('/jobs', function(req, res) {
    jobsData.findJobs({}).then(function(collection) {
        res.jsonp(collection);
    });
});

app.get('*', function(req, res) {
    res.render('index');
});

//jobsData.connectDB('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://jobfinderdev:Asdf1234@ds049651.mongolab.com:49651/jobfinder01');


var connection = mongoose.connection;
connection.once('open', function() {
    console.log('connected to mongodb');
    jobsData.seedJobs();
});
app.listen(process.env.PORT, process.env.IP)
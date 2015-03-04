'use strict';
var expect = require('chai').expect;
var Promise = require('bluebird');
var mongoose = require('mongoose');
var jobModel = require('../models/job');
var Job = mongoose.model('Job');
var jobsData = require('../jobs-data');

var resetJobs = function(callback) {
    return new Promise(function(resolve, reject) {
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
};

describe('get jobs', function() {
    var jobs;
    before(function(done) {

        jobsData.connectDB('mongodb://jobfinderdev:Asdf1234@ds049651.mongolab.com:49651/jobfinder01')
            .then(resetJobs)
            .then(jobsData.seedJobs)
            .then(jobsData.findJobs)
            .then(function(collection) {
                jobs = collection;
                done();
            });
    });

    it('It never should be empty since jobs are seeded', function() {
        expect(jobs).to.exist;
        expect(jobs.length).to.be.at.least(1);
    });

    it('It never should have title', function() {
        expect(jobs[1].title).to.not.be.empty;
    });

    it('It never should have description', function() {
        expect(jobs[1].description).to.not.be.empty;
    });
});
'use strict';
var expect = require('chai').expect;
var Promise = require('bluebird');
var mongoose = require('mongoose');
var jobModel = require('../../models/job');
var Job = mongoose.model('Job');
var jobsData = require('../../jobs-data');

var resetJobs = function(callback) {
    console.log('resetJobs');
    return new Promise(function(resolve, reject) {
        console.log('resetJobs');
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
};

describe('get jobs', function() {
    var jobs;
    before(function(done) {
        console.log('before');
        jobsData.connectDB('mongodb://jobfinderdev:Asdf1234@ds049651.mongolab.com:49651/jobfinder01')
            .then(resetJobs)
            .then(jobsData.seedJobs)
            .then(jobsData.findJobs)
            .then(function(collection) {
                jobs = collection;
                done();
            });
    });

    after(function() {
        mongoose.connection.close();
    });

    it('It never should be empty since jobs are seeded', function() {
        expect(jobs).to.exist;
        expect(jobs.length).to.be.at.least(1);
    });

    it('It never should have title', function() {
        expect(jobs[0].title).to.not.be.empty;
    });

    it('It never should have description', function() {
        expect(jobs[0].description).to.not.be.empty;
    });
});

describe('saving jobs in the data layer', function() {
    var job = {
        title: 'Tester',
        description: 'You will be making sure shit works'
    };
    var jobs;

    before(function(done) {
        console.log('before');
        jobsData.connectDB('mongodb://jobfinderdev:Asdf1234@ds049651.mongolab.com:49651/jobfinder01')
            .then(resetJobs)
            .then(jobsData.saveJob(job))
            .then(jobsData.findJobs)
            .then(function(collection) {
                jobs = collection;
                done();
            });
    });

    after(function() {
        mongoose.connection.close();
    });

    it('Should have one job after saving one job', function() {
        expect(jobs).to.have.length(1);
    });
});
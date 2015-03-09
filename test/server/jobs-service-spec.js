'use strict';
var express = require('express');
var expect = require('chai').expect;
var request = require('supertest');
var Promise = require('bluebird');
var app = express();
var db = require('../db');
var jobsService = require('../../jobs-service')(db, app);

var dataSavedJob;
describe('save job', function() {
    it('Should validate that title is greater than 4 char.');
    it('Should validate that title is less than 40 char.');
    it('Should validate that description is greater than 4 char.');
    it('Should validate that description is less than 200 char.');

    var newJob = {
        title: 'title 01',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    };

    it('Should pass the job to the database save', function(done) {
        request(app).post('/api/jobs').send(newJob).end(function(err, res) {
            expect(res.body).to.be.deep.equal(newJob);
            done();
        });
    });

    it('Should return a status of 200 to the front end if the database saved');
    it('Should return a job with an id');
    it('Should return an erro if the database failed');
});
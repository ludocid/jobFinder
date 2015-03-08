var Promise = require('bluebird');

var db = {
    findJobs: function(argument) {
        return new Promise(function(resolve, reject) {
            resolve(['hi']);
        });
    },
    saveJob: function(job) {
        return job;
    }
};

module.exports = db;
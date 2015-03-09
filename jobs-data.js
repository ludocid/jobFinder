var Promise = require('bluebird');
var mongoose = require('mongoose');
var Job = mongoose.model('Job');

var createJob = Promise.promisify(Job.create, Job);
var jobs = [{
    title: 'title 01',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
}, {
    title: 'title 02',
    description: 'Aenean commodo ligula eget dolor. Aenean massa.'
}, {
    title: 'title 03',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
}, {
    title: 'title 04',
    description: 'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.'
}];

var findJobs = function(query) {
    return Promise.cast(Job.find(query).exec());
};

var seedJobs = function() {
    return findJobs({})
        .then(function(collection) {
            if (!collection.length) {
                return Promise.map(jobs, function(job) {
                    return createJob(job);
                });
            }
        });
};

module.exports = {
    connectDB: Promise.promisify(mongoose.connect, mongoose),
    findJobs: findJobs,
    seedJobs: seedJobs,
    saveJob: createJob
};

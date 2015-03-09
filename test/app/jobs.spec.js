'use strict';
describe('posting job', function() {
    var postRequestJob;
    var newJob = {
        title: 'test title',
        description: 'test description'
    };

    beforeEach(module('app'));
    it('Should call /api/jobs with job data.', inject(function($httpBackend, jobs) {
        console.log($httpBackend);
        $httpBackend.whenPOST('/api/jobs', function(data) {
            postRequestJob = JOSN.parse(data);
            expect(postRequestJob).to.not.be.empty();
            return true;
        }).respond(200);
        jobs.save(newJob);
        $httpBackend.flush;
    }));
});
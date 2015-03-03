'use strict';

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

exports.seedJobs = function(){
    var	Job = mongoose.model('Job');
    Job.find({}).exec(function(err, collection){
        if(err){
            console.log(err);
        }
        else{
            if(!collection.length){
                Job.create({title: 'title 01', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'});
                Job.create({title: 'title 02', description: 'Aenean commodo ligula eget dolor. Aenean massa.'});
                Job.create({title: 'title 03', description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'});
                Job.create({title: 'title 04', description: 'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.'});
            }
        }
    });
}
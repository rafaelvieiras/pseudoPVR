var Schema = require('schema-object');

var VideoFile = new Schema({
    fullPath: String,
    duration: String
});

/** 
 * Schema of a Schedule.
 * This is used to make a base of prams in a Schedule, and validate this.
 * Fields:
 * - Channel ID: string with id of channel where the Schedule belongs.
 * - Video ID: string with id of video file to retrieve information such as time.
*/
var Schedule = new Schema({
    schedule_type: {
        type: {type: String, minLength: 1}, 
        enum: ['epsode', 'movie']
    },
    title: {type: String, minLength: 1},
    serie_id: String,
    video_file: VideoFile
});



module.exports = Schedule;
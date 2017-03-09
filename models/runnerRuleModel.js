var Schema = require('schema-object');

/** 
 * Schema of a ImportRule.
 * This is used to make a base of prams in a Schedule, and validate this.
 * Fields:
 * - Channel ID: string with id of channel where the Schedule belongs.
 * - Video ID: string with id of video file to retrieve information such as time.
*/
var RunnerRule = new Schema({
    import_rule: {type: String, minLength: 1},
    start_at: {type: String, minLength: 1},
    field: {
        type: {type: String, minLength: 1}, 
        enum: ['title', 'genre', 'lastplayed']
    },
    operator: {
        type: {type: String, minLength: 1}, 
        enum: ['is', 'inthelast', 'greaterthan', 'lessthan', 'true', 'false']
    },
    values: Array,
    channel_id: String
});



module.exports = RunnerRule;
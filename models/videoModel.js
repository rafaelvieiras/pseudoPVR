var Schema = require('schema-object');

/** 
 * Schema of a Video.
 * This is used to make a base of prams in a Video, and validate this.
 * Fields:
*/
var Video = new Schema({
    fullPath: String,
    duration: String
});

module.exports = Video;
var db          = require('diskdb');
db.connect('../db', ['videos']);



module.exports = mongoose.model('host', hostSchema);
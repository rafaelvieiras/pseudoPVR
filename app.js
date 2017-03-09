// Bring in our dependencies
const app           = require('express')();
const bodyParser    = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());

const routes        = require('./routes/index');
const video         = require('./routes/video');
const mediafolder   = require('./routes/mediafolder');


//  Connect all our routes to our application
app.use('/', routes);
app.use('/video', video);
app.use('/mediafolder', mediafolder);


// Turn on that server!
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
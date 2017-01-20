// Bring in our dependencies
const app = require('express')();

const routes    = require('./routes/index');
const video     = require('./routes/video');

//  Connect all our routes to our application
app.use('/', routes);
app.use('/video', video);

// Turn on that server!
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
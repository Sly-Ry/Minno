const path = require('path');

// Middleware function that can take all of the contents of a folder and serve them as static assets
app.use(express.static(path.join(__dirname, 'public')));

// this file is optional, it just launches the production version of the build
// located in the dist folder, its similar to src server (which launches the dev version)
// of the build located in the src folder
// this is useful for testing the production build locally

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  else {
    open(`http://localhost:${port}`);
  }
});
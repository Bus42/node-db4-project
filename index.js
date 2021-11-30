const server = require('./api/server');
require('dotenv').config();
const port = process.env.PORT || 3000;
const colors = require('colors');

server.listen(port, () => {
  console.log(`***Server is listening on port ${port}***`.america);
}   );

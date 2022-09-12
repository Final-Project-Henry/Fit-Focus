const app = require('./app.js');
require('dotenv').config()

const {PORT} = process.env

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
});

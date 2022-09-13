const app = require('./app.js');
require('dotenv').config()
const {connection} = require('./db.js')

 const {PORT} = process.env

connection.syncIndexes().then(()=>{
  app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
});
})




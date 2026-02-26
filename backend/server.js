const express = require('express')
require('dotenv').config()

const cors = require('cors')

const connectDb = require('./src/db/db.js');  // Fixed: ./src/ not ../src/

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.json({ message: 'Server running' });
});

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('DB connection failed:', err);
  });
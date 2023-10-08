const coonectToMongoose=require('./db')
const express = require('express')

// const modelcus=require('./modules/Try')
coonectToMongoose(); 
// modelcus();
const app = express()
const port = 7000
//use to send josn file 
app.use(express.json());
//to solve access problem
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, auth-token');
  next();
});
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use("/api/auth",require('./routes/auth'))
app.use("/api/notes",require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
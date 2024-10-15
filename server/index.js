const express =require("express");
const cors =require('cors');
const app=express();
const path = require('path');

app.use(cors());
const PORT=process.env.PORT || 3000;
// require('dotenv').config();

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(express.json());
app.listen(PORT,()=> console.log(`Server started at port ${PORT}`));
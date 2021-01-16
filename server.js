const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();


app.get("/",(req,res)=>{

})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)

})
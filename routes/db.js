const fs = require("fs")
const { v4: uuid } = require('uuid')
const path = require("path")

//API for renderning  notes stored on db
const dbApi = (app)=>{
app.get("/api/notes", (req, res) => res.sendFile(path.join(__dirname, "../db/db.json")))

 //API for storing user added note and renderning updated  notes stored on db.json
 app.post("/api/notes", (req, res) => {
     let incomingNote ={
         //UUID generates unique id
         id:uuid(),
         title:req.body.title,
         text:req.body.text
     };
     let existedNote =JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8")) 
     existedNote.push(incomingNote)
     fs.writeFileSync("./db/db.json",JSON.stringify(existedNote))
     res.json(existedNote)
 })

}
module.exports = dbApi;


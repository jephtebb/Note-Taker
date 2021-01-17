const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static('public'))


//Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

require("./routes/db")(app);
require("./routes/html")(app);

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)

})
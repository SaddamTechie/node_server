const path = require("node:path");
const express = require('express');
const PORT = process.env.PORT
const authorRouter = require('./routes/authorRoutes')
const bookRoute = require('./routes/bookRouter')

const app = express()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.json());


app.use('/authors',authorRouter)

app.use('/books',bookRoute)

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
  ];
  
  const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
    res.render("index", { links:links,users:users});
  });
// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
  });
  

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
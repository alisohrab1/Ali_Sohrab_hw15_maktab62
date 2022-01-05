const express = require("express");
const PORT = 5000 ;
const app = express();
const path = require("path");
const config = require("./config/config");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

mongoose.connect(config.mongoURL);


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended : false}));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(routes);


//add 404 page
// app.use(errorController.get404);





app.listen(PORT,() => console.log(`server is running on port ${PORT}`))
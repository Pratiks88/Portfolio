const express = require('express')
const nunjucks = require('nunjucks')
const jobs = require("./data")
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');

const server = express()

server.use(express.static('public'))
server.set("view engine", "njk")


nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function(){
    console.log("Server is running!")
})

/*CRIAÇÃO DAS ROTAS*/


server.get("/", function(req, res){
    return res.render("index", { items: jobs })
})

server.get("/index", function(req, res){
    return res.render("index")
})

server.post("/email", function(req, res){
    res.send("Nome: " + req.body.formName)
})


// Configure Nodemailer to send emails using your Gmail account

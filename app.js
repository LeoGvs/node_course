const express = require('express')
const app = express()
//const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Post = require('./models/post')
const User = require('./models/user')
const port = 3000
const testRoutes = require('./routes/test')
const userRoutes = require('./routes/user')
const path = require('path')
mongoose.connect('mongodb+srv://admin:admin3105@clusternodecourse.lxnkt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=> console.log("db valid"))
.catch(()=> console.log("db error"))
/*
app.use('/',(req, res,next) =>{
    res.json({message: "oklm"})
})*/

var cors = require('cors')
app.options('*', cors()) // include before other routes 
app.use(cors())

app.use((req,res,next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept"); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    next()
})

app.get('/', function(req, res, next) {
    // Handle the get for this route
  });
  
  app.post('/', function(req, res, next) {
   // Handle the post for this route
  });

app.use(express.json())
app.use(express.urlencoded({
    extended :true
}))
app.use('/images',express.static(path.join(__dirname,'images')))
app.use('/test',testRoutes)
app.use('/user',userRoutes)

module.exports = app
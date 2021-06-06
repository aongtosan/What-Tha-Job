const express =  require('express'),
    mongoose = require('mongoose'),
    bodyParser =require('body-parser'),
    cors=require('cors'),
    dbConfig = require('../server/config/db')
const careerRoute = require('../server/routes/career.route')
const accountRoute = require('../server/routes/account.route')
mongoose.Promise = global.Promise
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true
}).then(()=>{
    console.log('Database connected')
},
    error=>{
        console.log("can not connected"+error)
    }
)
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors())
app.use('/',accountRoute)
app.use('/QA',careerRoute)


//Port
const port = process.env.PORT||4000
const server =app.listen(port,()=>{
    console.log('connect to '+port);
})

app.use((req,res,next)=>{
    next(createError(404))
})

//error handler
app.use(function(err,req,res,next){
    console.error(err.message)
    if(!err.statusCode) err.statusCode=500
    res.status(err.statusCode).send(err.message)
})

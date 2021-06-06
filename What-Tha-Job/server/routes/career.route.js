let mongoose = require('mongoose'),
    express =require('express'),
    router = express.Router();
let careerSchema = require('../model/Career')

router.route('/:id').get((req,res)=>{
    careerSchema.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
module.exports = router
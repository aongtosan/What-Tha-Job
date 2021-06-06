let mongoose = require('mongoose'),
    express =require('express'),
    router = express.Router();
let accountSchema = require('../model/Account')

router.route('/:id').get((req,res)=>{
    accountSchema.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
    //create
    router.route('/Register').post((req,res,next)=>{
        accountSchema.create(req.body,(error,data)=>{
            if(error){
                console.log(req.body)
                return next(error)
            }else{
                console.log(data);
                res.json(data)
            }
        })
    })
})
module.exports = router
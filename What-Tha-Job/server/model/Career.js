const mongoose = require('mongoose');
const careerSchema = new mongoose.Schema({
 _id: String,
 job_name: String,
 job_desc: String,
 location: Array,
 duty:Array,
 education:Array
},{
    collection:"career"
}
);
module.exports = mongoose.model('career', careerSchema);

const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({
    _id:String,
    email: String,
    username: String,
    pass: String
},{
    collection:"account"
    ,versionKey: false 
}
);
module.exports = mongoose.model('account', accountSchema);

var mongoose = require('mongoose');
 Schema = mongoose.Schema,
    
module.exports = mongoose.model('User', {
    email: { type : String , unique : true, required : true },
    username: String,
    password: { type : String , required : true },
    mobnumber: { type : Number , unique : true, required : true },
    homeaddress: { type : String , required : true },
    firstname: { type : String , required : true },
    lastname: { type : String , required : true },
    image: String,
    bio: String
	
});
var User = mongoose.model('User');  

var User = require('../datasets/users');



module.exports.updateUsernamee = function (req, res){
    var username = req.body.username;
    var userId = req.body.userId;
    
    User.findById(userId, function (err, userData){
        var user = userData;
              
    });
};

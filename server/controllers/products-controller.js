var Product = require('../datasets/products');
var User = require('../datasets/users');

var fs = require('fs-extra');
var path = require('path');

module.exports.updatePic = function (req, res){
    var file = req.files.file;
    var userId = req.body.userId;
     
    console.log("User " + userId + " is submitting " , file);
    var uploadDate1 = new Date().toISOString;
   
    var tempPath = file.path;
    var targetPath = path.join(__dirname, "../../uploads/"+ userId + uploadDate1 + file.name);
    var savePath = "/uploads/"+ userId + uploadDate1 + file.name;
    fs.rename(tempPath, targetPath, function(err)
             {
        if(err){
            
            console.log(err)
        }
        else{
            
            console.log("file moved");
            Product.findById(userId, function(err, userData){
                
                var product = new Product(req.body);
                product.prodimage = savePath;
                
                product.save(function(err){
                    
                    if(err){
                        console.log(err)
                        res.json({status: 500})
                    }
                    else{
                        console.log("success");
                        res.json({status: 200})
                    }
                    
                })
                
                
                
            }    )
        }
        
    })
   
};
   


module.exports.buyProduct = function (req, res){
    var product = new Product(req.body);
    product.save();
   res.json(req.body);
    }
module.exports.getProducts = function(req, res){
	Products.find({}, function(err, usersData){
		if (err){
			res.error(err);
		} else {
			res.json(usersData);
		}
	})
}


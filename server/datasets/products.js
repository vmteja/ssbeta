var mongoose = require('mongoose');
module.exports = mongoose.model('Product', {
    user: String,
    userId: String,
    prodimage: String,
    content: String,
    devicetype: String,
    devicevaluerange: String,
    devicename: String,
    imeinumber: Number,
    dateofupload: {type: Date, default: Date.now}
});
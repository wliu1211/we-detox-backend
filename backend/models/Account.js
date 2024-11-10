const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema ({
   name : String,
   password : String,
});


module.exports = mongoose.model('Account', AccountSchema);
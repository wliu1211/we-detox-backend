const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({
   name : String,
   organization : String,
   description : String,
   website : String,
   contact : [String],
   rating: Number
});


module.exports = mongoose.model('User', UserSchema);
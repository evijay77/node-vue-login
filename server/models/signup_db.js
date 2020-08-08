var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var signupSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
 
module.exports = mongoose.model('Signup', signupSchema);
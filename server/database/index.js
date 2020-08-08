const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vijay', {useNewUrlParser: true, useUnifiedTopology: true}, () =>{
	 console.log('Connected to MongoDB...');
});

const Users = mongoose.model('users', { name: String, email: String, phone: Number });

module.exports = Users;
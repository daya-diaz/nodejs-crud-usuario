const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dayane:Maisvc10@cluster0.y33pg.mongodb.net/apiteste?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
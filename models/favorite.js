const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' //This is refering to the user model that we created
    },
    campsites: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite' //This is referring to the campsites model that we created
    }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
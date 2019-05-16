const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RankSchema = new Schema({
    leader: {
        type: String,
        trim: true,
        unique: true
    },
    officer: {
        type: String,
        trim: true,
        unique: true
    },
    member: {
        type: String,
        trim: true,
        unique: true
    },
    recruit: {
        type: String,
        trim: true,
        unique: true
    }
});

let Rank = mongoose.model('Rank', RankSchema);

module.exports = Rank;
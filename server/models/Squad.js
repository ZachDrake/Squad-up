const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SquadSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'Squad Name is Required'
    },
    ranks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Rank'
        }
    ],
    logo: {
        type: String,
        trim: true,
        required: 'Squad Logo is Required'
    },
    description: {
        type: String,
        trim: true,
        required: 'Squad Description is Required'
    },
    discord: {
        type: String,
        trim: true,
    },
    games: {
        type: String,
        required: 'At least one game your squad plays is required'
    }
}, {
    timestamps: true
});

let Squad = mongoose.model('Squad', SquadSchema);

module.exports = Squad;


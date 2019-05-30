const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SquadSchema = new Schema({
    name: {
        type: String,
        unique: true,
        index: true,
        required: 'Squad Name is Required'
    },
    logo: {
        type: String,
        trim: true,
        required: 'Squad Logo is Required'
    },
    description: {
        type: String,
        trim: true
    },
    squadType: {
        type: String
    },
    discord: {
        type: String,
        trim: true,
    },
    games: {
        type: Array,
        required: 'At least one game your squad plays is required'
    },
    ranks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Rank'
        }
    ],
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Member'
        }
    ]
}, {
    timestamps: true
});

let Squad = mongoose.model('Squad', SquadSchema);

module.exports = Squad;


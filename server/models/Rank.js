const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RankSchema = new Schema({
    squad: 
        {
            type: Schema.Types.ObjectId,
            ref: 'Squad'
        },
    member: 
        {
            type: Schema.Types.ObjectId,
            ref: 'Member'
        },
    value:
    {
        type: String,
        required: true,
        default: "Recruit"
    }
});

let Rank = mongoose.model('Rank', RankSchema);

module.exports = Rank;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    name: {
        type: String,
        trim: true,
        index: true,
        unique: true,
        required: 'Member Name is Required'
    },
    email: {
        type: String,
        trim: true,
        match: [/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g, 'Please enter a valid e-mail address'],
    },
    password: {
        type: String,
        trim: true,
        required: 'A Password is Required'
    },
    squads: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Squad'
        }
    ]
}, {
    timestamps: true
});

let Member = mongoose.model('Member', MemberSchema);

module.exports = Member;
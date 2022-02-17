const { Schema, model } = require('mongoose');

const groupSchema = new Schema({

    groupName: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
    },

    userCreator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],


    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],

    imageURL:
    {
        type: String,
        default: 'https://www.datocms-assets.com/14946/1597837788-cohort.png'
    }
},
    {
        timestamps: true,
    }
)

const Group = model('Group', groupSchema);

module.exports = Group
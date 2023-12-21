const { Schema, model} = require('mongoose');
const reactionSchema= require('./Reaction');
const moment = require("moment");

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => moment(date).format('YYYY-MM-DD HH:mm'),
    },
    username: {
        type: String,
        required: true,
    },
    reactions:[
        reactionSchema
    ],
},
    {
        toJSON: {
            virtuals:true,
            getters: true,
        },
        id:false,
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model("thought", ThoughtSchema);
module.exports = Thought;
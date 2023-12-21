const { Schema, Types } = require('mongoose');
const { ObjectId } = require("bson");
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => moment(date).format('YYYY-MM-DD HH:mm'),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;
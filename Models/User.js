const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/],
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "thought",
    },],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "user",
    },],
},
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model("user", UserSchema);
model.exports = User;
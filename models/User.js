const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    maxlength: 15
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profilepic: String,
  shop: {
    type: Schema.Types.ObjectId,
    ref: 'Shop'
  }
},
{ timestamps: true }
)

const User = model('User', UserSchema)

module.exports = User
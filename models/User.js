const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  mobile_no: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
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
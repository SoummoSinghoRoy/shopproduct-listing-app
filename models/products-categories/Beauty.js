const {Schema, model} = require('mongoose');

const BeautySchema = new Schema ({
  itemname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 15
  },
  price: {
    type: String,
    required: true,
    trim: true,
    maxlength: 15
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
  },
  manufacturecompany: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  itemimg: String,
  shop: {
    type: Schema.Types.ObjectId,
    ref: 'Shop'
  }
},
{ timestamps: true }
)

const BeautyItem = model('BeautyItem', BeautySchema)

module.exports = BeautyItem
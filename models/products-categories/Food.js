const {Schema, model} = require('mongoose');

const FoodSchema = new Schema ({
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
  expireDate: {
    type: Date,
    required: true
  },
  manufactureCompany: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  itemimg: {
    type: [String],
    required: true,
    maxlength: 3
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: 'Shop'
  }
},
{ timestamps: true }
)

const FoodItem = model('FoodItem', FoodSchema)

module.exports = FoodItem
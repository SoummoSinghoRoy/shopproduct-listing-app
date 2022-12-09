const {Schema, model} = require('mongoose');

const FoodSchema = new Schema ({
  itemname: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    trim: true,
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

FoodSchema.index({
  itemname: 'text'
},{
  weights: {
    itemname: 5
  }
})

const Food = model('FoodItem', FoodSchema)

module.exports = Food
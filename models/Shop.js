const {Schema, model} = require('mongoose');

const ShopSchema = new Schema({
  shopname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    minlength: 100,
    maxlength: 500,
    trim: true
  },
  contact_no: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  food: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Food'
    }
  ],
  beauty: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Beauty'
    }
  ],
  medicine: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Medicine'
    }
  ],
  shopimgs: {
    type: [String],
    required: true,
    maxlength: 3
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},
{ timestamps: true }
)

const Shop = model('Shop', ShopSchema)

module.exports = Shop
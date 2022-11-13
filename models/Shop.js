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
  address: [
    {
      street : String,
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
      } 
    }
  ],
  shopimgs: [
    {
      img_1: String,
      img_2: String,
      img_3: String,
    }
  ],
  productcategories: [
    {
      food: {
        type: Schema.Types.ObjectId,
        ref: 'Food'
      },
      beauty: {
        type: Schema.Types.ObjectId,
        ref: 'Beauty'
      },
      medicine: {
        type: Schema.Types.ObjectId,
        ref: 'Medicine'
      },
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},
{ timestamps: true }
)

const Shop = model('Shop', ShopSchema)

module.exports = Shop
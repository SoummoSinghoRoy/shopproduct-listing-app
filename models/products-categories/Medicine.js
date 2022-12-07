const {Schema, model} = require('mongoose');

const MedicineSchema = new Schema ({
  itemname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  price: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20
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

const MedicineItem = model('MedicineItem', MedicineSchema)

module.exports = MedicineItem
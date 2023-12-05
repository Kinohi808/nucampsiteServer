const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Load currency type to mongoose
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

// Define the promotionSchema
const promotionSchema = new Schema(
{
    name: {
    type: String,
    required: true,
    unique: true,
    },
    image: {
    type: String,
    required: true,
    },
    featured: {
    type: Boolean,
    default: false,
    },
    cost: {
    type: Currency,
    required: true,
    min: 0,
    },
    description: {
    type: String,
    required: true,
    },
},{
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create the Promotion model from the promotionSchema
const Promotion = mongoose.model('Promotion', promotionSchema);

// Export the Promotion model
module.exports = Promotion;

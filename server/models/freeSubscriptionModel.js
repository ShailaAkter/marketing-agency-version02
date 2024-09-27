import mongoose from "mongoose";

const freeSubscriptionSchema = new mongoose.Schema({
    type: 
    {
        type: String, 
        required: true,
        trim: true,
    },

    description: 
    {
        type: String, 
        required: true,
        trim: true,
    },

    duration: 
    {
        type: String,
        required: true,
        enum: ['Monthly', 'Annual'], 
    },

    features: 
    [
        {
            type: String,
            required: true,
            trim: true
        }
    ],

    price: 
    {
        type: Number, 
        required: true,
    },

    icon: 
    {
        type: String, 
        required: true,
    },
    status:
    {
        type: String,
        enum: ['Active','Expired'],
        default: 'Active',
    },
    client: 
    {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
}, {timestamps: true});

export default mongoose.model('freeSubscriptions', freeSubscriptionSchema);

import mongoose from "mongoose";

const  purchasedPlansSchema = new mongoose.Schema({
    subscriptions: 
    [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'subscriptions'
    }],

    quantities: 
    {
        type: Array,
        required: true
    },

    payment: {},

    client: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
},{timestamps: true})

export default mongoose.model('purchasedPlans', purchasedPlansSchema);
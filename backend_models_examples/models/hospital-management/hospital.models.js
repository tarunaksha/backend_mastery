import mongoose from "mongoose";
const {Schema} = mongoose

const hospitalSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    addressLine1: {
        type: String,
        required: true,
    },
    addressLine2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    specialization: [
        {
             type: String,
        }
    ]
},{timestamps: true})

export const Hospital = mongoose.model('Hospital',hospitalSchema)
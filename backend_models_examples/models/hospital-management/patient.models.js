import mongoose from "mongoose";

const { Schema } = mongoose

const patientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    diagnosedWith: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true,
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    }
}, { timestamps: true })

export const Patient = mongoose.model('Patient', patientSchema)
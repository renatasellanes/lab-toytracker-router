import mongoose from "mongoose";



const { Schema, model } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: function(value) {
               return value.includes('@')
            },
            message: () => 'Favor informar um e-mail válido'
        },
        required: true
    },
    birthDate: {
        type: Date,
        requered: true
    },
}, { timestamps: true })

export default model('User', userSchema)
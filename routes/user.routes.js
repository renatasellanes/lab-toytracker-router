import { Router } from 'express'
import User from '../models/User.model.js'

const userRouter = Router()

userRouter.post('/', async (req, res) => {
    const payload = req.body
    try {
        const newStar = await User.create(payload)
        return res.status(201).json(newUser)
    } catch (error) {
        if(error.name === 'ValidationError') {
            return res.status(422).json({message: "Validation error. Check your input."})
        }
        return res.status(500).json({message: "Error while creating movie"})
    }
})

userRouter.get('/', async (req, res) => {
    try {
        const users = await users.find({})
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
})

userRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await user.findById(id)
        if(!user) {
            return res.status(404).json({message: 'Not Found'})
        }
        return res.status(200).json(star)
    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
})
userRouter.put('/:id', async (req, res) => {
    const { id } = req.params
    const payload = req.body
    try {
        const updatedUser = await User.findOneAndUpdate({_id: id}, payload, { new: true })
        if(!User) {
            return res.status(404).json({message: 'Not Found'})
        }
        return res.status(200).json(User)
    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
})
userRouter.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        await User.findOneAndDelete({_id: id})
        return res.status(204).json()
    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
})

export default userRouter
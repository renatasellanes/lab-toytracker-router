import express from 'express'
import Toy from './models/Toy.model.js'


const app = express()


app.get('/', (req, res) => {
    res.send('Welcome to the Toy Tracker API!')
})

app.post('/toys', async (req, res) => {
    try {
        const newToy = await Toy.create(req.body)
        return res.status(201).json(newToy)
    } catch (error) {
        console.log('Erro ao criar toy ', error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

app.get('/toys', async (req, res) => {
    try {
        const toys = await Toy.find({})
        return res.status(200).json(toys)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

app.get('/toys/:id', async (req, res) => {
    try {
        const { id } = req.params
        const toy = await Toy.findById(id)

        if(!toy) {
            return res.status(404).json({message: 'Toy not found'})
        }

        return res.status(200).json(toy)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

app.put('/toys/:id', async (req, res) => {
    try {
        const payload = req.body
        const { id } = req.params

        const updatedToy = await Toy.findOneAndUpdate({_id: id}, payload, { new: true })
        return res.status(200).json(updatedToy)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

app.delete('/toys/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Toy.findOneAndDelete({_id: id})
        res.status(204).json()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})
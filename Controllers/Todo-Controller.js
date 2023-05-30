const {default: mongoose} = require('mongoose')
const todoList = require('../Models/controllerSchema')

const getTodo =  async (req,res) => {
    const todo = await todoList.find({}).sort({createdAt: -1})

    res.status(200).json(todo)
}

const getsingleTodo = async (req,res) => {

    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such todo available.'})
    }

    const todo = await todoList.findById(id)

    if(!todo) {
        return res.status(404).json({error: 'No such todo available'})
    }

    res.status(200).json(todo)
}

const addTodo = async (req,res) =>  {
    const {title, Priority, DueDays} = req.body

    try{
        const todo = await todoList.create({title, Priority, DueDays})
        res.status(200).json(todo)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

const editTodo = async (req,res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such todo available.'})
    }

    const todo = await todoList.findByIdAndUpdate({_id: id})

    if(!todo) {
        return res.status(404).json({error: 'No such todo available'})
    }

    res.status(200).json(todo)
}

const deleteTodo = async (req,res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such todo available.'})
    }

    const todo = await todoList.findOneAndDelete({_id: id})

    if(!todo) {
        return res.status(404).json({error: 'No such todo available'})
    }

    res.status(200).json(todo)
}

module.exports = {
    getTodo,
    getsingleTodo,
    addTodo,
    editTodo,
    deleteTodo
}
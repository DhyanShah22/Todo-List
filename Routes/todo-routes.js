const express = require('express')
const {
    getTodo,
    getsingleTodo,
    addTodo,
    editTodo,
    deleteTodo
} = require('../Controllers/Todo-Controller')

const router = express.Router()

router.get('/', getTodo)

router.get('/:id', getsingleTodo)

router.post('/', addTodo)

router.patch('/:id', editTodo)

router.delete('/:id', deleteTodo)

module.exports = router
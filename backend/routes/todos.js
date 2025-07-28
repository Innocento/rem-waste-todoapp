const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const { getTodosByUser, addTodo, updateTodo, deleteTodo } = require('../models/todo');

// List todos
router.get('/', authenticate, (req, res) => {
  res.json(getTodosByUser(req.user.username));
});

// Add todo
router.post('/', authenticate, (req, res) => {
  const todo = {
    id: Date.now(),
    user: req.user.username,
    text: req.body.text,
    done: false
  };
  addTodo(todo);
  res.json(todo);
});

// Update todo
router.put('/:id', authenticate, (req, res) => {
  updateTodo(req.params.id, req.user.username, req.body);
  res.json({ success: true });
});

// Delete todo
router.delete('/:id', authenticate, (req, res) => {
  deleteTodo(req.params.id, req.user.username);
  res.json({ success: true });
});

module.exports = router;
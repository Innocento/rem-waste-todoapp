const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');
const { addUser, findUser, validateUser } = require('../models/user');

// Register
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (findUser(username)) {
    return res.status(400).json({ error: 'User exists' });
  }
  addUser({ username, password });
  res.json({ success: true });
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = validateUser(username, password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
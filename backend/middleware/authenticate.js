const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');

function authenticate(req, res, next) {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ error: 'No token' });
  const [, token] = header.split(' ');
  try {
    const payload = jwt.verify(token, SECRET);
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ error: 'Bad token' });
  }
}

module.exports = authenticate;
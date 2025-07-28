const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));

const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
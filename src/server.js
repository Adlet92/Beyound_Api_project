const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(express.json());

const users = [];


const SECRET_KEY = process.env.VITE_SECRET_KEY;


const generateAccessToken = (username) => {
  return jwt.sign({ username }, SECRET_KEY, { expiresIn: '1800s' });
};

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });

  const accessToken = generateAccessToken(username);
  res.json({ accessToken });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  const accessToken = generateAccessToken(username);
  res.json({ accessToken });
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

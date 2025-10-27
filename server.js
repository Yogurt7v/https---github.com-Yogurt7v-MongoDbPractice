const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { getProblems, addProblem } = require('./src/problems.controller');
const { getUser, addUser, loginUser } = require('./src/user.controller');

const port = 5000;
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

// app.get("/", async(req, res) => {
//   const obj = await getUser();
//   res.send(obj);
//   res.redirect('/form')
// })

app.post('/', async (req, res) => {
  try {
    const user = await loginUser(req.body.email, req.body.password);
    res.json({ success: true, message: 'Login successful' });
  } catch (e) {
    console.error('Login error', e);
    res.status(401).json({ success: false, message: e.message });
  }
});

// app.get("/register", async(req, res) => {
//   const obj = await getUser();
//   res.send(obj);
// })

app.post('/register', async (req, res) => {
  console.log('register');
  try {
    const user = await addUser(req.body.email, req.body.password);
    res.json({ success: true, message: 'Registration successful' });
  } catch (e) {
    console.error('Creation error', e);
    res.status(400).json({ success: false, message: e.message });
  }
});

app.get('/all', async (req, res) => {
  const obj = await getProblems();
  res.send(obj);
});

app.post('/form', async (req, res) => {
  try {
    const result = await addProblem(req.body);
    if (result) {
      res.json({ success: true, message: 'Problem added successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Error adding problem' });
    }
  } catch (e) {
    console.error('Creation error', e);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

mongoose
  .connect('mongodb+srv://yogurt7v:152070@diplomecluster.9emai75.mongodb.net/')
  .then(() => {
    app.listen(port, () => {
      console.log(`Server has been started on port ${port}...`);
    });
  });

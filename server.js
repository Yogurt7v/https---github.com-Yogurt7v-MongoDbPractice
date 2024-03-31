const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { getProblems, addProblem } = require('./src/problems.controller')
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

app.post("/", async(req, res) => {
  try{
    const user = await loginUser(req.body.email, req.body.password)
    if(user){
      res.redirect("/form")
    }
    else{
      res.redirect("/")
    }
  }
  catch(e) {
    console.error('Login error', e)
  }
})


app.get("/register", async(req, res) => {
  const obj = await getUser();
  res.send(obj);
})

app.post("/register", async(req, res) => {
  try{
    const user = await addUser(req.body.email, req.body.password)
    if(user){
      res.redirect("/")
    }
    else{
      res.redirect("/register")
    }
  }
  catch(e) {
    console.error('Creation error', e)
  }
})


app.get("/all", async(req, res) => {
  const obj = await getProblems();
  res.send(obj);
});

app.post('/form', async (req, res) => {
  try {
    await addProblem(req.body)
  } catch(e) {
    console.error('Creation error', e)
  }

})



mongoose.connect(
    'mongodb+srv://egorov2k:yogurt152070@testdatabase.jmmuafk.mongodb.net/Clinic'
  ).then(() => {
    app.listen(port, () => {
      console.log(`Server has been started on port ${port}...`)
    })
  })
const Problems = require("../Models/problems.js");

async function getProblems() {
  const problems = await Problems.find();

  return problems;
}


async function addProblem(problem) {
    console.log(problem);
    await Problems.create(problem)
  
    console.log('Note was added!')
  }

module.exports = {
  getProblems,addProblem
};

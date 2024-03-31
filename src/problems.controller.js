const Problems = require("../Models/problems.js");

async function getProblems() {
  const problems = await Problems.find();
  return problems;
}


async function addProblem(problem) {
    await Problems.create(problem)
  
    console.log('Problem was added!')
  }

module.exports = {
  getProblems,addProblem
};

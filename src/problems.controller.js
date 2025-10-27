const { response } = require('express');
const Problems = require('../Models/problems.js');

async function getProblems() {
  const problems = await Problems.find();
  return problems;
}

async function addProblem(problem) {
  try {
    const newProblem = await Problems.create(problem);
    console.log('Problem was added!');
    return true;
  } catch (error) {
    console.error('Error adding problem:', error);
    return false;
  }
}

module.exports = {
  getProblems,
  addProblem,
};

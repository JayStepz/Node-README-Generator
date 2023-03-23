// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'use',
        message: 'How will someone use this?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list any contributors and sources used.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can you test it?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

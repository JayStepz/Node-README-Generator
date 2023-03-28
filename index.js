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
            type: 'list',
            name: 'license',
            message: 'What license would you like to use?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
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
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err => {
        if (err) {
            console.log('There was an issue generating your README.md');
        } else {
            console.log('Generating ProjectREADME.md');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile('./output/ProjectREADME.md', generateMarkdown({...inquirerResponses}));
});
}

// Function call to initialize app
init();

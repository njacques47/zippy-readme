// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const promptUser = () => {
  
  return inquirer
  .prompt([
    { // project name VALIDATE
      type: 'input',
      name: 'title',
      message: 'What is the project named? (required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project's title!");
          return false; // try as a function that includes (!answer)
        }
      }
    },
    { // project description VALIDATE
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project.',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a valid description");
          return false;
        }
      }
    },
    { //installation guide VALIDATE
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    { // usage
      type: 'input',
      name: 'usage',
      message: 'What does someone need to know about this project to use it?'
    },
    { // tests
      type: 'input',
      name: 'tests',
      message: 'What tests are included and how are they used?'
    },
    { // how to contribute to project VALIDATE
      type: 'input',
      name: 'contribution',
      message: 'What are the guidelines for contributing?'
    },
    { // licenses that tell what can be done with the project
      type: 'list',
      name: 'license',
      message: 'What license does this project use?',
      choices: [
        'MIT',
        'GPL-3.0',
        'Apache-2.0',
        'BSD-3-Clause',
        'None'
      ]
    },
    { // contact details
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    },
    { 
      type: 'input',
      name: 'github',
      message: 'What is your github username? (ex. breehall)'
    }
  ]);
};

// TODO: Create a function to write README file
// don't forget to change the name back to README
const writeFile = data => {
  return new Promise ((resolve, reject) => {
    fs.writeFile('./dist/MOCK.md', data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'Check distibution for file!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then(userAnswers => {
      return generateMarkdown(userAnswers);
    })
    .then(userMarkdown => {
      writeFile(userMarkdown)
      console.log('Check dist folder')
    });
};

// Function call to initialize app
init();

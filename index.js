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
          return false;
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
    { // table of contents
      type: 'list',
      name: 'readme',
      message: 'What type of README would you like? Simple (installation, usage, credits, license), simple ToC (w/ table of contents), or detailed (simple ToC + badges, features, contributions, and tests)',
      choices: ['Simple', 'Simple ToC', 'Detailed'],
      validate: readmeType => {
        if (readmeType === 'Detailed') {
          return 'A detailed README will be generated with a table of contents and four empty sections for additional details.' 
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
      message: 'What does someone need to know about this project such as instructions or demos?'
    },
    { // credits (optional) list collaborators and their github usernames
      type: 'input',
      name: 'credits',
      message: 'Add any credits or resource links here'
    },
    { // licenses that tell what can be done with the project
      type: 'list',
      name: 'license',
      message: 'What license does this project use?',
      choices: [
        'MIT',
        'GNU GPL v3',
        'Apache 2',
        'BSD 3-Clause',
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
    },
    // use when: for everything below here // 
    // { // badges (optional)
    //   type: 'input',
    //   name: 'badges',
    //   message: 'Add b',
    //   when(data) {
    //     return data.readme === 'Detailed';
    //   }
    // },
    // { // features (optional)
    //   type: 'input',
    //   name: 'features',
    //   message: 'features section?',
    //   when(data) {
    //     return data.readme === 'Detailed'}
    // },
    // { // how to contribute/open source (optional)
    //   type: 'input',
    //   name: 'contribution',
    //   message: 'How to contribute?',
    //   when(data) {
    //     return data.readme === 'Detailed'}
    // },
    // { // tests (optional)
    //   type: 'input',
    //   name: 'tests',
    //   message: 'Tests included?',
    //   when(data) {
    //     return data.readme === 'Detailed'}
    // }
  ]);
};

// TODO: Create a function to write README file
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
      if (userMarkdown.readme === 'Detailed') {
          writeFile(userMarkdown)
          //console.log('Check dist folder')
          return 'A detailed README was generated with all input data and an empty sections for badges, features, contributions, and tests.'
        }
      writeFile(userMarkdown)
      console.log('Check dist folder')
    });
};

// Function call to initialize app
init();

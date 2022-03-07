// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// COMPLETED: adds a clickable badge to the top of the README file
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPL-3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)';
    case 'Apache-2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD-3-Clause':
      return '[![License]((https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'None':
      return '';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// COMPLETED: renders license section with appropriate links based on user selection
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  }
  return `## License
I am using the [${license}](https://opensource.org/licenses/${license}) license for this project. Please follow the contributing guidelines provided in the previous section. For general information on licenses, visit https://opensource.org/ or https://choosealicense.com  to find a suitable license for your own project. Happy coding!
    `
};

// renders table of contents based on license selection (license is excluded if none is selected as an option)
const renderTOC = data => {

  if (data === 'None') {
    return `
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Contact](#contact)
    `;
  } else {
    return `
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)
`
  };
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
${renderLicenseBadge(data.license)}  

## Description
${data.description}

## Table of Contents
  ${renderTOC(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}
  
## Tests
${data.tests}

## Contributing
${data.contributing}

${renderLicenseSection(data.license)}

## Contact
If you have any questions, you can email me at ${data.email} or visit my [github profile](https://github.com/${data.github}). 
  `;
};

module.exports = generateMarkdown;

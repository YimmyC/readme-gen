// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![license](https://img.shields.io/badge/license-${license}-blue.png) \n`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `7. [License](#license) \n`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License 
  This project is licensed under ${license} \n`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Contents
  1. [Description](#discription)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#test)
  6. [Questions](#questions)
  ${renderLicenseLink(data.license)}
  # Description
    ${data.description} \n
  # Installation
    ${data.installation} \n
  # Usage
    ${data.usage} \n
  # Contributing
    ${data.contributing} \n
  # Tests
    ${data.tests} \n
  # Questions \n
    Feel free to access my github or contact me via email with any questions. \n
  <a href="https://github.com/${data.github}">${data.github}</a> \n
  ![follow](https://img.shields.io/github/followers/${data.github}?style=social) \n
  <a href="mailto:${data.email}">${data.email}</a> \n
  ${renderLicenseSection(data.license)}
 ${renderLicenseBadge(data.license)}
 `;
}

module.exports = generateMarkdown;

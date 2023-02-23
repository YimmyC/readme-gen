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
  return `[Go to License](#License) \n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License 
  This project is licensed under ${license} \n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}
 ${renderLicenseLink(data.license)}
 ${renderLicenseSection(data.license)}
 `;
}

module.exports = generateMarkdown;

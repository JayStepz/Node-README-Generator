// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return "";
  } else return `[![License](https://img.shields.io/badge/License-${license}-red.svg)](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return "";
  } else return `https://www.spdx.org/licenses/${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return "";
  } else return `## License \n ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
\n[Description](##description)
\n[Install](##install)
\n[Usage](##usage)
\n[Contributions](##contributions)
\n[Tests](##tests)
\n[Questions](##questions)

## Description
${data.description}

## Install
${data.install}

## Usage
${data.use}

## Contributions
${data.contribution}

## Tests
${data.test}

## Questions
If you have any questions, please contact me through GitHub at [${data.github}](github.com/${data.github}) or through email at [${data.email}](${data.email}).

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

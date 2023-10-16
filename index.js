const inquirer = require('inquirer');

const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter your name (First Last):',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Where do you currently reside? (City, ST)',
        name: 'location'
    },
    {
        type: 'input',
        message: 'What should the world know about you?',
        name: 'bio'
    },
    {
        type: 'input',
        message: 'Enter your LinkedIn URL:',
        name: 'linkedIn'
    },
    {
        type: 'input',
        message: 'Enter your GitHub URL:',
        name: 'gitHub'
    }
])
.then((response) =>
    fs.writeFile('userIndex.html', `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${response.name}</h1>
    </body>
    </html>`, (err) =>
    err ? console.error(err) : console.log('Success! Generating page...'))
    );
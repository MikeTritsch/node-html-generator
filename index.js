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
    fs.writeFile('userIndex.html', 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/style/style.css">
        <title>${response.name}</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="name navbar-brand" href="#">${response.name}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="name nav-link" aria-current="page" href="${response.linkedIn}">LinkedIn</a>
                        </li>
                        <li class="nav-item">
                            <a class="name nav-link" href="${response.gitHub}">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main>
            <div class="container w-100 p-4">
                <div class="row text-center">
                    <div class="col-4 location">${response.location}<br></div>
                    <div class="col-6">About me<br>${response.bio}</div>
                </div>
            </div>
        </main>
    </body>
    </html>`, 
    (err) =>
    err ? console.error(err) : console.log('Success! Generating page...'))
    );
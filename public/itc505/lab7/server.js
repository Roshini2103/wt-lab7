const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))

// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})

server.post('/itc505/lab7', (req, res) => {
  const noun = req.body.noun;
  const noun1 = req.body.noun1;
  const noun2 = req.body.noun2;
  const adjective1 = req.body.adjective1;
  const adjective2 = req.body.adjective2;
  const verb = req.body.verb;

  const madLib = `As ${noun} walked through the ${adjective1} ${noun1}, they couldn't shake the feeling of being watched. Every creak of the floorboard, every rustle of the leaves, sent a chill down their spine.Suddenly, they heard a sound that made their heart leap into their throat. It was a soft, scratching noise, like something was being dragged across the floor. ${noun} froze in their tracks, their eyes darting around in the dim light.Then, they saw it - a ${adjective2}  emerging from the shadows. It was tall and gaunt, with sunken eyes and a long, claw-like hand reaching out towards ${noun}.${noun} let out a scream and turned to run, but their foot caught on something and they fell to the ground.`;
  
  res.send(`
    madLib<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Suspenseful Mad Lib</title>
        <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
        <h1>Suspenseful Mad Lib</h1>

        <div id="madLibStory">
        ${madLib}
        </div
    
        <div id="madLibStory">
            Roshini Chalarapu
        </div
         
    </body>
    </html>
    `);

});

// Setup static page serving for all the pages in "public"

const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))


// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 80
if (process.argv[2] === 'local') {
  port = 8081
}

server.listen(port, () => console.log('Ready on localhost!'))

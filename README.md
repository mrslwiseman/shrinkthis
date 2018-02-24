## A small scale URL shortening service.

### Project Summary
This the first project in a series of Free Code Camp backend challenges.
ShrinkThis has a 'counter' collection that automatically increments every time new short link is created, assigning an integer based short link, 1 through n.

Should this be a large scale project I'd look at creating a more unique hash that doesnt have to access the DB initially in order to increment, but it'll do for the purpose of my project here...

### What I learned
I initally made this with the stock MongoClient, so got familiar with the vanilla aspects of Mongo. I then transitioned to Mongoose so I could easily enforce a Schema and make the app a little less verbose.

### To-do
- Add tests
- More error scenarios - more invalid url checks
- Make the checkLink function a little more elegant
- Add a nice front end that queries the API, perhaps in React, but may be overkill
- Add some error handling middleware
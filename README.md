# Project 3
## Bookmaark'd

#### By Kenny Nguyen, Tony Daniels and Ahmed Sorour

## Project Summary

We’re building a bookmark app using JavaScript, mongoDB, express and node. The app is to bring the user to where they can bookmark a site that they want to keep in case they want to go to it again in the future. It allows the user to save a web site's URL address for future reference.

## Models

The Model will consist of a schema that will have 2 properties from the backend. The front end will have to respect this schema in order to work.

- title: String
- url: String

## Route Table

The root table was made off of full CRUD that was JavaScript.

| url                 | method | action                                 |        |
|---------------------|--------|----------------------------------------|--------|
| /bookmark           | get    | The main/ index page                   | index  |
| /bookmark/:id       | get    | get a particular bookmark item         | show   |
| /bookmark/          | post   | post the new item                      | create |
| /bookmark/:id/      | put    | update the bookmark from the list      | update |
| /bookmark/:id       | delete | delete a bookmark                      | delete |

## User Stories

User should be able to put type what they want on this app so that they don’t have to worry about forgetting after. If they have the site and url, they can either delete the item or update it.

## Challenges

- not being able to npm run start at one point after main.js was created. So, I pushed it to Github and made an “attempt branch”. If anything messed up, we were to just load the last working branch. At least that was the idea.


- At times, the filename fonts were red. While the code was still working, the team spent about 15 minutes on what the issue was. Then the red suddenly went away.

## List of Technologies

- node.js
- HTML
- CSS
- react
- EXPRESS
- mongo
- morgan



![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# ToyTracker Routers

# Introduction
 We will use a version of the ToyTracker application to reinforce the concepts of setup, modelling and routing using Express and Mongoose. 

# Requirements
- Full setup of the application using dotenv and all required libraries
- An API for a complete crud on Toys and Users

# Instructions

## Iteration 0 - Setup
Setup the application with nodemon, the proper db connection file and function, dotenv, .gitignore and express listening call. x

## Iteration 1 - Create User model

- **name** - Type `String`. It should be required.
- **email** - Type `String`, It should be required, and you can use match to setting only valid emails
- **birthDate** - Type `Date`, it should be required
- **timestamps** - use timstamps config of mongoose

## Iteration 2 - Create the Toys Router

- Create a routes directory and a Toys.routes.js file inside it. 
- Refactor the code provided on app.js and migrate all the Toys related routes to the newly created router. 
- Import the newly created router on the app.js file and test all the routes making shure they all work.

## Iteration 3 - Create the Users Router

- Create a Users.routes.js file inside the routes directory. 
- Create all the routes needed to a full Users CRUD
- Import the newly created router on the app.js file and test all the routes making shure they all work.

## Iteration 4 - Search Toys by value
- Create a route named "/search" that will be used to search toys. 
- The search route may receive the minValue, maxValue params
- If the minValue or maxValue are provided, the result must include only the toys with values between minValue and maxValue. Ex.: maxValue = 1000, return only toys with value less or equal 1000. 

## Bonus
- Using the "/search" route, if the year param is provided, return only the toys that have the manufacturing date year matching the year provided. 


Happy coding! 💙
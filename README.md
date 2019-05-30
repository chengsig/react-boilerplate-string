# The String App
using [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

## Requirements:
---
##### One page shall have UI to input a string which saves to a database of your choice.
##### One page shall display all strings stored on the database.
##### User shall be able to navigate between the two pages.
##### The application need not be fully styled, but should be laid out in a meaningful way.
##### The application should utilize a Node / Express server.
##### No need to deploy the application.

## The application must leverage:
---
##### React Router
##### Redux
##### Redux Saga
##### Reselect
##### Styled Components - Use at least one styled component. The component must have a prop passed into the Styled Component for conditional rendering.
##### Unit Tests - Write tests for one container. Full test coverage is not required.

Getting Started
---
clone the repo
```
$ cd react-boilerplate-dmi
$ cd server
$ createdb dmi
$ psql dmi < data.sql
$ cd ..
$ npm install
$ npm start
```
headover to http://localhost:5000

# <center>Get Busy: Event Planner<center>
It's time to _GET BUSY_ - the brand new event planner that makes you the center of the party! Once you log in, you can search for events in your vicinity, join up on various events and presentations and even create your own events! You can even see all the events you made and organize yourself. Finally, our easy-to-use interface will always remind you when the next big shindig is happening soon!

## Features
* View current local events
* View popular events
* Search events
* Add events to your profile
* Login and register with server or Google

## Components
* **EventDetail** - displays more info about events when clicked
* **EventItem** - each individual event
* **EventList** - a list of events
* **Nav** - navigation bar that includes search, Login, and Register
* **Footer** - footer at bottom displaying copyright information
* **Splash** - event slideshow that appears on the welcome page
* **UserProfile** - user profile page, where user may see their added events and other user information
* **Welcome** - view screen that displays the Nav, Splash, and EventList
* **HomePage** - view screen that displays the Nav and EventList
* **Login** - Username and password login form
* **Register** - Username and password register form


## Libraries and Dependencies
| React |
Axios |
bcrypt |
body-parser |
cors |
eslint |
express |
jsonwebtoken |
moment |
morgan |
nodemon |
passport/passport-jwt |
pg/pg-hstore |
sequelize |

## Landing page design

![Landing page design](https://github.com/estervojko/event-planner-app/blob/ester-production/planning/Landing%20page%20Wireframe.png?raw=true)

## Overview of Planning Materials

![Overview of Planning Materials](https://github.com/estervojko/event-planner-app/blob/ester-production/planning/EventPlanner%20-%20Overview.JPG?raw=true)

## Landing Page Wireframe

![Landing Page Wireframe](https://github.com/estervojko/event-planner-app/blob/ester-production/planning/EventPlanner%20-%20Landding%20Page%20Wireframe.JPG?raw=true)

## Feature List and Component Hierarchy

![Feature List and Component Hierarchy](https://github.com/estervojko/event-planner-app/blob/ester-production/planning/EventPlanner%20-%20.FeatureList%20and%20Compoent%20HierarchyJPG.JPG?raw=true)

## Entity Relationship Diagram

![Entity Relationship Dagram](https://github.com/estervojko/event-planner-app/blob/ester-production/planning/EventPlanner%20-%20%20Initial%20ERD.JPG?raw=true)

## Routes:

![Routes for events](https://github.com/estervojko/event-planner-app/blob/ester-production/planning/Routes1.jpg?raw=true)

### Routes for users

![Routes for users](https://github.com/estervojko/event-planner-app/blob/ester-production/planning/Routes2.jpg?raw=true)

## Getting Started

clone this repo and cd into it.
run ```npm install``` in the root directory as well as the client directory.
Create a new postgres database called ```events_db```
cd back into the root directory and run ```npm run resetDb``` and ```npm run seed```
You can open a new terminal window and run ```npm run dev``` to start the server
Now cd into the client directory and run ```npm start```

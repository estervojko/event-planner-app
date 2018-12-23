Link to the deployed app:
http://event-planner-app.surge.sh/

# <center>Get Busy: Event Planner<center>

### Description and How To Use

This 3-days-to-production app is a quick implementation of the idea to make an event planner website. Similar to the concept of eventbrite, meetup etc, the app connects users with events. A guest user can either choose to explore the site as a guest, or register. A returning member can log in and view event details by clicking on one of the events he sees in his home screen. He can get out of this screen by either clicking on the "x" button in the upper-right or on the "Get Busy" text in the navigation bar. While in the event detail screen a member can sign up for an event by clicking on the going button and/or write a comment and see their comment immediately after they click post. Guest users can post comments too. Click on the going button for the second time, signs the user out of the event.

To try the app, either register, or use this user to log in:

username: es
password: es

### Work in progress:

Clicking on the username in the navigation bar displays the user's homepage. Information about the user is displayed here. The user can create an event, see the events he's created, and delete them. As post-mvp features we'd like to add functionality like being able to view popular events ranking them based on the number of attendees, viewing events near you, or based on location.

## Getting Started
#### How to join the project and add features

clone this repo and cd into it.
run ```npm install``` in the root directory as well as the client directory.
Create a new postgres database called ```events_db```
cd back into the root directory and run ```npm run resetDb``` and ```npm run seed```
You can open a new terminal window and run ```npm run dev``` to start the server
Now cd into the client directory and run ```npm start```

## Features
* Login/logout using json web tokens and passport authentication
* View user events
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

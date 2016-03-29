#####Mello is a web application modeled after Trello using Ruby on Rails. Mello allows users to:

  *	Create an account
  *	Log in/ Log out
  *	Create, read, edit and delete boards
  *	Create, read, edit and delete cards
  *	Attach cards to boards
  *	Add listed notes to each card
  *	Upload pictures, create checklists, add labels and comments, and create due dates.


#####Implementation Timeline

##Phase 1

#####Objective: Have a functioning rails project with Authentication.

  *	Create new Rails project
  *	Create User model
  *	Authentication (BCrypt)
  *	User signup/signin pages
  *	Redirect user to landing page on login (Mello’s root React component)

##Phase 2: Cards Model, Associated comments, API, basic APIUTIL

#####Objective: Cards can be created and Notes can be added to them.

  *	Create Card model
  *	Create comments model
  *	Add associations
  *	CRUD API for cards
  *	JBuilder views for cards
  *	Setup Webpack
  *	Basic interactions using Flux

##Phase 3: Build Out Flux and Implement Routers

#####Objective: Cards can be added, read, edited and destroyed all using the user interface

  *	Create all interactions using React and Flux.
  *	Have all interactions through single page using routers.
  *	Add more note components for files, due dates, and checklists
  *	Save cards to database



##Phase 4: Drag and drop functionality for Lists and Cards

#####Objective: Add React Drag and Drop functionality to Card Elements

  *	Drag list items from one card to another:
  *	Update cards using drag and drop GUI

##Phase 5: Styling

#####Objective: build styling around existing functionality.


  *	Create style guide to direct styling
  *	Position elements
  *	Add colors and font formatting



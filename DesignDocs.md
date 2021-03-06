####Design Docs

* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/React-Components.md
[stores]: ./docs/FluxStores.md
[api-endpoints]: ./docs/Api-Endpoints.md
[schema]: ./docs/DBSchema.md


#####Implementation Timeline

##Phase 1: Authentication

#####Objective: Have a functioning rails project with Authentication.

  *	Create new Rails project
  *	Create User model
  *	Authentication (BCrypt)
  *	User signup/signin pages
  *	Redirect user to landing page on login (Mello’s root React component)

##Phase 2: Boards

#####Objective: Have functioning boards created by user.

  * create Board model
  * create Board controler
  * Add associations of boards and users
  * CRUD API for boards
  * JBuilder views for boards
  *	Setup Webpack

##Phase 3: Build Out Flux and Implement Routers

#####Objective: Boards and Cards can be added, read, edited and destroyed all using the user interface

  *	Basic interactions using Flux
  *	Create all interactions using React and Flux.
  *	Have all interactions through single page using routers.
  *	Save boards to database

##Phase 4: Cards

#####Objective: Cards can be created and tasks can be added to them.

  *	Create Card model
  *	Add associations
  *	CRUD API for cards
  *	JBuilder views for cards

##Phase 5: Tasks

#####Objectve: tasks can be attached to cards.

  * Create Task model
  * Add associations
  * CRUD API for tasks
  * JBuilderViews for tasks

##Phase 6: Comments

#####Objective: Comments can be created and added

  *	Create Comment model
  *	Add associations
  *	CRUD API for cards
  *	JBuilder views for cards

##Phase 7: Drag and drop functionality for tasks and Cards

#####Objective: Add React Drag and Drop functionality to Card Elements

  *	Drag list items from one card to another
  *	Update cards using drag and drop GUI

##BONUS: Add automated interactions between tasks.
  
  * Create actions between tasks of same user
  * Allow actions between tasks of seperate users

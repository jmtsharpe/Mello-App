##Root

  * GET / - loads React web app

##Users

  * GET /users/new
  * POST /users
  * PATCH /users

##Session

  * GET /session/new
  * POST /session
  * DELETE /session

##Boards

  * GET /api/boards
  * POST /api/boards
  * GET /api/boards/:id
  * PATCH /api/boards/:id
  * DELETE /api/boards/:id
  * GET /api/boards/:id/cards

##Cards

  * GET /api/cards
  * POST /api/cards
  * GET /api/cards/:id
  * PATCH /api/cards/:id
  * DELETE /api/cards/:id

##Tasks

  * GET /api/cards/:card_id/tasks
  * POST /api/cards/:card_id/tasks
  * GET /api/cards/:card_id/tasks/:id
  * PATCH /api/cards/:card_id/tasks/:id
  * DELETE /api/cards/:card_id/tasks/:id

##Comments

  * GET /api/comments
  * POST /api/cards/:card_id/comments
  * DELETE /api/cards/:card_id/comments/comment_id

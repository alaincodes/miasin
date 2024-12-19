/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('Home')
router.on('/archive').renderInertia('Archive')
router.on('/new_case').renderInertia('cases/new')
router.on('/stats').renderInertia('Statistics')


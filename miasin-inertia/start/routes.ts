/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')
router.on('/admin').renderInertia('admin')
router.on('/login').renderInertia('login')
router.on('/users').renderInertia('users/index')

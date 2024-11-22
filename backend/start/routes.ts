/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/api/users', [UsersController, 'index'])
router.post('/api/users', [UsersController, 'store'])
router.get('/api/users/:id', [UsersController, 'show'])

/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const PostsController = () => import('#controllers/posts_controller')

// router.on('/').renderInertia('home')
router.get('/', [PostsController, 'index'])
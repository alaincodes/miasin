import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'

export default class PostsController {
  async index({ inertia, request }: HttpContext) {
    const page = request.input('page', 1)

    const posts = await Post.query().paginate(page, 30)

    return inertia.render('posts/index', { posts })
  }
}

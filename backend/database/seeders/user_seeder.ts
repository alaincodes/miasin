import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '../../app/models/user.js'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      { fullName: 'Admin', email: 'admin@example.com', password: 'password123' },
      { fullName: 'John Doe', email: 'john@example.com', password: 'password123' }
    ])
  }
}

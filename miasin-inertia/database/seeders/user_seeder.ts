import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '../../app/models/user.js'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        fullname: 'Admin User',
        name: 'Admin',
        lastname: 'User',
        job: 'Administrator',
        country: 'France',
        email: 'admin@example.com',
        password: await hash.make('password123'),
      },
      {
        fullname: 'John Doe',
        name: 'John',
        lastname: 'Doe',
        job: 'Developer',
        country: 'USA',
        email: 'john.doe@example.com',
        password: await hash.make('password123'),
      },
      {
        fullname: 'Jane Smith',
        name: 'Jane',
        lastname: 'Smith',
        job: 'Designer',
        country: 'UK',
        email: 'jane.smith@example.com',
        password: await hash.make('password123'),
      },
    ])
  }
}

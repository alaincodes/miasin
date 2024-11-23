import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '../../app/models/user.js'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        full_name: 'Admin User',
        name: 'Admin',
        last_name: 'User',
        job: 'Administrator',
        country: 'France',
        email: 'admin@example.com',
        password: await hash.make('password123'),
      },
      {
        full_name: 'John Doe',
        name: 'John',
        last_name: 'Doe',
        job: 'Developer',
        country: 'USA',
        email: 'john.doe@example.com',
        password: await hash.make('password123'),
      },
      {
        full_name: 'Jane Smith',
        name: 'Jane',
        last_name: 'Smith',
        job: 'Designer',
        country: 'UK',
        email: 'jane.smith@example.com',
        password: await hash.make('password123'),
      },
    ])
  }
}

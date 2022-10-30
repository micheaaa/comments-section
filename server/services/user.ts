import db from '~/server/db/client'
import {User} from '~/server/db/models'

export default class UserService {
  static async getAll() {
    try {
      const users = await db.query(User).find()
      return users
    } catch (e) {
      return []
    }
  }

  static getProfile(id: number) {
    return db.query(User).filter({id}).findOne()
  }
}

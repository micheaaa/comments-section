import {Database} from '@deepkit/orm'
import {SQLiteDatabaseAdapter} from '@deepkit/sqlite'

import {Comment, CommentVote, User} from './models'

declare global {
  var db: Database | undefined
}

export const db = global.db || createConnection()

if(process.env.NODE_ENV !== 'production') {
  global.db = db
}

function createConnection() {
  const database = new Database(
    new SQLiteDatabaseAdapter('./example.sqlite'),
    [User, Comment, CommentVote]
  )   

  database.migrate().then(() => console.log('DATABASE MIGRATED'))

  return database
}

export default db

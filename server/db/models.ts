import {AutoIncrement, entity, PrimaryKey, Reference} from '@deepkit/type'

@entity.name('user')
export class User {
  id: number & PrimaryKey & AutoIncrement = 0
  profile_image?: string
  created_at: Date = new Date

  constructor(public username: string) { }
}

@entity.name('comment')
export class Comment {
  id: number & PrimaryKey & AutoIncrement = 0
  created_at: Date = new Date
  updated_at: Date = new Date

  constructor(
    public author: User & Reference,
    public content: string,
    public direct_reply_to: Comment & Reference,
    public reply_to: Comment & Reference
  ) { }
}

@entity.name('comment_vote')
export class CommentVote {
  created_at: Date = new Date
  
  constructor(
    public user: User & Reference,
    public comment: Comment & Reference,
  ) { }
}

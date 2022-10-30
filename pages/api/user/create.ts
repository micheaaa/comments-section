import type {NextApiRequest, NextApiResponse} from 'next'

import UserService from '~/server/services/user'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {username} = req.body

  if(username && req.method === 'POST') {
    await UserService.create(username)
  } 

  res.redirect('/')
}

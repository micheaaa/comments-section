import {redirect, useRouter} from 'next/navigation'
import {Suspense} from 'react'

import UserService from '~/server/services/user'

async function UserList() {
  const users = await UserService.getAll()

  return (
    <>
      <h2>User List</h2>
      <ul>
        {users?.map((user) => 
          <li key={user.id}>{user.id} - {user.username}</li>
        )}
      </ul>
    </>
  )
}

export default async function RootPage() {
  return (
    <main>
      <h1>hello world!</h1>
      <Suspense fallback={'loading...'}>
        {/* @ts-ignore */}
        <UserList />
      </Suspense>
      <UserForm />
    </main>
  )
}
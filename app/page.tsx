import {Suspense} from 'react'

import UserService from '~/server/services/user'

async function UserList() {
  const users = await UserService.getAll()

  return (
    <>
      <h2>User List</h2>
      <ul>
        {users?.map((user) => 
          <li key={user.id}>
            {user.id} - {user.username} - {user.profile_image || 'n/a'}
          </li>
        )}
      </ul>
    </>
  )
}

function UserForm() {
  return (
    <form action="/api/user/create" method="POST">
      <input name="username" placeholder="username..." />
      <input name="profile_image" placeholder="profile..." />
      <button type="submit">Create User</button>
    </form>
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

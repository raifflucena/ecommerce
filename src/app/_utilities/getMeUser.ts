import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import type { User } from '../../payload/payload-types'

export const getMeUser = async (args?: {
  nullUserRedirect?: string
  validUserRedirect?: string
}): Promise<{
  user: User
  token: string
}> => {
  const { nullUserRedirect, validUserRedirect } = args || {}
  const cookieStore = cookies()
  const token = cookieStore.get('payload-token')?.value

  try {
    const meUserReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    })

    if (!meUserReq.ok) {
      throw new Error(`HTTP error! status: ${meUserReq.status}`);
    }

    const {
      user,
    }: {
      user: User
    } = await meUserReq.json()

    if (validUserRedirect && user) {
      redirect(validUserRedirect)
    }

    if (nullUserRedirect && !user) {
      redirect(nullUserRedirect)
    }

    return {
      user,
      token,
    }
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    if (nullUserRedirect) {
      redirect(nullUserRedirect)
    }
    return {
      user: null,
      token: '',
    }
  }
}

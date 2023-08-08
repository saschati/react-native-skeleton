import UserManager from '@/app/model/user/manager'
import { AUTH_TOKEN } from '@/config/constants/storage'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { User } from '@/app/model/user/types'
import AuthContext from './AuthContext'
import useStorage from '@/hooks/useStorage'

export type AuthProviderProps = React.PropsWithChildren

const AuthProvider: React.FC<AuthProviderProps> = ({ children }): JSX.Element => {
  const [user, setUser] = useState<UserManager<User>>(() => new UserManager<User>(null))
  const storage = useStorage('async')

  // TODO update logic for real fetch user
  const [loading] = useState(false)
  const [error] = useState<Error | null>(null)
  const getUser = useCallback(() => {
    // TODO set user manger in this method
  }, [])
  const logout = useCallback(async (): Promise<void> => {
    await storage.remove(AUTH_TOKEN)
    setUser(new UserManager<User>(null))
  }, [storage])

  useEffect(() => {
    const check = async () => {
      if ((await storage.has(AUTH_TOKEN)) === false) {
        return
      }

      if (!user.isGuest()) {
        return
      }

      getUser()
    }

    check()
  }, [getUser, user, storage])

  const context = useMemo(() => {
    return {
      user,
      getUser,
      logout,
      loading,
      error: error?.message || null,
    }
  }, [loading, error, user, getUser, logout])

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthProvider

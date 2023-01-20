import { FC, PropsWithChildren, useState } from 'react';
import { AuthContext } from './AuthContext';
import { User } from '@src/types';
import { AuthApi } from '@src/api/AuthApi';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<User>();

  const login = async (username: string, password: string) => {
    try {
      const res = await AuthApi.login(username, password);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  const logout = () => {
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={{
      isAuth,
      user,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

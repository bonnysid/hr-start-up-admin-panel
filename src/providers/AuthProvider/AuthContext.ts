import { User } from '@src/types';
import { createContext, useContext } from 'react';

export interface AuthContextState {
  isAuth: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  user?: User;
}

export const AuthContext = createContext({} as AuthContextState);

export const useAuth = () => useContext(AuthContext);

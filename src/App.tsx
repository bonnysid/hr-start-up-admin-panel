import React from 'react';
import * as ST from './styled';
import { AppRouter } from '@src/router';
import { AuthProvider } from '@providers/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ST.GlobalStyles />
        <ST.AppWrapper>
          <AppRouter />
        </ST.AppWrapper>
      </AuthProvider>
    </BrowserRouter>
  );
}

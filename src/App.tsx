import './App.css';

import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import Home from './modules/home';
import NotFound from './modules/notFound';
import Root from './Root';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <></>,
      },
      {
        path: 'services',
        element: <></>,
      },
      {
        path: 'projects',
        element: <></>,
      },
      {
        path: 'contact',
        element: <></>,
      },
    ],
  },
]);

function App (): JSX.Element {
  return (
    <AppContainer className="App">
      <RouterProvider router={router} />
    </AppContainer>
  );
}

export default App;

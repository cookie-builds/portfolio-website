import './App.css';

import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import { fontFamily } from './global/style';
import Contact from './modules/contact';
import Home from './modules/home';
import NotFound from './modules/notFound';
import Projects from './modules/projects';
import Services from './modules/services';
import Root from './Root';

const AppContainer = styled.div`
  min-height: 100vh;
  font-family: ${fontFamily.regular};
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound/>,
    children: [
      {
        path: '',
        element: <Home/>,
      },
      {
        path: 'services',
        element: <Services/>,
      },
      {
        path: 'projects',
        element: <Projects/>,
      },
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: 'portfolio-website',
        element: <Home/>,
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

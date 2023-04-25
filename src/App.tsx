import './App.css';

import * as React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import NotFound from './modules/NotFound.tsx';
import Root from './Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />} errorElement={<NotFound />} />
    </>
  )
);

function App (): JSX.Element {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      </div>
    </div>
  );
}

export default App;

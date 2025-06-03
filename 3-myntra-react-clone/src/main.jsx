import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import myntraStore from './store/index.js';
import App from './routes/App.jsx';
import Bag from './routes/Bag.jsx';
import Home from './routes/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import RestaurantDetails from './components/RestaurantPage/RestaurantPage';
import store from './utils/store';
import { Provider } from 'react-redux';
import AppLayout from './AppLayout';
import Cart from './components/Cart/Cart';
import Offers from './components/Offers/Offers';
import Search from './components/Search/Search';
import SuggestionContainer from './components/Search/SuggestionContainer';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Body />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/search',
        element: <Search />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/search',
            element: <SuggestionContainer />,
            errorElement: <ErrorPage />,
          }
        ]
      },
      {
        path: '/offers',
        element: <Offers />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/cart',
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantDetails />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);

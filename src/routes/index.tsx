import App from '@/App';
import Layout from '@/pages/Layout';
import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ProfilePage from '@/pages/ProfilePage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';
import ClubEventPage from '@/pages/club/ClubEventPage';
import ClubHomePage from '@/pages/club/ClubHomePage';
import CreateClubPage from '@/pages/club/CreateClubPage';
import ManageClubPage from '@/pages/club/ManageClubPage';
import CheckFormPage from '@/pages/event/CheckFormPage';
import ChoiceEventPage from '@/pages/event/ChoiceEventPage';
import EventDetailPage from '@/pages/event/EventDetailPage';
import SubmitFormPage from '@/pages/event/SubmitFormPage';
import WriteEventFormPage from '@/pages/event/WriteEventFormPage';
import WriteEventInfoPage from '@/pages/event/WriteEventInfoPage';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: '',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <MainPage />,
          },
          {
            path: 'profile/:profileId',
            element: <ProfilePage />,
          },
          {
            path: 'club',
            children: [
              {
                path: 'home/:clubId',
                element: <ClubHomePage />,
              },
              {
                path: 'event/:eventId',
                element: <ClubEventPage />,
              },
              {
                path: 'manage/clubId',
                element: <ManageClubPage />,
              },
              {
                path: 'create',
                element: <CreateClubPage />,
              },
            ],
          },
          {
            path: 'event',
            children: [
              {
                path: 'detail/:eventId',
                element: <EventDetailPage />,
              },
              {
                path: 'checkform/:eventId',
                element: <CheckFormPage />,
              },
              {
                path: 'submitform',
                element: <SubmitFormPage />,
              },
              {
                path: 'choice',
                element: <ChoiceEventPage />,
              },
              {
                path: 'writeinfo',
                element: <WriteEventInfoPage />,
              },
              {
                path: 'writeform',
                element: <WriteEventFormPage />,
              },
            ],
          },
        ],
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;

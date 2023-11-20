import App from '@/App';
import FormLayout from '@/pages/FormLayout/FormLayout';
import Layout from '@/pages/Layout/Layout';
import LoginPage from '@/pages/LoginPage/LoginPage';
import MainPage from '@/pages/MainPage/MainPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import OauthRedirectPage from '@/pages/OauthRedirectPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';
import ClubEventPage from '@/pages/club/ClubEventPage/ClubEventPage';
import ClubHomePage from '@/pages/club/ClubHomePage/ClubHomePage';
import CreateClubPage from '@/pages/club/CreateClubPage/CreateClubPage';
import InvitePage from '@/pages/club/InvitePage/InvitePage';
import ManageClubPage from '@/pages/club/ManageClubPage/ManageClubPage';
import ChoiceEventPage from '@/pages/event/ChoiceEventPage/ChoiceEventPage';
import EventDetailPage from '@/pages/event/EventDetailPage/EventDetailPage';
import SubmitFormPage from '@/pages/event/SubmitFormPage/SubmitFormPage';
import SubmittedFormsPage from '@/pages/event/SubmittedFormsPage/SubmittedFormsPage';
import WriteEventFormPage from '@/pages/event/WriteEventFormPage/WriteEventFormPage';
import WriteEventInfoPage from '@/pages/event/WriteEventInfoPage/WriteEventInfoPage';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'oauths/kakao/callback',
        element: <OauthRedirectPage />,
      },
      {
        path: 'clubs/invite/:inviteCode',
        element: <InvitePage />,
      },
      {
        path: '',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <MainPage />,
            children: [
              {
                path: 'events',
                element: <MainPage />,
              },
              {
                path: 'recruitment',
                element: <MainPage />,
              },
            ],
          },
          {
            path: 'profile/:category',
            element: <ProfilePage />,
          },
          {
            path: 'club/:clubId',
            children: [
              {
                path: 'home',
                element: <ClubHomePage />,
              },
              {
                path: 'event',
                element: <ClubEventPage />,
              },
              {
                path: 'manage',
                element: <ManageClubPage />,
              },
              {
                path: '',
                element: <FormLayout />,
                children: [
                  {
                    path: 'choice',
                    element: <ChoiceEventPage />,
                  },
                  {
                    path: 'writeinfo',
                    element: <WriteEventInfoPage />,
                  },
                  {
                    path: 'writeform/:eventId',
                    element: <WriteEventFormPage />,
                  },
                ],
              },
            ],
          },
          {
            path: 'create',
            element: <CreateClubPage />,
          },
          {
            path: 'event/:eventId',
            children: [
              {
                path: '',
                element: <EventDetailPage />,
              },
              {
                path: 'forms',
                element: <SubmittedFormsPage />,
              },
              {
                path: 'submitform',
                element: <SubmitFormPage />,
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

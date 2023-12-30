import App from '@/App';
import { PATH } from '@/constants/path';
import Layout from '@/pages/Layout/Layout';
import LoginPage from '@/pages/LoginPage/LoginPage';
import MainPage from '@/pages/MainPage/MainPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import OauthRedirectPage from '@/pages/OauthRedirectPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';
import SearchResultPage from '@/pages/SearchResultPage/SearchResultPage';
import ClubBoardPage from '@/pages/club/ClubBoardPage/ClubBoardPage';
import ClubEventPage from '@/pages/club/ClubEventPage/ClubEventPage';
import ClubHomePage from '@/pages/club/ClubHomePage/ClubHomePage';
import ClubManagePage from '@/pages/club/ClubManagePage/ClubManagePage';
import ClubPostWritePage from '@/pages/club/ClubPostWritePage/ClubPostWritePage';
import CreateClubPage from '@/pages/club/CreateClubPage/CreateClubPage';
import InvitePage from '@/pages/club/InvitePage/InvitePage';
import ChoiceEventPage from '@/pages/event/ChoiceEventPage/ChoiceEventPage';
import EventDetailPage from '@/pages/event/EventDetailPage/EventDetailPage';
import SubmitFormPage from '@/pages/event/SubmitFormPage/SubmitFormPage';
import SubmittedFormsPage from '@/pages/event/SubmittedFormsPage/SubmittedFormsPage';
import WriteEventFormPage from '@/pages/event/WriteEventFormPage/WriteEventFormPage';
import WriteEventInfoPage from '@/pages/event/WriteEventInfoPage/WriteEventInfoPage';

import { createBrowserRouter } from 'react-router-dom';

import PrivateLogin from './PrivateLogin';
import PrivateManager from './PrivateManager';
import PrivateMember from './PrivateMember';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      { path: PATH.LOGIN, element: <LoginPage /> },
      { path: PATH.REGISTER, element: <RegisterPage /> },
      { path: PATH.OAUTH_REDIRECT, element: <OauthRedirectPage /> },
      { path: PATH.CLUB.INVITE(':inviteCode'), element: <InvitePage /> },
      {
        path: '',
        element: <Layout />,
        children: [
          { path: PATH.MAIN, element: <MainPage /> },
          { path: PATH.MAIN_EVENT, element: <MainPage /> },
          { path: PATH.MAIN_RECRUITMENT, element: <MainPage /> },
          { path: PATH.EVENT.DETAIL(':eventId'), element: <EventDetailPage /> },
          { path: PATH.SEARCH(':keyword'), element: <SearchResultPage /> },

          {
            element: <PrivateLogin />,
            children: [
              { path: PATH.PROFILE(':category'), element: <ProfilePage /> },
              { path: PATH.CREATE, element: <CreateClubPage /> },
              { path: PATH.EVENT.SUBMIT_FORM(':eventId'), element: <SubmitFormPage /> },
              {
                element: <PrivateMember />,
                children: [
                  { path: PATH.CLUB.HOME(':clubId'), element: <ClubHomePage /> },
                  { path: PATH.CLUB.EVENT(':clubId'), element: <ClubEventPage /> },
                  { path: PATH.CLUB.BOARD(':clubId'), element: <ClubBoardPage /> },
                  { path: PATH.CLUB.WRITE_POST(':clubId'), element: <ClubPostWritePage /> },
                  {
                    element: <PrivateManager />,
                    children: [
                      { path: PATH.CLUB.MANAGE(':clubId'), element: <ClubManagePage /> },
                      {
                        path: PATH.CLUB.WRITE_FORM(':clubId', ':eventId'),
                        element: <WriteEventFormPage />,
                      },
                      { path: PATH.CLUB.CHOICE(':clubId'), element: <ChoiceEventPage /> },
                      {
                        path: PATH.EVENT.SUBMITTED_FORMS(':clubId', ':eventId'),
                        element: <SubmittedFormsPage />,
                      },
                      {
                        path: PATH.CLUB.WRITE_INFO(':clubId'),
                        element: <WriteEventInfoPage />,
                      },
                    ],
                  },
                ],
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

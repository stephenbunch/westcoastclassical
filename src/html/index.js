import React from 'react';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ConcertsTicketsPage from './pages/ConcertsTicketsPage';
import DonatePage from './pages/DonatePage';
import MemberAnnouncementsPage from './pages/MemberAnnouncementsPage';
import PicturesVideosPage from './pages/PicturesVideosPage';
import MeetMusiciansPage from './pages/MeetMusiciansPage';
import ContactPage from './pages/ContactPage';

export default [{
  path: '/',
  content: ( <HomePage /> )
}, {
  path: '/about',
  content: ( <AboutPage /> ),
  label: 'About Us'
}, {
  path: '/programs',
  content: ( <ProgramsPage /> ),
  label: 'Programs'
}, {
  path: '/concerts',
  content: ( <ConcertsTicketsPage /> ),
  label: 'Concerts & Tickets'
}, {
  path: '/donate',
  content: ( <DonatePage /> ),
  label: 'Donate'
}, {
  path: '/announcements',
  content: ( <MemberAnnouncementsPage /> ),
  label: 'Member Announcements'
}, {
  path: '/pictures',
  content: ( <PicturesVideosPage /> ),
  label: 'Pictures & Videos'
}, {
  path: '/musicians',
  content: ( <MeetMusiciansPage /> ),
  label: 'Meet the Musicians'
}, {
  path: '/contact',
  content: ( <ContactPage /> ),
  label: 'Contact'
}];

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
  html: HomePage
}, {
  path: '/about',
  html: AboutPage,
  label: 'About Us'
}, {
  path: '/programs',
  html: ProgramsPage,
  label: 'Programs'
}, {
  path: '/concerts',
  html: ConcertsTicketsPage,
  label: 'Concerts & Tickets'
}, {
  path: '/donate',
  html: DonatePage,
  label: 'Donate'
}, {
  path: '/announcements',
  html: MemberAnnouncementsPage,
  label: 'Member Announcements'
}, {
  path: '/pictures',
  html: PicturesVideosPage,
  label: 'Pictures & Videos'
}, {
  path: '/musicians',
  html: MeetMusiciansPage,
  label: 'Meet the Musicians'
}, {
  path: '/contact',
  html: ContactPage,
  label: 'Contact'
}];

import React from 'react';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ConcertsPage from './pages/ConcertsPage';
import DonatePage from './pages/DonatePage';
import MembersPage from './pages/MembersPage';
import MediaPage from './pages/MediaPage';
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
  html: ConcertsPage,
  label: 'Concerts & Tickets'
}, {
  path: '/donate',
  html: DonatePage,
  label: 'Donate'
}, {
  path: '/media',
  html: MediaPage,
  label: 'Pictures & Videos'
}, {
  path: '/members',
  html: MembersPage,
  label: 'Members'
}, {
  path: '/contact',
  html: ContactPage,
  label: 'Contact'
}];

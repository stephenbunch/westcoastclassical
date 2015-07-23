import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProgramsPage from './ProgramsPage';
import ConcertsTicketsPage from './ConcertsTicketsPage';
import DonatePage from './DonatePage';
import MemberAnnouncementsPage from './MemberAnnouncementsPage';
import PicturesVideosPage from './PicturesVideosPage';
import MeetMusiciansPage from './MeetMusiciansPage';
import ContactPage from './ContactPage';

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
  path: '/concerts&tickets',
  content: ( <ConcertsTicketsPage /> ),
  label: 'Concerts & Tickets'
}, {
  path: '/Donate',
  content: ( <DonatePage /> ),
  label: 'Donate'
}, {
  path: '/membersannouncements',
  content: ( <MemberAnnouncementsPage /> ),
  label: 'Member Announcements'
}, {
  path: '/pictures&videos',
  content: ( <PicturesVideosPage /> ),
  label: 'Pictures & Videos'
}, {
  path: '/meetthemusicians',
  content: ( <MeetMusiciansPage /> ),
  label: 'Meet the Musicians'
}, {
  path: '/contact',
  content: ( <ContactPage /> ),
  label: 'Contact'
}];

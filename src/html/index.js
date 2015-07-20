import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

export default [{
  path: '/',
  content: ( <HomePage /> )
}, {
  path: '/about',
  content: ( <AboutPage /> ),
  label: 'About Us'
}];

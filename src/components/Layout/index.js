import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { Nav } from './styles';

import Header from '../Header';
import Router from '../../Router';
import Footer from '../Footer';

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />

      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/1">Ver Post</Link>
      </Nav>

      <Router />
      <Footer />
    </BrowserRouter>
  );
}

import React from 'react';
import NavBar from './Navbar';

const Home = () => (
  <>
    <div addClassName="calculator">
      <NavBar />
      <h1 style={{ textAlign: 'center' }}>Math Magicians</h1>
      <p style={{ width: '75em', margin: '0 auto' }}>
        Welcome to the mathemajician home
      </p>
    </div>
  </>
);

export default Home;

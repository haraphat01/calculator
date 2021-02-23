import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/Navbar';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
        <h1 style={{ textAlign: 'center' }}>Math Magicians</h1>
        <p style={{ width: '75%', margin: '0 auto' }}>
          Welcome to the mathemajician home
        </p>
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

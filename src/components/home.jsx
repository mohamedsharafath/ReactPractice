// src/pages/Home.js
import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>Feel free to explore and learn more about me on the About page.</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
};

export default Home;

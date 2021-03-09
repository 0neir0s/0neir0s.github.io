import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Athul A.R</h2>
        <p>@0neir0s</p>
      </header>
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;

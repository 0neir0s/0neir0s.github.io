import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Athul's personal website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Personal Website</Link></h2>
          <p>
            A brief description
          </p>
        </div>
      </header>
      <p>
        Hi, I&apos;m Athul, an electrical engineer and a software developer<br />
        An <a href="http://www.iitb.ac.in/">IIT Bombay</a> graduate, I currently work as a Technology
        Analyst in <a href="https://www.jpmorganchase.com/">JP Morgan Chase &amp; Co.</a>.<br />Feel free to check out my {' '}<Link to="/resume">resume</Link>, {' '}<Link to="/projects">projects</Link>, {' '}view <Link to="/stats">site statistics</Link>, {' '}or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;

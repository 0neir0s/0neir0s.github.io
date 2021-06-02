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
        Hi, I&apos;m Athul, an electrical engineer and a software developer. (<a href="https://0neir0s.github.io/documents/resume.pdf" target="_blank" rel="noreferrer">One page resume</a>) <br />
        An <a href="https://www.iitb.ac.in/">IIT Bombay</a> and <a href="https://www.wqu.org/">WQU</a> graduate, I currently work as an Associate in <a href="https://www.jpmorganchase.com/">JP Morgan Chase &amp; Co</a>.<br />Feel free to check out my {' '}<Link to="/resume">resume</Link>, {' '}<Link to="/projects">projects</Link>, {' '}view <Link to="/stats">site statistics</Link>, {' '}or <Link to="/contact">contact</Link> me.<br />I also maintain a TiddlyWiki named <a href="https://0neir0s.github.io/kladde" target="_blank" rel="noreferrer">Kladde</a>.
      </p>
    </article>
  </Main>
);

export default Index;

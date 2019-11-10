import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import NavLink from './subcomponents/NavLink';

import headerStyles from './header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
      `)
      const {title} = data.site.siteMetadata;
    return (
    <header className={headerStyles.header}>
      <label htmlFor="toggler" className="toggler-label">
        <span></span>
      </label>
      <input className={headerStyles.toggler} id="toggler" type="checkbox" name="toggler" />
      <h1 className={headerStyles.title}>
        <NavLink to="/" textContent={title} />
      </h1>
      <nav className={headerStyles.topNav}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navListItem}>
            <NavLink activeClassName={headerStyles.activeNavItem} to="/" textContent="Home" />
          </li>
          <li className={headerStyles.navListItem}>
            <NavLink activeClassName={headerStyles.activeNavItem} to="/about" textContent="About" />
          </li>
          <li className={headerStyles.navListItem}>
            <NavLink activeClassName={headerStyles.activeNavItem} to="/blog" textContent="Blog" />
          </li>
          <li className={headerStyles.navListItem}>
            <NavLink activeClassName={headerStyles.activeNavItem} to="/contact" textContent="Contact" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;


/*
from live-site 


import React from 'react';
import BurgerMenu from './subcomponents/BurgerMenu';
import NavLink from './subcomponents/NavLink';

const Header = () => (
  <header className="menu-header">
    <nav className="home-link">
      <ul>
        <li>
          <NavLink to="/" activeClassName="" textContent="RecessPlayWorks" />
        </li>
      </ul>
    </nav>
    <nav
      className="nav-menu">
      <ul>
        <li>
          <NavLink to="/" activeClassName="current-page" textContent="Home" />
        </li>
         <li>
          <NavLink to="/about/" activeClassName="current-page" textContent="About" />
        </li> 
        <li>
          <NavLink to="/contact/" activeClassName="current-page" textContent="Contact" />
        </li>
      </ul>
    </nav>
    <BurgerMenu />

  </header>
);

export default Header;
*/
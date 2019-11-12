import React from 'react';
import { Link } from 'gatsby';

import navlinkStyles from './navlink.module.scss';


const NavLink = ({ to, activeClassName, textContent }) => (
    <Link to={to} className={navlinkStyles.link} activeClassName={activeClassName}>{textContent}</Link>
  )
  
  export default NavLink;
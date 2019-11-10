import React from './node_modules/react';
import { Link } from './node_modules/gatsby';

import navlinkStyles from './navlink.module.scss';


const NavLink = ({ to, activeClassName, textContent }) => (
    <Link to={to} className={navlinkStyles.link} activeClassName={activeClassName}>{textContent}</Link>
  )
  
  export default NavLink;
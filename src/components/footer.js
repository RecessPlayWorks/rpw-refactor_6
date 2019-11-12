import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import fbIcon from '../images/fb-icon-white.png';
import instaIcon from '../images/insta-icon-white.png';

import footerStyles from './footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          street
          town
        }
      }
    }
      `)
    const {street, town} = data.site.siteMetadata;
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.address}>
            <p>{street}</p>
            <p>{town}</p>
            </div>
            <div className={footerStyles.iconContainer}>
              <img src={fbIcon} alt="facebook-link-icon" />
              <img src={instaIcon} alt="insta-link-icon" />
            </div>
        </footer>
    )
}

export default Footer;
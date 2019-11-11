import React from 'react'
import useSiteMetadata from '../hooks/use-site-metadata';

import Helmet from 'react-helmet';/*Here is where we set our SEO */

import Footer from './footer'
import Header from './header'

/***** !!!! CSS RESET !!!! *****/
import '../styles/index.scss';

import layoutStyles from './layout.module.scss';

// const Layout = (props) => {
const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();

    return (
        <div className={layoutStyles.container}>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name={title} description={description} />
            </Helmet>
            <Header/>
            {/* <div className={layoutStyles.content} > */}
            {children}
            {/* </div> */}
            <Footer/>
        </div>
    )
}

export default Layout;
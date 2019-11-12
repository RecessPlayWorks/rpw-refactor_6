import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import ContactForm from '../components/form';

import Gmap from '../components/gmap'

import Layout from '../components/layout'
import rpwDkLogo from '../images/rpw-dk-logo.png';
import contactStyles from './contact.module.scss'


const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            street
            town
            title
          }
        }
      }
      `)
  const { street, town, title } = data.site.siteMetadata;
  return (
    <Layout>
      <main className={contactStyles.contactContainer}>
        <section className={contactStyles.contactContentContainer}>
        <Gmap/>
        <ContactForm/>
           <div className={contactStyles.addressLogoContainer}>
            <div className={contactStyles.address}>
              <p>{title}</p>
              <p>{street}</p>
              <p>{town}</p>
            </div>
            <img src={rpwDkLogo} alt="recessplayworks logo dark" />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default ContactPage;

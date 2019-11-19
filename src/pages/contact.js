import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import ContactForm from '../components/form';

import Gmap from '../components/gmap'

import Layout from '../components/layout'
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
    file(relativePath: { eq: "rpw-dk-logo.png" }) {
      sharp: childImageSharp {
         fixed (width: 327) {
           srcWebp
          }
        }
      }
    }
    `)
  
  const { street, town, title } = data.site.siteMetadata;
  const {srcWebp} = data.file.sharp.fixed;
  // console.log("fixed: ", srcWebp)
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
            <img src={srcWebp} alt="recessplayworks logo dark" />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default ContactPage;

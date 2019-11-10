import React from 'react'

// import GMap from '../components/GMap'


import Layout from '../components/layout'
import rpwLogo from '../images/rpw-main-icon-300.jpg';
import contactStyles from './contact.module.scss'


const ContactPage = () => {
    return (
        <Layout>
            <div className={contactStyles.contactContainer}>
                <h1>Contact!</h1>
                <div className={contactStyles.contactLogoContainer}>
                    <img src={rpwLogo} alt="landing logo" />
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage;

/*
From live-site

import ContactForm from '../components/subcomponents/ContactForm';

import GMap from '../components/GMap'

const StyledContactContainer = styled.section`
  
  
  section.map-address-section {
    margin: 0vh auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(650px, 1fr));
    
    .contact-address {
      text-align: left;
      width: 650px;
      margin: 2vh auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2%;
      p {
        font-size: 1.3rem;
        font-weight: bold;

        color: #ed06a3;
      }
    }
  }
  
  .map-container {
    // width: 100vw;
    // height: 50vh;
  }  
  h1 {
    color: #ed06a3;
    margin: 8vh auto 2vh;
    font-weight: 100;
  }
  
 iPhone SE to iPad 
@media (min-width: 310px) and (max-width: 767px) {
    opacity: 1;
}

 iPad and larger
@media (min-width: 768px) {
    opacity: 1;
}
`;


const Contact = () => (
    <Layout>
            
        <StyledContactContainer className="contact-container">

        <section className="map-address-section">
          <div className="contact-address">
              <p>Recess PlayWorks<br/>
              66 Danbury Road<br/>
              Ridgefield, CT 06877<br/>
              203-244-5928</p>
          </div>
           <a className="map-link" href="https://www.google.com/maps/place/Recess+Playworks/@41.2905293,-73.4961725,18z/data=!4m5!3m4!1s0x0:0xe7fdb44569b04608!8m2!3d41.2905394!4d-73.4951493" target="_blank" rel="noopener noreferrer"> 
            <img src={gmap} alt="google map" />
          </a> 
          <GMap/>

        </section>
        
          <h1>Contact Us</h1>
          <ContactForm/>
        </StyledContactContainer>
    </Layout>
)

export default Contact;
*/
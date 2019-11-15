import React from 'react'
import Layout from '../components/layout'

import { Link } from 'gatsby'

import fourohfourDog from '../images/dog.webp';

import fourOhFourStyles from './fourohfour.module.scss'

const NotFound= () => (
  <Layout>
    <main className={fourOhFourStyles.fourOhFourContainer}>
      <section className={fourOhFourStyles.fourOhFourContentContainer}>
        <h1>404</h1>
        <h2>NOT FOUND</h2>
        <img src={fourohfourDog} alt="dog" />
        <p>Well, this is awkward. You've arrived at a place that doesn't exist.</p>
        <button className={fourOhFourStyles.fourOhFourBtn}>
          <Link to="/contact/">Contact</Link>
        </button>
        <button className={fourOhFourStyles.fourOhFourBtn}>
          <Link to="/">HOME</Link>
        </button>
      </section>
    </main>
  </Layout>
)

export default NotFound;
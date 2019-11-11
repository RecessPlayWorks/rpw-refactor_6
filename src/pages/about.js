import React from 'react'
import Layout from '../components/layout'
import aboutStyles from './about.module.scss'

const AboutPage = () => {
    return (
        <Layout>
            <main className={aboutStyles.aboutContainer}>
                <section className={aboutStyles.aboutContentContainer}>
                    <h1>About</h1>
                    <p>Welcome to the About Page</p>
                    <p>Learn about us...
                      <a href="https://twitter.com/_beauhaus">@twitterLink</a>
                    </p>
                </section>
            </main>
        </Layout>
    )
}

export default AboutPage;
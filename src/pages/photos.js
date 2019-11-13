import React from 'react'
import Layout from '../components/layout'
import photosStyles from './photos.module.scss'

const PhotosPage = () => {
    return (
        <Layout>
            <main className={photosStyles.photosContainer}>
                <section className={photosStyles.photosContentContainer}>
                    <h1>Our Pics from Instagram...</h1>
                    
                </section>
            </main>
        </Layout>
    )
}

export default PhotosPage;
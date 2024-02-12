import React from 'react';
import Layout from '../../Components/Layout/Layout.jsx';
import Slider from '../../Components/Slider/Slider.jsx';

export default function Portfolio() {
    return (
        <Layout>
            <div className="portfolio-page">
                <h1>Portfolio</h1>
                <Slider />
            </div>
        </Layout>
    );
}


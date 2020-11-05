import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Chef from '../components/RestaurantPage/Chef';
import QT from '../components/RestaurantPage/QT';
import MenuSection from '../components/RestaurantPage/MenuSection';

export default function Restaurant() {
    return (
        <>
            <Hero hero="restaurantHero">
                <Banner title="Our restaurant"
                    subtitle="HIS URBAN, RECREATIONAL, DOG-FRIENDLY GARDEN LADEN WITH
                    PLANTED HERBS AND TREES IS TRANSFORMED INTO A GARDEN PARTY LOCATION
                     IN THE EVENINGS. WE WISH TO ESTABLISH AN INFORMAL, CASUAL ATMOSPHERE">

                </Banner>
            </Hero>
            <Chef />
            <QT />
            <MenuSection />
        </>
    )
}

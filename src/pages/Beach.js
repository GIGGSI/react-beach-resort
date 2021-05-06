import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Title from "../components/Title";
import { Fade } from "react-reveal";
import ImgWrapper from '../components/ImgWrapper';

export default function Beach() {
    return <>
        <Hero hero="beachHero">
            <Banner title="Our beach" subtitle="The most beautiful beach">

            </Banner>
        </Hero>
        <Fade bottom duration={2000} distance="40px">
            <section className="section ">
                <Title title="THE PLACE OF ENJOYMENT" />

                <div className="about-center section-center">

                    <article className="about-img">

                        <img
                            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                            className="about-photo" alt="awesome beach" />
                    </article>

                    <article className="about-info">
                        <h3 className="about-info-title">Completely remodeled and new</h3>
                        <p>
                            The new management is bringing you a
                            Playa Pool Club facility with all the amenities and more of a private club,
                            but without the expensive bond to join. Explore our membership options,
                            see upcoming events, and view our gallery to learn more about the plans for our new facility.
                        </p>

                    </article>
                </div>

            </section>
            <section className="section qt-box qt-background-2">
                <div className="section-title">
                    <p className="lead ">
                        RESERVE for PARTIES!


                    </p>

                </div>
            </section>
        </Fade>
        <Fade bottom duration={2000} distance="40px">
            <ImgWrapper />
        </Fade>

    </>
}

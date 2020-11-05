import React from "react";

import Title from "./Title";
import {Link} from "react-router-dom";

export default function AboutUs() {
    return (
        <section className="section ">

            <Title title="About us"/>


            <div className="about-center section-center">
                <article className="about-img">

                    <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                     className="about-photo" alt="awesome beach"/>
                </article>

                <article className="about-info">
                    <h3 className="about-info-title">Beach Resort Abu Dhabi</h3>
                    <p>
                        Begin your memorable family vacation at all-suite Beach Resort. Whether you
                        are travelling for a weekend getaway, business or family vacation our all suite hotel puts you
                        in the center of it all. Located within in Abu Dhabi, the hotel
                        is just a short walk from everything the entertainment and shopping center has to offer as well
                        as several Istanbul attractions.
                    </p>
                    <Link to="/AboutUsInfo">
                        <button className="btn-primary aboutUs-btn">read more</button>
                    </Link>
                </article>
            </div>

        </section>
    )
}
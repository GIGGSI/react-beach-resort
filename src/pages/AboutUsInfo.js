import React from "react";

import AboutUs from "../components/AboutUs";
import Title from "../components/Title";
import {Link} from "react-router-dom";

export default function AboutUsInfo() {
    return (
        <div>
            <section className="section ">

                <Title title="About us"/>


                <div className="about-center section-center">
                    <article className="about-img">

                        <img
                            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                            className="about-photo" alt="awesome beach"/>
                    </article>

                    <article className="about-info">
                        <h3 className="about-info-title">Beach Resort Abu Dhabi</h3>
                        <p>
                            Begin your memorable family vacation at all-suite Beach Resort. Whether you
                            are travelling for a weekend getaway, business or family vacation our all suite hotel puts
                            you
                            in the center of it all. Located within in Abu Dhabi, the hotel
                            is just a short walk from everything the entertainment and shopping center has to offer as
                            well
                            as several Istanbul attractions.
                        </p>

                    </article>
                </div>

            </section>
            <div className="aboutUsInfo-text">
                <p>
                    Our hotel, located in Alibeyköy, brings you close to the historical Golden Horn area and its many
                    spots
                    of attractions such as Eyup Sultan Mosque & Mausoleum, Rahmi Koç Museum, Miniaturk, Feshane, Pierre
                    Loti, Turkuazoo Aquarium and Santral Istanbul. Enjoy a boat ride along the Golden Horn, a narrow
                    strait
                    that carves a seven-kilometer path between the historic peninsula of Old Istanbul and the lower
                    slopes
                    of Beyoğlu near Taksim Square, the city center, or modern Istanbul. Isfanbul Holiday Home & Suites
                    is
                    also minutes away from the historic landmarks of the Old City, including Hagia Sophia, the Blue
                    Mosque
                    and Topkapi Palace.
                </p>
                <p>
                    The hotel also offers 3 meeting rooms and a boardroom for a flawless business travel experience and
                    is
                    minutes away from Istanbul's one of the biggest congress center, Halic Congress Center.

                </p>
                <p>
                    Isfanbul Holiday Home & Suites offers an exceptional accommodation experience with 100
                    family-friendly
                    suites ranging between 60 and 110 sq m, providing a warm home-like experience combined with the
                    comfort
                    of an outstanding hotel. Feel at home in a one- or two-bedroom suite featuring a separate living
                    area
                    and dining table, a special children nest with twin beds for large families and many more in-room
                    facilities, providing families and business travelers with the space and privacy they need.
                </p>
                <p>

                    The hotel also offers many onsite attractions for the whole family. The little ones can enjoy
                    themselves
                    to the fullest at the first and only 120,000 sq m theme & amusement park filled with 30
                    entertainment
                    units for all ages, while their parents discover a brand new shopping experience on the outdoor
                    shopping
                    streets with 200 shops. A wide selection of restaurants and coffee shops is also available.

                    We are looking forward to welcome you and exceed your expectations.
                </p>
            </div>

        </div>
    )
}
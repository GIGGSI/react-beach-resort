import React, {Component} from 'react';
import Title from './Title';
import data from "./servicesData";
import Fade from "react-reveal";

class Services extends Component {

    state = {
        services: data
    }

    render() {
        return (
            <Fade bottom duration={3000} distance="40px">
                <section className="services">
                    <Title title="services"/>

                    <section className="service-info services-center">
                        <p>The hotel offers a variety of services with main target of fullfiling our guests needs.
                            Whether
                            you
                            visit Siofok for business or pleasure, you will find the ideal environment to treat
                            yourselves
                            with
                            all our comfort and services</p>
                    </section>

                    <div className="services-center">
                        {this.state.services.map((item, index) => {
                            return (
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </Fade>
        );
    }
}

export default Services;

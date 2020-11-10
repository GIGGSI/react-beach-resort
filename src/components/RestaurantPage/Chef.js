import React from 'react'
import chef from '../../images/cheff.jpg'
import Title from '../Title'
import Fade from "react-reveal";

export default function Chef() {
    return (
        <section className="section ">

            <div className="about-center section-center">
                <Fade left duration={2000} distance="40px">
                    <article className="about-img">
                        <img src={chef} alt=" Chef Stanislav Kehajov" className="about-photo"/>
                    </article>
                </Fade>
                <Fade right duration={2000} distance="40px">
                    <article className="about-info">
                        <Title title=" Chef Stanislav Kehajov"/>
                        <h4></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit
                            feugiat. Ut
                            at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio
                            ante
                            sodales augue, eget lacinia lectus erat et sem.

                        </p>
                        <p>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a
                            pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem
                            pulvinar
                        </p>

                    </article>
                </Fade>
            </div>

        </section>
    )

}

import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import data from './data';
import './revies.css'
import Title from "../Title";
import Fade from "react-reveal";

function ReviewsSection() {

    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }

    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 6000);
        return () => clearInterval(slider)
    }, [index])

    return <Fade bottom duration={2000} distance="40px">
        <section className="section-reviews">
            <Title title="Reviews"/>
            <div className="section-center-reviews">
                {people.map((person, personIndex) => {
                    const {id, image, name, title, quote} = person;

                    //more staff coming up
                    let position = 'nextSlide';

                    if (personIndex === index) {
                        position = 'activeSlide'
                    }
                    if (personIndex === index - 1 || (index === 0 &&
                        personIndex === people.length - 1)) {
                        position = 'lastSlide'
                    }

                    return (
                        <article key={id}
                                 className={`article-reviews ${position}`}>
                            <img src={image}
                                 alt={name}
                                 className="person-img"/>
                            <h2 className="name">{name}</h2>
                            <h3 className="title-position">{title}</h3>
                            <p className="text-reviews">{quote}</p>
                            <FaQuoteRight className="icon-reviews"/>
                        </article>
                    )
                })}
                <button className="prev"
                        onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft/>
                </button>
                <button className="next"
                        onClick={() => setIndex(index + 1)}>
                    <FiChevronRight/>
                </button>
            </div>
        </section>
    </Fade>
}

export default ReviewsSection;

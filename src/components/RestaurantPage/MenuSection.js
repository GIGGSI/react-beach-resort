import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Title from '../Title';
import Flip from 'react-reveal/Flip';
import Fade from "react-reveal";
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

export default function MenuSection() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    return <main>
        <section className="menu section-menu">
            <Flip left duration={2000} distance="40px">
                <Title title="our menu"/>
            </Flip>
            <Fade buttom duration={2000} distance="40px">
                <Categories categories={categories}
                            filterItems={filterItems}/>
                <Menu items={menuItems}/>
            </Fade>
        </section>
    </main>
}

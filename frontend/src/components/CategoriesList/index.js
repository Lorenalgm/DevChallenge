import React from 'react';
import CategoryListItem from '../CategoryListItem';

const categories = [
    { _id: 1, name: 'Front-end', icon: 'desktop' },
    { _id: 2, name: 'Back-end', icon: 'code' },
    { _id: 3, name: 'Mobile', icon: 'mobile' },
];

export default function CategoriesList() {
    return (
        <section className="techs">
            {categories.map((category) => (
                <CategoryListItem category={category} key={category._id} />
            ))}
        </section>
    );
}

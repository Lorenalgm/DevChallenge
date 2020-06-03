import React from "react";
import CategoryListItem from "../CategoryListItem";

const categories = [
    { name: "Front-end", icon: "desktop" },
    { name: "Back-end", icon: "code" },
    { name: "Mobile", icon: "mobile" },
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

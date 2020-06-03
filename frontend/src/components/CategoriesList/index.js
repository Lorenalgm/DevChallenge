import React from "react";
import {
    faMobileAlt,
    faLaptopCode,
    faFileCode,
    faSearch,
    faCode,
    faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import CategoryListItem from "../CategoryListItem";

const categories = [
    { title: "Front-end", icon: faFileCode },
    { title: "Back-end", icon: faLaptopCode },
    { title: "Mobile", icon: faMobileAlt },
];

export default function CategoriesList() {
    return (
        <section className="techs">
            {categories.map((category) => (
                <CategoryListItem category={category} />
            ))}
        </section>
    );
}

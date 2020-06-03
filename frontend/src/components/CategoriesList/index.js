import React, { useEffect, useState } from "react";
import {
    faMobileAlt,
    faLaptopCode,
    faFileCode,
    faSearch,
    faCode,
    faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import CategoryListItem from "../CategoryListItem";
import { getCategories } from "../../services/challenges.service";

// const categories = [
//     { title: "Front-end", icon: faFileCode },
//     { title: "Back-end", icon: faLaptopCode },
//     { title: "Mobile", icon: faMobileAlt },
// ];

export default function CategoriesList() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function loadCategories() {
            const request = await getCategories();
            setCategories(request);
        }
        loadCategories();
    }, []);
    return (
        <section className="techs">
            {categories.map((category) => (
                <CategoryListItem category={category} key={category._id} />
            ))}
        </section>
    );
}

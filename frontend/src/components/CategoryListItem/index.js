import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMobileAlt,
    faLaptopCode,
    faFileCode,
    faSearch,
    faCode,
    faShareSquare,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export default function CategoryListItem({ category }) {
    return (
        <Link className="challenge-link" to="/challenges">
            <div>
                <FontAwesomeIcon className="icon" icon={category.icon} />
                <h2>{category.title}</h2>
            </div>
        </Link>
    );
}

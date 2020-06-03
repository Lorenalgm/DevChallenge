import React from "react";
import Icon, { FontAwesome } from "react-web-vector-icons";

import { Link } from "react-router-dom";

export default function CategoryListItem({ category }) {
    return (
        <Link className="challenge-link" to="/challenges">
            <div>
                <Icon name={category.icon} font="FontAwesome" />
                <h2>{category.name}</h2>
            </div>
        </Link>
    );
}

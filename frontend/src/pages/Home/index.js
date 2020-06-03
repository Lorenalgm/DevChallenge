import React from "react";

import "./styles.css";

import Header from "../../components/Header";

import CategoriesList from "../../components/CategoriesList";
import Newsletter from "../../components/Newsletter";
import Steps from "../../components/Steps";
import Banner from "../../components/Banner";

export default function Home() {
    return (
        <body>
            <Header />
            <Banner />
            <CategoriesList />
            <Steps />
            <Newsletter />
        </body>
    );
}

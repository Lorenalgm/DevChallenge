import React from 'react';
import CategoriesList from '../../components/CategoriesList';
import Newsletter from '../../components/Newsletter';
import Steps from '../../components/Steps';
import Banner from '../../components/Banner';
import Header from '../../components/Header';

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <CategoriesList />
            <Steps />
            <Newsletter />
        </>
    );
}

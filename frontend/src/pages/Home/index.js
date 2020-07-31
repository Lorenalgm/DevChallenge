import React from 'react';
import CategoriesList from '../../components/CategoriesList';
import Newsletter from '../../components/Newsletter';
import Steps from '../../components/Steps';
import Banner from '../../components/Banner';

export default function Home() {
    return (
        <>
            <Banner />
            <CategoriesList />
            <Steps />
            <Newsletter />
        </>
    );
}

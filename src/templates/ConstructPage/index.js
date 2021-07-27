import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ConstructPage() {
  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '80vh',
        }}
      >
        <img
          style={{ height: '50vh', maxHeight: '912px' }}
          src="/img/page-under-construction.png"
          alt="Página em construção"
        />
        <h2 style={{ color: '#c4c4c4' }}>Pagina em Construção</h2>
      </div>
      <Footer />
    </>
  );
}

export default ConstructPage;

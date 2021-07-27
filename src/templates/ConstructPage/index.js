import React from 'react';

import pageInConstruction from '../../assets/page-under-construction.png';
import Header from '../../components/Header';

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
          src={pageInConstruction}
          alt=""
        />
        <h2 style={{ color: '#c4c4c4' }}>Pagina em Construção</h2>
      </div>
    </>
  );
}

export default ConstructPage;

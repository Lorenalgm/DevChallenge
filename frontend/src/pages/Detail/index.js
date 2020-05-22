import React from 'react';
import './styles.css';
import Header from '../../components/Header';


export default function Detail(props) {
    
    
    return (
    <body>
      <Header />
     <h1>teste1</h1>
      <h1>{props.location.challenge.brief}</h1>
     <h1>teste</h1>
    </body>
  )
}
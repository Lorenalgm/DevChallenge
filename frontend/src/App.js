import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <body>
      <header>
        <nav>
          <ul>
            <li><span>2020</span></li>
            <li>lorem gipsi</li>
          </ul>
        </nav>
        <div className="title">
          <h1>Dev<span>Challenge</span></h1>
        </div>
      </header>

      <section className="challenges">

        <div className="challenge-card">
          <div className="card_img_container">
            <img src="https://camo.githubusercontent.com/bc0b99ef98eb029c7d33314f58d31501959f402b/68747470733a2f2f7472656c6c6f2d6174746163686d656e74732e73332e616d617a6f6e6177732e636f6d2f3539306661383936643264323565353035383364653632302f343534783233302f62346630616338303630323865326636323236353963666466366638323031622f44656570696e5f53637265656e73686f745f73656c6563696f6e61725f2543332541317265615f32303230303531363230353230312e706e67" alt=""></img>
          </div>
          <div className="card_content">
            <p className="card_title">FisiotherApp</p>
            <p>Build an app to help pacients with fisiotherapy exercise! :)</p>
          </div>
          <div className="card_tech">
            <p className="tech">React Native, CSS</p>
            <p className="level">Nível 2</p>
          </div>
        </div>

        <div className="challenge-card">
          <div className="card_img_container">
            <img src="https://camo.githubusercontent.com/bc0b99ef98eb029c7d33314f58d31501959f402b/68747470733a2f2f7472656c6c6f2d6174746163686d656e74732e73332e616d617a6f6e6177732e636f6d2f3539306661383936643264323565353035383364653632302f343534783233302f62346630616338303630323865326636323236353963666466366638323031622f44656570696e5f53637265656e73686f745f73656c6563696f6e61725f2543332541317265615f32303230303531363230353230312e706e67" alt=""></img>
          </div>
          <div className="card_content">
            <p className="card_title">FisiotherApp</p>
            <p>Build an app to help pacients with fisiotherapy exercise! :)</p>
          </div>
          <div className="card_tech">
            <p className="tech">React Native, CSS</p>
            <p className="level">Nível 2</p>
          </div>
        </div>

        <div className="challenge-card">
          <div className="card_img_container">
            <img src="https://camo.githubusercontent.com/bc0b99ef98eb029c7d33314f58d31501959f402b/68747470733a2f2f7472656c6c6f2d6174746163686d656e74732e73332e616d617a6f6e6177732e636f6d2f3539306661383936643264323565353035383364653632302f343534783233302f62346630616338303630323865326636323236353963666466366638323031622f44656570696e5f53637265656e73686f745f73656c6563696f6e61725f2543332541317265615f32303230303531363230353230312e706e67" alt=""></img>
          </div>
          <div className="card_content">
            <p className="card_title">FisiotherApp</p>
            <p>Build an app to help pacients with fisiotherapy exercise! :)</p>
          </div>
          <div className="card_tech">
            <p className="tech">React Native, CSS</p>
            <p className="level">Nível 2</p>
          </div>
        </div>


      </section>


      <div className="modal-overlay">
        <div className="modal">
          <a className="close-modal">
            <i className="material-icons">
              close
                    </i>
          </a>
          <div className="modal-content">
            <img src=""></img>
            <img src=""></img>
          </div>
        </div>
      </div>




    </body>



  )

  function modals () {
    return ( {
/*      
const modalOverlay = document.querySelector('.modal-overlay'),
const cards = document.querySelectorAll('.card'),

for (let card of cards) {
card.addEventListener("click", function(){
    modalOverlay.classList.add('active')

})
},

document.querySelector(".close-modal").addEventListener("click", function (){
    modalOverlay.classList.remove('active')
})*/
    })

  }

}




export default App;

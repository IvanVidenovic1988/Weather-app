import React from 'react';

import './Top.css'


export default function Top ({ weather }) {

    return (
      <div className='top'>

          <div>
            <div className="location">
              <h2>{weather.name}</h2>
            </div>
            <div className='temp'>
              <h1>{weather.temp}*C</h1>         
            </div>
          </div>

          <div className='slika'>
            <div className="description">
              <p>{weather.description}</p>
            </div>

              <img 
                src={weather.icon}
                alt='slika'
              />
          </div>

      </div>
    );
};
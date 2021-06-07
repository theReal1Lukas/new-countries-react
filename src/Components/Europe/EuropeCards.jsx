import React from 'react';
import Card from '../Card'
import europeRegion from './europe-region';

function EuropeCards () {
    return (
      <>
      <div className='container-fluid europe-cards-container'>
      <div className='row'>
        {europeRegion.map(europeCountry => {
          return (
            <div className='col-12 col-md-6 col-lg-4 col-xl-3 single-card'>
            <Card 
      name={europeCountry.name}
      population={europeCountry.population}
      capital={europeCountry.capital}
      region = {europeCountry.region}
      flag = {europeCountry.flag}
    />
            </div>
          )
        })}
      
        </div>
      </div>
      </>
         
   
    );
   }
export default EuropeCards;

import React from 'react';
import Card from '../Card'
import americaRegion from './america-region';

function AmericaCards () {
    return (
      <>
      <div className='container-fluid america-cards-container'>
      <div className='row'>
        {americaRegion.map(americaCountry => {
          return (
            <div className='col-12 col-md-6 col-lg-4 col-xl-3 single-card'>
            <Card 
      name={americaCountry.name}
      population={americaCountry.population}
      capital={americaCountry.capital}
      region = {americaCountry.region}
      flag = {americaCountry.flag}
    />
            </div>
          )
        })}
      
        </div>
      </div>
      </>
         
   
    );
   }
   
export default AmericaCards;

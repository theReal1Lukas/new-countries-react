import React from 'react';
import Cards from '../Card'
import oceaniaRegion from './oceania-region';

function OceaniaCards () {
    return (
      <>
      <div className='container-fluid oceania-cards-container'>
      <div className='row'>
        {oceaniaRegion.map(oceaniaCountry => {
          return (
            <div className='col-12 col-md-6 col-lg-4 col-xl-3 single-card'>
            <Cards 
      name={oceaniaCountry.name}
      population={oceaniaCountry.population}
      capital={oceaniaCountry.capital}
      region = {oceaniaCountry.region}
      flag = {oceaniaCountry.flag}
    />
            </div>
          )
        })}
      
        </div>
      </div>
      </>
         
   
    );
   }
export default OceaniaCards;

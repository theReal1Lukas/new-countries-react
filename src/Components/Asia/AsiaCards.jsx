import React from 'react';
import Card from '../Card'
import asiaRegion from './asia-region';

function AsiaCards () {

    return (
      <>
      <div className='container-fluid asia-cards-container'>
      <div className='row'>
        {asiaRegion.map(asiaCountry => {
          return (
            <div className='col-12 col-md-6 col-lg-4 col-xl-3 single-card'>
            <Card
      name={asiaCountry.name}
      population={asiaCountry.population}
      capital={asiaCountry.capital}
      region = {asiaCountry.region}
      flag = {asiaCountry.flag}
    />
            </div>
          )
        })}
      
        </div>
      </div>
      </>
         
   
    );
   }
export default AsiaCards;

import React from 'react';
import Card from '../Card';
import africaRegion from './africa-region';
// 
function AfricaCards () {
    return (
      <>
      <div className='container-fluid africa-cards-container'>
        <div className='row'>
        {africaRegion.map(africaCountry => {
          return (
            <div className='col-12 col-md-6 col-lg-4 col-xl-3 single-card'>
            <Card 
      name={africaCountry.name}
      population={africaCountry.population}
      capital={africaCountry.capital}
      region = {africaCountry.region}
      flag = {africaCountry.flag}
    />
            </div>
          )
        })}
      
        </div>
      </div>
      </>
         
   
    );
   }
export default AfricaCards;

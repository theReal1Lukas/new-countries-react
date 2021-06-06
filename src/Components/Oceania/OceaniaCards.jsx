import React from 'react';
import Cards from '../Card'
import {Container, Row, Col} from 'reactstrap';
import oceaniaRegion from './oceania-region';

function OceaniaCards () {
    return (
      <>
      <Container fluid={true} className='oceania-cards-container'>
        <Row>
        {oceaniaRegion.map(oceaniaCountry => {
          return (
            <Col xs='12' md='6' lg='4' xl='3' className='single-card'>
            <Cards 
      name={oceaniaCountry.name}
      population={oceaniaCountry.population}
      capital={oceaniaCountry.capital}
      region = {oceaniaCountry.region}
      flag = {oceaniaCountry.flag}
    />
            </Col>
          )
        })}
      
        </Row>
      </Container>
      </>
         
   
    );
   }
export default OceaniaCards;

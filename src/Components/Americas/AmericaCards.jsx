import React from 'react';
import Card from '../Card'
import {Container, Row, Col} from 'reactstrap';
import americaRegion from './america-region';


function AmericaCards () {
    return (
      <>
      <Container fluid={true} className='america-cards-container'>
        <Row>
        {americaRegion.map(americaCountry => {
          return (
            <Col xs='12' md='6' lg='4' xl='3' className='single-card'>
            <Card 
      name={americaCountry.name}
      population={americaCountry.population}
      capital={americaCountry.capital}
      region = {americaCountry.region}
      flag = {americaCountry.flag}
    />
            </Col>
          )
        })}
      
        </Row>
      </Container>
      </>
         
   
    );
   }
export default AmericaCards;

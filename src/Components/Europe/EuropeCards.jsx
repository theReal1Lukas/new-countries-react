import React from 'react';
import Card from '../Card'
import {Container, Row, Col} from 'reactstrap';
import europeRegion from './europe-region';

function EuropeCards () {
    return (
      <>
      <Container fluid={true} className='europe-cards-container'>
        <Row>
        {europeRegion.map(europeCountry => {
          return (
            <Col xs='12' md='6' lg='4' xl='3' className='single-card'>
            <Card 
      name={europeCountry.name}
      population={europeCountry.population}
      capital={europeCountry.capital}
      region = {europeCountry.region}
      flag = {europeCountry.flag}
    />
            </Col>
          )
        })}
      
        </Row>
      </Container>
      </>
         
   
    );
   }
export default EuropeCards;

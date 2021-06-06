import React from 'react';
import Card from '../Card'
import {Container, Row, Col} from 'reactstrap';
import asiaRegion from './asia-region';

function AsiaCards () {

    return (
      <>
      <Container fluid={true} className='asia-cards-container'>
        <Row>
        {asiaRegion.map(asiaCountry => {
          return (
            <Col xs='12' md='6' lg='4' xl='3'  className='single-card'>
            <Card
      name={asiaCountry.name}
      population={asiaCountry.population}
      capital={asiaCountry.capital}
      region = {asiaCountry.region}
      flag = {asiaCountry.flag}
    />
            </Col>
          )
        })}
      
        </Row>
      </Container>
      </>
         
   
    );
   }
export default AsiaCards;

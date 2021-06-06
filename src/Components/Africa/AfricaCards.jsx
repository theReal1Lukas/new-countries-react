import React from 'react';
import Card from '../Card';
import {Container, Row, Col} from 'reactstrap';
import africaRegion from './africa-region';


function AfricaCards () {
    return (
      <>
      <Container fluid={true} className='africa-cards-container'>
        <Row>
        {africaRegion.map(africaCountry => {
          return (
            <Col xs='12' md='6' lg='4' xl='3' className='single-card'>
            <Card 
      name={africaCountry.name}
      population={africaCountry.population}
      capital={africaCountry.capital}
      region = {africaCountry.region}
      flag = {africaCountry.flag}
    />
            </Col>
          )
        })}
      
        </Row>
      </Container>
      </>
         
   
    );
   }
export default AfricaCards;

import './App.css';
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import countries from './countries'
import Input from './Components/Input';
import {Container, Row, Col} from 'reactstrap'


function App() {

  return (
    <>
    <Navbar />
    <Input />
    <Container fluid={true} className='cards-container'>
      <Row>
      {countries.map(country => {
        return (
          <Col xs='12' md='6' lg='4' xl='3'  className='single-card'>
          <Card 
    name={country.name}
    population={country.population}
    capital={country.capital}
    region = {country.region}
    flag = {country.flag}
  />
          </Col>
        )
      })}
    
      </Row>
    </Container>

</>
);
}

export default App;

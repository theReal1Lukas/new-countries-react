import './App.css';
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import countries from './countries'
import InputRow from './Components/InputRow';
import AfricaCards from './Components/Africa/AfricaCards'
import AmericaCards from './Components/Americas/AmericaCards'
import AsiaCards from './Components/Asia/AsiaCards'
import EuropeCards from './Components/Europe/EuropeCards'
import OceaniaCards from './Components/Oceania/OceaniaCards'


function App() {

  return (
    <>
    <Navbar />
    <InputRow />
    <div className='container-fluid cards-container'>
    <div className='row'>
      {countries.map(country => {
        return (
          <div className='col-12 col-md-6 col-lg-4 col-xl-3 single-card'>
          <Card 
    name={country.name}
    population={country.population}
    capital={country.capital}
    region = {country.region}
    flag = {country.flag}
  />
          </div>
        )
      })}
    
      </div>
    </div>
   <AfricaCards />
   <AmericaCards />
   <AsiaCards />
   <EuropeCards />
   <OceaniaCards />

</>
);
}

export default App;

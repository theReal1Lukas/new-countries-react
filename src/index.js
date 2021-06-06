import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AfricaCards from './Components/Africa/AfricaCards';
import AmericaCards from './Components/Americas/AmericaCards';
import AsiaCards from './Components/Asia/AsiaCards';
import EuropeCards from './Components/Europe/EuropeCards';
import OceaniaCards from './Components/Oceania/OceaniaCards';


ReactDOM.render(<App />,document.getElementById('root'));
ReactDOM.render(<AfricaCards />, document.getElementById('region-africa'))
ReactDOM.render(<AmericaCards />, document.getElementById('region-america'))
ReactDOM.render(<AsiaCards />, document.getElementById('region-asia'))
ReactDOM.render(<EuropeCards />, document.getElementById('region-europe'))
ReactDOM.render(<OceaniaCards />, document.getElementById('region-oceania'))

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AfricaCards from './Components/Africa/AfricaCards';
import AmericaCards from './Components/Americas/AmericaCards';

ReactDOM.render(<App />,document.getElementById('root'));
ReactDOM.render(<AfricaCards />, document.getElementById('region-africa'))
ReactDOM.render(<AmericaCards />, document.getElementById('region-america'))

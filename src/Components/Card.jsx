import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import $ from 'jquery';

function Cards(props) {

  function showCountry() {

    const countryName = props.name;
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(res => res.json())
    .then(
      (data) => { 
         $('.single-card').css('display', 'none');
         $('.input-container').css('display', 'none');
         $('.africa-cards-container').css('display', 'none');
         $('.america-cards-container').css('display', 'none');
         $('.asia-cards-container').css('display', 'none');
         $('.europe-cards-container').css('display', 'none');
         $('.oceania-cards-container').css('display', 'none');
         $('.single-card-info').css('display', 'block');
         $('.card-img-top').attr('src', data[0].flag) ;
         $('.single-card-country-name').html(data[0].name);
         $('.country-native-name').html(data[0].nativeName);
         $('.country-population').html(data[0].population);
         $('.country-region').html(data[0].region);
         $('.country-capital').html(data[0].capital);
         $('.country-currencies').html(data[0].currencies[0].name);
         $('.country-languages').html(data[0].languages[0].name);
         $('.country-top-level-domain').html(data[0].topLevelDomain);
         $('.country-sub-region').html(data[0].subregion);
        }
    )
}
  
  return (
    <>
    
        <Card onClick={showCountry}  width="100%" >
        <CardImg  height='100%' src={props.flag} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h3">{props.name}</CardTitle>
          <CardText tag="h6" className="mb-2"><strong>Population: </strong> {props.population} </CardText>
          <CardText tag="h6" className="mb-2"><strong>Region:</strong> {props.region} </CardText>
          <CardText tag="h6" className="mb-2"><strong>Capital:</strong> {props.capital} </CardText>
        </CardBody>
      </Card>
     
    </>
  );
}

export default Cards;

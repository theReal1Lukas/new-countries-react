import $ from 'jquery';
import SingleCardInfo from './SingleCardInfo'

function Input () {

  $('input').on('keypress', function(e) {
    if(e.which === 13) {
      const countryName = document.getElementById('search-country').value;
      fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(res => res.json())
      .then(
        (data) => {
          $('.single-card').css('display', 'none');
          $('.input-container').css('display', 'none');
          $('#region-africa').css('display', 'none');
          $('#region-america').css('display', 'none');
          $('#region-asia').css('display', 'none');
          $('#region-europe').css('display', 'none');
          $('#region-oceania').css('display', 'none');
          $('.single-card-info').css('display', 'block');
          $('.card-img-top').attr("src", data[0].flag);
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
    });

    function showAfrica() {

      $('#region-africa').css('display', 'block');
      $('.cards-container').css('display', 'none');
      $('#region-america').css('display', 'none');
      $('#region-asia').css('display', 'none');
      $('#region-europe').css('display', 'none');
      $('#region-oceania').css('display', 'none');
    
    }

    function showAmerica() {

      $('#region-america').css('display', 'block');
      $('.cards-container').css('display', 'none');
      $('#region-africa').css('display', 'none');
      $('#region-asia').css('display', 'none');
      $('#region-europe').css('display', 'none');
      $('#region-oceania').css('display', 'none');
    
    }
    
    function showAsia() {
    
      $('#region-asia').css('display', 'block');
      $('#root').css('display', 'none');
      $('#region-america').css('display', 'none');
      $('#region-europe').css('display', 'none');
      $('#region-oceania').css('display', 'none');
      $('#region-africa').css('display', 'none');
      
    }
    
    function showEurope() {
    
      $('#region-europe').css('display', 'block');
      $('#root').css('display', 'none');
      $('#region-oceania').css('display', 'none');
      $('#region-africa').css('display', 'none');
      $('#region-america').css('display', 'none');
      $('#region-asia').css('display', 'none');
    
    }
    
    function showOceania() {
      $('#region-oceania').css('display', 'block');
      $('#root').css('display', 'none');
      $('#region-africa').css('display', 'none');
      $('#region-america').css('display', 'none');
      $('#region-asia').css('display', 'none');
      $('#region-europe').css('display', 'none');
    }

    function showAll() {
      $('#region-oceania').css('display', 'none');
      $('#root').css('display', 'block');
      $('#region-africa').css('display', 'none');
      $('#region-america').css('display', 'none');
      $('#region-asia').css('display', 'none');
      $('#region-europe').css('display', 'none');
    }

    return (
        <>
          <div class="container-fluid input-container">
    <div class="row mb-5 ">
      <div class="col-10 col-md-7 col-lg-5">
        <input class="form-control form-control-lg" id="search-country" type="search"
          placeholder="Search for a country..." aria-label="Search"  />
      </div>
      <div class="col-12 col-md-2 col-lg-4"></div>
      <div class=" col-12 col-md col-lg dropdown-col text-md-left text-lg-center mr-2">
        <div class="dropdown">
          <button class="btn btn-light btn-lg dropdown-toggle" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter by Region
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a onClick={showAll} class='dropdown-item' href='/'>All</a>
            <a onClick={showAfrica} class="dropdown-item" href="#africa">Africa</a>
            <a onClick={showAmerica} class="dropdown-item" href="#america">Americas</a>
            <a onClick={showAsia} class="dropdown-item" href="#asia">Asia</a>
            <a onClick={showEurope} class="dropdown-item" href="#europe">Europe</a>
            <a onClick={showOceania} class="dropdown-item" href="#oceania">Oceania</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SingleCardInfo />
        </>
    )
}

export default Input;
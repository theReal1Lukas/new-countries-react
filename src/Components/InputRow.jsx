import $ from 'jquery';
import SingleCardInfo from './SingleCardInfo'

function InputRow () {

  $(document).on('keypress', function(e) {
    if(e.which === 13) {
      const countryName = document.getElementById('search-country').value;
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
      $('.africa-cards-container').css('display', 'block');
      $('.cards-container').css('display', 'none');
      $('.america-cards-container').css('display', 'none');
      $('.asia-cards-container').css('display', 'none');
      $('.europe-cards-container').css('display', 'none');
      $('.oceania-cards-container').css('display', 'none');
    }

    function showAmerica() {
      $('.africa-cards-container').css('display', 'none');
      $('.cards-container').css('display', 'none');
      $('.america-cards-container').css('display', 'block');
      $('.asia-cards-container').css('display', 'none');
      $('.europe-cards-container').css('display', 'none');
      $('.oceania-cards-container').css('display', 'none');
    }
    
    function showAsia() {
      $('.africa-cards-container').css('display', 'none');
      $('.cards-container').css('display', 'none');
      $('.america-cards-container').css('display', 'none');
      $('.asia-cards-container').css('display', 'block');
      $('.europe-cards-container').css('display', 'none');
      $('.oceania-cards-container').css('display', 'none');
    }
    
    function showEurope() {
      $('.africa-cards-container').css('display', 'none');
      $('.cards-container').css('display', 'none');
      $('.america-cards-container').css('display', 'none');
      $('.asia-cards-container').css('display', 'none');
      $('.europe-cards-container').css('display', 'block');
      $('.oceania-cards-container').css('display', 'none');
    }
    
    function showOceania() {
      $('.africa-cards-container').css('display', 'none');
      $('.cards-container').css('display', 'none');
      $('.america-cards-container').css('display', 'none');
      $('.asia-cards-container').css('display', 'none');
      $('.europe-cards-container').css('display', 'none');
      $('.oceania-cards-container').css('display', 'block');
    }

    function showAll() {
      $('.africa-cards-container').css('display', 'none');
      $('.cards-container').css('display', 'block');
      $('.america-cards-container').css('display', 'none');
      $('.asia-cards-container').css('display', 'none');
      $('.europe-cards-container').css('display', 'none');
      $('.oceania-cards-container').css('display', 'none');
    }

    return (
        <>
          <div className="container-fluid input-container">
    <div className="row mb-5 ">
      <div className="col-10 col-md-7 col-lg-5">
        <input className="form-control form-control-lg" id="search-country" 
          placeholder="Search for a country..." />
      </div>
      {/* <div className="col-12 col-md-2 col-lg-4 input-space"></div> */}
      <div className=" col-12 col-md col-lg dropdown-col text-md-left text-lg-right">
        <div className="dropdown">
          <button className="btn btn-light btn-lg dropdown-toggle" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter by Region
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a onClick={showAll} className='dropdown-item' href='/'>All</a>
            <a onClick={showAfrica} className="dropdown-item" href="#africa">Africa</a>
            <a onClick={showAmerica} className="dropdown-item" href="#america">Americas</a>
            <a onClick={showAsia} className="dropdown-item" href="#asia">Asia</a>
            <a onClick={showEurope} className="dropdown-item" href="#europe">Europe</a>
            <a onClick={showOceania} className="dropdown-item" href="#oceania">Oceania</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SingleCardInfo />
        </>
    )
}

export default InputRow;
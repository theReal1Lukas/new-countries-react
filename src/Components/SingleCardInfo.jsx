function SingleCardInfo () {

    function goHome () {
        window.location.reload();
    }

    return (
        <div class="single-card-info">
        <div class="container">
          <div class="row row-button">
            <div class="col-12 p-0">
              <button onClick={goHome} type="button"  class="btn btn-lg btn-secondary go-home-btn"> Home</button>
            </div>
          </div>
          <div class="row mt-5 align-items-center">
            <div class="col-12 col-md-6 text-center">
              <img class='card-img-top' src='' alt='flag-img'/>
            </div>
            <div class="col-12 col-md-1"></div>
            <div class="col-12 col-md text-center">
              <table style={{width:'100%'}}>
                <tr>
                  <th>
                    <h1 class="single-card-country-name"></h1>
                  </th>
                </tr>
                <tr>
                  <td>
                    <p><strong>Native Name : </strong> <span class="country-native-name"></span> </p>
                  </td>
                  <td>
                    <p><strong>Top Level Domain : </strong><span class="country-top-level-domain"></span> </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><strong>Population : </strong><span class="country-population"></span></p>
                  </td>
                  <td>
                    <p><strong>Currencies : </strong><span class="country-currencies"></span></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><strong>Region : </strong><span class="country-region"></span></p>
                  </td>
                  <td>
                    <p><strong>Languages : </strong><span class="country-languages"></span></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><strong>Sub Region : </strong><span class="country-sub-region"></span> </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><strong>Capital : </strong><span class="country-capital"></span></p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    
    )
}

export default SingleCardInfo;
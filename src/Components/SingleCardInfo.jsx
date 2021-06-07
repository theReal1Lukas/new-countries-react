function SingleCardInfo () {

    function goHome () {
        window.location.reload();
        window.location.href='/'
    }

    return (
        <div className="single-card-info">
        <div className="container">
          <div className="row row-button">
            <div className="col-12 p-0">
              <button onClick={goHome} type="button"  className="btn btn-lg btn-secondary go-home-btn"> Home</button>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div className="col-12 col-md-6 text-center">
              <img className='card-img-top' src='' alt='flag-img'/>
            </div>
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-md text-center">
              <table style={{width:'100%'}}>
                <tr>
                  <th>
                    <h1 className="single-card-country-name">/</h1>
                  </th>
                </tr>
                <tr>
                  <td>
                    <p><strong>Native Name : </strong> <span className="country-native-name"></span> </p>
                  </td>
                  <td>
                    <p><strong>Top Level Domain : </strong><span className="country-top-level-domain"></span> </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><strong>Population : </strong><span className="country-population"></span></p>
                  </td>
                  <td>
                    <p><strong>Currencies : </strong><span className="country-currencies"></span></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><strong>Region : </strong><span className="country-region"></span></p>
                  </td>
                  <td>
                    <p><strong>Languages : </strong><span className="country-languages"></span></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><strong>Sub Region : </strong><span className="country-sub-region"></span> </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p><strong>Capital : </strong><span className="country-capital"></span></p>
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
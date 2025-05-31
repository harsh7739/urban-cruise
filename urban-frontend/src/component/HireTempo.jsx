function HireTempo(){
    return(
        <>

<div
    className="position-absolute start-50 translate-middle-x d-flex  shadow rounded"
    style={{
      bottom: '13vh',
      transform: 'translateX(-50%)',
    }}
  >
    

  <div className="mx-auto" >
    
    {/* Header */}
    <div
      className="text-white text-center fw-bold fs-5"
      style={{
        backgroundColor: "#52d017", // Bright green
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        padding: "15px",
      }}
    >
      GET A QUICK CALL
    </div>
    <div
      className="d-flex flex-wrap justify-content-around align-items-center gap-3 p-3 shadow"
      style={{
        backgroundColor: "white",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        border: "2px solid #52d017",
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Name"
        style={{ maxWidth: "200px", minWidth: "150px" }}
      />

      <div className="input-group" style={{ maxWidth: "200px", minWidth: "150px" }}>
        <span className="input-group-text">
          🇮🇳
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
        />
      </div>

      <button
        className="btn fw-bold text-white"
        style={{
          backgroundColor: "#f9a825", // Orange
          boxShadow: "0px 3px 6px rgba(0,0,0,0.2)",
          minWidth: "100px",
        }}
      >
        SUBMIT
      </button>
    </div>
  </div>
  </div>
<div
  className="container pt-lg-5"
  style={{
    paddingTop: "180px",
    width: "60%",
    margin: "100px auto",
  }}
>


  <div className="row">
    <div className="col-md-6 mb-4">
      <button className="bg-warning border-0 m-auto">Hire Tempo Traveller in Delhi</button>
      <p className="fs-4">Tempo Traveller on Rent in Delhi</p>
      <p style={{fontSize:"12px"}}>
        A Tempo Traveller (or Force Traveller) is the most convenient option for travelling with Friends or Family members. Manufactured by Force Motors, it can accommodate 9 to 26 passengers & take them from one destination to another comfortably. We provide Custom Designed Travellers Bus with Best-in-Class Amenities required for a Comfortable Journey. Find us in 7 Cities of India- Mumbai, Thane, Pune, Delhi, Noida, Gurugram, Ghaziabad.
        </p>
<p style={{fontSize:"12px"}}>
Urban Cruise is the Most Preferred Traveller Service in Delhi, Noida, Gurugram & Ghaziabad. Our fleet consists of the latest models of seater Tempo Traveller with 9. 12. 13, 14, 17, 20 and 26 seating capacity and equipped with all Safety & Sanitisation measures, driven by Trained & Experienced drivers (with a smartphone for Google Maps).
      </p>
    </div>

    <div className="col-md-6">
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/yrUUVpiBL_Y?si=UWEV_buy34gRh6iN"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
 <div className="container text-center py-5">
  <div className="mb-2 fs-3">
    <span
      className="px-4 py-2"
      style={{
        backgroundColor: '#ffd599',
        color: '#ff7b00',
        fontWeight: '600',
        borderRadius: '8px',
        fontSize: '1rem',
      }}
    >
      MOST LIKED & HIGH RATED
    </span>
  </div>

  {/* Heading */}
  <h3 className="fw-bold mb-4 fs-2 text-uppercase">
    TEMPO TRAVELLER RENTAL SERVICE IN INDIA
  </h3>

  
  <div className="row justify-content-center text-center g-4">
    
    <div className="col-6 col-md-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google"
        className="img-fluid mb-2"
        style={{ maxHeight: '80px' }}
      />
      <p className="mb-0">4.7 ★★★★★ 3000+ Reviews</p>
    </div>

    <div className="col-6 col-md-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
        alt="Facebook"
        className="img-fluid mb-2"
        style={{ maxHeight: '80px' }}
      />
      <p className="mb-0">10000+</p>
      <p className="mb-0">Page Likes & Followers</p>
    </div>

   
    <div className="col-6 col-md-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        alt="YouTube"
        className="img-fluid mb-2"
        style={{ maxHeight: '80px' }}
      />
      <p className="mb-0">500+ Subscribers</p>
      <p className="mb-0">7000+ Views</p>
    </div>
    <div className="col-6 col-md-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
        alt="Instagram"
        className="img-fluid mb-2"
        style={{ maxHeight: '80px' }}
      />
      <p className="mb-0">1000+</p>
      <p className="mb-0">Page Likes & Followers</p>
    </div>
  </div>
</div>
</div>

   
        </>
    )

}
export default HireTempo
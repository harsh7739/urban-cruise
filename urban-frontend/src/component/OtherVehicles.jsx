function OtherVehicles(){
    const fleetData = [
  {
    title: "TEMPO TRAVELLER",
    seats: "9 To 26 Seater",
    img: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2023/02/TEMPO-TRAVELLER.png",
  },
  {
    title: "MINIBUS",
    seats: "19 To 35 Seater",
    img: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2023/02/Mini-bus.jpg",
  },
  {
    title: "LUXURY BUS",
    seats: "36 To 50 Seater",
    img: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2023/02/Luxury-bus.jpg",
  },
  {
    title: "LUXURY CAR",
    seats: "4 To 7 Seater",
    img: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2023/02/Luxury-Car.jpg",
  },
  {
    title: "CAR",
    seats: "4 Seater",
    img: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/07/1-CAR-Dzire.jpg",
  },
  {
    title: "SUV",
    seats: "6 To 7 Seater",
    img: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2023/02/Car-SUV.jpg",
  },
];
    return(
        <>
        <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <h5 className="text-warning fw-bold">LOOKING FOR OTHER VEHICLE ?</h5>
        <h2 className="fw-bold">MEET OUR AWESOME FLEET</h2>
        <p className="text-muted">
          Widest & finest Range of Vehicles in{" "}
          <strong>Delhi, Noida, Gurugram & Ghaziabad</strong> !
        </p>
      </div>

      {/* Cards */}
      <div className="row justify-content-center g-4">
        {fleetData.map((item, index) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
            <div
              className="border border-success rounded-4 text-center py-3 px-2 fleet-card h-100"
              style={{
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid mb-2"
                style={{ maxHeight: "100px" }}
              />
              <h6 className="fw-bold mb-1">{item.title}</h6>
              <p className="text-muted mb-0 small">{item.seats}</p>
            </div>
          </div>
        ))}
      </div>
      {/* -------------------------------- */}
      <div className="text-center py-5">
      <div className="mb-2">
    <span className="badge bg-warning text-dark fw-medium fs-4 px-3 py-2">
     A Vehicle
    </span>
  </div>

  {/* Heading */}
  <h2 className="fw-bold text-dark">FOR EVERY OCCASION</h2>

  {/* Subtext */}
  <p className="text-muted">
    Whatever is the occasion for traveling, we have the right vehicle for you!.{' '}
    
  </p>


<div className="d-flex justify-content-center mt-4">
  <div
    className="d-flex rounded-pill overflow-hidden shadow-sm"
    role="group"
    aria-label="Seater Options"
    style={{ border: '1px solid #000' }}
  >
    <button
      type="button"
      className="btn text-dark fw-bold px-4 custom-hover-box"
      style={{ backgroundColor: 'light'  }}
    >
      WEDDING TRAVEL
    </button>

    {/* Divider */}
    <div className="vr my-auto" style={{ backgroundColor: '#fff', width: '1px' }}></div>

    <button type="button" className="btn btn-dark px-4 rounded-0 custom-hover-box">
      CORPORATE TRAVEL
    </button>

    <div className="vr my-auto" style={{ backgroundColor: '#fff', width: '1px' }}></div>

    <button type="button" className="btn btn-dark px-4 rounded-0 custom-hover-box">
      VACATIONS
    </button>

    <div className="vr my-auto" style={{ backgroundColor: '#fff', width: '1px' }}></div>

    <button type="button" className="btn btn-dark px-4 rounded-0 custom-hover-box">
      LOCAL TRAVEL
    </button>
  </div>
</div>
</div>
      {/* --------------------------------- */}



      {/*  **************************************************  */}
       <div className="container pb-5" style={{marginTop:"20px"}}>
      <div className="row justify-content-center g-4">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-5 d-flex justify-content-center">
          <div className="position-relative" style={{ width: "100%", maxWidth: "500px" }}>
            <div
              className="border border-success rounded-4 overflow-hidden"
              style={{ borderWidth: "2px", backgroundColor: "#fff",paddingBottom:"20px"}}
            >
              <div className="p-3 text-center bg-light" style={{width:"100%"}}>
                <img
                  src="https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/04/A-wedding-travel-1.jpg"
                  alt="Vehicle"
                  className="img-fluid "
                  
                />
              </div>
              <div className="p-3">
                <h5 className="fw-bold mb-2">WEDDING BUS RENTAL</h5>
                <p className="text-muted small mb-2">
                  Manufactured by Tata Motors, it has Individual Reclining Bucket Seats. Ideal
                  for 1-2 families. Enjoy spacious sitting with plenty of storage space with{" "}
                  <strong>9 seater Tata Winger in Delhi, Noida & Gurugram</strong>. This Tata
                  Winger is also available in 1 additional seating configuration –{" "}
                  <strong>15 seater Tata Winger</strong>.
                </p>
                <hr />
                <div className="d-flex justify-content-between small">
                  <div>
                    <strong>SEAT</strong>: 10 to 50 seater
                  </div>
                  <div>
                    <strong>FARE</strong>: Starts from Rs. 20/Km
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons aligned with bottom border */}
            <div
              className="d-flex justify-content-between position-absolute w-100 px-3"
              style={{ bottom: "-18px" }}
            >
              <button
                className="btn btn-success fw-bold px-4 rounded-2 shadow btn-hover"
                style={{ zIndex: 1 }}
              >
                BOOK NOW
              </button>
              <button
                className="btn btn-warning fw-bold px-4 rounded-2 shadow btn-hover"
                style={{ zIndex: 1 }}
              >
               READ MORE
              </button>
            </div>
          </div>
        </div>

        {/* Repeat Card if Needed */}
        <div className="col-md-6 col-lg-5 d-flex justify-content-center">
          <div className="position-relative" style={{ width: "100%", maxWidth: "500px" }}>
            <div
              className="border border-success rounded-4 overflow-hidden"
              style={{ borderWidth: "2px", backgroundColor: "#fff",paddingBottom:"20px" }}
            >
              <div className="p-3 text-center bg-light">
                <img
                  src="https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/04/A-wedding-travel-2.jpg"
                  alt="Vehicle"
                  className="img-fluid"
                />
              </div>
              <div className="p-3">
                <h5 className="fw-bold mb-2">WEDDING CAR RENTAL</h5>
                <p className="text-muted small mb-2">
                  Manufactured by Tata Motors, it has Individual Reclining Bucket Seats. Ideal
                  for 1-2 families. Enjoy spacious sitting with plenty of storage space with{" "}
                  <strong>9 seater Tata Winger in Delhi, Noida & Gurugram</strong>. This Tata
                  Winger is also available in 1 additional seating configuration –{" "}
                  <strong>15 seater Tata Winger</strong>.
                </p>
                <hr />
                <div className="d-flex justify-content-between small">
                  <div>
                    <strong>SEAT</strong>: 4 to 7 seater
                  </div>
                  <div>
                    <strong>FARE</strong>: Starts from Rs. 17/Km
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons aligned with bottom border */}
            <div
              className="d-flex justify-content-between position-absolute w-100 px-3"
              style={{ bottom: "-18px" }}
            >
              <button
                className="btn btn-success fw-bold px-4 rounded-2 shadow btn-hover"
                style={{ zIndex: 1 }}
              >
                BOOK NOW
              </button>
              <button
                className="btn btn-warning fw-bold px-4 rounded-2 shadow btn-hover"
                style={{ zIndex: 1 }}
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* ********************************************************** */}
    {/* ######################## */}
     <div className="mt-5 px-3 w-85 m-auto">
    <div className=" text-start text-dark d-flex justify-content-between align-items-center p-4 rounded shadow  flex-md-row gap-3" style={{backgroundColor:"#F6C859"}}>
      <div>
        <div className="small">DO YOU STILL HAVE QUESTIONS?</div>
        <div className="fw-bold">REACH OUT TO US FOR DETAILED CLARIFICATION OF ALL YOUR QUERIES</div>
      </div>
      <button className="btn px-5 py-2  border-1 border-white text-light" style={{backgroundColor:"#33E20F"}}>FAQ</button>
    </div>
  </div>
    {/* ##################### */}
    </div>
        </>
    )
}
export default OtherVehicles
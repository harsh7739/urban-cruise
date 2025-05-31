function RentTempo(){
    return(
        <>
        <div className="text-center py-5" style={{ backgroundColor: '#ffefdc' }}>
  {/* Badge */}
  <div className="mb-2">
    <span className="badge bg-warning text-dark fw-medium fs-4 px-3 py-2">
      RENT A TEMPO TRAVELLER
    </span>
  </div>

  {/* Heading */}
  <h2 className="fw-bold text-dark">FOR EVERY GROUP SIZE</h2>

  {/* Subtext */}
  <p className="text-muted">
    Widest & finest Range of Tempo Travellers in{' '}
    <strong>Delhi, Noida, Gurugram &amp; Ghaziabad</strong>!
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
      className="btn text-white fw-bold px-4"
      style={{ backgroundColor: '#ffb800' }}
    >
      9/10 SEATER
    </button>

    {/* Divider */}
    <div className="vr my-auto" style={{ backgroundColor: '#fff', width: '1px' }}></div>

    <button type="button" className="btn btn-dark px-4 rounded-0">
      13/17 SEATER
    </button>

    <div className="vr my-auto" style={{ backgroundColor: '#fff', width: '1px' }}></div>

    <button type="button" className="btn btn-dark px-4 rounded-0">
      20/26 SEATER
    </button>

    <div className="vr my-auto" style={{ backgroundColor: '#fff', width: '1px' }}></div>

    <button type="button" className="btn btn-dark px-4 rounded-0">
      ROYAL VIP TRAVELLER
    </button>
  </div>
</div>
{/* -------------------------- */}

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
                  src="https://urbancruise.in/delhi/wp-content/uploads/2022/07/1-Winger-1-1.jpg"
                  alt="Vehicle"
                  className="img-fluid "
                  
                />
              </div>
              <div className="p-3">
                <h5 className="fw-bold mb-2">9 seater Tata Winger in Delhi</h5>
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
                    <strong>SEAT</strong>: 2x1 seating
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
                VIEW IMAGES
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
                  src="https://urbancruise.in/delhi/wp-content/uploads/2022/07/2-TT-9-seater-1-1.jpg"
                  alt="Vehicle"
                  className="img-fluid"
                />
              </div>
              <div className="p-3">
                <h5 className="fw-bold mb-2">9 seater Tata Winger in Delhi</h5>
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
                    <strong>SEAT</strong>: 2x1 seating
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
                VIEW IMAGES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* -------------------------- */}
    </div>


        </>
    )
}
export default RentTempo
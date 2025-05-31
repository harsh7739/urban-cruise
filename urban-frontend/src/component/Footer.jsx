function Footer(){
    return(
        <>
        <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row text-start text-md-left">

          {/* Column 1 - Logo + Description */}
          <div className="col-md-3 mb-4">
            <img src="https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/07/urbancruise-vertical-1-white-2.png" alt="Urban Cruise Logo" className="mb-2 w-50" />
            <p className="small">
              Urban Cruise is a BUS RENTAL COMPANY providing One Stop Solution for hiring Car, SUV, Tempo Traveller, MiniBus & Luxury Bus on rent for all your Travel needs in We are available in 7 Cities of India- Mumbai, Thane, Pune, Delhi, Noida, Gurugram, Ghaziabad.
            </p>
          </div>

          {/* Column 2 - Company */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold border-bottom pb-1 mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li>ABOUT US</li>
              <li>CONTACT US</li>
              <li>CAREER</li>
              <li>PARTNER</li>
              <li>HAPPY CUSTOMERS</li>
            </ul>
          </div>

          {/* Column 3 - Info */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold border-bottom pb-1 mb-3">Info</h6>
            <ul className="list-unstyled small">
              <li>FAQ’S</li>
              <li>BLOG</li>
              <li>NEWS & MEDIA</li>
              <li>PRIVACY</li>
              <li>TERM & CONDITIONS</li>
            </ul>
          </div>

          {/* Column 4 - Office Locations */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold border-bottom pb-1 mb-3">Office Locations</h6>
            <p className="text-warning fw-bold mb-1">URBAN CRUISE</p>
            <p className="small mb-1">B-14, Gali no. 10, Shashi Garden, Mayur Vihar Phase 1, Delhi-110091</p>
            <p className="mb-1"><strong>Phone:</strong></p>
            <p className="small mb-1">+91 9324048224</p>
            <p className="small mb-1">+91-892-894-6056</p>
            <p className="mb-1"><strong>Email:</strong></p>
            <p className="small">delhi@urbancruise.in</p>
          </div>

          {/* Column 5 - Social Icons */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold border-bottom pb-1 mb-3">Follow Us On</h6>
            <div className="d-flex gap-2">
              {["instagram", "twitter", "facebook", "linkedin", "youtube"].map((icon, idx) => (
                <div
                  key={idx}
                  className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "36px", height: "36px", fontSize: "16px", fontWeight: "bold" }}
                >
                  {icon[0].toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center pt-3 border-top border-secondary mt-4 mb-4 small">
          © Copyright 2025 Urban Cruise | All Rights Reserved
        </div>
      </div>
    </footer>
        </>
    )
}
export default Footer
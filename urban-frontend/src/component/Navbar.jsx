
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="container-fluid d-flex justify-content-center fixed-top"
          style={{ backgroundColor: "#AAED49", height: "60px",paddingBottom:"10px" }}
        >
          <div
            className="container-fluid"
            style={{ width: "80%", margin: "auto" }}
          >
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                
               
                <li
                  className="nav-item position-relative"
                  style={{ marginRight: "20px" }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "0 0 20px 20px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      padding: "5px 15px",
                      position: "relative",
                      height: "80px",
                      transform: "translateY(-10px)",
                      display: "flex",
                      alignItems: "center",
                      zIndex: 10,
                    }}
                  >
                    <img
                      src="https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/07/urbancruise-vertical-1-white-2.png"
                      alt="Urban Cruise"
                      style={{ height: "100%", objectFit: "contain" }}
                    />
                  </div>
                </li>

            
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ABOUT US
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">ABOUT US</a></li>
                    <li><a className="dropdown-item" href="#">CAREERS</a></li>
                    <li><a className="dropdown-item" href="#">HAPPY PARTNER</a></li>
                    <li><a className="dropdown-item" href="#">CONTACT US</a></li>
                  </ul>
                </li>

                <span id="nav-divider"></span>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    OUR VEHICLES
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">CARS & SUVS</a></li>
                    <li><a className="dropdown-item" href="#">LUXURY CARS, SUVS, VANS</a></li>
                    <li><a className="dropdown-item" href="#">TEMPO TRAVEL</a></li>
                    <li><a className="dropdown-item" href="#">MINI BUS</a></li>
                    <li><a className="dropdown-item" href="#">LUXURY BUS</a></li>
                  </ul>
                </li>

                <span id="nav-divider"></span>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SERVICES
                  </a>
                  <ul className="dropdown-menu bg-dark">
                    <li><a className="dropdown-item text-warning" href="#">CHAR DHAM YATRA</a></li>
                    <li><a className="dropdown-item text-warning" href="#">WEDDING TRAVEL</a></li>
                    <li><a className="dropdown-item text-warning" href="#">VACATIONS</a></li>
                    <li><a className="dropdown-item text-warning" href="#">LOCAL TRAVEL</a></li>
                  </ul>
                </li>

                <span id="nav-divider"></span>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    INFO'S
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">FAQ'S</a></li>
                    <li><a className="dropdown-item" href="#">NEWS & MEDIA</a></li>
                  </ul>
                </li>

                <span id="nav-divider"></span>

                <li>
                  <button className="bg-warning rounded-2 px-3 py-1 mt-1 mx-4 border-0 text-light">
                    <i className="fa-solid fa-calendar-days"></i> GET A QUOTE
                  </button>
                </li>

                <li>
                  <button className="bg-warning rounded-2 px-3 py-1 mt-1 border-0 text-light">
                    <i className="fa-solid fa-phone " ></i> (+91) 9324048224
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


function CovidSafty(){
    const cities = [
  { name: "MUMBAI", image: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/02/0009_mumbai.png" },
  { name: "THANE", image: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/02/0008_thane.png" },
  { name: "PUNE", image: "https://urbancruise.in/wp-content/uploads/2022/02/0007_pune.png" },
  { name: "AHMEDABAD", image: "https://urbancruise.in/wp-content/uploads/2022/02/0006_ahemdabad.png" },
  { name: "DELHI", image: "https://urbancruise.in/wp-content/uploads/2022/02/0005_delhi.png" },
  { name: "NOIDA", image: "https://urbancruise.in/wp-content/uploads/2022/02/0004_noida.png" },
  { name: "GURUGRAM", image: "https://urbancruise.in/wp-content/uploads/2022/02/0003_gurugram.png" },
  { name: "GAZIABAD", image: "https://urbancruise.in/wp-content/uploads/2022/02/0002_Ghaziabad.png" },
  { name: "JAIPUR", image: "https://urbancruise.in/wp-content/uploads/2022/02/0001_jaipur.png" },
  { name: "AGRA", image: "https://urbancruise.in/wp-content/uploads/2022/02/0000_agra.png" },
];
const rows = [];
  for (let i = 0; i < cities.length; i += 5) {
    rows.push(cities.slice(i, i + 5));
  }
    return(
        <>
        <div className="container py-5">
      <div className="text-center mb-4">
        <span className="badge bg-warning text-dark fs-3 fw-medium px-3 py-2 fs-6">
          COVID SAFETY SHIELD
        </span>
        <h2 className="fw-bold mt-3">CLEANLINESS & SAFETY</h2>
        <p className="text-muted small">
          Urban Cruise uses stringent Safety measures & COVID-19 Safety Protocols before & after every booking:
        </p>
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center">
          <img
            src="https://urbancruise.in/delhi/wp-content/uploads/2022/05/g-cleaning-2-1.jpg"
            alt="Cleaning"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h6 className="fw-bold">Deep cleaning & Sanitisation of Tempo Travellers:</h6>
          <ul className="text-muted small">
            <li>
              <strong>Deep Cleaning</strong> – Our Tempo Travellers are subjected to deep cleaning procedures using wet washing.
            </li>
            <li>
              <strong>Sanitised Tempo Travellers</strong> – ICMR Approved Sanitiser & Surface Disinfectants are used.
            </li>
            <li>
              <strong>On-Demand Sanitization</strong> – Available at the customer’s place for 100% satisfaction.
            </li>
          </ul>
        </div>
      </div>

  
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src="https://urbancruise.in/delhi/wp-content/uploads/2022/05/f-covid-1-1.jpg"
            alt="COVID Protocol"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h6 className="fw-bold">COVID-19 Safety Protocols by Staff & Driver:</h6>
          <ul className="text-muted small">
            <li><strong>Mandatory use of Masks</strong> – Drivers must wear 3-ply face masks before trips.</li>
            <li><strong>Temperature Checks</strong> – Periodic checks for drivers and helpers.</li>
            <li><strong>Double Vaccinated Drivers</strong> – Only vaccinated drivers deployed.</li>
          </ul>
        </div>
      </div>

      <div className="container text-center my-5">
      <h6 className="text-warning fw-bold mb-2">VEHICLES & SERVICES</h6>
      <h3 className="fw-bold text-dark mb-4">IN OTHER CITIES...</h3>

      {rows.map((row, rowIndex) => (
        <div
          className="d-flex justify-content-center flex-wrap mb-4"
          key={rowIndex}
        >
          {row.map((city, index) => (
            <div className="city-card text-center mx-2 mb-3" key={index}>
              <div className="border border-success rounded p-3 h-100 transition-card">
                <img
                  src={city.image}
                  alt={city.name}
                  className="img-fluid mb-2"
                  style={{ height: "80px", objectFit: "contain" }}
                />
                <div className="fw-bold small">{city.name}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
     
    </div>
        </>
    )
}
export default CovidSafty
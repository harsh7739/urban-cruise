function TravelBudget(){
    return (
        <>
       <div className="text-center py-5" style={{ backgroundColor: '#fff' }}>
  
  <div className="mb-2 fs-3 fw-medium">
    <span
      className="px-4 py-2"
      style={{
        backgroundColor: '#ffd599',
        color: '#ff7b00',
        fontWeight: '600',
        borderRadius: '8px',
      }}
    >
      A TEMPO TRAVELLER IN DELHI NCR
    </span>
  </div>

  {/* Headings */}
  <h2 className="fw-medium">FOR EVERY BUDGET</h2>
  <p className="text-muted mb-5">4 Categories of Tempo Travellers to suit every budget</p>

  {/* Cards Row */}
  <div className="container">
    <div className="row justify-content-center text-center g-4">

      {/* Card Template */}
      {[
        {
          title: 'ECONOMY',
          desc: 'Basic Amenities for Local or Short Distance Travel',
          bg: '#939116',
          icon: 'https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/02/ECONOMY.png'
        },
        {
          title: 'PREMIUM',
          desc: 'All Features & Amenities for Superior Comfort',
          bg: '#00cc33',
          icon: 'https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/02/PREMIUM.png'
        },
        {
          title: 'ROYAL',
          desc: 'New & Modified Vehicles with Best-in-class Amenities',
          bg: '#e63974',
          icon: 'https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/02/ROYAL.png'
        },
        {
          title: 'ROYAL VIP',
          desc: 'Ultra Luxury Vehicles with Custom Designed Amenities.',
          bg: '#B085F4',
          icon: 'https://urbancruise.in/delhi/wp-content/uploads/2024/10/Royal-VIP-2-150x168.webp'
        }
      ].map((card, i) => (
        <div className="col-6 col-md-3" key={i}>
          <div
            className="position-relative rounded text-white p-2 pt-5"
            style={{ backgroundColor: card.bg }}
          >
            {/* Floating Icon */}
            <div
              className="position-absolute top-0 start-50 translate-middle"
              style={{
                width: '80px',
                height: '80px',
                // backgroundColor: '#fff',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 0 10px rgba(0,0,0,0.15)',
              }}
            >
              <img src={card.icon} alt={card.title} style={{ height: '100%' }} />
            </div>

            <h5 className="fw-bold text-dark mt-3 pt-2">{card.title}</h5>
            <p className="small fs-5 text-dark">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Contact CTA */}
  <div className="mt-5 px-3 w-75 m-auto">
    <div className=" text-start text-dark d-flex justify-content-between align-items-center p-4 rounded shadow  flex-md-row gap-3" style={{backgroundColor:"#F6C859"}}>
      <div>
        <div className="small">DO YOU STILL HAVE QUESTIONS?</div>
        <div className="fw-bold">REACH OUT TO US FOR DETAILED CLARIFICATION OF ALL YOUR QUERIES</div>
      </div>
      <button className="btn   px-4 py-2 border-1 border-white text-light" style={{backgroundColor:"#33E20F"}}>CONTACT US</button>
    </div>
  </div>
</div>


        </>
    )
}
export default TravelBudget
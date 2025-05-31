function PlacesToVisit(){
    const data = [
  {
    title: "DELHI DARSHAN",
    img: "https://urbancruise.in/delhi/wp-content/uploads/2023/06/Delhi-Darshan-1.png",
    text: "Delhi, the Capital of India is a must visit for everyone. Delhi Darshan tour includes places such as India Gate, Red Fort, Qutub Minar..."
  },
  {
    title: "CHAR DHAM YATRA",
    img: "https://urbancruise.in/delhi/wp-content/uploads/2023/06/Chardham-Yatra-1.png",
    text: "Chardham Yatra is a pilgrimage to the 4 revered shrines of Yamunotri, Gangotri, Kedarnath and Badrinath..."
  },
  {
    title: "SHIMLA KULLU MANALI",
    img: "https://urbancruise.in/delhi/wp-content/uploads/2023/06/Shimla-Kullu-Manali.png",
    text: "Shimla & Kullu-Manali are popular destinations in Himachal Pradesh. Renting a tempo traveller from Delhi to Manali with Urban Cruise..."
  },
  {
    title: "AGRA MATHURA VRINDAVAN",
    img: "https://urbancruise.in/delhi/wp-content/uploads/2023/06/Agra-Mathura-Vrindavan.png",
    text: "Agra, Mathura & Vrindavan cities are known for their historical & religious significance..."
  },
  {
    title: "ROYAL RAJASTHAN TOUR",
    img: "https://urbancruise.in/delhi/wp-content/uploads/2023/06/Royal-Rjasthan-Tour.png",
    text: "Royal Rajasthan Tour from Delhi is an exciting tour. So consider, tempo traveller hire to Rajasthan & explore the forts..."
  },
  {
    title: "JAMMU & KASHMIR",
    img: "https://urbancruise.in/delhi/wp-content/uploads/2023/06/Jammu-Kashmir.png",
    text: "Experience the breath-taking beauty of Jammu & Kashmir by visiting the holy shrine of Vaishno Devi..."
  }
];
    return(
        <>
          <div className="container-fluid py-5" style={{ backgroundColor: "#fce8d7" }}>
      <div className="text-center mb-4">
        <span className="badge bg-warning text-dark fs-3 fw-medium px-3 py-2 rounded-pill">
          PLACES TO VISIT IN DELHI
        </span>
      </div>
      <h3 className="text-center fw-bold mb-5">
        FAMOUS TOURIST PLACES IN DELHI & NCR
      </h3>

  <div className="container-fluid py-4">
  <div className="row g-4 justify-content-center" style={{ maxWidth: '1140px', margin: '0 auto' }}>
    {data.map((place, idx) => (
      <div className="col-12 col-sm-6 col-lg-4" key={idx}>
        <div className="card h-100 shadow-sm border-0 rounded-4">
          <img
            src={place.img}
            alt={place.title}
            className="card-img-top"
            style={{ height: '160px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title fw-semibold">{place.title}</h5>
            <p className="card-text small">{place.text}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



    </div>
        </>
    )
}
export default PlacesToVisit
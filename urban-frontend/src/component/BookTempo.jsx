
function BookTempo() {
  return (
    <>
      <div className="text-center py-5" style={{ backgroundColor: '#e9fce8' }}>
      
         <div className="mb-2 fs-3">
    <span
      className="px-4 py-2"
      style={{
        backgroundColor: '#ffd599',
        color: '#ff7b00',
        fontWeight: '600',
      }}
    >
      HOW IT WORKS
    </span>
  </div>
        <h2 className="fw-bold mb-5">
          BOOK TEMPO TRAVELLER IN DELHI IN 3 EASY STEPS
        </h2>

        <div className="container">
          <div className="row justify-content-center text-center">
            {[{
              step: 1,
              title: 'ENQUIRY',
              img: 'https://urbancruise.in/delhi/wp-content/uploads/2022/02/ENQUIRY-1.png',
              desc: 'Share your travel plan with us through Call, Email, WhatsApp, or request a quote.'
            }, {
              step: 2,
              title: 'SELECT VEHICLE',
              img: 'https://urbancruise.in/delhi/wp-content/uploads/2022/02/SELECT-VEHICLE-1.png',
              desc: 'Our team will provide the best suitable Tempo Travellers with best price.'
            }, {
              step: 3,
              title: 'BOOK VEHICLE',
              img: 'https://urbancruise.in/delhi/wp-content/uploads/2022/02/BOOK-VEHICLE-1.png',
              desc: 'Book our Premium Tempo Travellers on Rent & Enjoy a memorable journey.'
            }].map((item, idx) => (
              <div className="col-12 col-md-4 mb-4" key={idx}>
                <div className="position-relative p-3">
                  
                  <div
                    className="rounded-circle bg-warning-subtle text-warning fw-bold position-absolute"
                    style={{
                      width: '70px',
                      height: '70px',
                      top: '-35px',
                      left: '30%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      zIndex: 2
                    }}
                  >
                    {item.step}
                  </div>

               
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid rounded shadow"
                    style={{ paddingTop: '40px' }}
                  />
                  <h5 className="mt-4 text-warning fw-bold">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
              
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}
export default BookTempo;

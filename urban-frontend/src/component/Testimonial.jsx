// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Testimonial() {
  const testimonials = [
    {
      image: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/01/3-Simone-Dsouza-Group-Image-2.jpg",
      name: "Harshad Lad",
      role: "",
      rating: 5,
      text: "I had booked twice (37 Seater & 49 Seater Buses) for office picnic to Lonavala. As per my previous experience this time also I had a very good & Comfortable Journey."
    },
    {
      image: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/04/5-Harshed-Lad-Group-Image-2.jpg",
      name: "Illa Parikh",
      role: "Frequent Traveller",
      rating: 5,
      text: "The Driver was very courteous, Bus was comfortable. All-in-All it was a happy Cruising with Urban Cruise."
    },
    {
      image: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/01/2-Ila-Parikh-Group-Image-2.jpg",
      name: "Prakash Gupta",
      role: "CEO, PPM Logistics",
      rating: 5,
      text: "They promptly arranged the Bus at very short notice. The Bus was very neat & clean & full of amenities. Highly recommended."
    },
    {
      image: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/01/4-Jitendra-Yadav-Group-Image-2.jpg",
      name: "Riya Sharma",
      role: "Business Owner",
      rating: 5,
      text: "Smooth booking process and excellent support. The bus was on time and driver was professional."
    },
    {
      image: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/01/4-Jitendra-Yadav-Group-Image-2.jpg",
      name: "Amit Mehra",
      role: "Tour Organizer",
      rating: 5,
      text: "Fantastic service, the group was very happy with the ride and overall experience."
    },
    {
      image: "https://darkslategray-ant-498809.hostingersite.com/wp-content/uploads/2022/01/4-Jitendra-Yadav-Group-Image-2.jpg",
      name: "Sneha Kulkarni",
      role: "Event Manager",
      rating: 5,
      text: "Very efficient team. Everything went smoothly and the vehicle was well maintained."
    }
  ];

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const slides = chunkArray(testimonials, 3);

  return (
    <div className="container py-5">
      <div className="text-center mb-3">
        <span className="badge bg-warning text-dark fs-3 fw-medium px-3 py-2">
          TESTIMONIAL
        </span>
      </div>
      <h2 className="text-center mb-4">A GALAXY OF HAPPY CUSTOMERS</h2>

      <Carousel indicators={true} controls={false} interval={null}>
        {slides.map((group, idx) => (
          <Carousel.Item key={`slide-${idx}`}>
            <div className="row justify-content-center g-4 mt-4">
              {group.map((testimonial, index) => (
                <div className="col-md-3 " key={`card-${index}`}>
                  <Card className="mb-4 shadow-sm">
                    <img
                      src={testimonial.image}
                      className="card-img-top"
                      alt={testimonial.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <CardBody>
                      <CardTitle tag="h5">{testimonial.name}</CardTitle>
                      <CardText>
                        <small className="text-muted">{testimonial.role}</small>
                      </CardText>
                      <CardText>
                        {Array(testimonial.rating).fill("⭐").join(" ")}<br />
                        <em>{testimonial.text}</em>
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className=" text-start w-75 m-auto text-dark d-flex justify-content-between align-items-center p-4 rounded shadow  flex-md-row gap-3" style={{backgroundColor:"#F6C859"}}>
      <div>
        <div className="small">DO YOU STILL HAVE QUESTIONS?</div>
        <div className="fw-bold">REACH OUT TO US FOR DETAILED CLARIFICATION OF ALL YOUR QUERIES</div>
      </div>
      <button className="btn px-4 py-2 border-1 border-white text-light btn-hover" style={{backgroundColor:"#33E20F"}}>CONTACT US</button>
    </div>
    </div>
  );
}

export default Testimonial;

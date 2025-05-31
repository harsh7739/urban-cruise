import { useState } from "react";


const faqData = [
  { question: "What types of tempo travellers are available for rent in Delhi?", answer: "We offer a variety of tempo travellers including 9-seater, 12-seater, 17-seater and luxury options." },
  { question: "What is the price to hire a tempo traveller in Delhi?", answer: "Prices vary based on distance, duration and type. Contact us for a custom quote." },
  { question: "How to Book a Tempo Traveller in Delhi from Urban Cruise?", answer: "You can book through our website or contact our customer support directly." },
  { question: "What features and amenities are offered?", answer: "Reclining seats, AC, LED screens, music system, charging points and more." },
  { question: "How many people can sit in Tempo Traveller?", answer: "It ranges from 9 to 26 seats depending on the model." },
  { question: "Are there any special packages for weddings or corporate events?", answer: "Yes, we provide customized packages for weddings, events, and corporate needs." },
  { question: "Do you offer luxury tempo traveller hire for outstation and local trips both?", answer: "Absolutely. Our luxury vehicles are available for both local and outstation trips." },
  { question: "Where are your tempo traveller services available for rent in Delhi NCR?", answer: "We serve across all of Delhi NCR, including Noida, Gurgaon, Faridabad, and Ghaziabad." },
  { question: "Can I book a luxury tempo traveller in Delhi with a Toilet in Delhi?", answer: "Yes, we have toilet-equipped luxury travellers available upon request." },
  { question: "Can I book a tempo traveller with a bed in Delhi?", answer: "Yes, a few luxury models offer sleeper or semi-sleeper options." },
  { question: "How much luggage can I bring in Tempo Traveller?", answer: "Each vehicle has spacious boot space. Carry-on and medium luggage are fine." },
  { question: "How much is the cost of a book a tempo traveller on rent in Delhi?", answer: "It starts from around ₹15/km and depends on the type and duration." },
  { question: "Are there any hidden charges in the Tempo Traveller Rent In Delhi Service?", answer: "No hidden charges. All costs are disclosed upfront." },
  { question: "What is the per km rate to hire a tempo traveller in Delhi?", answer: "Rates start from ₹15/km and vary with model and services chosen." },
  { question: "What is the minimum km per day for Tempo Traveller?", answer: "Minimum billing is usually for 250 km/day." },
  { question: "Is the Tempo Traveller good in the Hills?", answer: "Yes, our vehicles are well-maintained and suitable for hilly terrains." },
];


function Faq(){
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Split into 2 columns
  const firstHalf = faqData.slice(0, faqData.length / 2);
  const secondHalf = faqData.slice(faqData.length / 2);
    return(
        <>
        <div className="container-fluid py-5" style={{ backgroundColor: "#e4fdd5" }}>
      <div className="text-center mb-3">
        <span className="badge bg-warning text-dark fs-5 px-3 py-2">FAQ’S</span>
      </div>
      <h2 className="text-center fw-bold mb-5">FREQUENTLY ASKED QUESTIONS</h2>

<div className="row justify-content-center g-4">
  {[firstHalf, secondHalf].map((column, colIndex) => (
    <div className="col-lg-4 col-md-5 col-sm-10" key={colIndex}>
      {column.map((faq, index) => {
        const actualIndex = colIndex * firstHalf.length + index;
        const isOpen = openIndex === actualIndex;
        return (
          <div
            key={actualIndex}
            className="mb-2 border bg-white rounded px-3 py-2"
            style={{ cursor: "pointer" }}
            onClick={() => toggleFaq(actualIndex)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <strong className="me-3 question-text">{faq.question}</strong>
              <span className="fs-4 fw-bold">{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen && <div className="mt-2 text-muted small">{faq.answer}</div>}
          </div>
        );
      })}
    </div>
  ))}
</div>



    </div>
        </>
    )
}
export default Faq
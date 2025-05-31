const FloatingContactIcons = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: "0",
        transform: "translateY(-50%)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px"
      }}
    >
      
      <a
        href="tel:+91 9324048224"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-circle bg-warning btn-call"
        style={{width:"40px",height:"40px",textAlign:"center",justifyContent:"center",borderRadius:"50%", backgroundColor:"yellow"}}

      >
        <i className="fas fa-phone text-white" style={{alignItems:"center"}}></i>
      </a>

   
      <a
        href="sms:+911234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-circle bg-warning btn-call"
        style={{width:"40px",height:"40px",textAlign:"center",justifyContent:"center",borderRadius:"50%", backgroundColor:"yellow"}}
      >
        <i className="fas fa-envelope text-white bg-warning"></i>
      </a>

      {/* WhatsApp Icon */}
      
      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-circle bg-warning btn-call"
        style={{width:"40px",height:"40px",textAlign:"center",justifyContent:"center",borderRadius:"50%"}}
      >
        <i className="fab fa-whatsapp text-white w-75"></i>
        {/* <i class="fa-brands fa-whatsapp"></i> */}
      </a>
    </div>
  );
};

export default FloatingContactIcons;

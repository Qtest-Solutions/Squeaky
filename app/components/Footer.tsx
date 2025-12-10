export default function Footer() {
  return (
    <footer style={{backgroundColor:'white', padding:'60px 20px', borderTop:'1px solid #e0e0e0'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'start', maxWidth:'1200px', margin:'0 auto', marginBottom:'40px'}}>
        {/* Logo Section */}
        <div>
          <img src="/Logo-01.png" alt="SqueakyFMS" style={{height:'80px', marginBottom:'20px'}} />
        </div>
        
        {/* Contact Info - Right Corner */}
        <div style={{color:'#666', textAlign:'left'}}>
          <p style={{marginBottom:'12px'}}>
            <strong>Phone:</strong><br/>
            <strong>+91 98473 43337</strong>
          </p>
          <p style={{marginBottom:'12px'}}>
            <strong>Physical address:</strong><br/>
            <strong>Kakkanchery, Near KINFRA, Malappuram</strong>
          </p>
          <p>
            <strong>Email address:</strong><br/>
            <strong>squeakyfms@gmail.com</strong>
          </p>
        </div>
      </div>

      {/* Copyright at Bottom */}
      <div style={{textAlign:'center', color:'#999', fontSize:'14px', paddingTop:'20px', borderTop:'1px solid #e0e0e0'}}>
        <p>&copy; 2025 SqueakyFMS. All rights reserved.</p>
      </div>
    </footer>
  );
}

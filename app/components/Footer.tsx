export default function Footer() {
  return (
    <footer style={{backgroundColor:'white', padding:'40px 20px', borderTop:'1px solid #e0e0e0'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'start', maxWidth:'1200px', margin:'0 auto', marginBottom:'30px', gap:'20px'}}>
        {/* Logo Section */}
        <div style={{flexShrink:0}}>
          <img src="/Logo-01.png" alt="SqueakyFMS" style={{height:'60px', marginBottom:'12px'}} />
        </div>
        
        {/* Contact Info - Right Corner */}
        <div style={{color:'#666', textAlign:'left', fontSize:'14px', marginLeft:'auto'}}>
          <p style={{margin:'0 0 8px 0'}}>
            <strong>Phone:</strong><br/>
            <strong>+91 98473 43337</strong>
          </p>
          <p style={{margin:'0 0 8px 0'}}>
            <strong>Physical address:</strong><br/>
            <strong>Kakkanchery, Near KINFRA, Malappuram</strong>
          </p>
          <p style={{margin:0}}>
            <strong>Email address:</strong><br/>
            <strong>squeakyfms@gmail.com</strong>
          </p>
        </div>
      </div>

      {/* Copyright at Bottom */}
      <div style={{textAlign:'center', color:'#999', fontSize:'12px', paddingTop:'15px', borderTop:'1px solid #e0e0e0'}}>
        <p style={{margin:'0'}}>&copy; 2025 SqueakyFMS. All rights reserved.</p>
      </div>
    </footer>
  );
}

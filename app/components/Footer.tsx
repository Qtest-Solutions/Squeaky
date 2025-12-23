import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "white",
        padding: "80px 20px 32px",
        borderTop: "1px solid #e5e7eb"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "60px",
          flexWrap: "wrap"
        }}
      >
        {/* LEFT – Logo + About + Social */}
        <div style={{ maxWidth: "360px" }}>
          <img
            src="/Logo-01.png"
            alt="SqueakyFMS"
            style={{ height: "72px", marginBottom: "18px" }}
          />

          <p
            style={{
              fontSize: "15px",
              color: "#6b7280",
              lineHeight: "1.7",
              marginBottom: "24px"
            }}
          >
            Professional facility management services delivering cleanliness,
            safety, and reliability for homes, offices, and institutions.
          </p>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "14px" }}>
            {[{ Icon: Instagram }, { Icon: Facebook }].map(({ Icon }, i) => (
              <a
                key={i}
                href="#"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "#f0fdf4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#059669",
                  transition: "all 0.3s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#059669";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f0fdf4";
                  e.currentTarget.style.color = "#059669";
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT – Contact Info (BIGGER + ICONS) */}
        <div style={{ minWidth: "280px" }}>
       

          {/* Phone */}
          <div style={{ display: "flex", gap: "14px", marginBottom: "18px" }}>
            <Phone size={22} color="#059669" />
            <div>
              <div style={{ fontSize: "15px", color: "#6b7280" }}>Phone</div>
              <div style={{ fontSize: "18px", fontWeight: 700 }}>
                +91 98473 43337
              </div>
            </div>
          </div>

          {/* Address */}
          <div style={{ display: "flex", gap: "14px", marginBottom: "18px" }}>
            <MapPin size={22} color="#059669" />
            <div>
              <div style={{ fontSize: "15px", color: "#6b7280" }}>
                Physical Address
              </div>
              <div style={{ fontSize: "17px", fontWeight: 600, lineHeight: "1.4" }}>
                Kakkanchery, Near KINFRA
                <br />
                Malappuram
              </div>
            </div>
          </div>

          {/* Email */}
          <div style={{ display: "flex", gap: "14px" }}>
            <Mail size={22} color="#059669" />
            <div>
              <div style={{ fontSize: "15px", color: "#6b7280" }}>Email</div>
              <div style={{ fontSize: "17px", fontWeight: 600 }}>
                squeakyfms@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          marginTop: "56px",
          paddingTop: "20px",
          borderTop: "1px solid #e5e7eb",
          textAlign: "center",
          fontSize: "13px",
          color: "#9ca3af"
        }}
      >
        © 2025 SqueakyFMS. All rights reserved.
      </div>
    </footer>
  );
}

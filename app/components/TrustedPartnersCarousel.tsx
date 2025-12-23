"use client";
import React from "react";

const logos = [
  "/clientsLogo/Eduport.webp",
  "/clientsLogo/Seematti-Typo-Black.webp",
  "/clientsLogo/Zaitoon.webp",
  "/clientsLogo/alabeerlogo.webp",
  "/clientsLogo/aln.webp",
  "/clientsLogo/asten.webp",
  "/clientsLogo/bellacasa.webp",
  "/clientsLogo/darshana.webp",
  "/clientsLogo/drAgarwal.webp",
  "/clientsLogo/escola.webp",
  "/clientsLogo/kidonex.webp",
  "/clientsLogo/kites-logo.webp",
  "/clientsLogo/meithra.webp",
  "/clientsLogo/rajakkad.webp",
  "/clientsLogo/raviz.webp",
  "/clientsLogo/westside.webp",
  "/clientsLogo/york.webp"
];

export default function TrustedPartnersCarousel() {
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <style>{`
        @keyframes slideRight {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes slideLeft {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .row {
          display: flex;
          width: max-content;
          gap: 40px;
          padding: 20px 0;
        }

        .row.right {
          animation: slideRight 35s linear infinite;
        }

        .row.left {
          animation: slideLeft 35s linear infinite;
        }

        .logo-card {
          width: 160px;
          height: 90px;
          background: white;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          border: 1px solid #f3f4f6;
        }

        .logo-card img {
          max-width: 100%;
          max-height: 60px;
          object-fit: contain;
          filter: grayscale(0.3);
          transition: filter 0.3s;
        }

        .logo-card:hover img {
          filter: grayscale(0);
        }

        @media (max-width: 768px) {
          .logo-card {
            width: 120px;
            height: 70px;
          }
        }
      `}</style>

      {/* Row 1 → Right */}
      <div className="row right">
        {[...logos, ...logos].slice(0, 12).map((logo, i) => (
          <div className="logo-card" key={`r1-${i}`}>
            <img src={logo} alt="Client logo" />
          </div>
        ))}
      </div>

      {/* Row 2 → Left */}
      <div className="row left">
        {[...logos, ...logos].slice(6, 18).map((logo, i) => (
          <div className="logo-card" key={`r2-${i}`}>
            <img src={logo} alt="Client logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

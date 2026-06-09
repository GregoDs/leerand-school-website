import React from "react";
import "./OurPurpose.css";

const OurPurpose = () => {
  return (
    <div className="our-purpose-container">
      <div className="our-purpose-header">
        <h3 className="our-purpose-title">Our Purpose</h3>
      </div>
      <div className="our-purpose-content">
        <div className="image-container">
          <img
            src="src/assets/leerandwhatwedo.png"
            alt="Children in school uniforms"
            className="purpose-image"
          />
        </div>
        <div className="text-container">
          <h2 className="section-heading">WHAT WE DO</h2>
          <p className="mission-paragraph">
            <span className="mission-title">Leerand Mission:</span> At Leerand, we exist to{" "}
            <strong className="bold-purple">teach thinking</strong> — to{" "}
            <strong className="bold-purple">nurture every child’s potential</strong> through{" "}
            <strong className="bold-purple">bold learning</strong>,{" "}
            <strong className="bold-purple">purposeful innovation</strong>, and the{" "}
            <strong className="bold-purple">drive to succeed</strong>.
          </p>
          <p className="mission-subtext">
            We empower young minds to question deeply,{" "}
            <strong className="bold-purple">imagine boldly</strong>, and{" "}
            <strong className="bold-purple">act ethically</strong> — shaping visionary citizens for a safe and meaningful future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPurpose;
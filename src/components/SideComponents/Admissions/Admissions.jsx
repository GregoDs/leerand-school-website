import React, { useRef } from 'react';
import Hero from './Hero.jsx';
// import PrepSchoolEntry from '../../SchoolLevels/PreSchoolAdmission.jsx';
// import JuniorSchoolEntry from '../../SchoolLevels/JuniorSchoolAdmission.jsx';
// import PrePrimaryEntry from '../../SchoolLevels/PrePrimaryAdmission.jsx';
// import RegistrationJourney from '../../SchoolLevels/RegistrationJourney.jsx';
import FooterContact from '../../Footer/FooterContact.jsx';
import AdmissionEnquiry from './AdmissionsEnquiry.jsx';
import AdmissionsOverview from './AdmissionsOverview.jsx';

function Admissions() {
  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      className="min-h-screen bg-gray-100"
    //   style={{ overflow: 'auto', height: '100vh' }}
    >
      <Hero />
      {/* <PrepSchoolEntry />
      <PrePrimaryEntry />
      <JuniorSchoolEntry />
      <RegistrationJourney /> */}
      <AdmissionsOverview />
      <AdmissionEnquiry />
      <FooterContact />
    </div>
  );
}

export default Admissions;

import * as React from "react";
import AffilateBanner from "./AffilateBanner";
import EduTechForm from "./EduTechForm";

import Feature from "./Feature";
import WhoJoin from "./WhoJoin";
import WhyJoin from "./WhyJoin";
import FaqSection from "./FaqSection";

import B2BDashboard from "./B2BDashboard";
import Intrest from "./Intrest";
import Referral from "./Referral";
import Benefits from "./Benefits";

import WhyDiffrent from "./WhyDiffrent";
import Journey from "./Journey";

const Affilate = () => {
  return (
    <div>
      <AffilateBanner />
      <EduTechForm />
      <WhoJoin />
      <WhyJoin />
      <Feature />
      <Referral />
      <Benefits />
      <B2BDashboard />
      <Intrest />
      <WhyDiffrent />
      <Journey />
      <FaqSection />
    </div>
  );
};

export default Affilate;

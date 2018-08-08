import React from "react";

import { HomeTopbar } from "../components/Topbar";

// Sections
import { Banner } from "../sections/banner";
import { About } from "../sections/about";
import { History } from "../sections/history";
import { Anthem } from "../sections/anthem";
import { FAQ } from "../sections/faq";

const Home = ({ isDesktop }) => {
  return (
    <div>
      <HomeTopbar fixedTop={isDesktop} />
      <Banner/>
      <About/>
      <History/>
      <Anthem/>
      <FAQ/>
    </div>
  );
 };

export default Home;
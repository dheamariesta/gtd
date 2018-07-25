import React from "react";

import { HomeTopbar } from "../components/Topbar";

// Sections
import { Banner } from "../sections/banner";
import { About } from "../sections/about";
import { History } from "../sections/history";
import { Anthem } from "../sections/anthem";
import { Contact } from "../sections/contact";
import { FAQ } from "../sections/faq";

const Home = ({ isDesktop }) => {
  return (
    <div>
      <HomeTopbar isDesktop={isDesktop} />
      <Banner/>
      <About isDesktop={isDesktop}/>
      <History/>
      <Anthem/>
      <FAQ/>
      <Contact/>
    </div>
  );
 };

export default Home;
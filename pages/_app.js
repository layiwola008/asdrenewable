import React from "react";

import Layout from "../components/Layout";

//Global Styles
import "../styles/globals.css";

//HomePage Styles
import "../styles/topbar.css";
import "../styles/navbar.css";
import "../styles/slider.css";
import "../styles/whyus.css";
import "../styles/whysolar.css";
import "../styles/energyforms.css";
import "../styles/community.css";
import "../styles/footer.css";

//About Us Styles
import "../styles/about.css";

//Services Styles
import "../styles/services.css";

//Quote Page Styles
import "../styles/quote.css";

//Tabs Styles
import "../styles/tabs.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

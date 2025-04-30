import React, { useEffect, useState } from "react";
import './App.css'
import { HashRouter as Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { div } from "framer-motion/client";
import Footer from "./components/footer/Footer";
import Faqs from "./pages/Faqs";
import Alumni from "./pages/Alumni";
import TheRequirement from "./pages/TheRequirement";
import About from "./pages/About";
import FramerMotion from "./pages/FramerMotion";
import About2 from "./pages/About2";

const sections = ["about", "requirement", "alumni", "faqs"];

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.replace("/", ""); // Get section from URL
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToSection />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {sections.map((section) => (
          <Route key={section} path={`/${section}`} element={<MainPage />} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (section, index) => {
    setActiveTab(index)
    navigate(`/${section}`)
  }
  

  return (
    <div className='headerwrap'>
      <div className='headerinnerwrap1'>
        <img src="https://womenintech.moniepoint.com/static/media/Moniepoint-Logo-wit.9bda26bd8fbc81df465dab415e466a90.svg" alt="" />
      </div>
      <div className='headerinnerwrap2'>
        {sections.map((section, index) => (
          <p key={index} onClick={() => handleActiveTab(section, index)}
            style={{
              margin: "5px", border: activeTab === index ? "1px solid black" : "none",
              borderRadius: "40px",
              width: "max-content",
              height: "max-content",
              padding: "12px",
              cursor: "pointer"
            }}>
            {section.toUpperCase()}
          </p>
        ))}
      </div>
      <div className='headerinnerwrap3'>
        <h2><u>MONIEPOINT CAREERS</u></h2>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <FramerMotion>
      <div>
        <div id="about">
          <About />
          <About2 />
        </div>


        <div id="requirement" className="requirement">
          <div className="requirehold">
            <div className="requiretext">
              <h1>A day in the life of</h1>
              <div className="requiretextcenter">
                <h1>an intern</h1>
                <p>What you will be responsible for as a Women-in-Tech intern.</p>
              </div>
            </div>
          </div>
          <TheRequirement />
        </div>

        <div id="alumni" className="alumni"  >
          <div className="alumniborder">
            <div className="alumnitext">
              <h1>The WIT Internship</h1>
              <div className="alumnitextcenter">
                <h1>Alumni</h1>
                <p>Meet the previous Women In Tech interns, who are now working in full-time roles at Moniepoint.</p>
              </div>
            </div>
          </div>
          <Alumni />
        </div>

        <div id="faqs" className="faqsss">
          <div className="faqtext">
            <h1>FAQs</h1>
          </div>
          <div className="faquestions">
            <img src="https://womenintech.moniepoint.com/static/media/faq.06cb8902c49839fe00a2ab38770e7711.svg" alt="" className="faq-deco-left" />
            <Faqs />
            <img src="https://womenintech.moniepoint.com/static/media/faq.06cb8902c49839fe00a2ab38770e7711.svg" alt="" className="faq-deco-right" />
          </div>

          <div className="faqlittlesecret">
            <h1>Let’s let you in</h1>
            <div className="littlesecretcenter">
              <h1>on a little <br />secret:</h1>
              <div className="littlesecretsmalltext">
                <p>This website was designed and developed by two previous women-in-tech interns, <strong>Chioma & Tefe.</strong> If you’d love to build cool stuff like this, then you should definitely apply for the internship.</p>
              </div>

            </div>
            <button className="faqapply">APPLY NOW</button>
          </div>
        </div>

        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", bottom: "20px", right: "20px" }}>
          Scroll to Top
        </button>
      </div>
    </FramerMotion>
  );
};

export default App;
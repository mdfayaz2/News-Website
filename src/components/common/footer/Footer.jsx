import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/logo1.png' alt='DR News Logo' className="logo-image" />
            <p>DR News is the reporting of current events and issues of public interest. It plays a crucial role in informing society about local, national, and global happenings. </p>
            <i className='fa fa-envelope'></i>
            <span> hello@drnews.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +91 60521488</span>
          </div>
          <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <img src='../images/hero/hero1.png' alt='Emergency Movie news' />
              <p>Emergency Movie: కంగనా రనౌత్ కు బిగ్ రిలీఫ్..'ఎమర్జెన్సీ' రిలీజ్ కు గ్రీన్ సిగ్నల్.. కానీ ?</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero2.png' alt='OTT Movie news' />
              <p>OTT: ఓటీటీలోకి రూ.500 కోట్ల హర్రర్ మూవీ.. స్ట్రీమింగ్ డేట్ ఇదే</p>
            </div>
          </div>
          <div className='box'>
            <h3>CRICKET</h3>
            <div className='item'>
              <img src='../images/hero/hero3.png' alt='Vinayakan Arrest news' />
              <p>Actor Vinayakan: ఎయిర్ పోర్ట్ లో 'జైలర్' నటుడు వినాయకన్ అరెస్ట్.. ఏం జరిగిందంటే</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero4.png' alt='Viral Video news' />
              <p>Viral Video: రైలు వస్తుండగా ట్రాక్ పైకి ఆవు.. ఏం జరిగిందంటే..</p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          
        </div>
      </div>
    </>
  );
};

export default Footer;

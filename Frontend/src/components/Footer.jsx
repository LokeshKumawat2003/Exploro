import "../componentsStyle/footer.css";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="footer-outer-container">
        <div class="footer-container-one">
          <img
            class="footer-img"
            src="https://static.wixstatic.com/media/da937f_d083a478b4c54fc8abaeaa8dc8360b92~mv2.png/v1/fill/w_142,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/New%20Project%20(19).png"
            alt=""
          />
          <p class="footer-desc">
            We promise to make sure we only update you with the most important
            announcements
          </p>
        </div>
        <div class="footer-links-group-1">
          <p>About Us</p>
          <p>For Explorer</p>
          <p>For Influencer</p>
        </div>
        <div class="footer-links-group-2">
          <p>Blogs</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div class="footer-bg-container">
          <img
            class="footer-bg-img"
            src="https://static.wixstatic.com/media/da937f_aa358c2b10694543b70db66ecf5ef43f~mv2.png/v1/crop/x_0,y_185,w_6324,h_2733/fill/w_631,h_272,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Exploro%20Logic%20(18).png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

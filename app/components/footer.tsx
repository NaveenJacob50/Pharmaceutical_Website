import React from "react";
import FooterCard1 from "./footerCard1";
import FooterCard2 from "./footerCard2";
import FooterCard3 from "./footerCard3"; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#17414f" }} className="flex justify-center py-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 sm:px-0 lg:px-2 xl:px-0 px-2">
        {/* First row */}
        <FooterCard1/>
        <FooterCard2/>
        <FooterCard3/>

        {/* Second row */}
        <img src="footer_logo.png" alt="Elbrit Logo" className="lg:w-64 w-64 h-16 md:mt-4 lg:mt-0" />
        <p className="text-xs text-gray-200">
        Your health, physical and emotional well-being is important<br/> to us. We are always by your side and have made it
        even<br/> easier for you to find the necessary vitamins.
        </p>


        {/* Third row */}
        <p className="text-white text-xs col-span-full">Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
      </div>
    </footer>
  );
};

export default Footer;

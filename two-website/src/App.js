import React from "react";

import Navbar from "./Navbar.js"
import HeroSection from "./HeroSection.js";
import AppSection from "./AppSection.js";
import CardSection from "./CardSection.js";
import Footer from "./FooterSection.js";


const App=()=>{
    return(
        <div>
            <Navbar />
            <HeroSection />
            <AppSection />
            <CardSection />
            <Footer />
        </div>
        
    );
};

export default App;
import React from "react";
import Lango from "./Lango";
import Footer from "./Footer/Footer";
import Translate from "./Translate/translatepg";
import About from "./About page/About";
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/homepage"

const App=()=>{
    return (
    <main>
    <Navbar/>
    <Homepage/>
    <Lango/>
    <Translate/>
    <About/>
    <Footer/>
    </main>
    )
}

export default App;

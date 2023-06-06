import React from "react";
import Lango from "./lango/Lango";
import Footer from "./Footer/Footer";
import About from "./About page/About";
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/homepage"

const App=()=>{
    return (
    <main>
    <Navbar/>
    <Homepage/>
    <Lango/>
    <About/>
    <Footer/>
    </main>
    )
}

export default App;

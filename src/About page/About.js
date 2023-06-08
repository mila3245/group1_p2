import React from "react";
import "./About.css";

function About() {
    return (
        <section className="hero is-large is-info has-background-white">
  <div className="hero-body">
    <p className="title1">
      An Awesome Learning Journey with DIALEARN
    </p>

    <p className="subtitle1">
        Learning a new language, or traveling with minimal knowledge of the local language, can be a challenge. 
        But with the right resources, you can transform that challenge into an adventure!
       <br/>
       <br/>
        Learning new language or dialect has never been faster.
        This app provide you with full control of the pace at which you learn and produces high-quality translations on time. 
        
    </p>

    <div className="aboutpic">
       <img src="/images/nyc.png" alt= "nyc-sunset"/>
       </div>

       <div className="aboutpic2">
       <img src="/images/geotag.png" alt= "find-me"/>
       </div>


       <div className="aboutpic3">
       <img src="/images/dot.png" alt= "pink-dot"/>
       </div>

       <div className="aboutpic4">
       <img src="/images/dot.png" alt= "pink-dotx2"/>
       </div>

  </div>
</section>

    )
}

export default About;
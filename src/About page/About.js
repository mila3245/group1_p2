import React from "react";
import "./About.css";

function About() {
    return (
        <section className="hero is-large is-info">
  <div className="hero-body">
    <p className="title">
      An Awesome Learning Journey with DIALEARN
    </p>

    <p className="subtitle">
        Learning a new language, or traveling with minimal knowledge of the local language, can be a challenge. 
        But with the right resources, you can transform that challenge into an adventure.
       <br/>
       <br/>
        Learning new language or dialect has never been faster.
        This app provide you with full control of the pace at which you learn and produces high-quality translations on time. 
        
    </p>

    <div className="aboutpic">
       <img src="/images/globe.png" alt= "friends-talking"/>
       </div>

  </div>
</section>

    )
}

export default About;
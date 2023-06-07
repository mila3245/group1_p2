import "./Home.css"
import "bulma/css/bulma.min.css"


function Homepage ()
{
return (
<section id="home">
  <div className="container">

  <div className="pic1">
       <img src="/images/friends.png" alt= "friends-talking"/>
       </div>

       <div className="pic2">
       <img src="/images/guyhi.png" alt= "guy-hi"/>
       </div>

       <div className="pic3">
       <img src="/images/study.png" alt= "girl-laptop"/>
       </div>

       <div className="pic4">
       <img src="/images/speechbub.png" alt= "speech-bubble"/>
       
       <div id="parent">
       <h2>Konnichiwa </h2>
  <h2>こんにちは</h2>

  </div>
   
<div className="home-tag">
  <h1>Learning a language the fun way</h1>
  <h2>and getting connected on the go!</h2>
</div>

  <div className="button-element">

<a href="#" className="button button-1">Get Started</a>
</div>

<div className="button-element2">

<a href="#" className="button button-2">login</a>
</div>
       </div>

    </div>

 </section>
 )}

 export default Homepage;
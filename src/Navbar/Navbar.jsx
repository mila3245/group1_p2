import "./Navbar.css"
import "bulma/css/bulma.min.css"


function Navbar ()
{
return (

<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
   

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item1">
        DIALEARN
      </a>
      </div>
      
    <div className="navbar-end">
      <div className="navbar-item">
       
      <a className="navbar-item2">
        About
      </a>
      <a className="navbar-item2">
        Translate
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-item2">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item3">
            Tutoring
          </a>
          <a className="navbar-item3">
            Connect with Dialearners
          </a>
          <a className="navbar-item3">
            Contact
          </a>
        </div>
      </div>
      </div>
    </div>
  </div>
</nav>

)}

export default Navbar;


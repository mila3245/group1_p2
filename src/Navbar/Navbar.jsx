import "./Navbar.css"
import "bulma/css/bulma.min.css"

function Navbar ()
{
return (

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
   

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item1">
        DIALEARN
      </a>
      </div>
      
    <div class="navbar-end">
      <div class="navbar-item">
       
      <a class="navbar-item2">
        About
      </a>
      <a class="navbar-item2">
        Translate
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-item2">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item3">
            Tutoring
          </a>
          <a class="navbar-item3">
            Connect with Dialearners
          </a>
          <a class="navbar-item3">
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


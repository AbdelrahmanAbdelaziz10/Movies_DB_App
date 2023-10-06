import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';



function NavBar() {

  return (
    <Navbar expand="lg" className="nav-style">
      <Nav.Link className='fs-5 font' href="/">
      <img className="logo ms-5" to={'/'} src={logo} alt="dfs" />

      </Nav.Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            navbarScroll
          >
            <Link className='fs-5 font bef me-4' to="/Movies_DB_App">Home</Link>
            <Link className='fs-5 font bef me-4' to="/movies">Movies</Link>
            <Link className='fs-5 font bef me-4' to="/contact">Contact Us</Link>


          </Nav>

        </Navbar.Collapse>
        </Navbar>

  );
}

export default NavBar;
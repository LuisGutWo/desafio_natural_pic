import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav
      className="navbar bg-dark fs-5"
      
    >
      <div>
      <img
            src="src/assets/img/pokebola.png"
            width="30"
            height="36"
            className="d-inline-block align-text-top"
            alt=""
          />
      </div>
      <div className="d-flex gap-2">
        <NavLink to="/home" className={({ isActive }) => (isActive ? "active-class" : "inactive-class")}> Home </NavLink>
        
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-class" : "inactive-class")}> Pokemones </NavLink>
      </div>
    </Nav>
  );
}

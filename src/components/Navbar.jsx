import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav
      className="navbar bg-dark fs-5"
      style={{ justifyContent: "center", gap: 8 }}
    >
      <NavLink to="/"> Home </NavLink> |
      <NavLink to="/favoritos"> Favoritos </NavLink>
    </Nav>
  );
}

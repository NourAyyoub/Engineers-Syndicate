import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandLogo from "./BrandLogo";
import NavigationLinks from "./NavigationLinks";

export default function Navigationbar() {
  return (
    <Navbar expand="lg" className="navbar-light bg-light container-fluid">
      <NavigationLinks />
      <BrandLogo />
    </Navbar>
  );
}

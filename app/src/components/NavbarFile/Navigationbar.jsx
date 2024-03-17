import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandLogo from "./BrandLogo";
// import NavigationLinks from "./NavigationLinks";

export default function Navigationbar() {
  return (
    <Navbar
      bg="secondary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      {/* <NavigationLinks /> */}
      <BrandLogo />
    </Navbar>
  );
}

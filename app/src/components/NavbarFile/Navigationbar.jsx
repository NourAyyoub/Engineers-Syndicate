import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandLogo from "./BrandLogo";
import NavigationLinks from "./NavigationLinks";

export default function Navigationbar() {
  return (
    <Navbar
      style={{ background: "rgb(141, 173, 198)" }}
      sticky="top"
      expand="sm"
      dir="rtl"
      className="rounded-bottom"
      collapseOnSelect
    >
      <BrandLogo />
      <NavigationLinks />
    </Navbar>
  );
}

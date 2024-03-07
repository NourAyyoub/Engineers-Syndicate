import { Nav, Navbar } from "react-bootstrap";
import MainNavLink from "./MainNavLink";
import ProfileDropdown from "./ProfileDropdown";
const links = [
  {
    linkLabel: "إحصائيات",
    linkHref: "#",
  },
  {
    linkLabel: "رئيسية",
    linkHref: "#",
  },
];
export default function NavigationLinks() {
  return (
    <>
      <Navbar.Toggle
        aria-controls="navbarNavDropdown"
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-label="Toggle navigation"
      ></Navbar.Toggle>
      <Navbar.Collapse id="navbarNavDropdown" className="ms-auto">
        <Nav className="navbar-nav">
          {links.map((ele, i) => (
            <MainNavLink href={ele.linkHref} label={ele.linkLabel} key={i} />
          ))}
          <ProfileDropdown />
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

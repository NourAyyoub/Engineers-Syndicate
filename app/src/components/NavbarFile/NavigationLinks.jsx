import { Nav, Navbar } from "react-bootstrap";
import MainNavLink from "./MainNavLink";
import ProfileDropdown from "./ProfileDropdown";
const links = [
  {
    linkLabel: "رئيسية",
    linkHref: "#",
  },
  {
    linkLabel: "إحصائيات",
    linkHref: "#",
  },
];
export default function NavigationLinks() {
  return (
    <>
      <Navbar.Toggle className="coloring"></Navbar.Toggle>
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav>
          {links.map((ele, i) => (
            <MainNavLink href={ele.linkHref} label={ele.linkLabel} key={i} />
          ))}
          <ProfileDropdown />
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

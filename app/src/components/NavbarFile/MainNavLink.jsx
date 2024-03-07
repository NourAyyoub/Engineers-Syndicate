import { Nav } from "react-bootstrap";
import PropTypes from "prop-types";

MainNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default function MainNavLink({ href, label }) {
  return (
    <Nav.Link href={href} className="nav-link">
      {label}
    </Nav.Link>
  );
}

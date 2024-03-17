import { NavDropdown } from "react-bootstrap";
const items = [
  {
    itemLabel: "الملف الشخصي",
    itemHref: "#",
  },
  {
    itemLabel: "اخر",
    itemHref: "#",
  },
];
export default function ProfileDropdown() {
  return (
    <NavDropdown title="حسابي" id="navbarDropdownMenuLink">
      {items.map((ele, i) => (
        <NavDropdown.Item
          href={ele.itemHrefHref}
          className="dropdown-item "
          key={i}
        >
          {ele.itemLabel}
        </NavDropdown.Item>
      ))}

      <NavDropdown.Item href="#" className="dropdown-item text-danger">
        تسجيل الخروج
      </NavDropdown.Item>
    </NavDropdown>
  );
}

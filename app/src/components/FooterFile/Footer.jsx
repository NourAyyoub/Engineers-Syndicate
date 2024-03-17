export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#8dadc6" }} className="py-5 mt-5">
      <div className="container text-light text-center">
        <p className="display-5 mb-3"> Engineers Syndicate - Nablus</p>
        <small className="text-white-50">
          &copy; {year} All rights reserved.
        </small>
      </div>
    </footer>
  );
}

import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{ background: "#8dadc6" }}
      className=" text-light py-3 fixed-bottom"
    >
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <p>
              &copy; {year} Engineers Syndicate - Nablus. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

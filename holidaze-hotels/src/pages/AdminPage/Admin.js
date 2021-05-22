import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Admin() {
    return (
      <>
        <title>Admin Dashboard</title>
        <div className="admin-header p-3 mb-5 text-center">
          <h5 className="mb-0 admin-h1-font">Welcome to the admin dashboard</h5>
        </div>
        <Container>
          <Row className="mt-5 shadow-lg rounded-borders row-images mb-5">
            <Col xs={12} sm={12} md={12} lg={6} xl={6} className="p-0">
              <Link className="admin-link" to="/inquiries">
                <div className="admin-inquiries">
                  <h1 className="admin-h1-font">INQUIRIES</h1>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} className="p-0">
              <Link className="admin-link" to="/messages">
                <div className="admin-messages">
                  <h1 className="admin-h1-font">MESSAGES</h1>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    );
};
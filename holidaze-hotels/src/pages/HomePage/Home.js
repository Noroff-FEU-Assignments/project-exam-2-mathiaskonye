import { Container, Row, Col } from "react-bootstrap";
import Illustration from "../../img/travelers_homepage.svg";
import { Link } from "react-router-dom";
import Searchbar from "../../components/Searchbar";

export default function Home() {
  return (
    <>
      <title>Holidaze</title>
      <Container>
        <Row className="mt-5 mb-5">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className="p-3 align-self-center"
          >
            <h2>Start your adventure today with holidaze</h2>
            <p>We provide you with the best hotels avaible for you</p>
            <Link to="/hotels">
              <button href="/hotels" className="btn btn-primary mt-4 mb-1 w-25">
                Explore
              </button>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} className="p-3 mt-5">
            <img
              className="homepage-illustration img-fluid"
              src={Illustration}
              alt="homepage illustration"
            ></img>
          </Col>
        </Row>

        <div className="container-searchfield py-5 mb-5">
          <h4 className="text-center color-white mt-5 px-2 header-three-easy-steps">
            WHERE WOULD YOU LIKE TO TRAVEL?
          </h4>
          <hr className="mb-5"></hr>
          <Searchbar />
        </div>

        <h3 className="text-center mt-5 header-three-easy-steps">
          <span className="color-primary">THREE.</span> <span>EASY.</span>{" "}
          <span className="color-primary">STEPS.</span>
        </h3>
        <div className="container-info row bg-color-white mb-5 mt-5  ml-0 mr-0 d-flex justify-content-center">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 d-flex justify-content-center mt-3">
            <div className="container-content text-center">
              <i className="color-primary mb-2 home-i fas fa-search-location"></i>
              <h6 className="p-3 mb-4">Find Hotel</h6>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 d-flex justify-content-center mt-3">
            <div className="container-content text-center">
              <i className="color-primary mb-2 home-i fa fa-hotel"></i>
              <h6 className="p-3 mb-4">Book Hotel</h6>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 d-flex justify-content-center mt-3">
            <div className="container-content text-center">
              <i className="color-primary mb-2 home-i fas fa-plane-departure"></i>
              <h6 className="p-3 mb-4">Travel</h6>
            </div>
          </div>
        </div>

        <div className="about-container mt-5 mb-5">
          <h3 className="mb-4">About Holidaze</h3>
          <p>
            Holidaze wants to help you to find the best hotels all over the
            world. Whereever your next destination is, Holidaze is there for
            you. We provide you with the most fitting hotel just for you, your
            friend and family. We always keep watching the prices so that you
            don`t have to search through a million different websites just to
            find the best price for the hotel you`re looking for. <br></br>
            <br></br> Booking a hotel has never been easier and safe. Take a
            look at the hotels we provide for you at the Hotels page. We will do
            everything for your satisfaction, so ask us if you have any
            questions.
          </p>
        </div>
      </Container>
    </>
  );
}

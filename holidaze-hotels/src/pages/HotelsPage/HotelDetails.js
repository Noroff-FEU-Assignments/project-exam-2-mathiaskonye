import { useState, useEffect } from "react";
import { Container, Col, Row, Breadcrumb } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { APIURL, HOTELSURL } from "../../constants/api";
import InqModal from "../../components/Modal";
import LoadingGif from "../../img/loading.gif";
import SimpleMap from "../../components/Map";

export default function HotelDetail() {
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const ID_URL = APIURL + HOTELSURL + "/" + id;

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(ID_URL);
        setHotel(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [ID_URL]);

  if (loading) {
    return (
      <div className="loading-container">
        <img className="loading" src={LoadingGif} alt="loading" />
      </div>
    );
  }

  if (error) {
    return <h1 className="text-center text-danger">Error.</h1>;
  }

  return (
    <>
    <title>{hotel.name}</title>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/hotels">Hotels</Breadcrumb.Item>
          <Breadcrumb.Item active>{hotel.name}</Breadcrumb.Item>
        </Breadcrumb>

        <Row className="mt-5 mb-5">
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <img
              className="rounded border img-fluid w-100 h-100"
              style={{ height: "auto", width: "100%" }}
              src={hotel.image}
              alt={hotel.image}
            ></img>
          </Col>
          <Col className="mt-1" xs={12} sm={12} md={6} lg={6} xl={6}>
            <h3>{hotel.name} </h3>
            <h6>{hotel.destination}</h6>
            <p>{hotel.description} </p>
            <p>
              <i className="fas fa-star"></i> {hotel.stars} star hotel
            </p>
            <p>Price:</p> <h4>{hotel.price}$ / night</h4>
            <InqModal />
          </Col>
        </Row>
        <SimpleMap/>
      </Container>
    </>
  );
}

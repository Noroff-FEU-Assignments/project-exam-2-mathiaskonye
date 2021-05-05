import { Container, Row , Carousel} from "react-bootstrap";
import { useState, useEffect } from "react";
import { APIURL, HOTELSURL } from "../../constants/api";
import axios from "axios";
import Output from "./RenderHotels";
import LoadingGif from "../../img/loading.gif";



export default function Hotels() {

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(
      () => {
          async function getData() {
              try {
              const response = await axios.get(`${APIURL}${HOTELSURL}`);
              console.log(response);
              setHotels(response.data);
              } catch (error) {
                  setError(error);
                  console.log(error);
              } finally {
                  setLoading(false);
              }
          }
          getData();
      },
      []
    );

    if (loading) return <div className="loading-container"><img className="loading" src={LoadingGif} alt="loading" /></div>;

    if (error) return <h1 className="text-center mt-5 mb-5 text-danger">There is an error.</h1>;

    return (
      <Container>
        <Carousel fade>
          <Carousel.Item interval={9000}>
            <img
              className="d-block w-100 h-100 img-fluid carousel-hotels-img"
              src="https://i.postimg.cc/Ssv4TD3X/hotel-mamela-italy.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="hero-background-dark p-3">
                <h3>Begin your adventure today</h3>
                <p>
                  <i className="fas fa-globe-africa"></i> holidaze
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={9000}>
            <img
              className="d-block w-100 h-100 img-fluid carousel-hotels-img"
              src="https://i.postimg.cc/jSHsx6w9/hotel-abbazia-italy.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="hero-background-dark p-3">
                <h3>Always the best hotels at holidaze</h3>
                <p>
                  <i className="fas fa-globe-africa"></i> holidaze
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h3 className="mt-5 mb-5">Explore our hand-picked hotels</h3>
        <Row>
          {hotels.map(function (hotel) {
            let {
              id,
              image,
              name,
              description,
              price,
              stars,
              destination,
            } = hotel;
            return (
              <Output
                key={id}
                id={id}
                image={image}
                name={name}
                description={description}
                price={price}
                stars={stars}
                destination={destination}
              />
            );
          })}
        </Row>
      </Container>
    );
}
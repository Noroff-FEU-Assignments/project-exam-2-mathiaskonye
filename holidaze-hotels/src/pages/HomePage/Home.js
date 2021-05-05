
import { Container, Carousel } from "react-bootstrap";

export default function Home() {
    return (
    <>
    <Container>
    <Carousel slide={false} fade={true}>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://images.unsplash.com/photo-1549747905-1014b1519df8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://images.unsplash.com/photo-1549747905-1014b1519df8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://images.unsplash.com/photo-1549747905-1014b1519df8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>

    </>
    );
};
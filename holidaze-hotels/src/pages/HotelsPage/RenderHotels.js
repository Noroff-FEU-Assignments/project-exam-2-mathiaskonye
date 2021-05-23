import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Output({ id, image, name, price, stars, destination }) {
  return (
    <>
    <Col xs={12} sm={12} md={6} lg={6} xl={4} className="mt-2 mb-5 d-flex justify-content-center">
        <Link to={`detail/${id}`}>
    <Card className="rounded-lg" style={{ width: '100%' }}>
      <Card.Img src={image}/>
      <Card.Body>
      <p><i className="fas fa-star"></i> {stars} star hotel</p>
        <Card.Title>{name}</Card.Title>
        <p className="color-black">{destination}</p>
        <Card.Text><p className="font-weight-bold">{price}$ / Night</p></Card.Text>   
        <button className="btn btn-primary mt-2 mb-1">View</button>  
     </Card.Body>
    </Card>
      </Link>
    </Col>
    </>
  );
}
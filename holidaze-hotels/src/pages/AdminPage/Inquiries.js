import { useState, useEffect } from "react";
import { APIURL, INQURL } from "../../constants/api";
import axios from "axios";
import { Card, Breadcrumb, Container } from "react-bootstrap";
import LoadingGif from "../../img/loading.gif";
import Heading from "../../components/Heading.js";

function InqList() {
	const [inquiries, setInquiries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

    useEffect(
        () => {
            async function getData() {
                try {
                const response = await axios.get(`${APIURL}${INQURL}`);
                console.log(response);
                setInquiries(response.data);
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

	if (error) {
		return <div>ERROR: An error occured</div>;
	}

	return (
    <>
      <title>Inquiries</title>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/admin">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>Inquiries</Breadcrumb.Item>
        </Breadcrumb>
        <Heading title="Inquiries" />
      </Container>
      {inquiries.map(function (result) {
        return (
          <Container>
            <div
              className="col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-items-center"
              key={result.id}
            >
              <Card className="mt-5 mb-5 shadow-lg" style={{ width: "100%" }}>
                <Card.Body className="cardbody-bg-image">
                  <Card.Title className="p-2 bg-black color-white text-center rounded">
                    <i className="color-white fas fa-suitcase-rolling"></i>{" "}
                    {result.hotel_name}
                  </Card.Title>
                  <Card.Title className="color-white">
                    {result.email}
                  </Card.Title>
                  <Card.Text className="color-white">
                    <i className="far fa-calendar-alt"></i> Check-in:{" "}
                    {result.date_from}
                  </Card.Text>
                  <Card.Text className="color-white">
                    <i className="far fa-calendar-alt"></i> Check-out: {result.date_to}
                  </Card.Text>
                  <Card.Text className="color-white">
                    <i className="fas fa-user"></i> Guests: {result.guests}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Container>
        );
      })}
    </>
  );
}

export default InqList;
import { useState, useEffect } from "react";
import { APIURL, MESSAGESURL } from "../../constants/api";
import axios from "axios";
import { Card, Breadcrumb, Container } from "react-bootstrap";
import LoadingGif from "../../img/loading.gif";
import Heading from "../../components/Heading.js";

function MessageList() {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

    useEffect(
        () => {
            async function getData() {
                try {
                const response = await axios.get(`${APIURL}${MESSAGESURL}`);
                console.log(response);
                setMessages(response.data);
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
        <title>Messages</title>
        <Container>
        <Breadcrumb>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="/admin">Dashboard</Breadcrumb.Item>
                  <Breadcrumb.Item active>Messages</Breadcrumb.Item>
        </Breadcrumb>

        <Heading title="Messages" />
          {messages.map(function (result) {
            return (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-items-center" key={result.id}>
                <Card className="mt-5 shadow-lg" style={{ width: "100%" }}>
                  <Card.Body className="cardbody-bg-image">
                    <Card.Title className="p-2 bg-black color-white text-center rounded"> <i className="fas fa-inbox"></i> {result.title}</Card.Title>
                    <Card.Title className="color-white"> {result.email}</Card.Title>
                    <Card.Text className="color-white"><i className="far fa-envelope"></i> {result.message}</Card.Text>
                    <Card.Text className="color-white"><i className="fas fa-user"></i> {result.firstname} {result.lastname}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
          <div className="white-space mt-5"></div>
          </Container>
        </>
      );
}

export default MessageList;
import { useState, useEffect } from "react";
import { APIURL, MESSAGESURL } from "../../constants/api";
import axios from "axios";
import { Card, Breadcrumb } from "react-bootstrap";
import LoadingGif from "../../img/loading.gif";

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
          {messages.map(function (result) {
            return (
              <div className="col-sm" key="message-list">
                <Breadcrumb>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="/admin">Dashboard</Breadcrumb.Item>
                  <Breadcrumb.Item active>Messages</Breadcrumb.Item>
                </Breadcrumb>
                <Card className="mt-5" border="dark" style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{result.title}</Card.Title>
                    <Card.Text>{result.message}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </>
      );
}

export default MessageList;
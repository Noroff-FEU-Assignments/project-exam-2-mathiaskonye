import { useState, useEffect } from "react";
import { APIURL, INQURL } from "../../constants/api";
import axios from "axios";
import { Card, Breadcrumb } from "react-bootstrap";
import LoadingGif from "../../img/loading.gif";

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
          {inquiries.map(function (result) {
            return (
              <div className="col-sm" key="message-list">
                  <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/admin">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>Inquiries</Breadcrumb.Item>
        </Breadcrumb>
                <Card className="mt-5" border="dark" style={{ width: '18rem' }}>
                   <Card.Body>
                     <Card.Title>{result.email}</Card.Title>
                     <Card.Text>{result.hotel_name}</Card.Text>
                     <Card.Text>Guests: {result.guests}</Card.Text>
                     <Card.Text>Check-in: {result.date_from}</Card.Text>
                     <Card.Text>Check-out: {result.date_to}</Card.Text>    
                   </Card.Body>
               </Card>
              </div>
            );
          })}
        </>
      );
}

export default InqList;
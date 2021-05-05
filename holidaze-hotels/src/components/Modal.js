import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from 'react';
import { APIURL, INQURL} from "../constants/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export default function InqModal() {


    const [ date_to, setDateTo ] = useState('')
    const [ date_from, setDateFrom ] = useState('')
    const [ hotel_name, setHotelName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ guests, setGuests ] = useState('')
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    const schema = yup.object().shape({
        hotel_name: yup.string().required("Please enter the name of the hotel.").min(3, "Enter the name of hotel"),
        guests: yup.number().required("Please enter number of guests.").min(1, "Minimum 1 guest."),
        date_to: yup.number().required("Please choose a date.").min(6, "Choose a date"),
        date_from: yup.number().required("Please choose a date.").min(6, "Choose a date"),
        email: yup.string().required("Please enter a valid email address.").matches(/\S+@\S+.\S+/, "Your email is not valid."),
    });


    const URL = APIURL + INQURL;

    const json = JSON.stringify({ hotel_name, guests, email, date_to, date_from });

    const options = {
        method: "POST",
        body: json,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE5OTY2Mjk3LCJleHAiOjE2MjI1NTgyOTd9.aH42FmMfifIEvUfHJ5OUYUBB4gwvr7YryNIw2mSrQ5o`,
        },
      }


    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });


    function onSubmit(event) {
        setSubmitted(true);
        
     (async function createMessage() {

     try {
         const response = await fetch(URL, options);
         const json = await response.json();
     
         console.log(json);
     
         if (json.updated_at) {
           console.log("message sent.");
         }
         if (json.error) {
           console.log("error.");
       }
       } catch(error) {
         console.log(error);
     
       }
    })();
 }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Book Now
        </Button>
  
        <Modal size="md" show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title><h4 className="primary">Book Hotel</h4></Modal.Title>
          </Modal.Header>
          <Modal.Body>


          {submitted && <h3 className="text-center text-success">Your message is sent.</h3>}
          <Form className="border rounded-3 p-4" onSubmit={handleSubmit(onSubmit)}>

          
        <h6>Hotel: </h6>
        <input className="form-control" {...register('hotel_name')} name="hotel_name" value={hotel_name}  placeholder="Hotel..." onChange={(e) => setHotelName(e.target.value)} />
        <p className="text-danger">{errors.hotel_name?.message}</p>

        
        <h6>Guests: </h6>
        <input className="form-control" {...register('guests')} type="number" min="1" name="guests" value={guests}  placeholder="How many guests?" onChange={(e) => setGuests(e.target.value)} />
        <p className="text-danger">{errors.guests?.message}</p>

         
        <h6>Check in: </h6>
        <input className="form-control" {...register('date_from')} type="date" name="date_from" value={date_from}  placeholder="Date From..." onChange={(e) => setDateFrom(e.target.value)} />
        <p className="text-danger">{errors.date_from?.message}</p>

         
        <h6>Check out: </h6>
        <input className="form-control" {...register('date_to')} type="date" name="date_to" value={date_to}  placeholder="Date To..." onChange={(e) => setDateTo(e.target.value)} />
        <p className="text-danger">{errors.date_to?.message}</p>

         
        <h6>Email: </h6>
        <input className="form-control" {...register('email')} name="email" type="email" value={email} placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
        <p className="text-danger">{errors.email?.message}</p>

         <button type="submit" className="btn btn-primary w-100">Submit</button>
         <p className="text-muted">* By submitting you agree to Holdaze policies.</p>
         </Form>



          </Modal.Body>
          <Modal.Footer>
          
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
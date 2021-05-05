import { Container, Form, Row, Col } from "react-bootstrap";
import "./contact.css";
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { APIURL, MESSAGESURL} from "../../constants/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";




export default function ContactForm() {

    const [ firstname, setFirstname ] = useState('')
    const [ lastname, setLastname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ title, setTitle ] = useState('')
    const [submitted, setSubmitted] = useState(false);

    const schema = yup.object().shape({
        title: yup.string().required("Please enter your first name. Minimum 3 characters.").min(3, "Minimum 3 characters."),
        firstName: yup.string().required("Please enter your first name. Minimum 3 characters.").min(3, "Minimum 3 characters."),
        lastName: yup.string().required("Please enter your last name. Minimum 4 characters.").min(4, "Minimum 4 characters."),
        email: yup.string().required("Please enter a valid email address.").matches(/\S+@\S+.\S+/, "Your email is not valid."),
        message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
      });



    const URL = APIURL + MESSAGESURL;

    const json = JSON.stringify({ title, firstname, lastname, email, message });


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

      

    return (
        <>
      <Container>
      {submitted && <h3 className="text-center text-success">Your message is sent.</h3>}
      <Row className="mt-5 shadow-lg rounded-borders row-images mb-5">
      <Col xs={12} sm={12} md={12} lg={6} xl={6} className="p-0">
      <Form className="border rounded-3 p-5" onSubmit={handleSubmit(onSubmit)}>
         <h3 className="text-center text-primary">Contact</h3>
         <p>{errors.title?.message}</p>
        <h6>Title: </h6>
        <input className="form-control" {...register('title')} name="title" value={title} placeholder="Subject..." onChange={(e) => setTitle(e.target.value)} />

         <p>{errors.firstName?.message}</p>
        <h6>Firstname: </h6>
        <input className="form-control" {...register('firstName')} name="firstName" value={firstname}  placeholder="Enter your name..." onChange={(e) => setFirstname(e.target.value)} />
   
         <p>{errors.lastName?.message}</p>
        <h6>Lastname: </h6>
        <input className="form-control" {...register('lastName')} name="lastName" value={lastname}  placeholder="Enter your last name..." onChange={(e) => setLastname(e.target.value)} />
  
         <p>{errors.email?.message}</p>
        <h6>Email: </h6>
        <input className="form-control" {...register('email')} name="email" value={email} placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
   
         <p>{errors.message?.message}</p>
         <h6>Message: </h6>
         <textarea className="form-control" {...register('message')} name="message" value={message} placeholder="Whats on your mind?..." onChange={(e) => setMessage(e.target.value)}></textarea>
         <br></br>
        <button className="btn btn-primary mt-4 w-100">Send</button>
      </Form>
      </Col>
      <Col xs={12} sm={12} md={12} lg={6} xl={6} className="p-0">
          <div className="contact-image">
              <h3 className="p-3">We go to great lengths to make you happy</h3>
          </div>
      </Col>
      </Row>
      </Container>
      </>
    );
  }
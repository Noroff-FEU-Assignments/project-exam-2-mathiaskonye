import React from 'react'
import { Form, Col } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import {APIURL, HOTELSURL} from "../constants/api";
import { Link } from "react-router-dom";

export default function Searchbar() {

    const URL = APIURL + HOTELSURL;

    const [place, setPlaces] = useState([]);
    const [text, setText] = useState("");
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        const getPlaces = async()=>{
            const response = await axios.get(URL);
            setPlaces(response.data)
        }
        getPlaces();
     
    }, [URL])

    const handleChange = (text) =>{

        let matches = [];

        if (text.length>0) {
           matches = place.filter(place=>{
               const regex = new RegExp(`${text}`,"gi");
               return place.destination.match(regex);
           })
        }
        setText(text)
        setFiltered(matches)
    }



    return (
        <div className="searchbar-container d-flex justify-content-center">
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Form.Control type="text" placeholder="Country, City...." onChange={e=>handleChange(e.target.value)} value={text} />
            {filtered && filtered.map((option)=>
            <div className="border mt-0 mb-0 mx-2 p-2 bg-white" key={option.id}>
            <Link to={`detail/${option.id}`}>
            <p className="mb-0">{option.destination}</p>
            <p className="mb-0 text-muted">{option.name}</p>
            </Link>
            </div>
            )}
        </Col>
        </div>
    )
}

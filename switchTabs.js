import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fish_fry from './images/fish fry.jpg'
import fish_finger from './images/fish finger.jpg'
import chicken65 from './images/chicken 65.jpg'
import lollipop from './images/lollipop.jpg'
import prawn65 from './images/prawn-65.jpg'
import tandoori from './images/tandoori.jpg'
import grill from './images/grill.avif'
import cfRice from './images/chicken fried rice.jpg'
import efRice from './images/egg fried rice.jpg'
import pfRice from './images/prawn rice.jpg'
import vb from './images/veg briyani.jpg'
import cb from './images/chicken briyani.jpg'
import mb from './images/mutton briyani.jpg'
import aloo from './images/aloo curry.jpg'
import paneer from './images/panner butter masala.jpg'
import cCurry from './images/chicken gravy.jpg'
import mCurry from './images/mutton gravy.jpg'
import roti from './images/roti.jpg'
import aParatha from './images/aloo paratha.jpg'
import pNaan from './images/plain naan.jpg'
import gNaan from './images/garlic naan.jpg'
import parotta from './images/parotta.jpg'
import pN from './images/prawn noodles.jpg'
import cN from './images/chicken noodles.jpg'
import kebab from './images/kebab.jpg'
export default function TabSwitch(){
 
  const data = [
    {
      id : 1,
      name:"Fish Fry",
      category: "starters",
      pic:fish_fry,
      price : 250
    },
    {
      id : 2,
      name:"Fish Finger",
      category: "starters",
      pic:fish_finger,
      price : 250
    },
    {
      id : 3,
      name:"Chicken 65",
      category: "starters",
      pic:chicken65,
      price : 140
    },
    {
      id : 4,
      name:"Lollipop",
      category: "starters",
      pic:lollipop,
      price : 140
    },
    {
      id : 5,
      name:"Prawn 65",
      category: "starters",
      pic:prawn65,
      price : 260
    },
    {
      id : 6,
      name:"Chicken Kebab",
      category: "starters",
      pic:kebab,
      price : 200
    },
    {
      id : 7,
      name:"Tandoori",
      category: "Full Chicken",
      pic:tandoori,
      price : 400
    },
    {
      id : 8,
      name:"Grilled Chicken",
      category: "Full Chicken",
      pic:grill,
      price : 480
    },
    {
      id : 9,
      name:"Egg Fried Rice",
      category: "fried rice",
      pic:efRice,
      price : 130
    },
    {
      id : 10,
      name:"Chicken Fried Rice",
      category: "fried rice",
      pic:cfRice,
      price : 170
    },
    {
      id : 11,
      name:"Prawn Fried Rice",
      category: "fried rice",
      pic:pfRice,
      price : 200
    },
       {
      id : 12,
      name:"Chicken Briyani",
      category: "briyani",
      pic:cb,
      price : 200
    },
    {
      id : 13,
      name:"Mutton Briyani",
      category: "briyani",
      pic:mb,
      price : 300
    },
    {
      id : 14,
      name:"Veg Briyani",
      category: "briyani",
      pic:vb,
      price : 150
    },
    {
      id : 15,
      name:"Aloo Curry",
      category: "gravy",
      pic:aloo,
      price : 150
    },
    {
      id : 16,
      name:"Chicken Gravy",
      category: "gravy",
      pic:cCurry,
      price : 200
    },
    {
      id : 17,
      name:"Mutton Gravy",
      category: "gravy",
      pic:mCurry,
      price : 290
    },
    {
      id : 18,
      name:"Butter Paneer",
      category: "gravy",
      pic:paneer,
      price : 180
    },
    {
      id : 19,
      name:"Aloo Paratha",
      category: "roti",
      pic:aParatha,
      price : 100
    },
    {
      id : 20,
      name:"Roti",
      category: "roti",
      pic:roti,
      price : 10
    },    
    {
      id : 21,
      name:"Plain Naan",
      category: "roti",
      pic:pNaan,
      price : 25
    },
    {
      id : 22,
      name:"Garlic Naan",
      category: "roti",
      pic:gNaan,
      price : 40
    },
    {
      id : 23,
      name:"Parotta",
      category: "roti",
      pic:parotta,
      price : 30
    },
    {
      id : 24,
      name:"Prawn Noodles",
      category: "noodles",
      pic:pN,
      price : 180
    },
    {
      id : 25,
      name:"Chicken Noodle",
      category: "noodles",
      pic:cN,
      price : 140
    },
  ]
  const [allDish,setAllDish]=useState(data)
    function HandleClick(abc){
            console.log(abc)
            if(abc!=""){
              const filteredData = data.filter(item => item.category === abc);
              console.log(filteredData);
              setAllDish(filteredData);
            } else {
              setAllDish(data);
            }
           
  };

  console.log(allDish,"data");
    return(
        <Container fluid className="p-0 m-0 " >
      <Row className="vh-100 text-center m-0 p-0 ">
        <Col className="bg-dark d-flex flex-column col-3 align-items-center justify-content-center gap-2 m-0 p-0 ">
        <Row className="categ m-0 p-0"><p onClick={()=>HandleClick("starters")} >Starters</p></Row>
        <Row className="categ m-0 p-0"><p onClick={()=>HandleClick("Full Chicken")}>Full Chicken</p></Row>
        <Row className="categ m-0 p-0"><p onClick={()=>HandleClick("briyani")}>Briyani</p></Row>
        <Row className="categ m-0 p-0"><p onClick={()=>HandleClick("fried rice")}>Fried Rice</p></Row>
        <Row className="categ m-0 p-0"><p onClick={()=>HandleClick("noodles")}>Noodles</p></Row>
        <Row className="categ m-0 p-0"><p onClick={()=>HandleClick("gravy")}>Gravy</p></Row>
        <Row className="categ m-0 p-0"><p onClick={()=>HandleClick("roti")}>Roti</p></Row>
        <Row className="categ m-0 p-0"><p onClick={()=>HandleClick("")}>All Dishes</p></Row>
        </Col>
        <Col className="cards d-flex justify-content-center align-items-center m-0  ">
              {/* {checkValue === "contact" ? <ContactPage/> :checkValue === "service" ? <ServicePage/> : <AboutPage/> } */}
              <div className="menuItems p-2 d-flex w-100  vh-100  justify-content-center align-items-center flex-wrap gap-3 m-0">
              {allDish?.map((item,i)=>{
                 return(
                         <div className="PriceCard">
                          <img src={item.pic} width={200} alt="productImage"/>
                          <h4>{item.name}</h4>
                         <p>Price : ₹{item.price}</p>
                         </div>
                        )
                 })}
              </div>
        </Col>
      </Row>
    </Container>
    );
}
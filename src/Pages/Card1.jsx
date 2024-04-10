import React from "react";
// import Card from "react-bootstrap/Card";

import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";

export default function Card1() {
  return (
    <>
    {/* <Header/> */}
      <div
        style={{ backgroundColor: "black", color: "white" }}
        className="card"
      >
        <Row className="p-5">
          <Col className="pt-5">
            <h1 style={{fontSize:"38px",fontStyle:"bold"}}>Enjoy on your TV</h1>
            <p style={{fontSize:"27px"}}className="pt-3">
              {" "}
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.{" "}
            </p>
          </Col>
          <Col
            style={{
              display: "flex",
              alignContent: "right",
              justifyContent: "right",
            }}
          >
            <img
              className="p-0"
              height={350}
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            />
               <video style={{position: "absolute",
alignItems: "left",
justifyContent: "left",
marginTop: "74px",
// marginBottom: "60px",
// marginLeft: "65px",
marginRight: "69px",
height: "20vh"
}} autoPlay loop playsInline muted src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>       </Col>
        </Row>
      </div>
    </>
  );
}
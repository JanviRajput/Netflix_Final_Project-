import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";

export default function Card3() {
  return (
    <div className="card" style={{ backgroundColor: "black", color: "white" }}>
      <div className="card-body">
        <Row style={{ height: "70vh" }}>
          <Col style={{ marginTop: "10%" }}>
            {" "}
            <center>
              <div style={{ fontSize: "50px", fontWeight: "bolder" }}>
                Watch everywhere
              </div>
            </center>
            <h4 style={{ marginLeft: "150px", marginTop: "10px" }}>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h4>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"></img>
            <video
              style={{
                position:"absolute",
                marginBottom:"10%",
                height:"30%",
                width:"30%",
                marginLeft:"2%",
                marginRight:"2.5%"

              }}
              autoPlay playsInline muted loop
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
            ></video>
          </Col>
        </Row>
      </div>
    </div>
  );
}
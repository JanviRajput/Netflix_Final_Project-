import { Col, Row } from "react-bootstrap";
import Style from "../CSS/Netflix.module.css";

export default function Footer1() {
  return (
    <div className="card" style={{ backgroundColor: "black", color: "white" }}>
      <div className="card-body">
        <p style={{marginLeft:"10%"}}>Questions? Call 420696969</p>

        <Row style={{width:"80%" , marginLeft:"10%"}}> 
          <Col>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privicy</p>
            <p>Speed Test</p>
            <select className={Style.dropdown}>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </Col>
          <Col>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privicy</p>
            <p>Speed Test</p>
          
          </Col>
          <Col>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privicy</p>
            <p>Speed Test</p>
          
          </Col>
          <Col>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privicy</p>
            <p>Speed Test</p>
          
          </Col>
        </Row>
      </div>
    </div>
  );
}
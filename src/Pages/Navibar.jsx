import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Style from "../CSS/Netflix.module.css";
// import { Button } from "react-bootstrap";
// import {row} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Navibar() {
  return (
    <Navbar className="bg-transparent ">
      <Container>
        <Navbar.Brand href="#home"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" style={{height:"50px" , width:"150px"}}></img></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" style={{zIndex:"4"}}>

          <select className={Style.dropdown}>
     
            <option >
           
              English
            </option>
            <option >
           
           Hindi
         </option>
          </select>
           <button className="btn btn-danger mx-3" style={{ backgroundColor:"red", color:"white"}}> Sign in</button>
           
            {/* <Link to=' ' className="btn btn-danger mx-3" style={{ backgroundColor:"red", color:"white"}}> Sign in</Link> */}

            {/* <Link to='/signin'> SignIN</Link> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
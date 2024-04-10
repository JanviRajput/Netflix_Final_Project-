// import Container from "react-bootstrap/Container";
import React from 'react'
import Sstyle from "../CSS/Signinpage.module.css"
import Navibar from "./Navibar";
import Footer1 from "./Footer1";
// import { Button,Row } from 'react-bootstrap';

export default function Signin() {
  return (
    <div className={Sstyle.back}
    >
      <Navibar />
      <div className={Sstyle.fflex}
      >
        <div
          className={`${Sstyle.ccard} card`}
          
        >
          <div className="card-body" style={{width:"350px" ,marginLeft:"50px" ,marginTop:"40px"}}><h2>Sign In</h2>
          <div style={{marginTop:"30px"}}>
            <form>
                <input className={`${Sstyle.inp} form-control`} placeholder="Email"  type="text"/>
                <input  className={`${Sstyle.inp} form-control`}placeholder="Password" type="password"/>
                <button className="btn " style={{width:"100%", backgroundColor:"red",color:"white",marginBottom:"20px"}}>Sign In</button>
            </form>
            <center><p>Forget Password?</p></center>
          </div>
          <div style={{marginTop:"50px"}}>
            <input type="checkbox" style={{ transform: 'scale(1.7)' , marginRight:"15px" , marginBottom:"20px"}}></input>
            <label>Remember Me</label>
            <p>New to Netflix <b>Sign Up Now</b></p>
          </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}
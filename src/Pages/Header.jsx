import React from 'react'
import { Row } from 'react-bootstrap';
import Navibar from './Navibar';
// import Style from "./CardCss.module.css"

export default function Header() {
  return (
    <div>
        <div className="card">
        <div style={{height:"95vh",  background:
              'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg")',
           }}>
          <Navibar/>
        <center>
        <div style={{color:"white"}}>
        
        <h1 style={{ marginTop:"20%", fontSize:"60px"}}>
        Unlimited movies, TV shows and more
        </h1>
        <br></br>
        <h3>
        Watch anywhere. Cancel anytime.
        </h3><br></br>
        <h5>
        Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <br></br><br></br>
        <div>
          <Row style={{alignItems:"center",
        justifyContent:"center"}}>
            <input style={{width:"50%",height:"47px",
            fontSize:"20px",
            backgroundColor:"transparent"
            }}
            placeholder="Email address"
            type="text"
            />
            {/* <div></div> */}
            <button
            className="btn"
            style={{
                backgroundColor:"red",
                color:"white",
                height: "48px",
                width: "200px",
                fontSize:"20px",
                // marginTop:"-1%"
            }}>
                Get Started
            </button></Row>
        </div>
        </div>
        </center>
        </div>    
    </div>
    </div>
  );
}
import React from 'react'
import Header from './Header'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Footer1 from './Footer1'

export default function Callingpages() {
  return (
    <>
    
    <Header/>
    
    <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
<Card1/>
<hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
<Card2/>
<hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
<Card3/>
<hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
<Card4/>
<hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
<Card5/>
<hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
<Footer1/>
    </>
  )
}

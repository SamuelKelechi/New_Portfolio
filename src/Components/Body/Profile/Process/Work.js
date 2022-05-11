import React from 'react'
import './Work.css'
import Idea from './Images/idea.png'
import Analyse from './Images/analyse.png'
import Design from './Images/Design.png'
import Code from './Images/Code.png'
import Deploy from './Images/Deploy.png'





function Work() {
    return (
        <>
        <br/>
        <div class="HowHolder"> 
            <div class="How">HOW I WORK</div>
            <div class="BorderLine"></div>
        </div>
        <div class="hexagonWrapper">

            <div class="HexContain">
                <div class="hexagon"><span style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}><p style={{color:"white", fontWeight:"bold"}}> 1</p> <img src={Idea} style={{height:"80px"}}/></span></div>
                <h5 style={{marginTop:"38px", textAlign:"center"}}>Your Idea</h5>
            </div>

            <div class="HexContain2">
                <div class="hexagon2"><span style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}><p style={{color:"white", fontWeight:"bold"}}> 2</p> <img src={Analyse} style={{height:"65px", marginTop:"5px", marginBottom:"12px"}}/></span></div>
                <h5 style={{marginTop:"38px", textAlign:"center"}}>I Analyse</h5>
            </div>

            <div class="HexContain3">
                <div class="hexagon3"><span style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}><p style={{color:"white", fontWeight:"bold"}}> 3</p> <img src={Design} style={{height:"70px", marginBottom:"10px"}}/></span></div>
                <h5 style={{marginTop:"38px", textAlign:"center"}}>I Design</h5>
            </div>

            <div className="HexContain4">
                <div class="hexagon4"><span style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}><p style={{color:"white", fontWeight:"bold"}}> 4</p> <img src={Code} style={{height:"75px", marginBottom:"10px"}}/></span></div>
                <h5 style={{marginTop:"38px", textAlign:"center"}}>I Code</h5>
            </div>

            <div class="HexContain5">
                <div class="hexagon5"><span style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}><p style={{color:"white", fontWeight:"bold"}}> 5</p> <img src={Deploy} style={{height:"70px", marginBottom:"10px"}}/></span></div>
                <h5 style={{marginTop:"38px", textAlign:"center"}}>I Deploy</h5>
            </div>
        
        </div>
        </>
    )
}

export default Work

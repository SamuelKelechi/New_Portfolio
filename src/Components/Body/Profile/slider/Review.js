import { Button } from 'antd'
import React,{useState, useEffect} from 'react'
import { app } from '../../base'
import styled from "styled-components"

const Review = () => {
  const [admData, setAdmData] = useState([])
  const [admData1, setAdmData1] = useState([])

  const getData = async() => {
    await app.firestore().collection("admission2021")
    .orderBy("time", "desc")
    .limit(1)
    .onSnapshot(snapshot => {
      const r =[]
      snapshot.forEach(doc => {
        r.push({...doc.data(), id: doc.id})
      })
      setAdmData(r)
    })
  }

  const getInData = async(id) => {
    await app.firestore().collection("admission").doc().get().then(el => {
        setAdmData1(el.data())
    })
  }

  useEffect(() => {
    getInData()
    getData()
  }, [])

  return (
    <Container>
    <div
    style={{
      height:"100vh",
      width:"100vw ",
      fontFamily:"Poppins",
    }}
    >
   {
     admData.map(r => (
       <div key={r.id}> 
          <div
      style={{
        display:"flex",
        justifyContent:"center",
        flexWrap:"wrap",
        alignItems:"center",
        height:"100vh",
        width:"100% ",

      }}
      >
        <div
        style={{
            width: "300px",
            height:"250px",
            backgroundColor:"white",
            margin:"10px 5px",
            borderRadius:" 5px",
            marginRight:"15px"
          }}
        > 
          <img            
            src={r.avatar}
            style={{
              width: "100%",
              height:"100%",
              borderRadius:"5px",
              objectFit:"cover",           

            }}
          />
        </div>
        <div
         style={{
          width: "300px",
          margin:"10px 5px"
        }}
        >
          <div
          style={{
            fontWeight:"bold",
            fontSize:"20px",
            lineHeight:"21px",
            color:"white"
          }}
  >Thank you, <i style={{color: "lightcoral"}}>"{r.name}"</i>  for applying. <br/> <br/>
          You would be sent an invite for an interview as the next step of the screening exercise.</div>

          <br/>
          <div
          style={{
            color:"white"
          }}
          >Our deepest joy is to help you take the leap into becoming a software developer as proposed in your heart...
          <br/>
          <br/>
          We are using CodeLab as a tool to help young people achieve their dreams of becoming a Software Engineer!
          </div>

          
          <br/>
          <div>
            <button
            style={{
              backgroundColor:"#0076e1",
              color:"white",
              textDecoration: "none",
              outline: "none",
              border:"0",
              height:"50px" ,
              borderRadius:"5px"
            }}
            >
              <a
              style={{textDecoration: "none",
            color:"white",
            padding:"0 10px"
            }}
              href="https://www.facebook.com/groups/brighterdayscodelab" >Click here to see our works on Facebook</a>
            </button>
          </div>
        </div>
      </div>
    
        </div>
     ))
   }
    </div>
    </Container>
  )
}

export default Review

const AppContainer = styled.div`
/* background-color: #23282D; */
background-color: red;
height: 100%;
width:100%;
`
const Container = styled.div`
background-image: url("star.svg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
/* height: 100vh;
min-height: 100%;
width:100%; */

`
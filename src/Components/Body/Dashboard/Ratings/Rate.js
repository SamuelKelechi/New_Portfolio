import React from "react";
import {
    CircularProgressbar,
    buildStyles,
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";



const Rate = (props) => {
  return (
      <>
    <Example label="Default">
        <CircularProgressbar
         value={props.percentage} 
         text={`${props.percentage}%`}
        //  minValue={props.min} 
        //  maxValue={props.max}
         styles={buildStyles({
            textColor: "grey",
            pathColor: "#FFC107",
            trailColor: "#191923"
          })}
         />
    </Example>
  </>
  )
}

export default Rate;

const Example = styled.div`
    width: 60px;
`
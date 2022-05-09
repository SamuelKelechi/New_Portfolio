import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styled from 'styled-components';

const Data1 = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={isVisible => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <H ref={countUpRef} />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

export default Data1;

const H = styled.div`
    font-weight: bold;

    @media screen and (max-width: 425px){
        font-size: 22px;
        margin-top: 25px;
    }
`
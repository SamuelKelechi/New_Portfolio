import React from 'react';
import styled from 'styled-components';
import Data1 from '../../../Datas/Data1'

const Experience = () => {
  return (
    <Container>
        <Wrapper>
            <Items>
                <div><Data1  end={2} suffix="+"/></div>
                <p>Years Experience</p>
            </Items>
           
            <Items>
                <div><Data1  end={16} suffix="+"/></div>
                <p>Projects Done</p>
            </Items>

            <Items2 >
                <div><Data1  end={3} suffix="+"/></div>
                <p >Certification</p>
            </Items2>
        </Wrapper>
    </Container>
  )
}

export default Experience;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media screen and (max-width: 860px){
        width: 95%;
    }

    @media screen and (max-width: 425px){
            flex-wrap: nowrap;
            justify-content: space-between;
            width: 100%;
        }
    @media screen and (max-width: 325px){
            flex-wrap: wrap;
            justify-content: center;
        }
`
const Items = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 425px){
            justify-content: flex-start;
        }
    @media screen and (max-width: 325px){
            margin-top: 5px;
        }
    

    div{
        color: #FFC107;
        font-size: 30px;
        font-weight: bold;

        @media screen and (max-width: 425px){
           margin-top: -1px;
           font-size: 20px;
           margin-right: 3px;
        }
    }

    p{
        color: #96969B;
        font-weight: bold;

        @media screen and (max-width: 425px){
           font-size: 14px;
        }
        @media screen and (max-width: 325px){
            font-size: 16px;
        }
    }
`
const Items2 = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 425px){
            justify-content: flex-start;
        }
    @media screen and (max-width: 325px){
            margin-top: 5px;
        }

        div{
        color: #FFC107;
        font-size: 30px;
        font-weight: bold;

        @media screen and (max-width: 425px){
           margin-top: -1px;
           font-size: 20px;
           margin-right: 3px;
        }
    }

    p{
        color: #96969B;
        font-weight: bold;

        @media screen and (max-width: 425px){
           font-size: 14px;
        }
        @media screen and (max-width: 325px){
            font-size: 16px;
        }
    }
`
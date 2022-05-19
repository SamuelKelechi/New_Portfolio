import React,{useState} from 'react';
import styled from 'styled-components';
import Typist from 'react-text-typist';
import Bg from '../../../Images/bg.jpg';
import Profile from '../../../Images/img.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import { toast } from 'react-toastify';
import {db} from '../../../../Base';

const Hero = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [time, setTime] = useState(Timestamp.now().toDate())
  
  const usersCollectionRef = collection(db, "portfolio")

  // const que = query(usersCollectionRef, orderBy("time", "desc"))

  const Send = () => {
    addDoc(usersCollectionRef, {name:name, phone:phone, email:email, message:message, time:time})
    .then(() => {
      toast("Message Sent Successfully", {type: "success"});
    })
    .catch(err=>{
      toast("Error sending message", {type: "error"});
    })
    setEmail('');
    setName('');
    setPhone('');
    setMessage('');
  }

  return (
    <MainContain>
      <Wrapper>
        <Left>
          <Title>Discover My Amazing <br/> Tech Space!</Title>
          <br />
          <Type>
            I build
            <Typist style={{marginLeft:'5px'}} sentences={["Web Applications","Client Side", "Server Side", "DevOps Pipeline"]} loop={true} />
          </Type>
          <br />
          <br />
          <Btn onClick={handleOpen}>Contact</Btn>
        </Left>

        <Imag src={Profile} alt="Profile"/>

      </Wrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <PopUp >
        <p><CancelIcon onClick={handleClose}/></p>
          <form>
            <Titled>CONTACT ME</Titled>
            
            <input onChange={(e) => {
              setName(e.target.value)
            }} type='text' placeholder='Name' name='name'/>

            <input onChange={(e) => {
              setEmail(e.target.value)
            }} type='email' placeholder='Email' name='email'/>

            <input onChange={(e) => {
              setPhone(e.target.value)
            }} type='number' placeholder='Phone Number' name='phone'/>

            <textarea onChange={(e) => {
              setMessage(e.target.value)
            }} type='string' placeholder='Message' name='message'/>
            <Btn disabled={!message} style={{width:'100px', borderRadius:'5px', marginTop:'20px'}}  type="submit" value="Send" onClick={() => {
              Send();
              handleClose();
              console.log('Sending')
            }}>Send</Btn>
          </form>
        </PopUp>
      </Modal>
    </MainContain>
  )
}

export default Hero;

const MainContain = styled.div`
    width: 100%;
    height: 350px;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Bg});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 680px){
      height: auto;
    }
`
const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 860px){
        flex-direction: row-reverse;
        justify-content: space-around;
    }

    @media screen and (max-width: 680px){
      flex-wrap: wrap;
      flex-direction: column-reverse;
      width: 95%;
    }
`
const Left = styled.div`
  font-weight: bold;

  @media screen and (max-width: 680px){
      width: 100%;
    }
`

const Imag = styled.img`
  height: 350px;
`
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: 100%;
`
const Btn = styled.button`
  height: 40px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFC107;
  color: black;
  cursor: pointer;
  outline: none;
  border: none;

  @media screen and (max-width: 680px){
      margin-bottom: 30px;
    }
`
const Type = styled.div`
`
const PopUp = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 380px;
  box-shadow: 24;
  color: white;
  border-radius: 8px;
  background-color: #2C2C38;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0 15px 0;

  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 350px;
  }

  p{
    width: 90%;
  }

  input{
    width: 90%;
    height: 35px;
    margin-bottom: 10px;
    border-radius: 5px;
    outline: none;
    padding: 3px;
  }

  textarea{
    height: 110px;
    width: 90%;
    border-radius: 5px;
    padding: 3px;
    outline: none;
  }

  @media screen and (max-width: 425px){
    width: 95%;
  }
`
const Titled = styled.div`
  font-size: 25px;
  margin-bottom: 10px;

  @media screen and (max-width: 425px){
    font-size: 18px;
  }
`
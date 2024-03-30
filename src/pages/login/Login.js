import React from 'react'
import './Login.css'
import TopBar from '../../components/topBar/TopBar' 
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import InputComponent from '../../components/inputComponent/InputComponent'
import { Image,Form,InputGroup, } from 'react-bootstrap'
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Button from '@mui/material/Button';
export default function Login() {
  return (
<>
<TopBar/>
<NavBar/>

 
<div className='container cmsnewyousercoma-container '>
        <div className='row cmsnewyousercoma-row'>
            <div className='col col-12 cmsnewyousercoma-divc
            '   style={{ textAlign: 'center' }} > <Image src="./login.jpg" fluid /></div>
            <div className='col col-12 cmsnewyousercoma-divd'  >
      <Form>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><AccountCircleIcon /></InputGroup.Text>
    <InputComponent
    element='input'
    placeholder='نام کاربری'
    className="login secces"
    />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><LocalPhoneIcon /></InputGroup.Text>
        <InputComponent
               element='input'
               placeholder='شماره همراه'/>

      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><AlternateEmailIcon /></InputGroup.Text>
        <InputComponent
  
        />

      </InputGroup>

      <Button  type='submit' fullWidth variant="contained" endIcon={<SendIcon className='cmsnewyousercoma-sendicon' />}>
        تایید
      </Button>

      </Form>

            </div>
        </div>
    </div>

<Footer/>
</>
    )
}

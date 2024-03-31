import React from 'react'
import './Login.css'
import TopBar from '../../components/topBar/TopBar'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import InputComponent from '../../components/inputComponent/InputComponent'
import { Image, Form, InputGroup, } from 'react-bootstrap'
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Button from '@mui/material/Button';
import { requiedValidator, minValidator, maxValidator, emailValidator, phoneValidator } from '../../components/validators/rules'
import { useForm } from '../../hooks/useForm'

export default function Login() {

const[formState,onInputHandler]=useForm({               //// <<==  export const useForm=(initInputs,initIsFormIsValid)=>{
  username:{valueUF:'',isValidUF:false},               ////   const[formState,dispatch]=useReducer(formReducer,{      
  password:{valueUF:'',isValidUF:false}                /////  inputRe:initInputs,
},false)                                         /////  isFormValidRe:initIsFormIsValid })


console.log(formState);

  return (
    <>
      <TopBar />
      <NavBar />


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
                  id='username'
                  placeholder='نام کاربری'
                  className="login secces"
                  validPropTo={[
                    requiedValidator(),
                    minValidator(8),
                    maxValidator(12),

                  ]}
                  onInputHandler={onInputHandler}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><AccountCircleIcon /></InputGroup.Text>
                <InputComponent
                  element='input'
                  id='password'
                  placeholder='رمز عبور'
                  className="login secces"
                  validPropTo={[
                    requiedValidator(),
                    minValidator(8),
                    maxValidator(18)
                  ]}
                  onInputHandler={onInputHandler}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><AccountCircleIcon /></InputGroup.Text>
                <InputComponent
                  element='input'
                  placeholder='ایمیل '
                  className="login secces"
                  validPropTo={[
                    requiedValidator(),
                    // minValidator(8),
                    // maxValidator(12),
                    emailValidator()
                  ]}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><LocalPhoneIcon /></InputGroup.Text>
                <InputComponent
                  element='input'
                  placeholder='شماره همراه'
                  validPropTo={[
                    requiedValidator(),
                    phoneValidator(11)

                  ]}
                />


              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><AlternateEmailIcon /></InputGroup.Text>
                <InputComponent

                />

              </InputGroup>

              <Button type='submit' fullWidth variant="contained" endIcon={<SendIcon className='cmsnewyousercoma-sendicon' />}>
                تایید
              </Button>

            </Form>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

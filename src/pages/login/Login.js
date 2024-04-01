import React, { useEffect, useReducer, useState } from 'react'
import './Login.css'
import TopBar from '../../components/topBar/TopBar'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import InputComponent from '../../components/inputComponent/InputComponent'
import { Image, Form, InputGroup, } from 'react-bootstrap'
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Button from '@mui/material/Button';
import { requiedValidator, minValidator, maxValidator, emailValidator, phoneValidator } from '../../components/validators/rules'
import { LoginContext } from '../../context/loginContext'



export default function Login() {

  const [isFormValid, setIsFormValid] = useState(false)
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [flag1, setFlag1] = useState(false)
  const [flag2, setFlag2] = useState(false)
  const [flag3, setFlag3] = useState(false)


useEffect(()=>{
 {(flag1 && flag2 && flag3) ?  setIsFormValid(true) : setIsFormValid(false)}
},[flag1,flag2,flag3])
 
  return (
    <>

      <LoginContext.Provider value={{
        value1, setValue1,
        value2, setValue2,
        value3, setValue3,
        flag1, setFlag1,
        flag2, setFlag2,
        flag3, setFlag3
      }}>
        <TopBar />
        <NavBar />
        <div className='container cmsnewyousercoma-container '>
          <div className='row cmsnewyousercoma-row'>
            <div className='col col-12 cmsnewyousercoma-divc
            '   style={{ textAlign: 'center' }} > <Image src="./login.jpg" fluid /></div>
            <div className='col col-12 cmsnewyousercoma-divd'  >
              <h1>dfsfdsf</h1>
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><AccountCircleIcon /></InputGroup.Text>
                  <InputComponent
                    element='input'
                    id='username'
                    placeholder='نام کاربری'
                    className={flag1 ? "secces" : !value1 ? 'login' : 'error'}  
                    validPropTo={[
                      requiedValidator(),
                      minValidator(8),
                      maxValidator(12),
                    ]}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><AccountCircleIcon /></InputGroup.Text>
                  <InputComponent
                    element='input'
                    id='password'
                    placeholder='رمز عبور'
                    className={flag2 ? "secces" : !value2 ? 'login' : 'error'}  
                    validPropTo={[
                      requiedValidator(),
                      minValidator(8),
                      maxValidator(18)
                    ]}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><AccountCircleIcon /></InputGroup.Text>
                  <InputComponent
                    element='input'
                    id='email'
                    placeholder='ایمیل '
                    className={flag3 ? "secces" : !value3 ? 'login' : 'error'}  
                    validPropTo={[
                      requiedValidator(),
                      // minValidator(8),
                      // maxValidator(12),
                      emailValidator()
                    ]}

                  />
                </InputGroup>
                {/* <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><LocalPhoneIcon /></InputGroup.Text>
                <InputComponent
                  element='input'
                  placeholder='شماره همراه'
                  validPropTo={[
                    requiedValidator(),
                    phoneValidator(11)
                  ]}
                  onInputHandler={onInputHandler}

                />


              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><AlternateEmailIcon /></InputGroup.Text>
                <InputComponent
                  onInputHandler={onInputHandler}

                />

              </InputGroup> */}

                <Button className={isFormValid ? 'blue' : 'red'} type='submit' fullWidth variant="contained" endIcon={<SendIcon className='cmsnewyousercoma-sendicon' />}>
                  {/* <Button className={isFormValid ? 'blue' : 'red'} type='submit' fullWidth variant="contained" endIcon={<SendIcon className='cmsnewyousercoma-sendicon' />}> */}
                  تایید
                </Button>

              </Form>

            </div>
          </div>
        </div>

        <Footer />
      </LoginContext.Provider>


    </>
  )
}



// Login() {
//   const[flag1,setFlag1]=useState(false)
//   const[flag2,setFlag2]=useState(false)
//   const[flag3,setFlag3]=useState(false)
//   const[isFormValid,setIsFormValid]=useState(false)
//   const[formValue,setFormValue]=useState({})

// const onInputHandler=(inputValue,inputIsValid,id)=>{
// // console.log(id);
// // console.log(flag1);
// // console.log(flag2);
// // console.log(flag3);
// // console.log(isFormValid);
// // console.log(formValue);
// //   const obj={
// // value:inputValue
// //   }
// if(id==='username'){

//   setFlag1(inputIsValid)
//   setFormValue(inputValue)
//   // setFormValue(prev=>({...prev,value1:inputValue}))
// }else if(id==='password'){
//   setFlag2(inputIsValid)
//   // setFormValue(prev=>({...prev,value2:inputValue}))
// }else if(id==='email'){
//   setFlag3(inputIsValid)

// }

//  if(flag1&&flag2&&flag3){
//  setIsFormValid(true)
// }else{
//    setIsFormValid(false)
// }
// }
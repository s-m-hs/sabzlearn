import React, { useContext, useEffect, useReducer, useState } from 'react'
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom'
import TopBar from '../../components/topBar/TopBar'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import InputComponent from '../../components/inputComponent/InputComponent'
import { requiedValidator, minValidator, maxValidator, emailValidator, phoneValidator } from '../../components/validators/rules'
import { LoginContext } from '../../context/loginContext'
import AuthContext from '../../context/loginContext';
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom';




export default function Login() {
  const [isFormValid, setIsFormValid] = useState(false)
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [flag1, setFlag1] = useState(false)
  const [flag2, setFlag2] = useState(false)

  const authContextLogin=useContext(AuthContext)
  const navigate=useNavigate()

useEffect(()=>{
 {(flag1 && flag2 ) ?  setIsFormValid(true) : setIsFormValid(false)}
},[flag1,flag2])
 ////////////////////////
 const loginHandler=(e)=>{
e.preventDefault()
let obj={
  identifier:value1,
  password:value2
}
console.log(value1);
console.log(value2);
async function myAppLogin(){
  const res=await fetch(`http://localhost:5000/v1/auth/login`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(obj)
  }).then(
    (res)=>{
      console.log(res)
      console.log(res.ok)
      if(!res.ok){
        return res.text().then((text)=>{
          throw new Error(text)
        })
      }else{
        return res.json()
      }
    }
    
  ).then(
    result=>{
      console.log(result)
      authContextLogin.login({},result.accessToken)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      }).then(value=>{navigate('/')});
    }
  ).catch(
    err=>{
      console.log(err);
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title:" کاربری با این مشخصات وجود ندارد",
        showConfirmButton: false,
        timer: 1500
      });
    }
  )
}
myAppLogin()
 }
//  Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "کاربری با این مشخصات وجود ندارد",
// });
// Swal.fire({
//   position: "top-end",
//   icon: "error",
//   title:" کاربری با این مشخصات وجود ندارد",
//   showConfirmButton: false,
//   timer: 1500
// });
  return (
    <>
       <LoginContext.Provider value={{
        value1, setValue1,
        value2, setValue2,
        flag1, setFlag1,
        flag2, setFlag2,
      }}>
      <TopBar />
      <NavBar />

      <section className="login-register">
        <div className="login">
          <span className="login__title">ورود به حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">کاربر جدید هستید؟</span>
            <Link className="login__new-member-link" to="/register">
              ثبت نام
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
          
                  <InputComponent
                    element='input'
                    id='username'
                    placeholder='نام کاربری یا ایمیل خود را وارد کنید'
                    className={flag1 ? "login-form__username-input  secces" : !value1 ? 'login-form__username-input' : 'login-form__username-input  error'}  
                    validPropTo={[
                      requiedValidator(),
                      minValidator(8),
                      maxValidator(18),
                    ]}
                  />
              <i className="login-form__username-icon fa fa-user"></i>
              
            </div>
            <div className="login-form__password">
            <InputComponent
                    element='input'
                    id='password'
                    placeholder='رمز عبور'
                    className={flag2 ? "login-form__username-input  secces" : !value2 ? 'login-form__username-input' : 'login-form__username-input  error'}  
                    validPropTo={[
                      requiedValidator(),
                      minValidator(8),
                      maxValidator(18)
                    ]}
                  />

              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <div className="login-form__password">
        
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <button className= {isFormValid ? "login-form__btn" : 'login-form__btn red'}
            onClick={loginHandler}
             disabled={!isFormValid} 
              type="submit">
              <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span className="login-form__btn-text">ورود</span>
            </button>
            <div className="login-form__password-setting">
              <label className="login-form__password-remember"> 
                <input className="login-form__password-checkbox" type="checkbox" />
                <span className="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <a className="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
          <div className="login__des">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      </LoginContext.Provider>

    </>
  );
}






















/// Login() {
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
import React, { useEffect, useReducer, useState } from 'react'
import "./Register.css";
import { Link } from 'react-router-dom'
import TopBar from '../../components/topBar/TopBar'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import InputComponent from '../../components/inputComponent/InputComponent'
import { requiedValidator, minValidator, maxValidator, emailValidator, phoneValidator } from '../../components/validators/rules'
import { LoginContext } from '../../context/loginContext'


export default function Register() {
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

    <section className="login-register">
      <div className="login register-form">
        <span className="login__title">ساخت حساب کاربری</span>
        <span className="login__subtitle">خوشحالیم قراره به جمع ما بپیوندی</span>
        <div className="login__new-member">
          <span className="login__new-member-text">قبلا ثبت‌نام کرده‌اید؟ </span>
          <Link className="login__new-member-link" to="/login">
            وارد شوید
          </Link>
        </div>
        <form action="#" className="login-form">
          <div className="login-form__username">
          <InputComponent
                    element='input'
                    id='username'
                    placeholder='نام کاربری'
                    className={flag1 ? "login-form__username-input secces" : !value1 ? 'login-form__username-input' : 'login-form__username-input  error'}  
                    validPropTo={[
                      requiedValidator(),
                      minValidator(8),
                      maxValidator(12),
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
            <i className="login-form__password-icon fa fa-envelope"></i>
          </div>
          <div className="login-form__password">
          <InputComponent
                    element='input'
                    id='email'
                    placeholder='ایمیل '
                    className={flag3 ? "login-form__username-input  secces" : !value3 ? 'login-form__username-input' : 'login-form__username-input  error'}  
                    validPropTo={[
                      requiedValidator(),
                      // minValidator(8),
                      // maxValidator(12),
                      emailValidator()
                    ]}

                  />
            <i className="login-form__password-icon fa fa-lock-open"></i>
          </div>
          <button className= {isFormValid ? "login-form__btn" : 'login-form__btn red'} type="submit">
            <i className="login-form__btn-icon fa fa-user-plus"></i>
            <span className="login-form__btn-text">عضویت</span>
          </button>
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
  </>  )
}

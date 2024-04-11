import React, { useEffect, useState } from 'react'
import CmsDataTable from '../../../components/CmsDataTable/CmsDataTable'
import { CmsUserContext} from '../../../context/loginContext'
import InputComponentB from '../../../components/inputComponent/InputComponentB'
import { requiedValidator, minValidator, maxValidator, emailValidator, phoneValidator } from '../../../components/validators/rules'
import './CmsUsers.css'


export default function CmsUsers() {
const [users,setUsers]=useState([])
const [isFormValid, setIsFormValid] = useState(false)
const [value1, setValue1] = useState('')
const [value2, setValue2] = useState('')
const [value3, setValue3] = useState('')
const [value4, setValue4] = useState('')
const [value5, setValue5] = useState('')
const [flag1, setFlag1] = useState(false)
const [flag2, setFlag2] = useState(false)
const [flag3, setFlag3] = useState(false)
const [flag4, setFlag4] = useState(false)
const [flag5, setFlag5] = useState(false)

const registerHandler=()=>{
  let obj = {
    name: `${value1}`,
    username: `${value2}`,
    email: `${value4}`,
    // phone: `${value5}`,
    password: `${value3}`,
    confirmPassword: `${value3}`,
  
  }
  async function myAppReg() {
    const res = await fetch(`http://localhost:5000/v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)

    }).then(res => console.log(res))
    // .then(
    //   result => {
    //     authContextReg.login(result.user,result.accessToken)
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "ثبت نام با موفقیت انجام شد ",
    //       showConfirmButton: false,
    //       timer: 1500,
    //       color:' #a5dc86',
    //           }).then(value=>{navigate('/')});
    //   }) 
  }
  myAppReg()
  console.log(value5);
}


useEffect(() => {
  { (flag1 && flag2 && flag3 && flag4 && flag5) ? setIsFormValid(true) : setIsFormValid(false) }
}, [flag1, flag2, flag3, flag4,flag5])



useEffect(()=>{
  const getLocalStorage=JSON.parse(localStorage.getItem('user'))
  console.log(getLocalStorage)
  async function myApp(){
    const res=await fetch(`http://localhost:5000/v1/users`,{
        headers:{
        Authorization:`Bearer ${getLocalStorage.tokenValue}`
    }
    }).then(res=>res.text()).then(
      err=>console.log(err)
    )
  }
  myApp()
},[])



  return (

<CmsUserContext.Provider value={{
 value1, setValue1,
 value2, setValue2,
 value3, setValue3,
 value4, setValue4,
 value5, setValue5,
 flag1, setFlag1,
 flag2, setFlag2,
 flag3, setFlag3,
 flag4, setFlag4,
 flag5, setFlag5,
}} >
   <div>
    <div className='container mt-5'>
      <div className='row row-cols-2'>
        <div>
          <h1> نام و نام خانوادگی</h1>
          <InputComponentB 
     element='input'
     id='rname'
     placeholder='نام ونام خانوادگی'
     className={flag1 ? "cmsuser-input secces" : !value1 ? 'cmsuser-input ' : 'cmsuser-input error'}
     validPropTo={[
       requiedValidator(),
       minValidator(8),
       maxValidator(16),
     ]}
/>
        </div>
        <div>
          <h1>نام کاربری</h1>
          <InputComponentB 
     element='input'
     id='rusername'
     placeholder='نام کاربری'
     className={flag2 ? "cmsuser-input secces" : !value2 ? 'cmsuser-input ' : 'cmsuser-input error'}
     validPropTo={[
       requiedValidator(),
       minValidator(8),
       maxValidator(16),
     ]}
/>
        </div>
        <div>
          <h1>رمزعبور</h1>
          <InputComponentB 
     element='input'
     id='rpassword'
     placeholder='رمزعبور'
     className={flag3 ? "cmsuser-input secces" : !value3 ? 'cmsuser-input ' : 'cmsuser-input error'}
     validPropTo={[
       requiedValidator(),
       minValidator(8),
       maxValidator(16),
     ]}
/>
        </div>
        <div>
          <h1>ایمیل</h1>
          <InputComponentB 
     element='input'
     id='remail'
     placeholder='ایمیل'
     className={flag4 ? "cmsuser-input secces" : !value4 ? 'cmsuser-input ' : 'cmsuser-input error'}
     validPropTo={[
       requiedValidator(),
       emailValidator()

     ]}
/>
        </div>
        <div>
          <h1>شماره همراه</h1>
          <InputComponentB 
     element='input'
     id='phone'
     placeholder='شماره همراه'
     className={flag5 ? "cmsuser-input secces" : !value5 ? 'cmsuser-input ' : 'cmsuser-input error'}
     validPropTo={[
       requiedValidator(),
       minValidator(10),
       maxValidator(12),
     ]}
/>
        </div>



        
      </div>
<button className='btn btn-primary mt-5 cmsuser-button' onClick={registerHandler} >افزودن</button>
    </div>





<CmsDataTable title='لیست کاربران'>

<table className='table table-striped cmstable-user'>
  <thead>
    <tr>
      <th>شناسه</th>
      <th>نام</th>
      <th>نام خانوادگی</th>
      <th>شماره</th>
      <th>ایمیل</th>
      <th>رمزعبور</th>
      <th>ویرایش</th>
    </tr>
  </thead>
  <tbody>
    <tr>
<td>33568</td>
<td>علی</td>
<td>احمدی</td>
<td>09196025114</td>
<td>mhsseyyed@yahoo.com</td>
<td>110110110</td>
<td></td>
    </tr>
  </tbody>
</table>

</CmsDataTable>

    </div>

  
</CmsUserContext.Provider>

 
  )
}

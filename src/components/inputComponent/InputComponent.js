import React, { useContext, useEffect, useReducer } from 'react'
import './InputComponent.css'
import validator from '../validators/validator';
import { LoginContext } from '../../context/loginContext';



export default function InputComponent(props) {

const inputContext=useContext(LoginContext)       

const changeHandler=(e)=>{
    if(props.id==='username'){
    inputContext.setValue1(e.target.value)
    }else if(props.id==='password'){
        inputContext.setValue2(e.target.value)
    }
    
}
 const element =
 props.element === 'input' ?
     (
     <>
       <input
        value={props.value}
         type={props.type}
         placeholder={props.placeholder}
         className={props.className}
         onChange={changeHandler}

         
     />  </> ) :
     (<textarea
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        onChange={changeHandler}
       
     />
    
     
   )


    return (
        <div>{element}
        </div>


    )
}
// const [counter, dispatch] = useReducer(counterReducer, { count: 0,flag:false })
// function counterReducer(state, action) {
//     console.log(state.count);
//     console.log(state.flag);
//     switch (action.type) {
//         case 'ADD':
//             return { count: state.count + 1,flag:!state.flag }
//         case 'MINES':
//             return { count: state.count - 1 ,flag:false}

//             default:
//                 return(null)
//     }
// }
///////////////////////////////////////////////
//    <div>
//              <h1>{counter.count}</h1>
//             <button onClick={() => dispatch({ type: 'ADD' })}>add</button>
//             <button onClick={() => dispatch({ type: 'MINES' })} >mines</button>
//             <input type="text"
//             onChange={changeHandler}
//             value={valuObj.value}
//             />
//         </div>
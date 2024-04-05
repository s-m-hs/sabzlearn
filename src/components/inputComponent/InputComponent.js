import React, { useEffect, useReducer, useContext } from 'react'
import './InputComponent.css'
import validator from '../validators/validator';
import { LoginContext } from '../../context/loginContext'
import { RegisterContext } from '../../context/loginContext';


function ChangValuReducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: validator(action.value, action.validPropIn),
            }
    }
}
export default function InputComponent(props) {
    const [valuObj, dispatch2] = useReducer(ChangValuReducer, { value: '', isValid: false, method: '' })
    const inputContext = useContext(LoginContext)
    const input2Context = useContext(RegisterContext)
    function changeHandler(e) {
        dispatch2({
            type: 'CHANGE',
            value: e.target.value,
            validPropIn: props.validPropTo,
        })
    }
    useEffect(() => {
        if (props.id === 'username') {
            inputContext.setValue1(valuObj.value)
            inputContext.setFlag1(valuObj.isValid)
        } else if (props.id === 'password') {
            inputContext.setValue2(valuObj.value)
            inputContext.setFlag2(valuObj.isValid)
        } 
        else if (props.id === 'rname') {
            input2Context.setValue4(valuObj.value)
            input2Context.setFlag4(valuObj.isValid)
        } else if (props.id === 'rusername') {
            input2Context.setValue1(valuObj.value)
            input2Context.setFlag1(valuObj.isValid)
        } else if (props.id === 'rpassword') {
            input2Context.setValue2(valuObj.value)
            input2Context.setFlag2(valuObj.isValid)
        } else if (props.id === 'remail') {
            input2Context.setValue3(valuObj.value)
            input2Context.setFlag3(valuObj.isValid)
        }
    })


    const element =
        props.element === 'input' ?
            (
                <>
                    <input
                        value={valuObj.value}
                        type={props.type}
                        placeholder={props.placeholder}
                        className={props.className}
                        onChange={changeHandler}

                    />  </>) :
            (<textarea
                placeholder={props.placeholder}
                className={props.className}

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
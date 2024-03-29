import React, { useReducer } from 'react'
import './InputComponent.css'

function ChangValuReducer(state, action) {
    console.log(state);
    console.log(state.isValid);
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.value,
            }
    }
}

export default function InputComponent(props) {
    const [valuObj, dispatch2] = useReducer(ChangValuReducer, { value: '', isValid: false })

    const changeHandler = (e) => {
        dispatch2({
            type: 'CHANGE',
            value: e.target.value,
        })
    }
    const element =
        props.element === 'input' ?
            (<input
                value={valuObj.value}
                type={props.type}
                placeholder={props.placeholder}
                className={props.className}
                onChange={changeHandler}
            />) :
            (<textarea
                placeholder={props.placeholder}
                className={props.className}
                onChange={changeHandler}
            />)
    return (
        <div>{element}</div>


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
import React, { useEffect, useReducer, useContext } from 'react'
import './InputComponent.css'
import validator from '../validators/validator';
import {  CmsUserContext} from '../../context/loginContext'


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
    const cmsuserContext = useContext(CmsUserContext)
    function changeHandler(e) {
        dispatch2({
            type: 'CHANGE',
            value: e.target.value,
            validPropIn: props.validPropTo,
        })
    }
    useEffect(() => {
     if (props.id === 'rname') {
            cmsuserContext.setValue1(valuObj.value)
            cmsuserContext.setFlag1(valuObj.isValid)
        } else if (props.id === 'rusername') {
            cmsuserContext.setValue2(valuObj.value)
            cmsuserContext.setFlag2(valuObj.isValid)
        } else if (props.id === 'rpassword') {
            cmsuserContext.setValue3(valuObj.value)
            cmsuserContext.setFlag3(valuObj.isValid)
        } else if (props.id === 'remail') {
            cmsuserContext.setValue4(valuObj.value)
            cmsuserContext.setFlag4(valuObj.isValid)
        }
        else if (props.id === 'phone') {
            cmsuserContext.setValue5(valuObj.value)
            cmsuserContext.setFlag5(valuObj.isValid)
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

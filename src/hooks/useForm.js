
import { useReducer } from "react";


const formReducer=(state,action)=>{
switch(action.type){
    case 'INPUT_CHANGE' :{
        let issssValidForm=true
        for(const inputId in state.inputRe){
            if (inputId===action.idDispatch ){
                state.isFormValidReh= state.isFormValidReh && action.isValidDispatch
            }else{
                state.isFormValidReh = state.isFormValidReh && state.inputRe[inputId].isValidDispatch
            }
        }
return {
    ...state,
    inputRe:{
        ...state.inputRe,
        [action.inputId]:{
            valuDispach:action.valuDispach,
            isValidDispatch:action.isValidDispatch 
        }
    },
    isFormValidRe:issssValidForm
}





    }default:{
        return state
    }
}

}


export const useForm=(initInputs,initIsFormIsValid)=>{
    const[formState,dispatch]=useReducer(formReducer,{
        inputRe:initInputs,
        isFormValidRe:initIsFormIsValid
    })


const onInputHandler=(id,inputValue,isValidInput)=>{
dispatch({
type:'INPUT_CHANGE',
valuDispach:inputValue,
isValidDispatch:isValidInput,
idDispatch:id
})
}

return [formState,onInputHandler]




}

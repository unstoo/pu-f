import * as React from 'react'
import style from './style.module.css'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const ToActivate: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const goNextHandler = () => {
        dispatch({ type: dispatchType+'.next' })   
    }
    
    const exitHandler = () => {
        dispatch({ type: dispatchType+'.dashboard' })   
    }
    const goBackHandler = () => {
        dispatch({ type: dispatchType+'.back' })   
    }

    return (
        <div className={style.ToActivate}> 
            <div className={style.Header}>
            <p>To activate your account, let's quickly confirm that you are really { defValue.firstName || 'you'}</p>
            </div>
            
            <div className={style.Controls}>
                <button type="button" onClick={goBackHandler}>Back</button>
                <button type="button" onClick={exitHandler}>Not now</button>
                <button type="button" className={style.LongerButton} onClick={goNextHandler}>Verify identity</button>
            </div>
        </div>
    )
}

export default ToActivate

import * as React from 'react'
import style from './style.module.css'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const SMSCodeInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [value, setValue] = React.useState(defValue.value)
    const [error, setError] = React.useState('')

    if (defValue.error) {
        setError(defValue.error)
        defValue.error = ''
    }

    const onChange = (e: any) => {
        console.log(e.target.value);
        
        const {value} = e.target
        if (e.target.value == "" || e.target.value.match(/^[1-9]\d*\.?\d*$/)) setValue(value)
        if (error) setError('')
    }

    const clickHandler = (e: any) => {
        e.preventDefault()
        dispatch({ type: dispatchType, value: value })
    }

    return (
        <div className={style.SMSCodeStep}>
            <h2>Input SMS code</h2>
            <p>We send you a message with a code to approve your phone.</p>
            { !error && <label>Input SMS code</label> }
            { error && <label style={errStyle}>{error}</label> }
            <input className={style["SMSCodeStep-Input"]} onChange={onChange} value={value} type="number" />
            { !error && <button type="button" onClick={clickHandler}>Verify SMS</button> }
            { error && <button type="button" onClick={clickHandler} disabled>Verify SMS</button> }
        </div>
    )
}

const errStyle = {color: "red", opacity: "0.8"}

export default SMSCodeInput

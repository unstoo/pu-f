import * as React from 'react'
import style from './style.module.css'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const EmailInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [value, setValue] = React.useState(defValue)
    const [error, setError] = React.useState('')

    const changeHandler = (e: any) => {
        const {value} = e.target
        if (value) setValue(value)
        if (error && validateEmail(value)) {
            setError('')
        }
    }

    const clickHandler = (e: any) => {
        const { name } = e.target
        const isEmailFormatValid = true 
        // validateEmail(value)

        if (isEmailFormatValid)
            dispatch({ type: dispatchType + '.' + name, value })
        else
            setError('Please check format')
    }

    return (
         <div className={style.Component}>
             <div className={style.Header}>
                <h2>ProveBusinessAddressInput</h2>
            </div>
            { !error && <label>A Label</label> }
            { error && <label style={errStyle}>{error}</label> }
            <input type="text" onChange={changeHandler}/>
            <div className={style.Controls}>
                <button name="back" type="button" onClick={clickHandler}>Back</button>
                { !error && <button name="next" type="button" onClick={clickHandler}>Next</button> }
                { error && <button name="next" type="button" onClick={clickHandler} disabled>Next</button> }
            </div>
        </div>
    )
}

function validateEmail(email:string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const errStyle = { color: "red", opacity: "0.8"}

export default EmailInput

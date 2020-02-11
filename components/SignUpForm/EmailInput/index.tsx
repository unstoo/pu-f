import * as React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const EmailInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [email, setEmail] = React.useState(defValue)
    const [error, setError] = React.useState('')

    const changeHandler = (e: any) => {
        const {value} = e.target
        if (value) setEmail(value)
        if (error && validateEmail(value)) {
            setError('')
        }
    }

    const clickHandler = () => {
        const isEmailFormatValid = validateEmail(email)

        if (isEmailFormatValid)
            dispatch({ type: dispatchType, value: email })
        else
            setError('Please check email format')

    }

    return (
         <div className="EmailInput">
            { !error && <label>Input email</label> }
            { error && <label style={errStyle}>{error}</label> }
            <input type="email" onChange={changeHandler}/>
            { !error && <button type="button" onClick={clickHandler}>Save email</button> }
            { error && <button type="button" onClick={clickHandler} disabled>Save email</button> }
            
        </div>
    )
}

function validateEmail(email:string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const errStyle = { color: "red", opacity: "0.8"}

export default EmailInput

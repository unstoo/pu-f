import React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const PasswordInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [password, setPassword] = React.useState(defValue)
    const [repassword, setRepassword] = React.useState(defValue)
    const [errorTooShort, setErrorTooShort] = React.useState('')
    const [errorDoesntMatch, setErrorDoesntMatch] = React.useState('')
    const [errorTooSimple, setErrorTooSimple] = React.useState('')

    const passwordChangeHandler = (e: any) => {
        const {value} = e.target
        if (value) setPassword(value)
        setErrorTooShort('')
        setErrorTooSimple('')
    }

    const repasswordChangeHandler = (e: any) => {
        const {value} = e.target
        if (value) setRepassword(value)
         setErrorDoesntMatch('')
 
    }

    const passwordBlurHandler = () => {
        if (password.length < 8) {
            setErrorTooShort('Password\'s too short')
            return
        }

        if (!(/[0-9]/.test(password) && /[a-z]|[A-Z]/.test(password))) {
            setErrorTooSimple('Password must containt letters and digits.')
            return
        }

        if (password !== repassword) {
            setErrorDoesntMatch('Password doesn\'t match')
            return
        }
    }

    const repasswordBlurHandler = () => {
        if (password !== repassword) {
            setErrorDoesntMatch('Password doesn\'t match')
        }
    }

    const clickHandler = () => { 
        if (password.length < 8) {
            setErrorTooShort('Password\'s too short')
            return
        } 
        
        if (!(/[0-9]/.test(password) && /[a-z]|[A-Z]/.test(password))) {
            setErrorTooSimple('Password must containt letters and digits.')
            return
        }
        
        if (password !== repassword) {
            setErrorDoesntMatch('Password doesn\'t match')
        }

        else if (password === repassword) {
            dispatch({ type: dispatchType, value: password })
        }
    }

    return (
         <div className="PasswordStep">
            <h2>Set password</h2>

            { !errorTooShort && !errorTooSimple && <label>Password</label> }
            { errorTooShort && <label style={errStyle}>{errorTooShort}</label> }
            { errorTooSimple && <label style={errStyle}>{errorTooSimple}</label> }
            <input type="password" onBlur={passwordBlurHandler} onChange={passwordChangeHandler}/>
            
            { !errorDoesntMatch && <label>Repeat password</label> }
            { errorDoesntMatch && <label style={errStyle}>{errorDoesntMatch}</label> }
            <input type="password" onBlur={repasswordBlurHandler} onChange={repasswordChangeHandler}/>

            { !errorDoesntMatch && !errorTooShort && !errorTooSimple
            &&  <button type="button" onClick={clickHandler}>Set password ></button> }
            { (errorDoesntMatch || errorTooShort || errorTooSimple) &&
              <button type="button" onClick={clickHandler} style={disabledStyle} disabled>Set password ></button> }
        </div>
    )
}

const errStyle = {color: "red", opacity: "0.8"}
const disabledStyle = {backgroundColor: "silver", opacity: "0.8"}

export default PasswordInput

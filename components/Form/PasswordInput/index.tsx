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
        if (errorTooShort) setErrorTooShort('')
        if (errorTooShort) setErrorTooSimple('')
    }

    const repasswordChangeHandler = (e: any) => {
        const {value} = e.target
        if (value) setRepassword(value)
        if (errorDoesntMatch) setErrorDoesntMatch('')
 
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
            { errorTooShort && <label>{errorTooShort}</label> }
            { errorTooSimple && <label>{errorTooSimple}</label> }
            <input type="password" onChange={passwordChangeHandler}/>
            
            { !errorDoesntMatch && <label>Repeat password</label> }
            { errorDoesntMatch && <label style={{color: "red", opacity: "0.8"}}>{errorDoesntMatch}</label> }
            <input type="password" onChange={repasswordChangeHandler}/>

            { !errorDoesntMatch && !errorTooShort
            &&  <button type="button" onClick={clickHandler}>Set password ></button> }
            { (errorDoesntMatch || errorTooShort) &&
              <button type="button" onClick={clickHandler} disabled>Set password ></button> }
        </div>
    )
}

export default PasswordInput

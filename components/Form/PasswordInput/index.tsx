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

    const passwordChangeHandler = (e: any) => {
        const {value} = e.target
        if (value) setPassword(value)
    }

    const repasswordChangeHandler = (e: any) => {
        const {value} = e.target
        if (value) setRepassword(value)
    }

    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (password === repassword) {
            dispatch({ type: dispatchType, value: password })
        } else {
            alert('passwords do not match')
        }
    }

    return (
         <div className="PasswordStep">
            <h2>Set password</h2>
            <label>Password</label>
            <input type="password" onChange={passwordChangeHandler}/>
            <label>Repeat password</label>
            <input type="password" onChange={repasswordChangeHandler}/>
            <button type="button" onClick={clickHandler}>Set password ></button>
        </div>
    )
}

export default PasswordInput

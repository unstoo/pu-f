import * as React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const EmailInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [email, setEmail] = React.useState(defValue)

    const changeHandler = (e: any) => {
        const {value} = e.target
        if (value) setEmail(value)
    }

    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch({ type: dispatchType, value: email })
    }

    return (
         <div className="EmailStep">
            <label>E-mail</label>
            <input type="email" onChange={changeHandler}/>
            <button type="button" onClick={clickHandler}>Save email</button>
        </div>
    )
}

export default EmailInput

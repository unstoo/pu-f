import * as React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string,
    filesCount? : number,
    header?: string
}

const AccountTypeInput: React.FC<StepProps> = ({ dispatch, dispatchType }) => {
    const clickHandler = (e: any) => {
        e.preventDefault()
        dispatch({ type: dispatchType, value: e.target.value })
    }

    return (
         <div className="AccountTypeStep">
            <h2>Choose your account type</h2>
            <div className="AccountTypeStep-OptionsRow">
                <button type="button" onClick={clickHandler} value="Personal">Personal</button>
                <button type="button" onClick={clickHandler} value="Business">Business</button>
                <button type="button" onClick={clickHandler} value="Freelance">Freelance</button>
            </div>
        </div>
    )
}


export default AccountTypeInput

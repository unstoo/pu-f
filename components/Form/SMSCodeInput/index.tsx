import * as React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const SMSCodeInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [value, setValue] = React.useState(defValue)

    const onChange = (e: any) => {
        const {value} = e.target
        if (value) setValue(value)
    }

    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch({ type: dispatchType, value: value })
    }

    return (
        <div className="SMSCodeStep">
            <h2>Input SMS code</h2>
            <p>We send you a message with a code to approve your phone.</p>
            <label>Input SMS code</label>
            <input className="SMSCodeStep-Input" onChange={onChange} value={value} type="text" min="0" max="0" />
            <button type="button" onClick={clickHandler}>Verify SMS</button>
        </div>
    )
}

export default SMSCodeInput

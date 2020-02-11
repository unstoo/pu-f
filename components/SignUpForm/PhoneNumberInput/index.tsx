import * as React from 'react'
// @ts-ignore
import PhoneInput from 'react-phone-input-2'

function onlyDigitsInString(value: string) {

    const splitPhone = value.split('')
    let onlyDigits = ''
    splitPhone.forEach((symbol: string) => {
        const parsedSymbol = Number.parseInt(symbol)
        isNaN(parsedSymbol) ? '' : onlyDigits += symbol
    })

    return onlyDigits
}


type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const PhoneNumberInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [value, setValue] = React.useState(defValue.value)
    const [error, setError] = React.useState('')

    if (defValue.error) {
        setError(defValue.error)
        defValue.error = ''
    }

    const onChange = (e: any) => {
        const value = e
        if (value) setValue(value)
        if (error) setError('')
    }

    const clickHandler = () => {
        const digits = onlyDigitsInString(value)

        if (digits.length < 2) {
            setError('Incorrect number')
        } else {
            dispatch({ type: dispatchType, value: digits })
        }
    }
    
    return (
        <div className="phoneNumberInput"> 
            <h2>Get started with PAYSUNION in a few seconds.</h2>
            <p>We'll send you a message with a code to approve your phone.</p> 
            {!error && <label>Phone number</label>}
            {error  && <label className="phoneNumberInput-error">{error}</label>}
            <div className="phoneInput2">
                <PhoneInput
                    country={'ru'}
                    value={value}
                    onChange={onChange}
                />
            </div>
            {!error && <button type="button" onClick={clickHandler}>Sign Up ></button>}
            {error && <button type="button" onClick={clickHandler} disabled>Sign Up ></button>}
        </div>
    )
}

export default PhoneNumberInput

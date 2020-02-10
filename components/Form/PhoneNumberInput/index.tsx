import * as React from 'react'
// @ts-ignore
import PhoneInput from 'react-phone-input-2'
// @ts-ignore
// import PhoneInputOne from 'react-phone-number-input'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const PhoneNumberInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [value, setValue] = React.useState(defValue)
    const [error, setError] = React.useState('')

    const onChange = (e: any) => {
        const value = e.target.value
        if (value) setValue(value)
        if (error) setError('')
    }

    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const splitPhone = value.split('')
        let valueToSend = ''
        splitPhone.forEach((symbol: string) => {
            const parsedSymbol = Number.parseInt(symbol)
            isNaN(parsedSymbol) ? '' : valueToSend += symbol
        });

        if (valueToSend.length < 3) {
            setError('Incorrect number')
        } else {
            dispatch({ type: dispatchType, value: valueToSend })
        }
    }

    return (
        <div className="phoneNumberInput"> 
            <h2>Get started with PAYSUNION in a few seconds.</h2>
            <p>We'll send you a message with a code to approve your phone.</p> 
            {error === '' && <label>Phone number</label>}
            {error && <label className="phoneNumberInput-error">{error}</label>}
            <input onChange={onChange} value={value} type="text" min="0" max="0" />
            {/* <div className="phoneInput2">
                <PhoneInput
                    country={'us'}
                    value={value}
                    onChange={onChange}
                />
            </div> */}
            {/* <PhoneInputOne onChange={onChange} /> */}
            <button type="button" onClick={clickHandler}>Sign Up ></button>
        </div>
    )
}

export default PhoneNumberInput

import * as React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const AddressDataStep: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [country, setCountry] = React.useState(defValue.country)
    const [state, setState] = React.useState(defValue.firstName)
    const [city, setCity] = React.useState(defValue.lastName)
    const [zip, setZip] = React.useState('')
    const [addressOne, setAddressOne] = React.useState('')
    const [addressTwo, setAddressTwo] = React.useState('')
    const [goodToSend, setGoodToSend] = React.useState(false)

    const addressHandler = (e: any) => {
        const {value, name}  = e.target

        if (name === 'country') setCountry(value)
        if (name === 'state') setState(value)
        if (name === 'city') setCity(value)
        if (name === 'zip') setZip(value)
        if (name === 'addressone') setAddressOne(value)
        if (name === 'addresstwo') setAddressTwo(value)

        
        checkGoodToSend()
    }

    const checkGoodToSend = () => { 
        setGoodToSend(true)
    }

    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (goodToSend) {
            dispatch({ type: dispatchType, value: {
                country,
                state,
                city,
                zip,
                addressOne,
                addressTwo
           }})
        }
    }

    return (
         <> 
            <h2>Your home address</h2>
            <p>Do not specify a PO Box</p>
            <label>Country</label>
            <select name="country" onChange={addressHandler}>
                <option>Russia</option>
                <option>United States</option>
                <option>United Kingdom</option>
            </select>
            <label>State</label>
            <input type="text" name="state" onChange={addressHandler}/>
            <label>City</label>
            <input type="text" name="city" onChange={addressHandler}/>
            <label>ZIP</label>
            <input type="text" name="zip" onChange={addressHandler}/>
            <label>Address 1</label>
            <input type="text" name="addressone" onChange={addressHandler}/>
            <label>Address 2</label>
            <input type="text" name="addresstwo" onChange={addressHandler}/>
            
            <button type="button" onClick={clickHandler}>Back</button>
            <button type="button" onClick={clickHandler}>Next</button>
        </>
    )
}

export default AddressDataStep

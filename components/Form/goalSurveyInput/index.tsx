import * as React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const IdDataStep: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
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
    }

    const checkGoodToSend = () => { 
        setGoodToSend(true)
    }

    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        checkGoodToSend()

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
            <h2>Your ID/passport data</h2>
            <label>ID date issue</label>
            <input type="text" name="state" onChange={addressHandler}/>
            <label>ID expiration date (optionally)</label>
            <input type="text" name="city" onChange={addressHandler}/>
            <label>ID division coe (optionally)</label>
            <input type="text" name="zip" onChange={addressHandler}/>
            <label>ID issuer</label>
            <input type="text" name="addressone" onChange={addressHandler}/>
            <label>ID series (optionally)</label>
            <input type="text" name="addresstwo" onChange={addressHandler}/>
            <label>ID number</label>
            <input type="text" name="addresstwo" onChange={addressHandler}/>
            <label>Sex</label>
            <input type="text" name="addresstwo" onChange={addressHandler}/>
            
            <button type="button" onClick={clickHandler}>Back</button>
            <button type="button" onClick={clickHandler}>Next</button>
        </>
    )
}

export default IdDataStep

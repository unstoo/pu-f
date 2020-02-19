import * as React from 'react'
import style from './style.module.css'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const BusinessInfoInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [city, setCity] = React.useState(defValue.city)
    const [zip, setZip] = React.useState(defValue.zip)
    const [addressOne, setAddressOne] = React.useState(defValue.addressOne)
    const [addressTwo, setAddressTwo] = React.useState(defValue.addressTwo)

    const addressHandler = (e: any) => {
        const {value, name}  = e.target

        if (name === 'city') setCity(value)
        if (name === 'zip') setZip(value)
        if (name === 'addressone') setAddressOne(value)
        if (name === 'addresstwo') setAddressTwo(value)
    }

    const clickHandler = (e: any) => { 
		const value = {
            city,
            zip,
            addressOne,
            addressTwo
        }
		     
        dispatch({ type: dispatchType + '.' + e.target.name, value }) 
    }

    return (
         <div className={style.BusinessInfo}> 
            <div className={style.Header}>
                <h2>Sign up your business to PAYSUNION</h2>
            </div>
            
            <div className={style.InputBlock}>
                <label>Legal name</label>
                <input type="text" name="city" value={city} onChange={addressHandler}/>
            </div>
            <div className={style.InputBlock}>
                <label>Trading name (optional)</label>
                <input type="text" name="zip" value={zip} onChange={addressHandler}/>
            </div>
            <div className={style.InputBlock}>
                <label>Company registration code</label>
                <input type="text" name="addressone" value={addressOne} onChange={addressHandler}/>
            </div>
            <div className={style.InputBlock}>
                <label>For other at business type</label>
                <input type="text" name="addresstwo" value={addressTwo} onChange={addressHandler}/>
            </div>
            
            <div className={style.InputBlock}>
                <button type="button" name="back" onClick={clickHandler}>Back</button>
                <button type="button" name="next" onClick={clickHandler}>Next</button>
            </div>
        </div>
    )
}

export default BusinessInfoInput

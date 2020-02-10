import * as React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const PersonalDataForm: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [firstName, setFirstName] = React.useState(defValue.firstName)
    const [lastName, setLastName] = React.useState(defValue.lastName)
    // const [patrName, setPatrName] = React.useState(defValue.patrName)
    const [day, setDay] = React.useState('')
    const [month, setMonth] = React.useState('')
    const [year, setYear] = React.useState('')
    const [country, setCountry] = React.useState(defValue.country)
    const [goodToSend, setGoodToSend] = React.useState(false)

    const firstNameHandler = (e: any) => {
        const {value} = e.target
        if (value) setFirstName(value)
        checkGoodToSend()
    }

    const lastNameHandler = (e: any) => {
        const {value} = e.target
        if (value) setLastName(value)
    }

    const countryHandler = (e: any) => {
        const {value} = e.target
        if (value) setCountry(value)
    }

    const dobHandler = (e: any) => {
        const {value, name}  = e.target

        if (name === 'day') setDay(value)
        if (name === 'month') setMonth(value)
        if (name === 'year') setYear(value)
    }

    const checkGoodToSend = () => { 
        setGoodToSend(true)
    }

    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        
        if (goodToSend) {
            dispatch({ type: dispatchType, value: {
                firstName,
                lastName,
                dob: day + '-' + month + '-' + year,
                country
           }})
        }
    }

    return (
         <div className="PersonalData">
             <h2>Your personal data</h2>
            <label>First Name</label>
            <input type="text" name="firstname" onChange={firstNameHandler}/>
            <label>Last Name</label>
            <input type="text" name="lastname" onChange={lastNameHandler}/>
            <div className="birthdate">
                <div className='birthdateHeader'>Birthdate</div>
                <div className='birthdateInput'>
                    <div className='birthdateInput-day'>
                        <label>Day</label>
                        <input type="text" name="day" minLength={1} maxLength={2} size={2} onChange={dobHandler} />
                    </div>
                    <div>
                        <label className='birthdateInput-month'>Month</label>
                        <input type="text" name="month" minLength={1} maxLength={2} size={2} onChange={dobHandler} />
                    </div>
                    <div>
                        <label className='birthdateInput-year'>Year</label> 
                        <input type="number" name="year" minLength={4} maxLength={4} size={4} onChange={dobHandler} />
                    </div>
                </div>
            </div>
            <label>Country</label>
            <select name="country" onChange={countryHandler}>
                <option>Russia</option>
                <option>United States</option>
                <option>United Kingdom</option>
            </select>
            <button type="button" onClick={clickHandler}>Next</button>
        </div>
    )
}

export default PersonalDataForm

import * as React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const IdDataInputEu: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    defValue;
    const [idDateIssue, setIdDateIssue] = React.useState('')
    const [idExpirationDate, setIdExpirationDate] = React.useState('')
    const [idDivsionCode, setIdDivsionCode] = React.useState('')
    const [idIssuer, setIdIssuer] = React.useState('')
    const [idSeries, setIdSeries] = React.useState('')
    const [idNumber, setIdNumber] = React.useState('')
    const [sex, setSex] = React.useState('')

    const [goodToSend, setGoodToSend] = React.useState(false)

    const idDataHandler = (e: any) => {
        const {value, name}  = e.target

        if (name === 'idDateIssue') setIdDateIssue(value)
        if (name === 'idExpirationDate') setIdExpirationDate(value)
        if (name === 'idDivsionCode') setIdDivsionCode(value)
        if (name === 'idIssuer') setIdIssuer(value)
        if (name === 'idSeries') setIdSeries(value)
        if (name === 'idNumber') setIdNumber(value)
        if (name === 'sex') setSex(value)
        
        checkGoodToSend()
    }

    const checkGoodToSend = () => { 
        setGoodToSend(true)
    }

    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()

        if (goodToSend) {
            dispatch({ type: dispatchType, value: {
                idDateIssue,
                idExpirationDate,
                idDivsionCode,
                idIssuer,
                idSeries,
                idNumber,
                sex,
           }})
        }
    }

    return (
         <> 
            <h2>Your ID/passport data</h2>
            <label>ID number</label>
            <input type="text" name="idnumber" onChange={idDataHandler}/>
            <label>Sex</label>
            <input type="text" name="sex" onChange={idDataHandler}/>
            
            <button type="button" name="back" onClick={clickHandler}>Back</button>
            <button type="button" name="next" onClick={clickHandler}>Next</button>
        </>
    )
}

export default IdDataInputEu

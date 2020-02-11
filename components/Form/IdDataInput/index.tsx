import * as React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const IdDataInput: React.FC<StepProps> = ({ dispatch, dispatchType }) => {
    const [idDateIssue, setIdDateIssue] = React.useState('')
    const [idExpirationDate, setIdExpirationDate] = React.useState('')
    const [idDivsionCode, setIdDivsionCode] = React.useState('')
    const [idIssuer, setIdIssuer] = React.useState('')
    const [idSeries, setIdSeries] = React.useState('')
    const [idNumber, setIdNumber] = React.useState('')
    const [sex, setSex] = React.useState('')

    const idDataHandler = (e: any) => {
        const {value, name}  = e.target
        if (name === 'iddateissue') setIdDateIssue(value)
        if (name === 'idexpirationdata') setIdExpirationDate(value)
        if (name === 'iddivisioncode') setIdDivsionCode(value)
        if (name === 'idissuer') setIdIssuer(value)
        if (name === 'idseries') setIdSeries(value)
        if (name === 'idnumber') setIdNumber(value)
        if (name === 'sex') setSex(value)
    
    }

    const clickHandler = () => {
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

    return (
         <div className="IdData"> 
            <div>
                <h2>Your ID/passport data</h2>
            </div>
            <div>
                <label>ID date issue</label>
                <input type="text" name="iddateissue" onChange={idDataHandler}/>
                
            </div>
            <div>
                <label>ID expiration time (optionally)</label>
                <input type="text" name="idexpirationdata" onChange={idDataHandler}/>
            </div>
            <div>
                <label>ID division code</label>
                <input type="text" name="iddivisioncode" onChange={idDataHandler}/>
            </div>
            <div>
                <label>ID issuer</label>
                <input type="text" name="idissuer" onChange={idDataHandler}/>
            </div>
            <div>
                <label>ID series</label>
                <input type="text" name="idseries" onChange={idDataHandler}/>
            </div>
            <div>
                <label>ID number</label>
                <input type="text" name="idnumber" onChange={idDataHandler}/>
            </div>
            <div>
                <label>Sex</label>
                <input type="text" name="sex" onChange={idDataHandler}/>
            </div>

            <div className="Controls">
                <button type="button" name="back" onClick={clickHandler}>Back</button>
                <button type="button" name="next" onClick={clickHandler}>Next</button>
            </div>
        </div>
    )
}

export default IdDataInput

import * as React from 'react'
import style from './style.module.css'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const IdDataInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [idDateIssue, setIssueDate] = React.useState(defValue.idDateIssue)
    const [idDateExpiration, setExpirationDate] = React.useState(defValue.idDateExpiration)
    const [idDivsionCode, setIdDivsionCode] = React.useState(defValue.idDateDivsionCode)
    const [idIssuer, setIdIssuer] = React.useState(defValue.idIssuer)
    const [idSeries, setIdSeries] = React.useState(defValue.idSeries)
    const [idNumber, setIdNumber] = React.useState(defValue.idNumber)
    const [sex, setSex] = React.useState(defValue.sex)

    const idDataHandler = (e: any) => {
        const {value, name}  = e.target
        if (name === 'iddateissue') setIssueDate(value)
        if (name === 'iddateexpiration') setExpirationDate(value)
        if (name === 'iddivisioncode') setIdDivsionCode(value)
        if (name === 'idissuer') setIdIssuer(value)
        if (name === 'idseries') setIdSeries(value)
        if (name === 'idnumber') setIdNumber(value)
        if (name === 'sex') setSex(value)
    
    }

    const clickHandler = (e: any) => {

        const value = {
            idDateIssue,
            idDateExpiration,
            idDivsionCode,
            idIssuer,
            idSeries,
            idNumber,
            sex 
        }

        dispatch({ type: dispatchType + '.' + e.target.name, value})
    }

    return (
         <div className={style.IdData}> 
            <div className={style.Header}>
                <h2>Your ID/passport data</h2>
            </div>
            <div className={style.InputBlock}>
                <label>ID date of issue</label>
                <input type="text" name="iddateissue" value={idDateIssue} onChange={idDataHandler}/>
            </div>
            <div className={style.InputBlock}>
                <label>ID date of expiration (optional)</label>
                <input type="text" name="iddateexpiration" value={idDateExpiration} onChange={idDataHandler}/>
            </div>
            <div className={style.InputBlock}>
                <label>ID division code</label>
                <input type="text" name="iddivisioncode" value={idDivsionCode} onChange={idDataHandler}/>
            </div>
            <div className={style.InputBlock}>
                <label>ID issuer</label>
                <input type="text" name="idissuer" value={idIssuer} onChange={idDataHandler}/>
            </div>
            <div className={style.InputBlock}>
                <label>ID series</label>
                <input type="text" name="idseries" value={idSeries} onChange={idDataHandler}/>
            </div>
            <div className={style.InputBlock}>
                <label>ID number</label>
                <input type="text" name="idnumber" value={idNumber} onChange={idDataHandler}/>
            </div>
            <div className={style.InputBlock}>
                <label>Sex</label>
                <input type="text" name="sex" value={sex} onChange={idDataHandler}/>
            </div>

            <div className={style.Controls}>
                <button type="button" name="back" onClick={clickHandler}>Back</button>
                <button type="button" name="next" onClick={clickHandler}>Next</button>
            </div>
        </div>
    )
}

export default IdDataInput

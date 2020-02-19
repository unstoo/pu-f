import * as React from 'react'
import style from './style.module.css'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const IdTypeSelector: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [idType, setIdType] = React.useState(defValue.value ||'passport')
    const selectHandler = (e: any) => {
        const { value }  = e.target
        setIdType(value)
    }

    const clickHandler = (e: any) => {
        dispatch({ type: dispatchType + '.' + e.target.name, value: idType})
    }

    return (
         <div className={style.IdType}> 
            <div className={style.Header}>
                <h2>Provide ID</h2>
                <p>Please be prepared to upload the following documents:</p>
                <br/>
                <p>
                    <b>Government ID</b><br/>
                    Colorful, clear and readable<br/>
                    More than one month until expiration
                </p>
                <br/>
                <p>
                    <b>Selfie with ID</b><br/>
                    Clear photo taken on your webcam or mobile phone<br/>
                    No generic photos (no passport or Facebook photos)<br/>
                    No old or unclear selfies
                </p>
            </div>
            <div className={style.InputBlock}>
                <label>Type of ID</label>
                <select name="idType" onChange={selectHandler} value={idType}>
                    <option value="passport">Passport</option>
                    <option value="driverslicense">Driver's license</option>
                </select>
            </div>
            <div className={style.Controls}>
                <button type="button" name="back" onClick={clickHandler}>Back</button>
                <button type="button" name="next" onClick={clickHandler}>Next</button>
            </div>
        </div>
    )
}

export default IdTypeSelector

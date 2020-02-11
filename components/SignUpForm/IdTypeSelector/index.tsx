import * as React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const IdTypeSelector: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [idType, setIdType] = React.useState('driverslicense')
    const selectHandler = (e: any) => {
        defValue;
        const { value }  = e.target
        setIdType(value)
    }

    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch({ type: dispatchType, value: idType})
    }

    return (
         <div className="IdType"> 
            <div className="Header">
                <h2>Provide ID</h2>
                <p>Please be prepared to upload the following documents:</p>
                <br/>
                <p>
                    Government ID<br/>
                    Colorful, clear and readable<br/>
                    More than pne month until expirt
                </p>
                <br/>
                <p>
                    Selfie with ID<br/>
                    Clear photo taken on your webcam or mobile phone<br/>
                    No generic photos (no passport or Facebook photos)<br/>
                    No old or unclear selfies
                </p>
            </div>
            <div className="InputBlock">
                <label>Type of ID</label>
                <select name="idType" onChange={selectHandler} value={idType}>
                    <option value="driverslicense">Driver's license</option>
                    <option value="passport">Passport</option>
                </select>
            </div>
            <div className="Controls">
                <button type="button" onClick={() => {}}>Back</button>
                <button type="button" onClick={clickHandler}>Next</button>
            </div>
        </div>
    )
}

export default IdTypeSelector

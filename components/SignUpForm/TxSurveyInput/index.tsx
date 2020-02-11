import * as React from 'react'


type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const TxSurveryInput: React.FC<StepProps> = ({ dispatch, dispatchType }) => {
    const [txVolume, setTxVolume] = React.useState()
    const [txCount, stTxCount] = React.useState()
    const [singleMaxLimitTx, setTxMaxLimit] = React.useState()

    const changeHandler = (e: any) => {
        const {value, name}  = e.target

        if (name === 'txVolume') setTxVolume(value)
        if (name === 'txCount') stTxCount(value)
        if (name === 'singleMaxLimitTx') setTxMaxLimit(value)
    }

    const clickHandler = () => {
        dispatch({ type: dispatchType, value: {
            txVolume,
            txCount,
            singleMaxLimitTx
        }})   
    }

    return (
        <div className="TxSurvey"> 
        <div className="Header">
            <h2>Confirm your transactional information</h2>
            <p>This is just for indicative purpose and does not need to be precise</p>
        </div>
        <div className="InputBlock">
            <label>Monthly volume of transfers</label>
            <select name="txVolume" onChange={changeHandler}>
                { volumesList.map(o => <option key={'txSurvey-' + o.value} value={o.value}>{o.label}</option>)}
            </select>
        </div>

        <div className="InputBlock">
            <label>Number of payments per month</label>
            <select name="txCount" onChange={changeHandler}>
                <option value={"<10"}>{"< 10"}</option>
                <option value={">10"}>{"> 10"}</option>
            </select>
        </div>

        <div className="InputBlock">
            <label>Maximum single payment</label>
            <input type="number" name="singleMaxLimitTx" onChange={changeHandler}/>
        </div>
        
        <div className="Controls">
            <button type="button" onClick={clickHandler}>Back</button>
            <button type="button" onClick={clickHandler}>Next</button>
        </div>
    </div>
    )
}

const volumesList = [
    {label: "EUR 1 000 - 10 000", value: "1000-10000"},
    {label: "EUR 100 - 1 000", value: "100-1000"},
    {label: "EUR 10 000+", value: "10000+"}
]

export default TxSurveryInput

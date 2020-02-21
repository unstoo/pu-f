import * as React from 'react'
import style from './style.module.css'


type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const TxSurveryInput: React.FC<StepProps> = ({ dispatch, dispatchType }) => {
    const [txVolume, setTxVolume] = React.useState(volumesList[0])
    const [txCount, stTxCount] = React.useState('<10')
    const [singleMaxLimitTx, setTxMaxLimit] = React.useState('0')

    const changeHandler = (e: any) => {
        const {value, name}  = e.target

        if (name === 'txVolume') setTxVolume(value)
        if (name === 'txCount') stTxCount(value)
        if (name === 'singleMaxLimitTx') setTxMaxLimit(value)
    }

    const clickHandler = (e: any) => {
        const { name } = e.target
        dispatch({ type: dispatchType + '.' + name, value: {
            txVolume,
            txCount,
            singleMaxLimitTx
        }})   
    }

    return (
        <div className={style.TxSurvey}> 
        <div className={style.Header}>
            <h2>Confirm your transactional information</h2>
            <p>This is just for indicative purpose and does not need to be precise</p>
        </div>
        <div className={style.InputBlock}>
            <label>Monthly volume of transfers</label>
            <select name="txVolume" onChange={changeHandler}>
                { volumesList.map(o => <option key={'txSurvey-' + o.value} value={o.value}>{o.label}</option>)}
            </select>
        </div>

        <div className={style.InputBlock}>
            <label>Number of payments per month</label>
            <select name="txCount" onChange={changeHandler}>
                <option value={"<10"}>{"< 10"}</option>
                <option value={">10"}>{"> 10"}</option>
            </select>
        </div>

        <div className={style.InputBlock}>
            <label>Maximum single payment</label>
            <input type="number" name="singleMaxLimitTx" onChange={changeHandler}/>
        </div>
        
        <div className={style.Controls}>
            <button type="button" name="back" onClick={clickHandler}>Back</button>
            <button type="button" name="next" onClick={clickHandler}>Next</button>
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

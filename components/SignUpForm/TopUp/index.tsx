import * as React from 'react'
import style from './style.module.css'


type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const TopUp: React.FC<StepProps> = ({ dispatch, dispatchType }) => {


    const goNext = () => {
        dispatch({ type: dispatchType+'.next' })   
    }
    const Deposit = () => {
        dispatch({ type: dispatchType+'.deposit' })   
    }
    const goBack = () => {
        dispatch({ type: dispatchType+'.back' })   
    }

    return (
        <div className={style.TopUp}> 
            <div className={style.Header}>
                <h2>Top up your account for 10 EUR or more</h2>
                <p className={style.Paragraph}>To activate your account you need to top it up. You'll be able to spend or withdraw this money.</p>
            </div>
            
            <div className={style.Controls}>
                <button type="button" onClick={goBack}>Back</button>
                <button type="button" onClick={goNext}>Not now</button>
                <button type="button" onClick={Deposit}>Top up</button>
            </div>
        </div>
    )
}

export default TopUp

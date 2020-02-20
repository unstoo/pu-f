import * as React from 'react'
import style from './style.module.css'


type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const GoalSurveryInput: React.FC<StepProps> = ({ dispatch, dispatchType }) => {
    const [goal, setGoal] = React.useState()

    const changeHandler = (e: any) => {
        const {value}  = e.target
        setGoal(value)
    }

    const clickHandler = (e: any) => {
        dispatch({ type: dispatchType + '.' + e.target.name, value: { goal }})   
    }

    return (
        <div className={style.GoalSurvey}> 
            <div className={style.Header}>
                <h2>What is the main reason you use PAYSUNION</h2>
            </div>

            <div className={style.InputBlock}>
                <div className={style.Radio}>
                    <input onChange={changeHandler} type="radio" name="goal" value="Daily Payments and Savings"/>
                    <label htmlFor="goal">Daily Payments and Savings</label>
                </div>
                <div className={style.Radio}>
                    <input onChange={changeHandler} type="radio" name="goal2" value="Travel Payments"/>
                    <label htmlFor="goal2">Travel Payments</label>
                </div>
                <div className={style.Radio}>
                    <input onChange={changeHandler} type="radio" name="goal3" value="Sending Money"/>
                    <label htmlFor="goal3">Sending Money</label>
                </div>
                <div className={style.Radio}>
                    <input onChange={changeHandler} type="radio" name="goal4" value="Access to financial assets"/>
                    <label htmlFor="goal4">Access to financial assets</label>
                </div>
            </div>
        
            <div className={style.Controls}>
                <button type="button" name="back" onClick={clickHandler}>Back</button>
                <button type="button" name="next" onClick={clickHandler}>Next</button>
            </div>    
        </div>)
}

// const volumesList = [
//     {label: "EUR 1 000 - 10 000", value: "1000-10000"},
//     {label: "EUR 100 - 1 000", value: "100-1000"},
//     {label: "EUR 10 000+", value: "10000+"}
// ]

export default GoalSurveryInput

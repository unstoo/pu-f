import * as React from 'react'
import style from './style.module.css'
const FREELANCE_BRANCH = 1;
const PERSONAL_BRANCH = 2;

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string,
    filesCount? : number,
    header?: string
}

const FreelanceBranches: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [branch, setBranch] = React.useState('')
    // const [def] = React.useState(defValue)

    const selectHandler = (e: any) => {
        setBranch(e.currentTarget.value)
    }

    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch({ type: dispatchType, value: branch })
    }

    // const options = ['Type of business', 'Personal profile']

    // const optionsUI = options.map(o => {
    //     let style;
    //     if (o.toLocaleLowerCase() === type) {
    //         style = selectedStyle
    //     } else {
    //         style = {}
    //     }

    //     return <button type="button" key={'FreelanceBranch-' + o} onClick={selectHandler} value={o.toLowerCase()} style={style}>{o}</button>
    // })

    return (
         <div className={style.FreelanceBranches}>
            <h2>Verify your account</h2>
            <div className={style.Options}>
                
                <button type="button" onClick={selectHandler} value={FREELANCE_BRANCH} style={style} disabled={defValue[0]}>
                    <div className={style.Label}>
                        <div className={style.Title}>Type of business</div>
                        <div className={style.Text}>Submit type of your business</div>
                    </div>
                    <div className={style.Status}>
                        {JSON.stringify(defValue[0])}
                    </div>
                    <div className={style.Icon}>icon</div>
                </button>
                <button type="button" onClick={selectHandler} value={PERSONAL_BRANCH} style={style} disabled={defValue[1]}>
                    <div className={style.Label}>
                        <div className={style.Title}>Personal profile</div>
                        <div className={style.Text}>Submit a quick photof of yourself and your ID</div>
                    </div>
                    <div className={style.Status}>
                    {JSON.stringify(defValue[1])}
                    </div>
                    <div className={style.Icon}>icon</div>
                </button>
            </div>
            <div className={style.Controls}>
                <button type="button" onClick={clickHandler}>Next</button>
            </div>
        </div>
    )
}

// const selectedStyle = { 
//     border: "2px solid rgba(130, 171, 179, 0.6)", 
//     boxShadow: "0px 2px 5px 0px rgba(165, 182, 185, 0.6)",
//     backgroundColor: "#ecf7f9"
// }

export default FreelanceBranches

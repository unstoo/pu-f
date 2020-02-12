import * as React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string,
    filesCount? : number,
    header?: string
}

const AccountTypeInput: React.FC<StepProps> = ({ dispatch, dispatchType }) => {
    const [type, setType] = React.useState('')

    const selectHandler = (e: any) => {
        debugger
        setType(e.target.value)
    }

    const clickHandler = (e: any) => {
        e.preventDefault()
        dispatch({ type: dispatchType, value: type})
    }

    const options = ['Personal', 'Business', 'Freelance']

    const optionsUI = options.map(o => {
        let style;
        if (o.toLocaleLowerCase() === type) {
            style = selectedStyle
        } else {
            style = {}
        }

        return <button type="button" key={'AccountTypeKey-' + o} onClick={selectHandler} value={o.toLowerCase()} style={style}>{o}</button>
    })

    return (
         <div className="AccountTypeStep">
            <h2>Choose your account type</h2>
            <div className="AccountTypeStep-OptionsRow">
                {/* <button type="button" onClick={selectHandler} value="personal">Personal</button>
                <button type="button" onClick={selectHandler} value="business" disabled>Business</button>
                <button type="button" onClick={selectHandler} value="freelance">Freelance</button> */}

                {optionsUI}
            </div>
            <div className="AccountTypeStep-next">
                <button type="button" onClick={clickHandler}>Next</button>
            </div>
        </div>
    )
}

const selectedStyle = { 
    border: "2px solid rgba(130, 171, 179, 0.6)", 
    boxShadow: "0px 2px 5px 0px rgba(165, 182, 185, 0.6)",
    backgroundColor: "#ecf7f9"
}

export default AccountTypeInput

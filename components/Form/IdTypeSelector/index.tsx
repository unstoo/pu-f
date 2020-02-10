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
         <> 
            <h2>Provide ID</h2>
            <p>Please be prepared to upload the following documents:</p>
            <p>Government ID</p>
            <p>Selfie with ID</p>
            
            <select name="idType" onChange={selectHandler}>
                <option value="driverslicense">Driver's license</option>
                <option value="passport">Passport</option>
            </select>
            
            <button type="button" onClick={() => {}}>Back</button>
            <button type="button" onClick={clickHandler}>Next</button>
        </>
    )
}

export default IdTypeSelector

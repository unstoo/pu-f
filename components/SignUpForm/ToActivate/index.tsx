import * as React from 'react'
import UserContext from '../../UserContext';

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const ToActivate: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const { user, setUser } = React.useContext(UserContext)

    const goNextHandler = () => {
        dispatch({ type: dispatchType+'.next' })   
    }
    const exitHandler = () => {
        setUser('Yevgeny Ozhegob')
        dispatch({ type: dispatchType+'.dashboard' })   
    }
    const goBackHandler = () => {
        dispatch({ type: dispatchType+'.back' })   
    }

    return (
        <div className="ToActivate"> 
            <div className="Header">
            <p>To activat your account, let's quickly confirm that you are really {user || defValue.firstName || 'you'}</p>
            </div>
            
            <div className="Controls">
                <button type="button" onClick={goBackHandler}>Back</button>
                <button type="button" onClick={exitHandler}>Not now</button>
                <button type="button" className="LongerButton" onClick={goNextHandler}>Verify identifity</button>
            </div>
        </div>
    )
}

export default ToActivate

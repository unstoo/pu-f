import * as React from 'react'
import axios from 'axios'
import reducer from './reducer'
import PhoneNumberInput from './PhoneNumberInput'
import SMSCodeInput from './SMSCodeInput'
import PasswordInput from './PasswordInput'
import EmailInput from './EmailInput'
import AccountTypeInput from './AccountTypeInput'
import PersonalDataInput from './PersonalDataInput'
// import AddressDataInput from './AddressDataInput'
// import IdTypeSelector from './IdTypeSelector'
import IdDataInput from './IdDataInput'
import IdDataInputEu from './IdDataInputEu'
import FileInput from './FileInput'
import TxSurveyInput from './TxSurveyInput'
import GoalSurveyInput from './GoalSurveyInput'
import TopUp from './TopUp'
import ToActivate from './ToActivate'

type CurrentPageProps = {
    pageNumber: number, 
    validationScheme: any, 
    defValue?: any,
    dispatch: Function,
    dispatchType: string,
    isEuCountry?: boolean,
    idFilesCount?: number,
}

const CurrentPage: React.FC<CurrentPageProps> = ({dispatch, dispatchType, pageNumber, isEuCountry, validationScheme, defValue, idFilesCount}) => {
    if (pageNumber === 1) return <PhoneNumberInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 2) return <SMSCodeInput  dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 3) return <PasswordInput  dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 4) return <EmailInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 5) return <PersonalDataInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 6) return <AccountTypeInput  dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    //topup
    if (pageNumber === 7) return <div>TopUp</div>
    //toactivate
    if (pageNumber === 8) return <div>ToActivate</div>
    // if (pageNumber === 7) return <AddressDataInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    // if (pageNumber === 8) return <IdTypeSelector dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 9) {
        
        if (isEuCountry)
            return <IdDataInputEu dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue} />
        
        if (!isEuCountry) 
            return <IdDataInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue} />
    }
    // id
    if (pageNumber === 10) return <FileInput filesCount={idFilesCount} dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue} header={'Provide ID'} paragraph={'Upload front side photo of ID'}/>
    // selfie
    // if (pageNumber === 10) return <idSelfieInput />
    if (pageNumber === 11) return <FileInput header={'Selfie upload'} filesCount={1} dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    // if (pageNumber === 11) return <ProofOfAddressInput />
    if (pageNumber === 12) return <FileInput header={'Proof of address'} filesCount={1} dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 13) {
        return <TxSurveyInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue} />
    }
    if (pageNumber === 14) return <GoalSurveyInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue} />
            return <div>Unknown step. {dispatchType}</div>
}

const initialState = {
    page: 7,

    phoneNumber: {
        value: '',
        error: ''
    },
    axiosPhoneNumber: false,

    smsCodeToMatch: {
        value: '',
        error: ''        
    },
    axiosSmsCode: false,

    password: '',
    axiosPassword: false,

    email: '',
    axiosEmail: false,

    accountType: '',
    axiosAccountType: false,

    
    personalData: {
        firstName: '',
        lastName: '',
        patronymic: '',
        dob: '',
        country: '',
        city: '',
        state: '',
        zip: '',
        addressOne: '',
        addressTwo: ''
    },
    addressData: {
        firstName: '',
        lastName: '',
        patronymic: '',
        dob: '',
        country: '',
        city: '',
        state: '',
        zip: '',
        addressOne: '',
        addressTwo: ''
    },
    axiosPersonalData: false,
    axiosaddressData: false,

    selectedIdType: 'passport',
    idData: {
        idType: '',
        idDateIssue: '',
        idExpirationDate: '',
        idDivsionCode: '',
        idIssuer: '',
        idSeries: '',
        idNumber: '',
        sex: ''
    },
    axiosIdData: false,

    idFiles: null,
    axiosIdFiles: false,

    idSelfieFile: null,
    axiosIdSelfieFile: false,

    poaFile: null,
    axiosPoaFile: false,

    txSurvey: {
        txVolume: '',
        txCount: '',
        singleMaxLimitTx: ''
    },
    goalSurvey: {
        txVolume: '',
        txCount: '',
        singleMaxLimitTx: ''
    },
    goalsSurvey: {},
    axiosComplete: false,
}

const MultiForm: React.FC = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const axiosPhoneNumber = React.useRef(state.axiosPhoneNumber)
    const axiosSmsCode = React.useRef(state.axiosSmsCode)
    const axiosPassword = React.useRef(state.axiosPassword)
    const axiosEmail = React.useRef(state.axiosEmail)
    const axiosAccountType = React.useRef(state.axiosAccountType)
    const axiosPersonalData = React.useRef(state.axiosPersonalData)
    const axiosAddressData = React.useRef(state.axiosAddressData)
    const axiosIdData = React.useRef(state.axiosIdData)
    const axiosIdFiles = React.useRef(state.axiosIdFiles)
    const axiosIdSelfieFile = React.useRef(state.axiosIdSelfieFile)
    const axiosPoaFile = React.useRef(state.axiosPoaFile)

    React.useEffect(() => {
        console.log('axiosPhoneNumber::')
        console.log(axiosPhoneNumber)
        if (axiosPhoneNumber.current) {
            axios.post('http://localhost:4000/api', {phoneNumber: state.phoneNumber.value})
            .then(({ data }) => {
                if (data.status === 'ok') {
                    dispatch({ type: 'axios.phoneNumber', value: data.value})
                }
                else if (data.status === 'error') {
                    dispatch({ type: 'axios.phoneNumber.error', value: data.value})
                    axiosPhoneNumber.current = false
                } 
            })
            .catch(err => console.log(err))

        } else if (!axiosPhoneNumber.current) {
            axiosPhoneNumber.current = true
        }
        
    }, [state.axiosPhoneNumber])

    React.useEffect(() => {
        if (axiosSmsCode.current) {
            console.log('LAUNCH axiosSmsCode')
            axios.post('http://localhost:4000/api', {smsCodeToMatch: state.smsCodeToMatch})
            .then(({ data }) => {
                if (data.status === 'ok') {                    
                    dispatch({ type: 'axios.smsCode', value: data.value })
                }
                
                else if (data.status === 'error')
                    dispatch({ type: 'axios.smsCode.error', value: data.value })
                    axiosSmsCode.current = false
            })
            .catch(err => console.log(err))

        } else if (!axiosSmsCode.current) {
            axiosSmsCode.current = true
        }
        
    }, [state.axiosSmsCode])

    React.useEffect(() => {
        if (axiosPassword.current) {
            console.log('LAUNCH axiosPassword')
            axios.post('http://localhost:4000/api', {password: state.password})
            .then(({ data }) => dispatch({ type: 'axios.password', value: data.value}))
            .catch(err => console.log(err))

        } else if (!axiosPassword.current) {
            axiosPassword.current = true
        }
        
    }, [state.axiosPassword])

    React.useEffect(() => {
        if (axiosEmail.current) {
            console.log('LAUNCH axiosEmail')
            axios.post('http://localhost:4000/api', {email: state.email})
            .then(({ data }) => dispatch({ type: 'axios.email', value: data.value}))
            .catch(err => console.log(err))

        } else if (!axiosEmail.current) {
            axiosEmail.current = true
        }
        
    }, [state.axiosEmail])

    React.useEffect(() => {
        if (axiosAccountType.current) {
            console.log('LAUNCH axiosAccountType')
            axios.post('http://localhost:4000/api', { accountType: state.accountType })
            .then(({ data }) => dispatch({ type: 'axios.accountType', value: data.value }))
            .catch(err => console.log(err))

        } else if (!axiosAccountType.current) {
            axiosAccountType.current = true
        }
        
    }, [state.axiosAccountType])

    React.useEffect(() => {
        if (axiosPersonalData.current) {
            console.log('LAUNCH axiosPersonalData')
            axios.post('http://localhost:4000/api', { personalData: state.personalData })
            .then(({ data }) => dispatch({ type: 'axios.personalData', value: data.value }))
            .catch(err => console.log(err))

        } else if (!axiosPersonalData.current) {
            axiosPersonalData.current = true
        }
        
    }, [state.axiosPersonalData])

    React.useEffect(() => {
        if (axiosAddressData.current) {
            console.log('LAUNCH addressData')
            axios.post('http://localhost:4000/api', { addressData: state.addressData })
            .then(({ data }) => dispatch({ type: 'axios.addressData', value: data.value }))
            .catch(err => console.log(err))

        } else if (!axiosAddressData.current) {
            axiosAddressData.current = true
        }
        
    }, [state.axiosAddressData])

    React.useEffect(() => {
        if (axiosIdData.current) {
            console.log('LAUNCH axiosIdData')
            axios.post('http://localhost:4000/api', { idData: state.idData })
            .then(({ data }) => dispatch({ type: 'axios.idData', value: data.value }))
            .catch(err => console.log(err))

        } else if (!axiosIdData.current) {
            axiosIdData.current = true
        }
        
    }, [state.axiosIdData])

    React.useEffect(() => {
        if (axiosIdFiles.current) {
            console.log('LAUNCH axiosIdFiles')
            const formWithFilesToUpload = state.idFiles
            formWithFilesToUpload.set('idFiles', true )
            formWithFilesToUpload.set('idFilesCount', 1 )
            const options = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
            axios.post('http://localhost:4000/api', formWithFilesToUpload, options)
            .then(({ data }) => dispatch({ type: 'axios.idFiles', value: data.value }))
            .catch(err => console.log(err))

        } else if (!axiosIdFiles.current) {
            axiosIdFiles.current = true
        }
        
    }, [state.axiosIdFiles])

    React.useEffect(() => {
        if (axiosIdSelfieFile.current) {
            console.log('LAUNCH axiosIdSelfieFile')
            const formWithFilesToUpload = state.idSelfieFile
            formWithFilesToUpload.set('idSelfieFile', true )

            const options = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }

            axios.post('http://localhost:4000/api', formWithFilesToUpload, options)
            .then(({ data }) => dispatch({ type: 'axios.idSelfieFile', value: data.value }))
            .catch(err => console.log(err))

        } else if (!axiosIdSelfieFile.current) {
            axiosIdSelfieFile.current = true
        }
        
    }, [state.axiosIdSelfieFile])

    React.useEffect(() => {
        if (axiosPoaFile.current) {
            console.log('LAUNCH axiosPoaFile')
            const formWithFilesToUpload = state.poaFile
            formWithFilesToUpload.set('poaFile', true )

            const options = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }

            axios.post('http://localhost:4000/api', formWithFilesToUpload, options)
            .then(({ data }) => dispatch({ type: 'axios.poaFile', value: data.value }))
            .catch(err => console.log(err))

        } else if (!axiosPoaFile.current) {
            axiosPoaFile.current = true
        }
        
    }, [state.axiosPoaFile])

    const scheme = [
        { name: 'phoneNumber', inputType: 'number', minLength: '10', maxLength: '10' },
        { name: 'smsCodeToMatch', inputType: 'number', minLength: '10', maxLength: '10' },
        { name: 'password', inputType: 'password', minLength: '6', maxLength: '112' },
        { name: 'email', inputType: 'email', minLength: '6', maxLength: '112' },
        { name: 'personalData', inputType: 'text', },
        { name: 'accountType', inputType: 'text', minLength: '6', maxLength: '15' },
        { name: 'topUp' },
        { name: 'toActivate' },
        { name: 'addressData', inputType: 'text' },
        { name: 'idType', inputType: 'text' },
        { name: 'idData', inputType: 'text' },
        
        { name: 'idFiles', inputType: 'file',  },
        { name: 'idSelfieFile', inputType: 'file' },
        { name: 'poaFile', inputType: 'file'},
        { name: 'txSurvey', inputType: 'text'},
        { name: 'goalSurvey', inputType: 'text'},
    ]

    // const schemeFreelance = []
    // const schemeBusiness = []
    const isEuCountry = (country: string) => {

        return country === 'United Kingdom' ? true : false
    }

    return (
        <div>
            <h1>Page: {state.page}</h1>
            {/* <div>state: { JSON.stringify(state, null, 2) }</div> */}
            <form className="multiForm">
                <CurrentPage 
                dispatchType = {scheme[state.page - 1].name}
                pageNumber={state.page} 
                defValue={state[scheme[state.page - 1].name]} 
                dispatch={dispatch} 
                validationScheme={scheme}
                isEuCountry={isEuCountry(state.selectedCountry)} 
                idFilesCount={state.selectedIdType === 'passport' ? 1 : 2}
                />
                {/* <div>
                    <input type="range" min="1" max="12" id="stepNumber" name="stepNumber" step="1" value={state.page} readOnly />
                </div> */}
            </form>
        </div>
    )
}

export default MultiForm

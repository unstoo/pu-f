import * as React from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie';
const cookies = new Cookies();
// import Router from 'next/router'
import reducer from './reducer'
// <PersonalPages \>
import PhoneNumberInput from './PhoneNumberInput'
import SMSCodeInput from './SMSCodeInput'
import PasswordInput from './PasswordInput'
import EmailInput from './EmailInput'
import AccountTypeInput from './AccountTypeInput'
import PersonalDataInput from './PersonalDataInput'
import AddressDataInput from './AddressDataInput'
import IdTypeSelector from './IdTypeSelector'
import IdDataInput from './IdDataInput'
import IdDataInputEu from './IdDataInputEu'
import FileInput from './FileInput'
import TxSurveyInput from './TxSurveyInput'
import GoalSurveyInput from './GoalSurveyInput'
import TopUp from './TopUp'
import ToActivate from './ToActivate'
// Freelance pages
import FreelanceBranches from './FreelanceBranches'
import FrelanceInfoInput from './FrelanceInfoInput'
import PaymentsInfoInput from './PaymentsInfoInput'
// Business pages
import BusinessInfoInput from './BusinessInfoInput'
import BusinessAddressInput from './BusinessAddressInput'
import DirectorsInput from './DirectorsInput'
import DirectorsDataInput from './DirectorsDataInput'
import ShareholdersInput from './ShareholdersInput'
import ShareholdersDataInput from './ShareholdersDataInput'
import BusinessDocsInput from './BusinessDocsInput'
import ProveBusinessDetailsInput from './ProveBusinessDetailsInput'
import ProveBusinessAddressInput from './ProveBusinessAddressInput'
import ProveBusinessTypeInput from './ProveBusinessTypeInput'
import ProveDirectorStructureInput from './ProveDirectorStructureInput'
const COMMON_BRANCH = 0;
const FREELANCE_BRANCH = 1;
const PERSONAL_BRANCH = 2;

const COMMON_PAGES_COUNT = 9
type CurrentPageProps = {
    pageNumber: number, 
    branchNumber?: number,
    dispatch: Function,
    dispatchType: string,
    defValue?: any,
    validationScheme?: any, 
    isEuCountry?: boolean,
    idFilesCount?: number,
}

const PersonalPages: React.FC<CurrentPageProps> = ({dispatch, dispatchType, pageNumber, isEuCountry, validationScheme, defValue, idFilesCount}) => {
    if (pageNumber === 1) return <PhoneNumberInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 2) return <SMSCodeInput  dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 3) return <PasswordInput  dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 4) return <EmailInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 5) return <PersonalDataInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 6) return <AccountTypeInput  dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 7) return <TopUp dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 8) return <ToActivate dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 9) return <AddressDataInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 10) return <IdTypeSelector dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 11) {
        
        if (isEuCountry)
            return <IdDataInputEu dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue} />
        
        if (!isEuCountry) 
            return <IdDataInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue} />
    }
    // id
    if (pageNumber === 12) return <FileInput filesCount={idFilesCount} dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue} header={'Provide ID'} paragraph={'Upload front side photo of ID'}/>
    // selfie
    if (pageNumber === 13) return <FileInput header={'Selfie upload'} filesCount={1} dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    // proof of adress
    if (pageNumber === 14) return <FileInput header={'Proof of address'} filesCount={1} dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue}/>
    if (pageNumber === 15) {
        return <TxSurveyInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue} />
    }
    if (pageNumber === 16) return <GoalSurveyInput dispatch={dispatch} dispatchType={dispatchType} validationScheme={validationScheme} defValue={defValue} />
            return <div>Unknown step. {dispatchType}</div>
}

const FreelancePages: React.FC<any> = ({pageNumber,   dispatch, dispatchType, defValue, branchNumber, isEuCountry, idFilesCount}) => {

    if (pageNumber === 6) return <AccountTypeInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 7) return <TopUp dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 8) return <ToActivate dispatch={dispatch} dispatchType={dispatchType}  defValue={defValue}/>
    if (pageNumber === 9) return <FreelanceBranches dispatch={dispatch} dispatchType={dispatchType}  defValue={defValue} />
    
    if (pageNumber > 9 && branchNumber == PERSONAL_BRANCH) {
        if (pageNumber === 10) return <AddressDataInput dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
        if (pageNumber === 11) return <IdTypeSelector dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
        if (pageNumber === 12) {
            if (isEuCountry)
                return <IdDataInputEu dispatch={dispatch} dispatchType={dispatchType} defValue={defValue} />
            
            if (!isEuCountry) 
            return <IdDataInput dispatch={dispatch} dispatchType={dispatchType}  defValue={defValue} />
        }
        // id
        if (pageNumber === 13) return <FileInput filesCount={idFilesCount} dispatch={dispatch} dispatchType={dispatchType}  defValue={defValue} header={'Provide ID'} paragraph={'Upload front side photo of ID'}/>
        // selfie
        if (pageNumber === 14) return <FileInput header={'Selfie upload'} filesCount={1} dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
        // proof of adress
        if (pageNumber === 15) return <FileInput header={'Proof of address'} filesCount={1} dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
        if (pageNumber === 16) return <TxSurveyInput dispatch={dispatch} dispatchType={dispatchType}  defValue={defValue} />
        if (pageNumber === 17) return <GoalSurveyInput dispatch={dispatch} dispatchType={dispatchType} defValue={defValue} />
        return <div> { "<" + dispatchType + "/> -- component doesn't exist yet. PERSONAL_BRANCH"}</div>
    }

    if (pageNumber > 9 && branchNumber == FREELANCE_BRANCH) {
        if (pageNumber === 10) return <FrelanceInfoInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
        if (pageNumber === 11) return <PaymentsInfoInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
        if (pageNumber === 12) 
            return <PaymentsInfoInput header={"Choose country to receive payments to"}  
                dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
        return <div> { "<" + dispatchType + "/> -- component doesn't exist yet. FREELANCE_BRANCH"}</div>
    }  

    return <h1>{ "<" + dispatchType + "/> -- component doesn't exist yet. FREELANCE PAGES: page: " + pageNumber + "; branchNumber: " +branchNumber}</h1>
}


const BusinessPages: React.FC<CurrentPageProps> = ({dispatch, dispatchType, pageNumber, defValue}) => {
    if (pageNumber === 6) return <AccountTypeInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 7) return <BusinessInfoInput dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 8) return <BusinessAddressInput dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 9) return <PaymentsInfoInput header={"Choose country to receive payments from"}  
    dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 10) return  <PaymentsInfoInput header={"Choose country to receive payments to"}  
    dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 11) return <DirectorsInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 12) return <DirectorsDataInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 13) return <ShareholdersInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 14) return <ShareholdersDataInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 15) return <BusinessDocsInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 16) return <ProveBusinessDetailsInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 17) return <ProveBusinessAddressInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 18) return <ProveBusinessTypeInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>
    if (pageNumber === 19) return <ProveDirectorStructureInput  dispatch={dispatch} dispatchType={dispatchType} defValue={defValue}/>

    return <div> { "<" + dispatchType + "/> -- component doesn't exist yet."}</div>
}

let initialState = {
    page: 1,
    branch: COMMON_BRANCH,
    freelanceBranch: [false, false],
    completedBusinessBranches: [false, false, false, false],

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

    accountType: 'personal',
    axiosAccountType: false,

    
    personalData: {
        firstName: 'Yev',
        lastName: '',
        patronymic: '',
        dob: '',
        country: ''
    },
    axiosPersonalData: false,
    
    topUp: {  
    },
    
    toActivate: {
        firstName: ''
    },
    
    addressData: {
        firstName: '',
        country: '',
        city: '',
        state: '',
        zip: '',
        addressOne: '',
        addressTwo: ''
    },
    axiosAddressData: false,

    idType: '',
    idData: {
        idType: '',
        idDateIssue: '',
        idDateExpiration: '',
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
        purpose: ''
    },
    axiosSurvey: false,
    // freelance type related

    freelanceInfo: {
        category: '',
        subCategory: '',
        customers: '',
        salesChannels: '',
        // webistes: [{value: ''}],
        // socials: [{value: ''}]
    },
    freelancePaymentsFrom: '',
    freelancePaymentsTo: '',
    freelanceTxSurvey: {},
    axiosFreelanceComplete: false
}

initialState = Object.assign(initialState, { page: 10, branch: 1, accountType: 'freelance',
    freelanceBranch: [false, false], })


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
    const axiosSurvey = React.useRef(state.axiosSurvey)
    const url = 'http://localhost:4000/api'
    const headers =  { headers: { 'Authorization': cookies.get('token') } }

    React.useEffect(() => {
        if (axiosPhoneNumber.current) {
            axios.post(url, {phoneNumber: state.phoneNumber.value, new: true})
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
            axios.post(url, { smsCodeToMatch: state.smsCodeToMatch, phoneNumber: state.phoneNumber.value })
            .then(({ data }) => {
                if (data.status === 'ok') {                    
                    cookies.set('token', data.token);
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
            axios.post(url, {password: state.password}, headers )
            .then(({ data }) => dispatch({ type: 'axios.password', value: data.value}))
            .catch(err => console.log(err))

        } else if (!axiosPassword.current) {
            axiosPassword.current = true
        }
        
    }, [state.axiosPassword])

    React.useEffect(() => {
        if (axiosEmail.current) {
            console.log('LAUNCH axiosEmail')
            axios.post(url, {email: state.email}, headers)
            .then(({ data }) => dispatch({ type: 'axios.email', value: data.value}))
            .catch(err => console.log(err))

        } else if (!axiosEmail.current) {
            axiosEmail.current = true
        }
        
    }, [state.axiosEmail])

    React.useEffect(() => {
        if (axiosPersonalData.current) {
            console.log('LAUNCH axiosPersonalData')
            axios.post(url, { personalData: state.personalData }, headers)
            .then(({ data }) => dispatch({ type: 'axios.personalData', value: data.value }))
            .catch(err => console.log(err))

        } else if (!axiosPersonalData.current) {
            axiosPersonalData.current = true
        }
        
    }, [state.axiosPersonalData])

    React.useEffect(() => {
        if (axiosAccountType.current) {
            console.log('LAUNCH axiosAccountType')
            axios.post(url, { accountType: state.accountType}, headers)
            .then(({ data }) => {
                dispatch({ type: 'axios.accountType', value: data.value })
                // If user comes back from further steps
                axiosAccountType.current = false
            })
            .catch(err => console.log(err))

        } else if (!axiosAccountType.current) {
            axiosAccountType.current = true
        }
        
    }, [state.axiosAccountType])

    React.useEffect(() => {
        if (axiosAddressData.current) {
            axios.post(url, { addressData: state.addressData }, headers)
            .then(({ data }) => {
                dispatch({ type: 'axios.addressData', value: data.value })
                axiosAddressData.current = false
            })
            .catch(err => console.log(err))

        } else if (!axiosAddressData.current) {
            axiosAddressData.current = true
        }
        
    }, [state.axiosAddressData])

    React.useEffect(() => {
        if (axiosIdData.current) {
            axios.post(url, { idData: state.idData }, headers)
            .then(({ data }) => {
                dispatch({ type: 'axios.idData', value: data.value })
                axiosIdData.current = false
            })
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
            const customHeaders = { headers: { 
                'Content-Type': 'multipart/form-data',
                'Authorization': headers.headers['Authorization'] 
            }} 
            
            axios.post(url, formWithFilesToUpload, customHeaders)
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

            const customHeaders = { headers: { 
                'Content-Type': 'multipart/form-data',
                'Authorization': headers.headers['Authorization'] 
            }} 

            axios.post(url, formWithFilesToUpload, customHeaders)
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
            const customHeaders = { headers: { 
                'Content-Type': 'multipart/form-data',
                'Authorization': headers.headers['Authorization'] 
            }}

            axios.post(url, formWithFilesToUpload, customHeaders)
            .then(({ data }) => dispatch({ type: 'axios.poaFile', value: data.value }))
            .catch(err => console.log(err))

        } else if (!axiosPoaFile.current) {
            axiosPoaFile.current = true
        }
        
    }, [state.axiosPoaFile])

    React.useEffect(() => {
        if (axiosSurvey.current) {
            console.log('LAUNCH axiosSurvey')

            axios.post(url, {txSurvey: state.txSurvey, goalSurvey: state.goalSurvey }, headers)
            .then(({ data }) => {
                dispatch({ type: 'axios.dashboard', value: data.value })
            })
            .catch(err => console.log(err))

        } else if (!axiosSurvey.current) {
            axiosSurvey.current = true
        }
        
    }, [state.axiosSurvey])
    
    

    const schemePersonal = [
        { name: 'phoneNumber', inputType: 'number' },
        { name: 'smsCodeToMatch', inputType: 'number' },
        { name: 'password', inputType: 'password' },
        { name: 'email', inputType: 'email' },
        { name: 'personalData', inputType: 'text', },
        { name: 'accountType', inputType: 'text' },
        { name: 'topUp' },
        { name: 'toActivate' },
        { name: 'addressData', inputType: 'text' },
        { name: 'idType', inputType: 'text' },
        { name: 'idData', inputType: 'text' },
        { name: 'idFiles', inputType: 'file',  },
        { name: 'idSelfieFile', inputType: 'file' },
        { name: 'poaFile', inputType: 'file'},
        { name: 'txSurvey', inputType: 'text'},
        { name: 'goalSurvey', inputType: 'text'}
    ]

    
    const schemeFreelance = [
        { name: 'phoneNumber', inputType: 'number' },
        { name: 'smsCodeToMatch', inputType: 'number' },
        { name: 'password', inputType: 'password' },
        { name: 'email', inputType: 'email' },
        { name: 'personalData', inputType: 'text', },
        { name: 'accountType', inputType: 'text' },
        { name: 'topUp' },
        { name: 'toActivate' },
        { name:  'freelanceBranch'},
    ]

    const schemeFreelancePersonal = [
        { name: 'addressData', inputType: 'text' },
        { name: 'idType', inputType: 'text' },
        { name: 'idData', inputType: 'text' },
        { name: 'idFiles', inputType: 'file',  },
        { name: 'idSelfieFile', inputType: 'file' },
        { name: 'poaFile', inputType: 'file'},
        { name: 'freelanceTxSurvey', inputType: 'text'}
    ]

    const schemeFreelanceBusiness = [
        { name: 'freelanceInfo', inputType: 'text'},
        { name: 'freelancePaymentsFrom', inputType: 'text'},
        { name: 'freelancePaymentsTo', inputType: 'text'},
    ]
    

    const schemeBusiness = [
        { name: 'phoneNumber', inputType: 'number' },
        { name: 'smsCodeToMatch', inputType: 'number' },
        { name: 'password', inputType: 'password' },
        { name: 'email', inputType: 'email' },
        { name: 'personalData', inputType: 'text', },
        { name: 'accountType', inputType: 'text' },
        // Business pages
        { name: 'businessInfo', inputType: 'text'},
        { name: 'businessAddress', inputType: 'text'},
        { name: 'businessPaymentsFrom', inputType: 'text'},
        { name: 'businessPaymentsTo', inputType: 'text'},
        { name: 'addDirectors', inputType: 'text'},
        { name: 'directorsData', inputType: 'text'},
        { name: 'addShareholders', inputType: 'text'},
        { name: 'shareholdersData', inputType: 'text'},
        { name: 'businessDocs', inputType: 'text'},
        { name: 'proveBusinessDetails', inputType: 'text'},
        { name: 'proveBusinessAddress', inputType: 'text'},
        { name: 'proveBusinessType', inputType: 'text'},
        { name: 'proveDirectorStructure', inputType: 'text'},
        { name: 'Complete', inputType: 'text'}
    ]

    const isEuCountry = (country: string) => {
        return country === 'United Kingdom' ? true : false
    }

    const yieldDefValue = (scheme: any) => {
        const name = scheme[state.page - 1].name
        if (typeof state[name] === 'string') {
            return state[name]
        } else if (!state[name]) {
            return []
        } else {
            return Object.assign( 
                state[name],
                { firstName: state.personalData.firstName } )
        }
    }

    const yieldDefValueF = (scheme: any) => {
        const COMMON_PAGES_COUNT = 9
        if (state.page <= COMMON_PAGES_COUNT) {
            return state[scheme[state.page - 1].name]
        }
      
        let setScheme = Number.parseInt(state.branch) === FREELANCE_BRANCH ? schemeFreelanceBusiness : schemeFreelancePersonal
        const shiftedIndex = state.page - COMMON_PAGES_COUNT - 1
        const name = setScheme[shiftedIndex].name
        // console.log('branch: ', state.branch)
        // console.log('name: ', name)
        // console.log('defValueF: ', state[name])
        if (typeof state[name] === 'string') return state[name]
        if (!state[name]) return []
        return Object.assign( 
            state[name],
            { firstName: state.personalData.firstName } )
        
    }

    const yieldDispatchType = (scheme: any, branches: any) => {
        
        if (state.page <= COMMON_PAGES_COUNT || state.accountType === 'personal') {
            console.log('next dispatch type: ', scheme[state.page - 1].name)
            return scheme[state.page - 1].name
        }

        const branchIndex = state.branch
        const selectedBranch = branches[branchIndex - 1]
        const shiftedIndex = state.page - COMMON_PAGES_COUNT - 1
        return selectedBranch[shiftedIndex].name
    }


    return (
        <div>
            {/* <div>DispatchType: {yieldDispatchType(schemeFreelance, [schemeFreelanceBusiness, schemeFreelancePersonal])}</div>
            <div>freelanceBranches: {JSON.stringify(state.freelanceBranches)}</div> */}
            <form className="multiForm">
                { state.accountType === 'personal' &&
                <PersonalPages 
                pageNumber={state.page} 
                dispatch={dispatch} 
                dispatchType = {yieldDispatchType(schemePersonal, [])}
                defValue={yieldDefValue(schemePersonal)} 
                isEuCountry={isEuCountry(state.selectedCountry)} 
                idFilesCount={state.idType === 'passport' ? 1 : 2}
                />
                }
                { state.accountType === 'freelance' &&
                 <FreelancePages 
                 pageNumber={state.page}
                 branchNumber={state.branch} 
                 dispatch={dispatch} 
                 dispatchType = {yieldDispatchType(schemeFreelance, [schemeFreelanceBusiness, schemeFreelancePersonal])}
                 defValue={yieldDefValueF(schemeFreelance) } 
                 isEuCountry={isEuCountry(state.selectedCountry)} 
                 idFilesCount={state.idType === 'passport' ? 1 : 2}
                 />
                }
                { state.accountType === 'business' &&
                  <BusinessPages
                  pageNumber={state.page} 
                  dispatch={dispatch} 
                  dispatchType = {schemeBusiness[state.page - 1].name}
                  defValue={yieldDefValue(schemeBusiness)} 
                  />
                }
            </form>
        </div>
    )
}

export default MultiForm

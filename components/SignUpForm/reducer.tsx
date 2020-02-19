import Router from 'next/router'


type actionType = {
    type: string,
    value: any
}

function reducer(state: any, action: actionType) {
    const { type, value } = action
    console.log('action: ', type, ' value: ', value)

    if (type === 'phoneNumber') {
        // toServer: smsCode.send()
        // fromServer: (code send) -> next page 
        return Object.assign({...state}, {
            phoneNumber: {
                value,
                error: state.phoneNumber.error
            },
            axiosPhoneNumber: true
        })
    }

    else if (type === 'axios.phoneNumber') {
        // TODO: throttle subsequent phonenumbers
        return Object.assign({...state}, {
            page: state.page + 1,
            phoneNumber: {
                value: state.phoneNumber.value,
                error: ''
            },
        })
    }

    if (type === 'axios.phoneNumber.error') {
        return Object.assign({...state}, {
            axiosPhoneNumber: false,
            phoneNumber: {
                value: state.phoneNumber.value,
                error: value
            },
        })
    }

    if (type === 'smsCodeToMatch') {
            return Object.assign({...state}, {
                axiosSmsCode: true,
                smsCodeToMatch: value,
            })
    }

    else if (type === 'axios.smsCode') {
        // TODO: throttle incoming phonenumbers ?
        return Object.assign({...state}, {
            page: state.page + 1,
            smsCodeToMatch: {
                smsCodeToMatch: state.smsCodeToMatch.value,
                error:  ''
            },
        })    
    }

    else if (type === 'axios.smsCode.error') {
        return Object.assign({...state}, {
            axiosSmsCode: false,
            smsCodeToMatch: {
                smsCodeToMatch: state.smsCodeToMatch.value,
                error:  value
            },
        })    
    }

    else if (type === 'password') {
        return Object.assign({...state}, {
            axiosPassword: true,
            password: value
        })
    }

    else if (type === 'axios.password') {
        return Object.assign({...state}, {
            page: state.page + 1,
            password: ''
        })
    }

    // TODO:
    // else if (type === 'axios.password.error') {
    //     return Object.assign({...state}, {
    //         axiosPassword: false,
    //         // TODO: 
    //         passwordError: value
    //     })
    // }


    else if (type === 'email') {
        return Object.assign({...state}, {
            axiosEmail: true,
            email: value
        })
    }

    else if (type === 'axios.email') {
        return Object.assign({...state}, {
            page: state.page + 1,
        })
    }

    else if (type === 'personalData') {
        return Object.assign({...state}, {
            axiosPersonalData: true,
            personalData: value,
            addressData:  Object.assign(state.addressData, {country: value.country}),
            page: state.page,
        })
    }

    else if (type === 'axios.personalData') {
        return Object.assign({...state}, {
            page: state.page + 1,
        })
    }

    else if (type === 'accountType') {
        
        return Object.assign({...state}, {
            accountType: value,
            axiosAccountType: true
        })
    }

    else if (type === 'axios.accountType') {
        return Object.assign({...state}, {
            page: state.page + 1
        })
    }

    else if (type === 'topUp.next') {
        return Object.assign({...state}, {
            page: state.page + 1
        })
    }

    else if (type === 'topUp.back') {
        // TOOO: axiosAccountType isn't ready for back-forth scenario. Edit useEffect.
        return Object.assign({...state}, {
            page: state.page - 1,
            axiosAccountType: false
        })
    }

    else if (type === 'topUp.deposit') {
        alert('TODO: deposit mechanism.')
        return Object.assign({...state}, {
            page: state.page,
        })
    }

    else if (type === 'toActivate.next') {
        return Object.assign({...state}, {
            page: state.page + 1,
        })
    }

    else if (type === 'toActivate.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
        })
    }

    else if (type === 'toActivate.dashboard') {
        Router.push('/dashboard')
        // window.location.href = "/dashboard"
        return state
    }

    else if (type === 'addressData.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            addressData: Object.assign(state.addressData, value),
        })
    }
   
    else if (type === 'addressData.next') {
        return Object.assign({...state}, {
            axiosAddressData: true,
            addressData: Object.assign(state.addressData, value),
        })
    }

    else if (type === 'axios.addressData') {
        return Object.assign({...state}, {
            page: state.page + 1,
        })
    }

    else if (type === 'idType.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            axiosAddressData: false,
        })
    }

    else if (type === 'idType.next') {
        return Object.assign({...state}, {
            page: state.page + 1,
            idType: value
        })
    }

    else if (type === 'idData.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            idData: Object.assign({idType: state.idType}, value),
        })
    }

    else if (type === 'idData.next') {
        return Object.assign({...state}, {
            axiosIdData: true,
            idData: Object.assign({idType: state.idType}, value),
        })
    }

    else if (type === 'axios.idData') {
        return Object.assign({...state}, {
            page: state.page + 1,
        })
    }

    else if (type === 'idFiles.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            axiosIdData: false,
            idFiles: value
        })
    }

    else if (type === 'idFiles.next') {
        return Object.assign({...state}, {
            axiosIdFiles: true,
            idFiles: value
        })
    }

    else if (type === 'axios.idFiles') {
        return Object.assign({...state}, {
            page: state.page + 1
        })
    }

    else if (type === 'idSelfieFile.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            axiosIdFiles: false,
            idSelfieFile: value
        })
    }

    else if (type === 'idSelfieFile.next') {
        return Object.assign({...state}, {
            axiosIdSelfieFile: true,
            idSelfieFile: value
        })
    }

    else if (type === 'axios.idSelfieFile') {
        return Object.assign({...state}, {
            page: state.page + 1
        })
    }

    else if (type === 'poaFile.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            axiosIdSelfieFile: false,
            poaFile: value
        })
    }

    else if (type === 'poaFile.next') {
        return Object.assign({...state}, {
            axiosPoaFile: true,
            poaFile: value
        })
    }

    else if (type === 'axios.poaFile') {
        return Object.assign({...state}, {
            page: state.page + 1
        })
    }

    else if (type === 'txSurvey.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            txSurvery: value,
            axiosPoaFile: false
        })
    }

    else if (type === 'txSurvey.next') {
        return Object.assign({...state}, {
            page: state.page + 1,
            txSurvery: value
        })
    }

    else if (type === 'goalSurvey.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            goalSurvery: value
        })
    }

    else if (type === 'goalSurvey.next') {
        return Object.assign({...state}, {
            axiosSurvey: true,
            goalSurvery: value
        })
    }

    else if (type === 'axios.dashboard') {
        return state
        Router.push('/dashboard')
    }

    // Freelanae related

    else if (type === 'freelanceInfo.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            freelanceInfo: value,
            axiosAccountType: false
        })
    }

    else if (type === 'freelanceInfo.next') {
        return Object.assign({...state}, {
            page: state.page + 1,
            freelanceInfo: value
        })
    }

    else if (type === 'freelancePaymentFrom.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            freelanePaymentFrom: value,
        })
    }

    else if (type === 'freelancePaymentFrom.next') {
        return Object.assign({...state}, {
            page: state.page + 1,
            freelanePaymentFrom: value
        })
    }

    else if (type === 'freelancePaymentsTo.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            freelancePaymentTo: value,
        })
    }

    else if (type === 'freelancePaymentsTo.next') {
        return Object.assign({...state}, {
            page: state.page + 1,
            freelancePaymentTo: value
        })
    }

    else if (type === 'freelancePaymentsFrom.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            freelancePaymentTo: value,
        })
    }

    else if (type === 'freelancePaymentsFrom.next') {
        return Object.assign({...state}, {
            page: state.page + 1,
            freelancePaymentTo: value
        })
    }

    else if (type === 'freelanceTxSurvey.back') {
        return Object.assign({...state}, {
            page: state.page - 1,
            freelanceTxSurvey: value,
        })
    }

    else if (type === 'freelanceTxSurvey.next') {
        // Router.push('/dashboard')
        window.location.href = '/dashboard'
        return Object.assign({...state}, {
            page: state.page,
            freelanceTxSurvey: value,
            axiosFreelanceComplete: true
        })
    } 




    else {
        throw new Error('Unknown action type: ' + type);
        return state
    }
}


export default reducer

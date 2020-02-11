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

    else if (type === 'accountType') {
        return Object.assign({...state}, {
            accountType: value,
            axiosAccountType: true
        })
    }

    else if (type === 'axios.accountType') {
        return Object.assign({...state}, {
            page: state.page + 1,
        })
    }

    // TODO: accontType already selected / Can't amend it.
    // else if (type === 'axios.accountType.error') {
    //     return Object.assign({...state}, {
    //         page: state.page + 1,
    //     })
    // }

    else if (type === 'personalData') {
        return Object.assign({...state}, {
            // axiosPersonalData: true,
            personalData: value,
            addressData:  Object.assign(state.addressData, value),
            page: state.page + 1,
        })
    }

    // TODO: remove this and its code. Send personal and home address data together.
    // else if (type === 'axios.personalData') {
    //     return Object.assign({...state}, {
    //         page: state.page + 1,
    //     })
    // }

    else if (type === 'addressData') {
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

    else if (type === 'idType') {
        return Object.assign({...state}, {
            page: state.page + 1,
            selectedIdType: value
        })
    }

    else if (type === 'idData') {
        return Object.assign({...state}, {
            axiosIdData: true,
            idData: Object.assign({idType: state.selectedIdType}, value),
        })
    }

    else if (type === 'axios.idData') {
        return Object.assign({...state}, {
            page: state.page + 1,
        })
    }

    else if (type === 'idFiles') {
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

    else if (type === 'idSelfieFile') {
        return Object.assign({...state}, {
            axiosIdSelfieFile: true,
            idSelfieFile: value
        })
    }

    else if (type === 'axios.idSelfieFile') {
        alert('selfie uploaded')
        return Object.assign({...state}, {
            page: state.page + 1
        })
    }

    else if (type === 'poaFile') {
        return Object.assign({...state}, {
            axiosPoaFile: true,
            poaFile: value
        })
    }

    else if (type === 'axios.poaFile') {
        alert('poa uploaded')
        return Object.assign({...state}, {
            page: state.page + 1
        })
    }

    else {
        throw new Error('Unknown action type: ' + type);
    }
}


export default reducer

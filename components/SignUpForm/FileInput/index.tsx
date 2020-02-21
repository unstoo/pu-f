import * as React from 'react'
import style from './style.module.css'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string,
    filesCount? : number,
    header?: string,
    paragraph?: string,
}

//TODO: don't go next unless required number of files is added

const FileInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue, filesCount, header, paragraph }) => {
    console.log('new id image')
    const [uploadOne, setUploadOne] = React.useState()
    const [uploadTwo, setUploadTwo] = React.useState()
    const [errorOne, setErrorOne] = React.useState()
    const [errorTwo, setErrorTwo] = React.useState()
    // const [inputKey, setInputKey] = React.useState()

    const clickHandler = (e: any) => {
        // dispatch({ type: dispatchType, value: null})
        dispatch;
        dispatchType;
        defValue;
        
        e.preventDefault()

        if (!uploadOne) return setErrorOne('Add file to proceed')

        if (filesCount == 2 && !uploadOne) return setErrorOne('Add file to proceed')
        if (filesCount == 2 && !uploadTwo) return setErrorTwo('Add file to proceed')
        
        const formDataNew = new FormData()
        formDataNew.append("upload", uploadOne);
        formDataNew.append("upload", uploadTwo);
        dispatch({ type: dispatchType + '.' + e.target.name, value: formDataNew})

    }


    const fileLoadHandler = (e: any) => {
        const {name} = e.target
        if (name === 'upload') {
            setErrorOne('')
            setUploadOne(e.target.files[0])
        }
        
        if (name === 'uploadtwo') {
            setUploadTwo(e.target.files[0])
            setErrorTwo('')
        }
    }


    return (
    <div className={style.FileInput}>      
        <div>
            <h2>{header || 'Upload file'}</h2>
        <div>{}</div>
        </div>
        <div>
            
            <div className={style.InputBlock}>
                <label>
                    {!errorOne && <div>{paragraph || 'Select image of your ID'}</div>}
                    {errorOne && <div style={err}>{errorOne}</div>}
                    <input className={style.Input} type="file" name="upload" multiple={true} key={header} onChange={fileLoadHandler}/>
                </label>
            </div>
            {filesCount === 2 &&
                <div className={style.InputBlock}>
                    <label>
                        {!errorTwo && <div>{'Select back side of your ID'}</div>}
                        {errorTwo && <div style={err}>{errorTwo}</div>}
                        <input className={style.Input} type="file" name="uploadtwo" multiple={true} onChange={fileLoadHandler}/>
                    </label>
                </div>
            }
            
        </div>
        <div className={style.Controls}>
            <button type="button" name="back" onClick={clickHandler}>Back</button>
            {
                (errorOne || errorTwo) &&
                <button type="button" name="next" onClick={clickHandler} disabled>Next</button>
            }
            {
                (!errorOne && !errorTwo) &&
                <button type="button" name="next" onClick={clickHandler}>Next</button>
            }
        </div>
    </div>
    )
}

export default FileInput

const err = {
    color: "red",
    opacity: "0.8"
}
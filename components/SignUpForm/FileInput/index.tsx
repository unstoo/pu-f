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


const FileInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue, filesCount, header, paragraph }) => {
    console.log('new id image')
    const [uploadOne, setUploadOne] = React.useState()
    const [uploadTwo, setUploadTwo] = React.useState()
    // const [inputKey, setInputKey] = React.useState()

    const clickHandler = (e: any) => {
        // dispatch({ type: dispatchType, value: null})
        dispatch;
        dispatchType;
        defValue;
        
        e.preventDefault()
        
        const formDataNew = new FormData()
        formDataNew.append("upload", uploadOne);
        formDataNew.append("upload", uploadTwo);
        dispatch({ type: dispatchType + '.' + e.target.name, value: formDataNew})

    }


    const fileLoadHandler = (e: any) => {
        if (e.target.name === 'upload')
        setUploadOne(e.target.files[0]);
        if (e.target.name === 'uploadtwo')
        setUploadTwo(e.target.files[0]);
    }


    return (
    <div>      
        <div>
            <h2>{header || 'Upload file'}</h2>
            
        </div>
        <div className={style["FileInput-Block"]}>
            <label>
            <div>{paragraph || 'Select image of your ID'}</div>
            <input className={style.FileInput} type="file" name="upload" multiple={true} key={header} onChange={fileLoadHandler}/>
            {filesCount === 2 &&
                <input type="file" name="uploadtwo" multiple={true} onChange={fileLoadHandler}/>
            }
            </label>
        </div>
        <div className={style.Controls}>
            <button type="button" name="back" onClick={clickHandler}>Back</button>
            <button type="button" name="next" onClick={clickHandler}>Next</button>
        </div>
    </div>
    )
}

export default FileInput

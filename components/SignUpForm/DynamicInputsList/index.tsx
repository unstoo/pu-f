import * as React from 'react'
import style from './style.module.css'

type DynamicInputsList = {
    list: any,
    label: string,
    name: string
    parentHandler: Function,
}


const DynamicInputsList: React.FC<DynamicInputsList> = ({ list, label, parentHandler, name }) => {
    
    const changeHandler = (e: any) => {
        console.log('DynamicInputList: Change Handler')
        const parsedIndex = Number.parseInt(e.target.name)
        const newList = [...list]
        newList[parsedIndex].value = e.target.value
        parentHandler({ target: {
            value: newList,
            name: name
        }});
    }
    const addInputField = () => {
        console.log('DynamicInputList: Add Handler')
        const newList = [...list]
        newList.push({value: ''})
        parentHandler({ target: {
            value: newList,
            name: name
        }});
    }
    const removeInputField = (e: any) => {
        console.log('DynamicInputList: Remove Handler')
        const itemIndex = e.target.name
        if (itemIndex == 0) return
        const head = [...list].slice(0, Number.parseInt(itemIndex) )
        const tail = [...list].slice(Number.parseInt(itemIndex) + 1)
        parentHandler({ target: {
            value: [...head,  ...tail],
            name: name
        }})
    }

    const getList = () => {
        const items = list.slice(1).map((item: any, index: any) => {
            console.log(JSON.stringify(list))
            return <DynamicInput  key={'DynamicListItem-' + label + index}
                initValue={item.value} index={(index + 1).toString()} label={label} 
                 removeValueHandler={removeInputField} changeValueHandler={changeHandler}/>
        })

        return items
    }

    return (
        <div className={style.DynamicList}>
            <div className={style.StaticItem}>
                <DynamicInput  key={'DynamicListItem-' + label + 0} initValue={list[0].value} index="0" label={label}
                     removeValueHandler={removeInputField} changeValueHandler={changeHandler} hideButton={true}/>
            </div>

            { list.length > 1 && getList() }
            
            <div className={style.Controls}>
                <button className={style.ButtonAdd} onClick={addInputField} type="button">+</button>
            </div>
        </div>
    )
}


type DynamicInputProps = {
    initValue: string,
    index: string
    label: string,
    changeValueHandler: Function,
    removeValueHandler: Function,
    hideButton?: boolean
}



const DynamicInput: React.FC<DynamicInputProps>  = ({ 
    initValue, index, label, 
    changeValueHandler, removeValueHandler, 
    hideButton }) => {

    const changeHandler = (e: any) => {
        console.log('Child: Change Handler')
        changeValueHandler(e)
    }

    const blurHandler = (e: any) => {
        console.log('Child: Blur Handler')
            changeValueHandler(e)
    }

    const buttonHandler = (e:any) => {
        console.log('Child: Button Handler')
            removeValueHandler(e)
    }

    return (
        <div className={index ? style.DynamicItem : ''}>
            <label>{ label || 'Dynamic list label'}</label>
            <div className={style.DynamicInput}>
                <input name={index} type="text" value={initValue}  onChange={changeHandler} onBlur={blurHandler}/>
                {!hideButton && <button className={style.ButtonDelete} onClick={buttonHandler} name={index.toString()} type="button">x</button>}
            </div>
        </div>
    )
}

export default DynamicInputsList
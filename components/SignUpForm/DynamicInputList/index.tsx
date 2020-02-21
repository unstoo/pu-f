import * as React from 'react'
import style from './style.module.css'

type DynamicInputList = {
    list: any,
    parentHandler: Function,
    label: string
}


const DynamicInputList: React.FC<DynamicInputList> = ({list, parentHandler, label}) => {
    const [itemsList, setItemsList] = React.useState(list)
    parentHandler;
    const changeHandler = (e: any) => {
        console.log('Parent: Change Handler', e)
        const parsedIndex = Number.parseInt(e.target.name)
        const cloneItems = [...itemsList]
        cloneItems[parsedIndex].value = e.target.value
        setItemsList(cloneItems)
    }
    // const blurHandler = () => {
    //     console.log('Parent: Blur Handler')
    //     parentHandler;
    // }
    const addInputField = () => {
        console.log('Parent: Add Handler')
        const updatedItemList = [...itemsList]
        updatedItemList.push({value: ''})
        setItemsList(updatedItemList)
    }
    const removeInputField = (e: any) => {
        console.log('Parent: Remove Handler')
        const itemIndex = e.target.name
        if (itemIndex == 0) return
        const head = [...itemsList].slice(0, Number.parseInt(itemIndex) )
        const tail = [...itemsList].slice(Number.parseInt(itemIndex) + 1)
        setItemsList([...head,  ...tail])
    }

    const getList = () => {
        const items = itemsList.slice(1).map((item: any, index: any) => {
            console.log(JSON.stringify(itemsList))
            return <DynamicInput  key={'DynamicListItem-' + label + index}
                initValue={item.value} index={(index + 1).toString()} label={label} removeValueHandler={removeInputField} changeValueHandler={changeHandler}/>
        })

        return items
    }

    return (
        <div className={style.DynamicList}>
            <div className={style.StaticItem}>
                {/* <label>{ label || 'Dynamic list label'}</label>
                <input type="text" value={itemsList[0].name || ''} name="0" onChange={changeHandler} onBlur={blurHandler}/> */}
                <DynamicInput  key={'DynamicListItem-' + label + 0} initValue={itemsList[0].value} 
                index="0" label={label} removeValueHandler={removeInputField} changeValueHandler={changeHandler} hideButton={true}/>
            </div>

            { itemsList.length > 1 && getList() }
            
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



const DynamicInput: React.FC<DynamicInputProps>  = ({ initValue, index, label, changeValueHandler, removeValueHandler, hideButton }) => {
    const [value, setValue] = React.useState(initValue)

    const changeHandler = (e: any) => {
        console.log('Child: Change Handler')
        setValue(e.target.value)
        console.log(e.target.value)
    }

    const blurHandler = (e: any) => {
        console.log('Child: Blur Handler')
        if (changeValueHandler instanceof Function)
            changeValueHandler(e)
    }

    const buttonHandler = (e:any) => {
        console.log('Child: Button Handler')
        if (removeValueHandler instanceof Function)
            removeValueHandler(e)
    }

    return (
        <div className={index ? style.DynamicItem : ''}>
            <label>{ label || 'Dynamic list label'}</label>
            <div className={style.DynamicInput}>
                <input name={index} type="text" value={value}  onChange={changeHandler} onBlur={blurHandler}/>

                {!hideButton && <button className={style.ButtonDelete} onClick={buttonHandler} name={index.toString()} type="button">x</button>}
            </div>
        </div>
    )
}

export default DynamicInputList
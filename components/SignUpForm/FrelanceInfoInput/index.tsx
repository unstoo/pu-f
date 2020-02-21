import * as React from 'react'
import DynamicInputsList from '../DynamicInputsList'
import style from './style.module.css'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

type OptionProps = {
    option: string
}

type OptionsListProps = {
    list: any,
    keyPrefix: string
}

const lists = {
    category: ['Consulting, IT or business service', 'Sales', 'Other'],
    subCategory: ['Artificial Intelligence', 'Data mining', 'Other'],
    customers: ['All', 'Individuals', 'Business'],
    salesChannels: ['All', 'Online', 'Exhibitions']
}


const FrelanceInfoInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
    const [category, setCategory] = React.useState(lists.category[0])
    const [subCategory, setSubCategory] = React.useState(lists.subCategory[0])
    const [customers, setCustomers] = React.useState(lists.customers[0])
    const [salesChannels, setSalesChannels] = React.useState(lists.salesChannels[0])
    const [websites, setWebsites] = React.useState(defValue.websites || [{value: ''}])
    const [socials, setSocials] = React.useState(defValue.socials || [{value: ''}])
    

    const Option: React.FC<OptionProps> = ({option}) => <option value={option} >{ option }</option>
    const OptionsList: React.FC<OptionsListProps> = ({list, keyPrefix}) => {
        
        const options = list.map((option: any) => <Option option={option} key={keyPrefix + option}/>)
        return options
    }

    const selectHandler = (e: any) => {
        const { value, name }  = e.target
        if (name === 'category') setCategory(value)
        if (name === 'subCategory') setSubCategory(value)
        if (name === 'customers') setCustomers(value)
        if (name === 'salesChannels') setSalesChannels(value)
    }

    const inputHandler = (e: any) => {
        const { value, name }  = e.target
        if (name === 'websites') setWebsites(value)
        if (name === 'socials') setSocials(value)
    }

    const clickHandler = (e: any) => {
        dispatch({ type: dispatchType + '.' + e.target.name, value: {
            category,
            subCategory,
            customers,
            salesChannels,
            websites,
            socials
        }})
    }

    return (
         <div className={style.FreelanceInfo}> 
            <div className={style.Header}>
                <h2>Tell us about your business</h2>
            </div>
            <div className={style.InputBlock}>
                <label>Business category</label>
                <select name="category" onChange={selectHandler} value={lists.category[0]}>
                    <OptionsList list={lists.category} keyPrefix={'freelanceCategory-'} />
                </select>
            </div>
            <div className={style.InputBlock}>
                <label>Subcategory</label>
                <select name="subCategory" onChange={selectHandler} value={lists.subCategory[0]}>
                <OptionsList list={lists.subCategory} keyPrefix={'freelanceSubCategory-'} />
                </select>
            </div>
            <div className={style.InputBlock}>
                <label>Who are your customers?</label>
                <select name="customers" onChange={selectHandler} value={lists.customers[0]}>
                    <OptionsList list={lists.customers} keyPrefix={'customers-'} />
                </select>
            </div>
            <div className={style.InputBlock}>
                <label>How do you sell your products and services?</label>
                <select name="salesChannels" onChange={selectHandler} value={lists.salesChannels[0]}>
                    <OptionsList list={lists.salesChannels} keyPrefix={'salesChannels-'} />
                </select>
            </div>

            <div className={style.InputBlock}>
                <DynamicInputsList name="websites" label={'Your business website (optional)'}
                 list={websites} parentHandler={inputHandler} />
            </div>
            <div className={style.InputBlock}>
                <DynamicInputsList name="socials" label={'Social link (optional)'} 
                list={socials} parentHandler={inputHandler} />
            </div>

            <div className={style.Controls}>
                <button type="button" name="back" onClick={clickHandler}>Back</button>
                <button type="button" name="next" onClick={clickHandler}>Next</button>
            </div>
        </div>
    )
}





export default FrelanceInfoInput

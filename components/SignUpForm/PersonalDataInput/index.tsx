import * as React from 'react'

type StepProps = {
    validationScheme?: any,
    dispatch: Function,
    defValue?: any,
    dispatchType: string
}

const PersonalDataInput: React.FC<StepProps> = ({ dispatch, dispatchType, defValue }) => {
	const [firstName, setFirstName] = React.useState(defValue.firstName)
	const [fnameError, setFnameError] = React.useState('')
    const [lastName, setLastName] = React.useState(defValue.lastName)
    const [lnameError, setLnameError] = React.useState('')
    const [patronymic, setPatrName] = React.useState(defValue.patrName)
    const [day, setDay] = React.useState('')
    const [month, setMonth] = React.useState('')
    const [year, setYear] = React.useState('')
	const [country, setCountry] = React.useState(defValue.country)
	const [countryError, setCountryError] = React.useState('')

    const firstNameHandler = (e: any) => {
        const {value} = e.target
		if (value) setFirstName(value)
		if (fnameError) setFnameError('')
	}
	
	const onBlurHandler = (e: any) => {
		const {name, value} = e.target
		if (name === 'firstname' && value.trim() === '') setFnameError('First name too short')
		if (name === 'lastname' && value.trim() === '') setLnameError('Last name too short')

	}

    const lastNameHandler = (e: any) => {
        const {value} = e.target
		if (value) setLastName(value)
		if (lnameError) setLnameError('')
    }

    const patrNameHandler = (e: any) => {
        const {value} = e.target
        if (value) setPatrName(value)
    }

    const countryHandler = (e: any) => {
		const {value} = e.target
		if (countryError) setCountryError('')
        if (value) setCountry(value)
    }

    const dobHandler = (e: any) => {
        const {value, name}  = e.target

        if (name === 'day') setDay(value)
        if (name === 'month') setMonth(value)
        if (name === 'year') setYear(value)
    }


    const clickHandler = () => {
		if (country === '') setCountryError('Please select country')
		if (firstName.trim() === '') setFnameError('First name too short')
		if (lastName.trim() === '') setLnameError('Last name too short')

		if (country && lastName && firstName) {
            dispatch({ type: dispatchType, value: {
                firstName,
                lastName,
                patronymic,
                dob: day + '-' + month + '-' + year,
                country
           }})
		}
    }



    return (
         <div className="PersonalData">
             <h2>Your personal data</h2>
            <div className="PersonalData-InputBlock">
				{fnameError && <label style={errStyle}>{fnameError}</label>}
                {!fnameError &&  <label>First name</label>}
                <input type="text" name="firstname" onBlur={onBlurHandler} onChange={firstNameHandler}/>
            </div>
            <div className="PersonalData-InputBlock">
				{lnameError && <label style={errStyle}>{lnameError}</label>}
                {!lnameError &&  <label>Last name</label>}
                <input type="text" name="lastname" onBlur={onBlurHandler} onChange={lastNameHandler}/>
            </div>
            <div className="PersonalData-InputBlock">
                <label>Patronymic (optionally)</label>
                <input type="text" name="patronymic" onChange={patrNameHandler}/>
            </div>
            <div className="birthdate">
                <div className='birthdateHeader'>Birthdate</div>
                <div className='birthdateInput'>
                    <div className='birthdateInput-day'>
                        <label>Day</label>
                        <input type="number" name="day" min={1} max={31} placeholder="31" onChange={dobHandler} />
                    </div>
                    <div className='birthdateInput-month'>
                        <label>Month</label>
                        <input type="number" name="month" min={1} max={12} placeholder="1" onChange={dobHandler} />
                    </div>
                    <div className='birthdateInput-year'>
                        <label>Year</label> 
                        <input type="number" name="year" placeholder="1987" min={1900} onChange={dobHandler} />
                    </div>
                </div>
            </div>
            <div className="PersonalData-country">
				{lnameError && <label style={errStyle}>{countryError}</label>}
                {!lnameError &&  <label>Country</label>}
                <select name="country" onChange={countryHandler}>
                    {countryList.map(country => <option key={'PersonalData-' + country}>{country}</option>)}
                </select>
            </div>
			{(countryError || fnameError || lnameError) ?
			<button type="button" onClick={clickHandler} disabled>Next</button>
			: <button type="button" onClick={clickHandler}>Next</button>}
        </div>
    )
}

export default PersonalDataInput

const errStyle = {
	color: "red",
	opacity: "0.8"
}

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan (Province of China)",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

import {useState} from 'react'

const CustomInput = ({id, label, icon, type="text", placeholder}) => {

    const [isFocus, setIsFocus] = useState(false)

    return ( 
        <div 
        className={`form__input-wrapper ${isFocus && 'form__input-wrapper--focused'}`}
        >
            <label 
            className='form__label form__label--focused'  
            htmlFor={id}
            >
                {label}
            </label>
            
            <i className={`form__input-icon bx bx-fw ${icon}`}></i>
            
            <input 
            className="form__input" 
            type={type} 
            id={id} 
            placeholder={placeholder}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            />
        </div>
    )
}
 
export default CustomInput;

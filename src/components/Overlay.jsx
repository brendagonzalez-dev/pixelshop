import {useState, useEffect} from 'react'

const Overlay = ({children, showOverlay, closeOverlay}) => {
    
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        
        setIsVisible( showOverlay ? true : false )

    }, [showOverlay])

    const handleBlur = (e) => {
        if(e.target.classList.contains("overlay")) closeOverlay()
    }

    return ( 
        <div 
        className={`overlay ${isVisible && 'overlay--visible'}`} 
        onClick={(e) => handleBlur(e)}
        >
            {children}
        </div> 
    );
}
 
export default Overlay;
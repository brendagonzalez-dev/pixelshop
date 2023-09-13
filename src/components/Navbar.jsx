import {Link} from 'react-router-dom'
import {useState} from 'react'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="navbar">
                <div className="navbar__brand">
                    <Link to="/">
                        <img 
                        className="navbar__logo" 
                        src="/logo-outline.png" 
                        alt="logo" 
                        />
                    </Link>
                    <span>Pixelshop</span>
                </div>

            <i 
            className='navbar--h-icon bx-md bx bx-menu' 
            onClick={() => setIsOpen(!isOpen)}
            />
            
            <nav className={`navbar__menu ${isOpen && 'navbar__menu--open'}`}>
                <ul>
                    <li>
                        <Link to="/gallery">
                            <i className="navbar__menu-icon bx-fw bx bxs-grid" />
                            Galeria
                        </Link>
                    </li>
                    <li>
                        <Link to="/purchases">
                            <i className="navbar__menu-icon bx-fw bx bx-bar-chart-square" />
                            Historial
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <i className="navbar__menu-icon bx-fw bx bx-clipboard" />
                            Dashboard
                        </Link>
                    </li>
                </ul>
                <Link to="/login">
                    <button className="secondary__button">Login</button>
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
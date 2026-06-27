import styles from './Header.module.scss';
import Logo from '../../assets/mainLogo.svg?react'
import {NavLink} from "react-router";
import {useState, useEffect} from 'react'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handlerClick = () => {
        setIsOpen(prev => !prev);
    }
    document.body.style.overflowX = 'hidden';
    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflowY = '';
        };
    }, [isOpen]);

    return (
        <div className="wrapper">
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Logo/>
                    <h3>BSUIR Power</h3>
                </div>
                <button onClick={handlerClick} className={`${styles.openButton}`}>
                    {isOpen ?
                        <>
                            <span className={styles.activeButton}></span>
                            <span className={styles.activeButton}></span>
                        </>
                        :
                        <>
                            <span className={styles.buttonLines}></span>
                            <span className={styles.buttonLines}></span>
                            <span className={styles.buttonLines}></span>
                        </>
                    }
                </button>
                <nav className={`${styles.navigation} ${isOpen ? styles.showNavBar : ''}`}>
                    <NavLink onClick={() => {if(isOpen) setIsOpen(false);}} to="/BSUIRPowerLiftingPage">Home</NavLink>
                    <NavLink onClick={() => {if(isOpen) setIsOpen(false);}} to="/about">About</NavLink>
                    <NavLink onClick={() => {if(isOpen) setIsOpen(false);}} to="/programs">Programs</NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Header;
import styles from './ArrowUp.module.scss';
import {useState, useEffect} from "react";

const ArrowUp = () => {
    const [showArrowUp, setShowArrowUp] = useState(false);
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY >= 100) {
                setShowArrowUp(true);
            } else {
                setShowArrowUp(false);
            }
        }

        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        }
    }, [])

    return (
        <>
            {showArrowUp &&
                <div aria-label="Наверх" onClick={scrollToTop} className={styles.arrowWrapper}>
                    <p>↑</p>
                </div>
            }
        </>
    )
}

export default ArrowUp;